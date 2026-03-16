import { config } from "dotenv";
import { PrismaClient } from "../generated/prisma/client.js";

// Load environment variables
config();

const prisma = new PrismaClient();

async function fixInvalidDates() {
  try {
    console.log("🔧 Starting to fix invalid dates in database...");

    // Fix User table
    console.log("📝 Fixing User table...");
    
    // Use raw query to find and fix invalid dates
    const userCountResult = await prisma.$queryRawUnsafe<Array<{ count: bigint }>>(
      `SELECT COUNT(*) as count FROM User 
       WHERE updatedAt = '0000-00-00 00:00:00' 
          OR createdAt = '0000-00-00 00:00:00'
          OR updatedAt IS NULL
          OR createdAt IS NULL`
    );
    
    const userCount = Number(userCountResult[0]?.count || 0);

    if (userCount > 0) {
      console.log(`   Found ${userCount} users with invalid dates`);
      
      // Fix createdAt
      await prisma.$executeRawUnsafe(
        `UPDATE User 
         SET createdAt = COALESCE(NULLIF(createdAt, '0000-00-00 00:00:00'), NOW())
         WHERE createdAt = '0000-00-00 00:00:00' OR createdAt IS NULL`
      );
      
      // Fix updatedAt
      await prisma.$executeRawUnsafe(
        `UPDATE User 
         SET updatedAt = COALESCE(NULLIF(updatedAt, '0000-00-00 00:00:00'), NOW())
         WHERE updatedAt = '0000-00-00 00:00:00' OR updatedAt IS NULL`
      );
      
      console.log(`   ✅ Fixed ${userCount} users`);
    } else {
      console.log("   ✅ No users with invalid dates found");
    }

    // Fix other tables that might have datetime fields
    const tables = [
      { name: "Course", fields: ["createdAt", "updatedAt"] },
      { name: "Order", fields: ["createdAt", "updatedAt"] },
      { name: "Enrollment", fields: ["createdAt", "updatedAt"] },
      { name: "Section", fields: ["createdAt", "updatedAt"] },
      { name: "Lesson", fields: ["createdAt", "updatedAt"] },
      { name: "Teacher", fields: ["createdAt", "updatedAt"] },
      { name: "Coupon", fields: ["createdAt", "updatedAt", "validFrom", "validUntil"] },
    ];

    for (const table of tables) {
      try {
        console.log(`📝 Checking ${table.name} table...`);
        
        // Build query to find invalid dates
        const dateFields = table.fields.filter(f => f.includes("At") || f.includes("From") || f.includes("Until"));
        
        if (dateFields.length > 0) {
          const conditions = dateFields.map(field => 
            `${field} = '0000-00-00 00:00:00' OR ${field} IS NULL`
          ).join(" OR ");
          
          const countResult = await prisma.$queryRawUnsafe<Array<{ count: bigint }>>(
            `SELECT COUNT(*) as count FROM ${table.name} WHERE ${conditions}`
          );
          
          const count = Number(countResult[0]?.count || 0);
          
          if (count > 0) {
            console.log(`   Found ${count} ${table.name} records with invalid dates`);
            
            // Fix each date field
            for (const field of dateFields) {
              await prisma.$executeRawUnsafe(
                `UPDATE ${table.name} 
                 SET ${field} = COALESCE(${field}, NOW())
                 WHERE ${field} = '0000-00-00 00:00:00' OR ${field} IS NULL`
              );
            }
            
            console.log(`   ✅ Fixed ${count} ${table.name} records`);
          } else {
            console.log(`   ✅ No ${table.name} records with invalid dates found`);
          }
        }
      } catch (error: any) {
        // Table might not exist or field might not exist, skip it
        if (error.code === "P2025" || error.message?.includes("doesn't exist")) {
          console.log(`   ⚠️  Skipping ${table.name} (table or field doesn't exist)`);
        } else {
          console.error(`   ❌ Error fixing ${table.name}:`, error.message);
        }
      }
    }

    console.log("🎉 Finished fixing invalid dates!");
    
  } catch (error: any) {
    console.error("❌ Error fixing invalid dates:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

fixInvalidDates();

