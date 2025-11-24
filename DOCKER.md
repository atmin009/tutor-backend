# Docker Setup Guide

คู่มือการใช้งาน Docker สำหรับ Tutor Backend

## ไฟล์ที่เกี่ยวข้อง

- `Dockerfile` - ไฟล์สำหรับ build Docker image ของ backend
- `docker-compose.yml` - ไฟล์สำหรับรัน backend container
- `docker-entrypoint.sh` - Script ที่รัน migrations และ start server
- `EXTERNAL_DATABASE.md` - คู่มือการเชื่อมต่อกับ MySQL server ภายนอก

## ข้อกำหนดเบื้องต้น

1. ติดตั้ง Docker และ Docker Compose
2. สร้างไฟล์ `.env` จาก `env.example.txt` และปรับค่าตามต้องการ

## การตั้งค่า Environment Variables

สร้างไฟล์ `.env` ใน root directory ของโปรเจค โดยใช้ `env.example.txt` เป็น template:

```env
# Server Configuration
PORT=4000

# Database Configuration (เชื่อมต่อกับ MySQL server ภายนอก)
# สำหรับ Windows/Mac: ใช้ host.docker.internal
DATABASE_URL="mysql://tutor_user:tutor_password@host.docker.internal:3306/tutor_db"

# สำหรับ Linux: ใช้ IP address ของ host
# DATABASE_URL="mysql://tutor_user:tutor_password@172.17.0.1:3306/tutor_db"

# สำหรับ Remote Server: ใช้ IP address ของ server
# DATABASE_URL="mysql://tutor_user:tutor_password@192.168.1.100:3306/tutor_db"

# JWT Authentication
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# MoneySpace Payment Integration
MONEYSPACE_SECRET_ID=your_moneyspace_secret_id_here
MONEYSPACE_SECRET_KEY=your_moneyspace_secret_key_here

# Payment Redirect URLs
PAYMENT_SUCCESS_REDIRECT=http://localhost:5176/learning/1
PAYMENT_FAIL_REDIRECT=http://localhost:5176/payment/fail
PAYMENT_CANCEL_REDIRECT=http://localhost:5176/payment/cancel

# Telegram Bot Integration (Optional)
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
TELEGRAM_CHAT_ID=your_telegram_chat_id_here
```

**หมายเหตุ:** 
- Backend container จะเชื่อมต่อกับ MySQL server ที่มีอยู่แล้วบน host หรือ server ภายนอก
- ดูรายละเอียดเพิ่มเติมใน `EXTERNAL_DATABASE.md`

## การใช้งาน

### 1. Build และ Start Services

```bash
# Build และ start ทั้ง backend และ MySQL
docker-compose up -d

# หรือ build ใหม่ทุกครั้ง
docker-compose up -d --build
```

### 2. ดู Logs

```bash
# ดู logs ของทุก services
docker-compose logs -f

# ดู logs เฉพาะ backend
docker-compose logs -f backend

# ดู logs เฉพาะ MySQL
docker-compose logs -f mysql
```

### 3. Stop Services

```bash
# Stop services แต่เก็บ data
docker-compose stop

# Stop และลบ containers (แต่เก็บ volumes)
docker-compose down

# Stop และลบทุกอย่างรวม volumes
docker-compose down -v
```

### 4. Restart Services

```bash
docker-compose restart
```

### 5. เข้าถึง Database

```bash
# เข้าไปใน MySQL container
docker-compose exec mysql mysql -u tutor_user -ptutor_password tutor_db

# หรือใช้ root
docker-compose exec mysql mysql -u root -prootpassword
```

## การทำงานของ Docker Compose

1. **Backend Service:**
   - Build จาก Dockerfile
   - เชื่อมต่อกับ MySQL server ภายนอกตาม `DATABASE_URL` ใน `.env`
   - รัน Prisma migrations อัตโนมัติเมื่อ container start
   - Start Express server ที่ port 4000

**หมายเหตุ:** โปรเจคนี้ไม่สร้าง MySQL container แต่เชื่อมต่อกับ MySQL server ที่มีอยู่แล้ว ดูรายละเอียดใน `EXTERNAL_DATABASE.md`

## การแก้ไขปัญหา

### Backend ไม่สามารถเชื่อมต่อ Database ได้

ตรวจสอบว่า:
1. MySQL server รันอยู่บน host
2. DATABASE_URL ใน backend container ถูกต้อง: `docker-compose exec backend env | grep DATABASE_URL`
3. MySQL อนุญาตให้เชื่อมต่อจาก Docker container
4. ดูรายละเอียดเพิ่มเติมใน `EXTERNAL_DATABASE.md`

### Migrations ไม่ทำงาน

```bash
# รัน migrations แบบ manual
docker-compose exec backend npx prisma migrate deploy

# หรือ reset database (ระวัง! จะลบข้อมูลทั้งหมด)
docker-compose exec backend npx prisma migrate reset
```

### ต้องการ rebuild ใหม่ทั้งหมด

```bash
# ลบ containers, images, และ volumes
docker-compose down -v
docker system prune -a

# Build ใหม่
docker-compose up -d --build
```

## Development vs Production

### Development
- ใช้ `docker-compose.yml` สำหรับ development
- ไฟล์ `uploads` จะถูก mount เป็น volume เพื่อให้เห็นการเปลี่ยนแปลงทันที

### Production
- ควรใช้ environment variables จาก production environment
- ใช้ managed database service แทน MySQL container
- ตั้งค่า proper security และ backup

## Health Checks

- Backend: `http://localhost:4000/api/health`
- MySQL: ตรวจสอบผ่าน mysqladmin ping

## Volumes

- `mysql_data`: เก็บข้อมูล MySQL (persistent)
- `./uploads`: Mount จาก host เพื่อเก็บไฟล์ที่ upload

