import { existsSync } from "node:fs";
import { execSync } from "node:child_process";

const hasSchema =
  existsSync(new URL("../prisma/schema.prisma", import.meta.url)) ||
  existsSync(new URL("../schema.prisma", import.meta.url));

if (!hasSchema) {
  // In Docker builds we often copy the already-generated client but not the schema.
  // Skip generate in that case.
  process.stdout.write("[maybe-prisma-generate] Prisma schema not found, skipping generate.\n");
  process.exit(0);
}

process.stdout.write("[maybe-prisma-generate] Prisma schema found, generating client...\n");
execSync("npx prisma generate", { stdio: "inherit" });

