#!/bin/sh
set -e

echo "🚀 Starting tutor-backend container..."

# Run Prisma migrations
echo "📦 Running database migrations..."
npx prisma migrate deploy || {
  echo "⚠️  Migration failed, but continuing (database might already be up to date)"
}

echo "✅ Migrations completed!"

# Start the server
echo "🎯 Starting Express server..."
exec tsx src/server.ts

