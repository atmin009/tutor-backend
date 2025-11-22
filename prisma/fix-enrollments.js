import { config } from "dotenv";
import { PrismaClient } from "../generated/prisma/client.js";
config();
const prisma = new PrismaClient();
async function main() {
    console.log("🔧 Fixing enrollments from paid orders...\n");
    // Get all paid orders
    const paidOrders = await prisma.order.findMany({
        where: {
            status: "paid",
        },
        include: {
            user: {
                select: {
                    id: true,
                    email: true,
                },
            },
            course: {
                select: {
                    id: true,
                    title: true,
                },
            },
        },
    });
    console.log(`📋 Found ${paidOrders.length} paid order(s)\n`);
    if (paidOrders.length === 0) {
        console.log("⚠️  No paid orders found. Nothing to fix.");
        return;
    }
    let createdCount = 0;
    let skippedCount = 0;
    for (const order of paidOrders) {
        console.log(`\n📦 Order: ${order.orderId}`);
        console.log(`   User: ${order.user.email} (ID: ${order.user.id})`);
        console.log(`   Course: ${order.course.title} (ID: ${order.course.id})`);
        // Check if enrollment exists
        const enrollmentExists = await prisma.enrollment.findUnique({
            where: {
                userId_courseId: {
                    userId: order.userId,
                    courseId: order.courseId,
                },
            },
        });
        if (enrollmentExists) {
            console.log(`   ✅ Enrollment already exists (ID: ${enrollmentExists.id})`);
            skippedCount++;
        }
        else {
            // Create enrollment
            const enrollment = await prisma.enrollment.create({
                data: {
                    userId: order.userId,
                    courseId: order.courseId,
                },
            });
            console.log(`   ✅ Created enrollment (ID: ${enrollment.id})`);
            createdCount++;
        }
    }
    console.log("\n" + "=".repeat(50));
    console.log("📊 Summary:");
    console.log(`   - Total paid orders: ${paidOrders.length}`);
    console.log(`   - Created enrollments: ${createdCount}`);
    console.log(`   - Skipped (already exist): ${skippedCount}`);
    console.log("=".repeat(50));
}
main()
    .catch((e) => {
    console.error("❌ Error fixing enrollments:", e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=fix-enrollments.js.map