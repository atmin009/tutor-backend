#!/bin/bash

# Script สำหรับ export database จาก Docker MySQL container
# Usage: ./export-database.sh [output-file]

OUTPUT_FILE=${1:-"backup-$(date +%Y%m%d-%H%M%S).sql"}

echo "📦 Exporting database to $OUTPUT_FILE..."

# ตรวจสอบว่า container รันอยู่หรือไม่
if ! docker-compose ps mysql | grep -q "Up"; then
    echo "❌ Error: MySQL container is not running"
    echo "Please run: docker-compose up -d"
    exit 1
fi

# Export database
docker-compose exec mysql mysqldump -u tutor_user -ptutor_password --single-transaction --routines --triggers tutor_db > "$OUTPUT_FILE"

if [ $? -eq 0 ]; then
    echo "✅ Database exported successfully to $OUTPUT_FILE"
    echo "📊 File size: $(du -h "$OUTPUT_FILE" | cut -f1)"
else
    echo "❌ Error: Failed to export database"
    exit 1
fi

