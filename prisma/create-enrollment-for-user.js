import { config } from "dotenv";
import { PrismaClient } from "../generated/prisma/client.js";
config();
const prisma = new PrismaClient();
async function main() {
    const userId = process.argv[2] ? parseInt(process.argv[2]) : 2;
    const courseId = process.argv[3] ? parseInt(process.argv[3]) : 1;
    console.log(`🔧 Creating enrollment for User ID: ${userId}, Course ID: ${courseId}\n`);
    // Check if user exists
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, email: true, name: true },
    });
    if (!user) {
        console.error(`❌ User with ID ${userId} not found.`);
        process.exit(1);
    }
    console.log(`✅ Found user: ${user.email} (ID: ${user.id}, Name: ${user.name})`);
    // Check if course exists
    const course = await prisma.course.findUnique({
        where: { id: courseId },
        select: { id: true, title: true },
    });
    if (!course) {
        console.error(`❌ Course with ID ${courseId} not found.`);
        process.exit(1);
    }
    console.log(`✅ Found course: ${course.title} (ID: ${course.id})\n`);
    // Check if enrollment already exists
    const existingEnrollment = await prisma.enrollment.findUnique({
        where: {
            userId_courseId: {
                userId,
                courseId,
            },
        },
    });
    if (existingEnrollment) {
        console.log(`⚠️  Enrollment already exists (ID: ${existingEnrollment.id})`);
        console.log(`   User: ${user.email}`);
        console.log(`   Course: ${course.title}`);
        return;
    }
    // Create enrollment
    const enrollment = await prisma.enrollment.create({
        data: {
            userId,
            courseId,
        },
    });
    console.log(`✅ Created enrollment (ID: ${enrollment.id})`);
    console.log(`   User: ${user.email} (ID: ${user.id})`);
    console.log(`   Course: ${course.title} (ID: ${course.id})`);
    // Also create a paid order if it doesn't exist
    const existingOrder = await prisma.order.findFirst({
        where: {
            userId,
            courseId,
            status: "paid",
        },
    });
    if (!existingOrder) {
        const { randomUUID } = await import("crypto");
        const orderId = "ORD" + randomUUID().replace(/-/g, "").slice(0, 17);
        const order = await prisma.order.create({
            data: {
                orderId,
                userId,
                courseId,
                amount: course.price || 0,
                status: "paid",
                paymentType: "qrnone",
                transactionId: "MANUAL_" + Date.now(),
            },
        });
        console.log(`\n✅ Created paid order (Order ID: ${order.orderId})`);
    }
    else {
        console.log(`\n⚠️  Paid order already exists (Order ID: ${existingOrder.orderId})`);
    }
    console.log("\n🎉 Done!");
}
main()
    .catch((e) => {
    console.error("❌ Error:", e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=create-enrollment-for-user.js.map