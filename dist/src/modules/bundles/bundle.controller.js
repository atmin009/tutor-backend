import { listBundlePromotions, getBundlePromotionById, createBundlePromotion, updateBundlePromotion, deleteBundlePromotion, } from "./bundle.service.js";
import prisma from "../../prisma.js";
import { success } from "../../utils/apiResponse.js";
export const listBundlesHandler = async (_req, res) => {
    const bundles = await listBundlePromotions();
    success(res, bundles, "List bundle promotions");
};
export const getBundleHandler = async (req, res) => {
    const id = Number(req.params.id);
    const bundle = await getBundlePromotionById(id);
    if (!bundle) {
        return res.status(404).json({ message: "Bundle promotion not found" });
    }
    success(res, bundle, "Get bundle promotion");
};
/** Public: get bundle by id for landing page (active + within date range only) */
export const getBundlePublicHandler = async (req, res) => {
    const id = Number(req.params.id);
    const bundle = await getBundlePromotionById(id);
    if (!bundle || bundle.status !== "active") {
        return res.status(404).json({ message: "Bundle not found or not available" });
    }
    const now = new Date();
    if (bundle.startsAt && bundle.startsAt > now) {
        return res.status(404).json({ message: "Bundle not started yet" });
    }
    if (bundle.endsAt && bundle.endsAt < now) {
        return res.status(404).json({ message: "Bundle has expired" });
    }
    success(res, bundle, "Get bundle (public)");
};
export const createBundleHandler = async (req, res) => {
    const { name, description, price, status, courseIds, maxCourses, startsAt, endsAt, } = req.body;
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
        courseIds: courseIds.map((id) => Number(id)),
        maxCourses: maxCourses ? Number(maxCourses) : null,
        startsAt: startsAt ? new Date(startsAt) : null,
        endsAt: endsAt ? new Date(endsAt) : null,
    });
    success(res, bundle, "Bundle promotion created");
};
export const updateBundleHandler = async (req, res) => {
    const id = Number(req.params.id);
    const { name, description, price, status, courseIds, maxCourses, startsAt, endsAt, } = req.body;
    const updateData = {
        ...(name !== undefined ? { name } : {}),
        ...(description !== undefined ? { description } : {}),
        ...(price !== undefined ? { price: Number(price) } : {}),
        ...(status !== undefined ? { status } : {}),
        ...(Array.isArray(courseIds)
            ? { courseIds: courseIds.map((cid) => Number(cid)) }
            : {}),
        ...(maxCourses !== undefined ? { maxCourses: Number(maxCourses) } : {}),
        ...(startsAt !== undefined
            ? { startsAt: startsAt ? new Date(startsAt) : null }
            : {}),
        ...(endsAt !== undefined ? { endsAt: endsAt ? new Date(endsAt) : null } : {}),
    };
    const bundle = await updateBundlePromotion(id, updateData);
    success(res, bundle, "Bundle promotion updated");
};
export const deleteBundleHandler = async (req, res) => {
    const id = Number(req.params.id);
    await deleteBundlePromotion(id);
    res.json({ message: "Bundle promotion deleted" });
};
export const checkoutBundleHandler = async (req, res) => {
    const userId = req.user?.id;
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
    const bundleCourseIds = JSON.parse(bundle.courseIds);
    const requestedIds = courseIds.map((id) => Number(id));
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
    success(res, { bundleId: bundle.id, courseIds: requestedIds }, "Bundle checkout completed (prototype without payment)");
};
//# sourceMappingURL=bundle.controller.js.map