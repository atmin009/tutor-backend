# คู่มือการจัดการฐานข้อมูล

## วิธีเข้าใช้งาน MySQL Container

### 1. เข้า MySQL Command Line

```bash
# เข้า MySQL ด้วย user ปกติ
docker-compose exec mysql mysql -u tutor_user -ptutor_password tutor_db

# หรือเข้า MySQL ด้วย root
docker-compose exec mysql mysql -u root -prootpassword

# หรือเข้า MySQL โดยไม่ระบุ database
docker-compose exec mysql mysql -u tutor_user -ptutor_password
```

### 2. เข้า MySQL Container (Shell)

```bash
# เข้าไปใน container
docker-compose exec mysql sh

# จากนั้นรัน mysql command
mysql -u tutor_user -ptutor_password tutor_db
```

## การ Import ฐานข้อมูล

### วิธีที่ 1: Import SQL File ผ่าน Docker

```bash
# Copy SQL file เข้าไปใน container แล้ว import
docker cp your-database.sql tutor-mysql:/tmp/database.sql
docker-compose exec mysql mysql -u tutor_user -ptutor_password tutor_db < /tmp/database.sql

# หรือ import จาก host โดยตรง
docker-compose exec -T mysql mysql -u tutor_user -ptutor_password tutor_db < your-database.sql
```

### วิธีที่ 2: Import ผ่าน MySQL Command Line

```bash
# 1. เข้า MySQL
docker-compose exec mysql mysql -u tutor_user -ptutor_password tutor_db

# 2. ใน MySQL prompt:
source /tmp/database.sql;
# หรือ
\. /tmp/database.sql;
```

### วิธีที่ 3: ใช้ Prisma Seed (แนะนำ)

```bash
# รัน seed script เพื่อสร้างข้อมูลเริ่มต้น
docker-compose exec backend npm run seed
```

ข้อมูลที่ seed จะสร้าง:
- Roles: super_admin, admin, teacher
- Permissions: manage_users, manage_roles, manage_courses
- Admin user: admin@example.com / Admin123!

### วิธีที่ 4: Import ผ่าน Volume Mount

1. สร้างโฟลเดอร์ `mysql-init` ในโปรเจค
2. วาง SQL files ที่ต้องการ import
3. MySQL จะรันไฟล์ใน `mysql-init` อัตโนมัติเมื่อ container เริ่มครั้งแรก

```bash
mkdir mysql-init
# วาง SQL files ไว้ใน mysql-init/
# Restart container
docker-compose down
docker-compose up -d
```

## การ Export ฐานข้อมูล

### Export เป็น SQL File

```bash
# Export ทั้ง database
docker-compose exec mysql mysqldump -u tutor_user -ptutor_password tutor_db > backup.sql

# Export เฉพาะ tables
docker-compose exec mysql mysqldump -u tutor_user -ptutor_password tutor_db table1 table2 > backup.sql

# Export พร้อม structure และ data
docker-compose exec mysql mysqldump -u tutor_user -ptutor_password --single-transaction tutor_db > backup.sql
```

### Export และ Download

```bash
# Export และ copy ออกมา
docker-compose exec mysql mysqldump -u tutor_user -ptutor_password tutor_db > backup-$(date +%Y%m%d-%H%M%S).sql
```

## การจัดการฐานข้อมูลด้วย Prisma

### รัน Migrations

```bash
# Migrations จะรันอัตโนมัติเมื่อ container start
# หรือรัน manual
docker-compose exec backend npx prisma migrate deploy

# ดู migration status
docker-compose exec backend npx prisma migrate status
```

### Reset Database (ระวัง! จะลบข้อมูลทั้งหมด)

```bash
docker-compose exec backend npx prisma migrate reset
```

### Seed Database

```bash
docker-compose exec backend npm run seed
```

## การเชื่อมต่อ MySQL จาก Host ภายนอก

### ตั้งค่าการเชื่อมต่อจากภายนอก

MySQL container ถูกตั้งค่าให้รับการเชื่อมต่อจากภายนอกแล้ว โดย:

1. **Port Mapping**: Port 3307 บน host map ไปยัง port 3306 ใน container
2. **Bind Address**: MySQL bind ที่ `0.0.0.0` เพื่อรับการเชื่อมต่อจากทุก interface

### ตั้งค่า User สำหรับ External Access

รัน script เพื่อสร้าง user ที่สามารถเชื่อมต่อจาก host ภายนอกได้:

```powershell
# Windows PowerShell
.\setup-external-access.ps1

# Linux/Mac
./setup-external-access.sh
```

หรือตั้งค่า manual:

```bash
# เข้า MySQL
docker-compose exec mysql mysql -u root -prootpassword

# สร้าง user สำหรับ external access
CREATE USER IF NOT EXISTS 'tutor_user'@'%' IDENTIFIED BY 'tutor_password';
GRANT ALL PRIVILEGES ON tutor_db.* TO 'tutor_user'@'%';
FLUSH PRIVILEGES;
```

### การเชื่อมต่อจาก Host

#### 1. จากเครื่องเดียวกัน (localhost)

```bash
# ใช้ MySQL client
mysql -h 127.0.0.1 -P 3307 -u tutor_user -ptutor_password tutor_db

# หรือใช้ root
mysql -h 127.0.0.1 -P 3307 -u root -prootpassword
```

#### 2. จากเครื่องอื่นในเครือข่ายเดียวกัน

```bash
# แทนที่ <server-ip> ด้วย IP address ของ server
mysql -h <server-ip> -P 3307 -u tutor_user -ptutor_password tutor_db
```

#### 3. จาก Internet (ถ้า server มี public IP)

```bash
# แทนที่ <public-ip> ด้วย public IP ของ server
mysql -h <public-ip> -P 3307 -u tutor_user -ptutor_password tutor_db
```

**⚠️ ข้อควรระวัง**: การเปิด MySQL ให้เข้าถึงจาก Internet ควรมี:
- Firewall rules ที่เหมาะสม
- Strong password
- SSL/TLS encryption
- IP whitelist (ถ้าเป็นไปได้)

### Connection String สำหรับ Application

```
mysql://tutor_user:tutor_password@localhost:3307/tutor_db
```

หรือจากเครื่องอื่น:

```
mysql://tutor_user:tutor_password@<server-ip>:3307/tutor_db
```

### ตรวจสอบการเชื่อมต่อ

```bash
# ตรวจสอบว่า MySQL ฟังที่ port 3307
netstat -an | findstr 3307  # Windows
netstat -an | grep 3307      # Linux/Mac

# หรือใช้ telnet
telnet localhost 3307
```

### การใช้ MySQL Client Tools

#### MySQL Workbench
- Host: `localhost` (หรือ server IP)
- Port: `3307`
- Username: `tutor_user`
- Password: `tutor_password`
- Database: `tutor_db`

#### phpMyAdmin
- Server: `localhost:3307`
- Username: `tutor_user`
- Password: `tutor_password`

#### DBeaver / TablePlus / DataGrip
- Host: `localhost`
- Port: `3307`
- Database: `tutor_db`
- Username: `tutor_user`
- Password: `tutor_password`

## การ Backup และ Restore

### Backup

```bash
# สร้าง backup script
docker-compose exec mysql mysqldump -u tutor_user -ptutor_password --single-transaction --routines --triggers tutor_db > backup-$(date +%Y%m%d-%H%M%S).sql
```

### Restore

```bash
# Restore จาก backup file
docker-compose exec -T mysql mysql -u tutor_user -ptutor_password tutor_db < backup-20240101-120000.sql
```

## การดูข้อมูลในฐานข้อมูล

### ดู Tables

```bash
docker-compose exec mysql mysql -u tutor_user -ptutor_password tutor_db -e "SHOW TABLES;"
```

### ดูข้อมูลใน Table

```bash
docker-compose exec mysql mysql -u tutor_user -ptutor_password tutor_db -e "SELECT * FROM User LIMIT 10;"
```

### ดู Database Size

```bash
docker-compose exec mysql mysql -u tutor_user -ptutor_password tutor_db -e "SELECT table_schema AS 'Database', ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS 'Size (MB)' FROM information_schema.tables WHERE table_schema = 'tutor_db' GROUP BY table_schema;"
```

## ตัวอย่างคำสั่ง MySQL ที่ใช้บ่อย

```sql
-- ดู databases ทั้งหมด
SHOW DATABASES;

-- ใช้ database
USE tutor_db;

-- ดู tables
SHOW TABLES;

-- ดู structure ของ table
DESCRIBE User;

-- ดูข้อมูลใน table
SELECT * FROM User;

-- นับจำนวน records
SELECT COUNT(*) FROM User;

-- ลบข้อมูล (ระวัง!)
DELETE FROM User WHERE id = 1;

-- ลบ table (ระวัง!)
DROP TABLE IF EXISTS User;
```

## การแก้ไขปัญหา

### Database ไม่สามารถเชื่อมต่อได้

```bash
# ตรวจสอบว่า MySQL container รันอยู่
docker-compose ps

# ดู logs
docker-compose logs mysql

# Restart MySQL
docker-compose restart mysql
```

### ลืม Password

```bash
# เข้า MySQL ด้วย root และ reset password
docker-compose exec mysql mysql -u root -prootpassword
# จากนั้นใน MySQL:
ALTER USER 'tutor_user'@'%' IDENTIFIED BY 'new_password';
FLUSH PRIVILEGES;
```

### Database Corrupted

```bash
# Stop containers
docker-compose down

# ลบ volume (ระวัง! จะลบข้อมูลทั้งหมด)
docker volume rm tutor-backend_mysql_data

# Start ใหม่
docker-compose up -d
```

