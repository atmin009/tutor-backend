import bcrypt from "bcryptjs";
import prisma from "../../prisma.js";
import { signToken } from "../../utils/jwt.js";
export class AuthError extends Error {
    status;
    constructor(message, status = 401) {
        super(message);
        this.status = status;
    }
}
export const login = async (email, password) => {
    console.log('🔍 Looking for user with email:', email);
    const user = await prisma.user.findUnique({
        where: { email },
        include: {
            roles: {
                include: {
                    role: {
                        include: {
                            permissions: {
                                include: {
                                    permission: true,
                                },
                            },
                        },
                    },
                },
            },
        },
    });
    if (!user) {
        console.log('❌ User not found:', email);
        throw new AuthError("Invalid credentials");
    }
    console.log('👤 User found:', { id: user.id, email: user.email, status: user.status });
    if (user.status !== "active") {
        console.log('❌ User is inactive:', user.status);
        throw new AuthError("User is inactive", 403);
    }
    console.log('🔐 Comparing password...');
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        console.log('❌ Password mismatch');
        throw new AuthError("Invalid credentials");
    }
    console.log('✅ Password match');
    const roleNames = new Set();
    const permissionNames = new Set();
    for (const userRole of user.roles) {
        roleNames.add(userRole.role.name);
        for (const rolePermission of userRole.role.permissions) {
            permissionNames.add(rolePermission.permission.name);
        }
    }
    const payload = {
        userId: user.id,
        roles: Array.from(roleNames),
        permissions: Array.from(permissionNames),
    };
    const token = signToken(payload);
    return {
        token,
        payload,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
    };
};
export const register = async (name, email, password, phone) => {
    // Validate phone number if provided (must be 10 digits)
    if (phone) {
        // Remove all non-digit characters
        const cleanedPhone = phone.replace(/\D/g, "");
        if (cleanedPhone.length !== 10) {
            throw new AuthError("Phone number must be exactly 10 digits", 400);
        }
    }
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        throw new AuthError("Email already in use", 409);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // Clean phone number (remove non-digits) before storing
    const cleanedPhone = phone ? phone.replace(/\D/g, "") : null;
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            phone: cleanedPhone,
            status: "active",
        },
    });
    const payload = {
        userId: user.id,
        roles: [],
        permissions: [],
    };
    const token = signToken(payload);
    return {
        token,
        payload,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
    };
};
export const registerSuperAdmin = async (name, email, password) => {
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        throw new AuthError("Email already in use", 409);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // Find super_admin role
    const superAdminRole = await prisma.role.findUnique({
        where: { name: "super_admin" },
    });
    if (!superAdminRole) {
        throw new AuthError("Super admin role not found. Please run seed script first.", 500);
    }
    // Create user and assign super_admin role in transaction
    const result = await prisma.$transaction(async (tx) => {
        const user = await tx.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                status: "active",
            },
        });
        // Assign super_admin role
        await tx.userRole.create({
            data: {
                userId: user.id,
                roleId: superAdminRole.id,
            },
        });
        // Get user with roles and permissions
        return tx.user.findUnique({
            where: { id: user.id },
            include: {
                roles: {
                    include: {
                        role: {
                            include: {
                                permissions: {
                                    include: {
                                        permission: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    });
    if (!result) {
        throw new AuthError("Failed to create super admin", 500);
    }
    const roleNames = new Set();
    const permissionNames = new Set();
    for (const userRole of result.roles) {
        roleNames.add(userRole.role.name);
        for (const rolePermission of userRole.role.permissions) {
            permissionNames.add(rolePermission.permission.name);
        }
    }
    const payload = {
        userId: result.id,
        roles: Array.from(roleNames),
        permissions: Array.from(permissionNames),
    };
    const token = signToken(payload);
    return {
        token,
        payload,
        user: {
            id: result.id,
            name: result.name,
            email: result.email,
        },
    };
};
//# sourceMappingURL=auth.service.js.map