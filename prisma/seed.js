import { config } from "dotenv";
import { PrismaClient } from "../generated/prisma/client.js";
import { hashPassword } from "../src/utils/password.js";
// Load environment variables
config();
const prisma = new PrismaClient();
async function main() {
    console.log("🌱 Starting database seed...");
    // 1. Upsert roles
    console.log("📝 Creating roles...");
    const superAdminRole = await prisma.role.upsert({
        where: { name: "super_admin" },
        update: {},
        create: {
            name: "super_admin",
            description: "Super Administrator with all permissions",
        },
    });
    const adminRole = await prisma.role.upsert({
        where: { name: "admin" },
        update: {},
        create: {
            name: "admin",
            description: "Administrator",
        },
    });
    const teacherRole = await prisma.role.upsert({
        where: { name: "teacher" },
        update: {},
        create: {
            name: "teacher",
            description: "Teacher role",
        },
    });
    console.log("✅ Roles created/updated");
    // 2. Upsert permissions
    console.log("📝 Creating permissions...");
    const manageUsersPermission = await prisma.permission.upsert({
        where: { name: "manage_users" },
        update: {},
        create: {
            name: "manage_users",
            description: "Manage users",
        },
    });
    const manageRolesPermission = await prisma.permission.upsert({
        where: { name: "manage_roles" },
        update: {},
        create: {
            name: "manage_roles",
            description: "Manage roles and permissions",
        },
    });
    const manageCoursesPermission = await prisma.permission.upsert({
        where: { name: "manage_courses" },
        update: {},
        create: {
            name: "manage_courses",
            description: "Manage courses, teachers, sections, and lessons",
        },
    });
    console.log("✅ Permissions created/updated");
    // 3. Link all permissions to super_admin role
    console.log("📝 Linking permissions to super_admin role...");
    const permissions = [
        manageUsersPermission,
        manageRolesPermission,
        manageCoursesPermission,
    ];
    for (const permission of permissions) {
        await prisma.rolePermission.upsert({
            where: {
                roleId_permissionId: {
                    roleId: superAdminRole.id,
                    permissionId: permission.id,
                },
            },
            update: {},
            create: {
                roleId: superAdminRole.id,
                permissionId: permission.id,
            },
        });
    }
    console.log("✅ Permissions linked to super_admin role");
    // 4. Create or update admin user
    console.log("📝 Creating admin user...");
    const hashedPassword = await hashPassword("Admin123!");
    const adminUser = await prisma.user.upsert({
        where: { email: "admin@example.com" },
        update: {
            name: "Super Admin",
            password: hashedPassword,
            status: "active",
        },
        create: {
            name: "Super Admin",
            email: "admin@example.com",
            password: hashedPassword,
            status: "active",
        },
    });
    console.log("✅ Admin user created/updated");
    // 5. Link admin user to super_admin role
    console.log("📝 Linking admin user to super_admin role...");
    await prisma.userRole.upsert({
        where: {
            userId_roleId: {
                userId: adminUser.id,
                roleId: superAdminRole.id,
            },
        },
        update: {},
        create: {
            userId: adminUser.id,
            roleId: superAdminRole.id,
        },
    });
    console.log("✅ Admin user linked to super_admin role");
    console.log("🎉 Database seed completed successfully!");
    console.log("\n📋 Summary:");
    console.log(`   - Email: admin@example.com`);
    console.log(`   - Password: Admin123!`);
    console.log(`   - Role: super_admin`);
}
main()
    .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map