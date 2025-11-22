import { config } from "dotenv";
import app from "./app.js";
config();
// Validate required environment variables
const requiredEnvVars = [
    "MONEYSPACE_SECRET_ID",
    "MONEYSPACE_SECRET_KEY",
    "PAYMENT_SUCCESS_REDIRECT",
    "PAYMENT_FAIL_REDIRECT",
    "PAYMENT_CANCEL_REDIRECT",
];
// Optional environment variables (for Telegram notifications)
const optionalEnvVars = ["TELEGRAM_BOT_TOKEN", "TELEGRAM_CHAT_ID"];
const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);
if (missingEnvVars.length > 0) {
    console.warn("⚠️  Missing required environment variables:");
    missingEnvVars.forEach((key) => {
        console.warn(`   - ${key}`);
    });
    console.warn("💡 Payment functionality may not work correctly.");
    console.warn("   Please check your .env file.");
}
else {
    console.log("✅ All required payment environment variables are set");
}
// Check optional Telegram variables
const missingTelegramVars = optionalEnvVars.filter((key) => !process.env[key]);
if (missingTelegramVars.length > 0) {
    console.warn("ℹ️  Telegram notifications disabled (optional):");
    missingTelegramVars.forEach((key) => {
        console.warn(`   - ${key}`);
    });
}
else {
    console.log("✅ Telegram notifications enabled");
}
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map