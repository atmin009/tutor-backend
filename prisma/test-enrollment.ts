import { config } from "dotenv";
import { PrismaClient } from "../generated/prisma/client.js";
import { randomUUID } from "crypto";

// Load environment variables
config();

const prisma = new PrismaClient();

async function main() {
  console.log("🧪 Creating test enrollment for course id 1...");

  // Get the first user (or admin user)
  const user = await prisma.user.findFirst({
    where: {
      email: "admin@example.com",
    },
  });

  if (!user) {
    console.error("❌ No user found. Please run seed first.");
    process.exit(1);
  }

  console.log(`✅ Found user: ${user.email} (ID: ${user.id})`);

  // Check if course id 1 exists
  const course = await prisma.course.findUnique({
    where: { id: 1 },
  });

  if (!course) {
    console.error("❌ Course with id 1 not found. Please create a course first.");
    process.exit(1);
  }

  console.log(`✅ Found course: ${course.title} (ID: ${course.id})`);

  // Check if enrollment already exists
  const existingEnrollment = await prisma.enrollment.findUnique({
    where: {
      userId_courseId: {
        userId: user.id,
        courseId: 1,
      },
    },
  });

  if (existingEnrollment) {
    console.log("⚠️  Enrollment already exists. Skipping enrollment creation.");
    console.log(`   Enrollment ID: ${existingEnrollment.id}`);
  } else {
    // Create enrollment
    const enrollment = await prisma.enrollment.create({
      data: {
        userId: user.id,
        courseId: 1,
      },
    });
    console.log(`✅ Created enrollment (ID: ${enrollment.id})`);
  }

  // Also check and create enrollments from all paid orders
  console.log("\n📋 Checking paid orders for missing enrollments...");
  const paidOrders = await prisma.order.findMany({
    where: {
      status: "paid",
    },
  });

  let createdCount = 0;
  for (const order of paidOrders) {
    const enrollmentExists = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: order.userId,
          courseId: order.courseId,
        },
      },
    });

    if (!enrollmentExists) {
      await prisma.enrollment.create({
        data: {
          userId: order.userId,
          courseId: order.courseId,
        },
      });
      createdCount++;
      console.log(`✅ Created enrollment for Order ${order.orderId} (User ${order.userId}, Course ${order.courseId})`);
    }
  }

  if (createdCount > 0) {
    console.log(`\n✅ Created ${createdCount} enrollment(s) from paid orders.`);
  } else {
    console.log("✅ All paid orders already have enrollments.");
  }

  // Try to create paid order (if Order model exists in Prisma client)
  try {
    // Check if Order model exists
    if (!prisma.order) {
      console.log("⚠️  Order model not found in Prisma client.");
      console.log("   Run: npx prisma generate");
      console.log("   Then run migration: npx prisma migrate dev");
    } else {
      const existingOrder = await prisma.order.findFirst({
      where: {
        userId: user.id,
        courseId: 1,
        status: "paid",
      },
    });

    if (existingOrder) {
      console.log("⚠️  Paid order already exists. Skipping order creation.");
      console.log(`   Order ID: ${existingOrder.orderId}`);
    } else {
      // Create paid order
      const orderId = "ORD" + randomUUID().replace(/-/g, "").slice(0, 17);
      const order = await prisma.order.create({
        data: {
          orderId,
          userId: user.id,
          courseId: 1,
          amount: course.price,
          status: "paid",
          paymentType: "qrnone",
          transactionId: "TEST_TXN_" + Date.now(),
        },
      });
      console.log(`✅ Created paid order (Order ID: ${order.orderId})`);
    }
    }
  } catch (error: any) {
    if (error.code === "P2021" || error.message?.includes("does not exist")) {
      console.log("⚠️  Order table does not exist yet. Skipping order creation.");
      console.log("   Run migration to create Order table: npx prisma migrate dev");
    } else if (error.message?.includes("Cannot read properties")) {
      console.log("⚠️  Order model not available. Skipping order creation.");
      console.log("   Run: npx prisma generate");
      console.log("   Then run: npx prisma migrate dev");
    } else {
      throw error;
    }
  }

  console.log("\n🎉 Test data created successfully!");
  console.log("\n📋 Summary:");
  console.log(`   - User: ${user.email} (ID: ${user.id})`);
  console.log(`   - Course: ${course.title} (ID: ${course.id})`);
  console.log(`   - Enrollment: Created`);
  console.log(`   - Order: Status = "paid"`);
  console.log("\n💡 You can now test:");
  console.log(`   - Learning Dashboard: /learning`);
  console.log(`   - Course Learning: /learning/1`);
}

main()
  .catch((e) => {
    console.error("❌ Error creating test data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

