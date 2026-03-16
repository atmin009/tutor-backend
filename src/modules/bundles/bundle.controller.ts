import { Request, Response } from "express";
import {
  listBundlePromotions,
  getBundlePromotionById,
  createBundlePromotion,
  updateBundlePromotion,
  deleteBundlePromotion,
} from "./bundle.service.js";
import { prisma } from "../../prisma.js";
import { createApiResponse } from "../../utils/apiResponse.js";

export const listBundlesHandler = async (_req: Request, res: Response) => {
  const bundles = await listBundlePromotions();
  res.json(createApiResponse(bundles, "List bundle promotions"));
};

export const getBundleHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const bundle = await getBundlePromotionById(id);
  if (!bundle) {
    return res.status(404).json({ message: "Bundle promotion not found" });
  }
  res.json(createApiResponse(bundle, "Get bundle promotion"));
};

export const createBundleHandler = async (req: Request, res: Response) => {
  const {
    name,
    description,
    price,
    status,
    courseIds,
    maxCourses,
    startsAt,
    endsAt,
  } = req.body;

  if (!name || !price || !Array.isArray(courseIds) || courseIds.length === 0) {
    return res
      .status(400)
      .json({ message: "name, price and courseIds are required" });
  }

  const bundle = await createBundlePromotion({
    name,
    description,
    price: Number(price),
    status,
    courseIds: courseIds.map((id: any) => Number(id)),
    maxCourses: maxCourses ? Number(maxCourses) : null,
    startsAt: startsAt ? new Date(startsAt) : null,
    endsAt: endsAt ? new Date(endsAt) : null,
  });

  res.status(201).json(createApiResponse(bundle, "Bundle promotion created"));
};

export const updateBundleHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const {
    name,
    description,
    price,
    status,
    courseIds,
    maxCourses,
    startsAt,
    endsAt,
  } = req.body;

  const bundle = await updateBundlePromotion(id, {
    name,
    description,
    price: price !== undefined ? Number(price) : undefined,
    status,
    courseIds: Array.isArray(courseIds)
      ? courseIds.map((cid: any) => Number(cid))
      : undefined,
    maxCourses: maxCourses !== undefined ? Number(maxCourses) : undefined,
    startsAt: startsAt !== undefined ? (startsAt ? new Date(startsAt) : null) : undefined,
    endsAt: endsAt !== undefined ? (endsAt ? new Date(endsAt) : null) : undefined,
  });

  res.json(createApiResponse(bundle, "Bundle promotion updated"));
};

export const deleteBundleHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await deleteBundlePromotion(id);
  res.json({ message: "Bundle promotion deleted" });
};

export const checkoutBundleHandler = async (req: Request, res: Response) => {
  const userId = (req as any).user?.id;
  const { bundleId, courseIds } = req.body;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (!bundleId || !Array.isArray(courseIds) || courseIds.length === 0) {
    return res
      .status(400)
      .json({ message: "bundleId and courseIds are required" });
  }

  const bundle = await getBundlePromotionById(Number(bundleId));
  if (!bundle || bundle.status !== "active") {
    return res.status(400).json({ message: "Invalid or inactive bundle" });
  }

  const now = new Date();
  if (bundle.startsAt && bundle.startsAt > now) {
    return res.status(400).json({ message: "Bundle not started yet" });
  }
  if (bundle.endsAt && bundle.endsAt < now) {
    return res.status(400).json({ message: "Bundle has expired" });
  }

  const bundleCourseIds: number[] = JSON.parse(bundle.courseIds);
  const requestedIds = courseIds.map((id: any) => Number(id));

  // Validate that requested courses match bundle definition
  const missing = requestedIds.filter((id) => !bundleCourseIds.includes(id));
  if (missing.length > 0) {
    return res.status(400).json({ message: "Invalid courses for this bundle" });
  }

  if (bundle.maxCourses && requestedIds.length !== bundle.maxCourses) {
    return res
      .status(400)
      .json({ message: `This bundle requires ${bundle.maxCourses} courses` });
  }

  // TODO: integrate with existing payment flow (MoneySpace)
  // For now, we directly enroll user to all courses for prototype
  await prisma.$transaction(async (tx) => {
    for (const courseId of requestedIds) {
      await tx.enrollment.upsert({
        where: {
          userId_courseId: {
            userId,
            courseId,
          },
        },
        update: {},
        create: {
          userId,
          courseId,
        },
      });
    }
  });

  res.json(
    createApiResponse(
      { bundleId: bundle.id, courseIds: requestedIds },
      "Bundle checkout completed (prototype without payment)"
    )
  );
};

