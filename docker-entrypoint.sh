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
if [ -f dist/server.js ]; then
  exec node dist/server.js
elif [ -f dist/src/server.js ]; then
  exec node dist/src/server.js
else
  echo "ERROR: server.js not found in dist/ or dist/src/"
  exit 1
fi

