import { config } from "dotenv";
import { PrismaClient } from "../generated/prisma/client.js";
config();
const prisma = new PrismaClient();
async function main() {
    console.log("🔧 Fixing payment status for paid orders...\n");
    // Find all orders with status "pending" that have a transactionId (meaning payment was processed)
    const pendingOrdersWithTransaction = await prisma.order.findMany({
        where: {
            status: "pending",
            transactionId: {
                not: null,
            },
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
    console.log(`📋 Found ${pendingOrdersWithTransaction.length} pending order(s) with transaction ID\n`);
    if (pendingOrdersWithTransaction.length === 0) {
        console.log("✅ No pending orders with transaction ID found. Nothing to fix.");
        return;
    }
    let updatedCount = 0;
    let enrollmentCreatedCount = 0;
    for (const order of pendingOrdersWithTransaction) {
        console.log(`\n📦 Order: ${order.orderId}`);
        console.log(`   User: ${order.user.email} (ID: ${order.user.id})`);
        console.log(`   Course: ${order.course.title} (ID: ${order.course.id})`);
        console.log(`   Transaction ID: ${order.transactionId}`);
        console.log(`   Current Status: ${order.status}`);
        // Update order status to "paid"
        await prisma.order.update({
            where: { id: order.id },
            data: { status: "paid" },
        });
        console.log(`   ✅ Updated status to "paid"`);
        updatedCount++;
        // Check if enrollment exists
        const existingEnrollment = await prisma.enrollment.findUnique({
            where: {
                userId_courseId: {
                    userId: order.userId,
                    courseId: order.courseId,
                },
            },
        });
        if (!existingEnrollment) {
            // Create enrollment
            await prisma.enrollment.create({
                data: {
                    userId: order.userId,
                    courseId: order.courseId,
                },
            });
            console.log(`   ✅ Created enrollment`);
            enrollmentCreatedCount++;
        }
        else {
            console.log(`   ✅ Enrollment already exists`);
        }
    }
    console.log("\n" + "=".repeat(50));
    console.log("📊 Summary:");
    console.log(`   - Total orders processed: ${pendingOrdersWithTransaction.length}`);
    console.log(`   - Orders updated to "paid": ${updatedCount}`);
    console.log(`   - Enrollments created: ${enrollmentCreatedCount}`);
    console.log("=".repeat(50));
}
main()
    .catch((e) => {
    console.error("❌ Error fixing payment status:", e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=fix-payment-status.js.map