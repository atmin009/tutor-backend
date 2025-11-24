#!/bin/bash

# Script สำหรับ import database ลงใน Docker MySQL container
# Usage: ./import-database.sh <sql-file>

if [ -z "$1" ]; then
    echo "❌ Error: Please provide SQL file path"
    echo "Usage: ./import-database.sh <sql-file>"
    exit 1
fi

SQL_FILE=$1

if [ ! -f "$SQL_FILE" ]; then
    echo "❌ Error: SQL file not found: $SQL_FILE"
    exit 1
fi

echo "📦 Importing database from $SQL_FILE..."

# ตรวจสอบว่า container รันอยู่หรือไม่
if ! docker-compose ps mysql | grep -q "Up"; then
    echo "❌ Error: MySQL container is not running"
    echo "Please run: docker-compose up -d"
    exit 1
fi

# Import database
docker-compose exec -T mysql mysql -u tutor_user -ptutor_password tutor_db < "$SQL_FILE"

if [ $? -eq 0 ]; then
    echo "✅ Database imported successfully!"
else
    echo "❌ Error: Failed to import database"
    exit 1
fi

