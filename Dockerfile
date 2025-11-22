# Backend Dockerfile for Express + Prisma + TypeScript
FROM node:22-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json ./
COPY package-lock.json* ./
RUN npm ci --legacy-peer-deps || npm install --legacy-peer-deps

# Generate Prisma Client
FROM base AS prisma
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./
COPY prisma ./prisma
RUN npx prisma generate
# Verify Prisma client was generated (outputs to ../generated/prisma relative to prisma folder)
RUN test -d generated/prisma || (echo "ERROR: Prisma client not generated!" && exit 1)

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nodejs

# Copy necessary files
COPY --from=deps --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --from=prisma --chown=nodejs:nodejs /app/node_modules/.prisma ./node_modules/.prisma
COPY --chown=nodejs:nodejs package.json ./
COPY --chown=nodejs:nodejs prisma ./prisma
COPY --from=prisma --chown=nodejs:nodejs /app/generated ./generated
COPY --chown=nodejs:nodejs src ./src
COPY --chown=nodejs:nodejs docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x docker-entrypoint.sh

# Create uploads directory
RUN mkdir -p /app/src/uploads && chown -R nodejs:nodejs /app/src/uploads

USER nodejs

# Expose port
EXPOSE 4000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:4000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start script that runs migrations and starts the server
ENTRYPOINT ["./docker-entrypoint.sh"]

