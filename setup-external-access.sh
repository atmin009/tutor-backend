#!/bin/bash

# Script สำหรับตั้งค่า MySQL ให้รับการเชื่อมต่อจาก host ภายนอก
# Usage: ./setup-external-access.sh

echo "🔧 Setting up MySQL for external access..."

# ตรวจสอบว่า container รันอยู่หรือไม่
if ! docker-compose ps mysql | grep -q "Up"; then
    echo "❌ Error: MySQL container is not running"
    echo "Please run: docker-compose up -d"
    exit 1
fi

echo "📝 Creating user for external access..."

# อ่านค่าจาก environment หรือใช้ค่า default
MYSQL_USER=${MYSQL_USER:-tutor_user}
MYSQL_PASSWORD=${MYSQL_PASSWORD:-tutor_password}
MYSQL_DATABASE=${MYSQL_DATABASE:-tutor_db}

# สร้าง SQL commands
cat <<EOF | docker-compose exec -T mysql mysql -u root -prootpassword
CREATE USER IF NOT EXISTS '${MYSQL_USER}'@'%' IDENTIFIED BY '${MYSQL_PASSWORD}';
GRANT ALL PRIVILEGES ON ${MYSQL_DATABASE}.* TO '${MYSQL_USER}'@'%';
FLUSH PRIVILEGES;
SELECT 'User created successfully!' AS message;
EOF

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ MySQL external access configured successfully!"
    echo ""
    echo "📋 Connection Information:"
    echo "   Host: localhost (or your server IP)"
    echo "   Port: 3307"
    echo "   Database: ${MYSQL_DATABASE}"
    echo "   Username: ${MYSQL_USER}"
    echo "   Password: ${MYSQL_PASSWORD}"
    echo ""
    echo "💡 Connection String:"
    echo "   mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@localhost:3307/${MYSQL_DATABASE}"
else
    echo "❌ Error: Failed to configure external access"
    exit 1
fi

