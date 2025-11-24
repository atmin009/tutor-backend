#!/bin/bash

# Script สำหรับ seed database ด้วย Prisma
# Usage: ./seed-database.sh

echo "🌱 Seeding database..."

# ตรวจสอบว่า container รันอยู่หรือไม่
if ! docker-compose ps backend | grep -q "Up"; then
    echo "❌ Error: Backend container is not running"
    echo "Please run: docker-compose up -d"
    exit 1
fi

# Run seed
docker-compose exec backend npm run seed

if [ $? -eq 0 ]; then
    echo "✅ Database seeded successfully!"
    echo ""
    echo "📋 Admin credentials:"
    echo "   Email: admin@example.com"
    echo "   Password: Admin123!"
else
    echo "❌ Error: Failed to seed database"
    exit 1
fi

