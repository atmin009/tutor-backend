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

# Build TypeScript
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=prisma /app/generated ./generated
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
# Use build:skip-prisma since Prisma client is already generated in prisma stage
RUN npm run build:skip-prisma
# Verify build output
RUN ls -la dist/ && (test -f dist/server.js || test -f dist/src/server.js) || (echo "ERROR: server.js not found in dist!" && exit 1)

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
COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist
# Copy generated folder to dist/generated as well (for Prisma client imports)
COPY --from=prisma --chown=nodejs:nodejs /app/generated ./dist/generated
# Verify dist folder was copied (check both possible locations)
RUN ls -la dist/ && (test -f dist/server.js || test -f dist/src/server.js) || (echo "ERROR: server.js not found in dist/ or dist/src/ after copy!" && exit 1)
# Create entrypoint script directly to avoid line ending issues
RUN echo '#!/bin/sh' > /app/docker-entrypoint.sh && \
    echo 'set -e' >> /app/docker-entrypoint.sh && \
    echo '' >> /app/docker-entrypoint.sh && \
    echo 'echo "🚀 Starting tutor-backend container..."' >> /app/docker-entrypoint.sh && \
    echo '' >> /app/docker-entrypoint.sh && \
    echo '# Run Prisma migrations' >> /app/docker-entrypoint.sh && \
    echo 'echo "📦 Running database migrations..."' >> /app/docker-entrypoint.sh && \
    echo 'echo "🔍 Checking migration status..."' >> /app/docker-entrypoint.sh && \
    echo 'npx prisma migrate status || true' >> /app/docker-entrypoint.sh && \
    echo 'echo ""' >> /app/docker-entrypoint.sh && \
    echo 'echo "🚀 Deploying migrations..."' >> /app/docker-entrypoint.sh && \
    echo 'npx prisma migrate deploy' >> /app/docker-entrypoint.sh && \
    echo '' >> /app/docker-entrypoint.sh && \
    echo 'echo "✅ Migrations completed!"' >> /app/docker-entrypoint.sh && \
    echo '' >> /app/docker-entrypoint.sh && \
    echo '# Start the server' >> /app/docker-entrypoint.sh && \
    echo 'echo "🎯 Starting Express server..."' >> /app/docker-entrypoint.sh && \
    echo 'if [ -f dist/server.js ]; then' >> /app/docker-entrypoint.sh && \
    echo '  exec node dist/server.js' >> /app/docker-entrypoint.sh && \
    echo 'elif [ -f dist/src/server.js ]; then' >> /app/docker-entrypoint.sh && \
    echo '  exec node dist/src/server.js' >> /app/docker-entrypoint.sh && \
    echo 'else' >> /app/docker-entrypoint.sh && \
    echo '  echo "ERROR: server.js not found in dist/ or dist/src/"' >> /app/docker-entrypoint.sh && \
    echo '  exit 1' >> /app/docker-entrypoint.sh && \
    echo 'fi' >> /app/docker-entrypoint.sh && \
    chmod +x /app/docker-entrypoint.sh

# Create uploads directory
RUN mkdir -p /app/uploads && chown -R nodejs:nodejs /app/uploads

USER nodejs

# Expose port
EXPOSE 4000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:4000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start script that runs migrations and starts the server
ENTRYPOINT ["./docker-entrypoint.sh"]

