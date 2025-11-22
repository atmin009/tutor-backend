import { login, register, AuthError } from "./auth.service.js";
export const loginHandler = async (req, res, next) => {
    try {
        const { email, password } = req.body ?? {};
        console.log('🔐 Login attempt:', { email, hasPassword: !!password });
        if (!email || !password) {
            console.log('❌ Missing email or password');
            return res.status(400).json({ message: "Email and password are required" });
        }
        const { token, payload, user } = await login(email, password);
        console.log('✅ Login successful:', { userId: user.id, email: user.email });
        return res.json({
            token,
            user: {
                id: String(user.id),
                name: user.name,
                email: user.email,
            },
        });
    }
    catch (error) {
        if (error instanceof AuthError) {
            console.log('❌ Auth error:', error.message, 'Status:', error.status);
            return res.status(error.status).json({ message: error.message });
        }
        console.error('❌ Unexpected error:', error);
        next(error);
    }
};
export const registerHandler = async (req, res, next) => {
    try {
        const { name, email, password, phone } = req.body ?? {};
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email and password are required" });
        }
        const { token, user } = await register(name, email, password, phone);
        return res.json({
            token,
            user: {
                id: String(user.id),
                name: user.name,
                email: user.email,
            },
        });
    }
    catch (error) {
        if (error instanceof AuthError) {
            return res.status(error.status).json({ message: error.message });
        }
        next(error);
    }
};
//# sourceMappingURL=auth.controller.js.map