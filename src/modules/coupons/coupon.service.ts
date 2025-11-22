import prisma from "../../prisma.js";

export interface ValidateCouponResult {
  valid: boolean;
  message?: string;
  discountAmount?: number;
  coupon?: any;
}

export type CreateCouponData = {
  code: string;
  description?: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  minPurchaseAmount?: number;
  maxDiscountAmount?: number;
  validFrom: Date;
  validUntil: Date;
  usageLimit?: number;
  userLimit?: number;
  courseIds?: number[];
  status?: string;
};

export async function validateCoupon(
  code: string,
  userId: number,
  courseId: number,
  coursePrice: number
): Promise<ValidateCouponResult> {
  try {
    // Find coupon
    const coupon = await prisma.coupon.findUnique({
      where: { code },
    });

    if (!coupon) {
      return {
        valid: false,
        message: "โค้ดส่วนลดไม่ถูกต้อง",
      };
    }

    // Check status
    if (coupon.status !== "active") {
      return {
        valid: false,
        message: "โค้ดส่วนลดนี้ไม่สามารถใช้งานได้",
      };
    }

    // Check validity period
    const now = new Date();
    if (now < coupon.validFrom || now > coupon.validUntil) {
      return {
        valid: false,
        message: "โค้ดส่วนลดหมดอายุแล้ว",
      };
    }

    // Check usage limit
    if (coupon.usageLimit !== null && coupon.usageCount >= coupon.usageLimit) {
      return {
        valid: false,
        message: "โค้ดส่วนลดถูกใช้ครบแล้ว",
      };
    }

    // Check course restriction
    if (coupon.courseIds) {
      try {
        const allowedCourseIds: number[] = JSON.parse(coupon.courseIds);
        if (!allowedCourseIds.includes(courseId)) {
          return {
            valid: false,
            message: "โค้ดส่วนลดนี้ไม่สามารถใช้กับคอร์สนี้ได้",
          };
        }
      } catch (e) {
        console.error("Error parsing courseIds:", e);
      }
    }

    // Check min purchase amount
    if (coupon.minPurchaseAmount && coursePrice < coupon.minPurchaseAmount) {
      return {
        valid: false,
        message: `ต้องซื้อขั้นต่ำ ${coupon.minPurchaseAmount.toFixed(2)} บาท`,
      };
    }

    // Check user limit
    if (coupon.userLimit !== null) {
      const userUsageCount = await prisma.couponUsage.count({
        where: {
          couponId: coupon.id,
          userId: userId,
        },
      });

      if (userUsageCount >= coupon.userLimit) {
        return {
          valid: false,
          message: "คุณใช้โค้ดส่วนลดนี้ครบจำนวนที่กำหนดแล้ว",
        };
      }
    }

    // Calculate discount
    let discountAmount = 0;
    if (coupon.discountType === "percentage") {
      discountAmount = (coursePrice * coupon.discountValue) / 100;
      if (coupon.maxDiscountAmount) {
        discountAmount = Math.min(discountAmount, coupon.maxDiscountAmount);
      }
    } else {
      discountAmount = coupon.discountValue;
    }

    // Ensure discount doesn't exceed course price
    discountAmount = Math.min(discountAmount, coursePrice);

    return {
      valid: true,
      discountAmount,
      coupon,
    };
  } catch (error: any) {
    console.error("Error validating coupon:", error);
    return {
      valid: false,
      message: "เกิดข้อผิดพลาดในการตรวจสอบโค้ดส่วนลด",
    };
  }
}

export async function applyCoupon(
  couponId: number,
  userId: number,
  orderId: number,
  discountAmount: number
) {
  // Update coupon usage count
  await prisma.coupon.update({
    where: { id: couponId },
    data: {
      usageCount: {
        increment: 1,
      },
    },
  });

  // Create coupon usage record
  await prisma.couponUsage.create({
    data: {
      couponId,
      userId,
      orderId,
      discountAmount,
    },
  });
}

export async function createCoupon(data: CreateCouponData) {
  const courseIdsJson = data.courseIds
    ? JSON.stringify(data.courseIds)
    : null;

  return await prisma.coupon.create({
    data: {
      code: data.code.toUpperCase(),
      description: data.description ?? null,
      discountType: data.discountType,
      discountValue: data.discountValue,
      minPurchaseAmount: data.minPurchaseAmount ?? null,
      maxDiscountAmount: data.maxDiscountAmount ?? null,
      validFrom: data.validFrom,
      validUntil: data.validUntil,
      usageLimit: data.usageLimit ?? null,
      userLimit: data.userLimit ?? null,
      courseIds: courseIdsJson,
      status: data.status || "active",
    },
  });
}

export async function updateCoupon(id: number, data: Partial<CreateCouponData>) {
  const updateData: any = { ...data };
  if (data.courseIds !== undefined) {
    updateData.courseIds = data.courseIds
      ? JSON.stringify(data.courseIds)
      : null;
  }
  if (data.code) {
    updateData.code = data.code.toUpperCase();
  }

  return await prisma.coupon.update({
    where: { id },
    data: updateData,
  });
}

export async function deleteCoupon(id: number) {
  return await prisma.coupon.delete({
    where: { id },
  });
}

export async function getCoupons(page: number = 1, limit: number = 10) {
  const skip = (page - 1) * limit;

  const [coupons, total] = await Promise.all([
    prisma.coupon.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.coupon.count(),
  ]);

  return {
    coupons: coupons.map((coupon) => ({
      ...coupon,
      courseIds: coupon.courseIds
        ? JSON.parse(coupon.courseIds)
        : null,
    })),
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

export async function getCouponById(id: number) {
  const coupon = await prisma.coupon.findUnique({
    where: { id },
    include: {
      couponUsages: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          order: {
            select: {
              id: true,
              orderId: true,
              amount: true,
              status: true,
              createdAt: true,
            },
          },
        },
        orderBy: { usedAt: "desc" },
      },
    },
  });

  if (!coupon) return null;

  return {
    ...coupon,
    courseIds: coupon.courseIds ? JSON.parse(coupon.courseIds) : null,
  };
}

