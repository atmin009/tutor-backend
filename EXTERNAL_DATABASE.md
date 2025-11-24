# คู่มือการเชื่อมต่อกับ MySQL Server ภายนอก

โปรเจคนี้สามารถเชื่อมต่อกับ MySQL server ที่มีอยู่แล้วบน host หรือ server ภายนอกได้ โดยไม่ต้องสร้าง MySQL container

## การตั้งค่า

### 1. ตั้งค่า DATABASE_URL ในไฟล์ `.env`

สร้างไฟล์ `.env` จาก `env.example.txt` และตั้งค่า `DATABASE_URL` ตามระบบปฏิบัติการ:

#### สำหรับ Windows/Mac (Docker Desktop)

```env
DATABASE_URL="mysql://username:password@host.docker.internal:3306/database_name"
```

**ตัวอย่าง:**
```env
DATABASE_URL="mysql://tutor_user:tutor_password@host.docker.internal:3306/tutor_db"
```

#### สำหรับ Linux

**วิธีที่ 1: ใช้ IP Address ของ Host**

```env
DATABASE_URL="mysql://username:password@172.17.0.1:3306/database_name"
```

หรือใช้ IP จริงของ host:
```env
DATABASE_URL="mysql://username:password@192.168.1.100:3306/database_name"
```

**วิธีที่ 2: ใช้ Host Network Mode**

แก้ไข `docker-compose.yml`:
```yaml
backend:
  network_mode: "host"
```

และตั้งค่า:
```env
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
```

#### สำหรับ Remote Server

```env
DATABASE_URL="mysql://username:password@server-ip:3306/database_name"
```

**ตัวอย่าง:**
```env
DATABASE_URL="mysql://tutor_user:tutor_password@192.168.1.100:3306/tutor_db"
```

### 2. ตรวจสอบว่า MySQL Server รับการเชื่อมต่อจากภายนอก

#### สำหรับ MySQL บน Host (Windows/Mac/Linux)

ตรวจสอบว่า MySQL ฟังที่ port 3306:

```bash
# Windows
netstat -an | findstr 3306

# Linux/Mac
netstat -an | grep 3306
# หรือ
ss -tlnp | grep 3306
```

#### ตั้งค่า MySQL ให้รับการเชื่อมต่อจากภายนอก

แก้ไขไฟล์ `my.cnf` หรือ `my.ini`:

```ini
[mysqld]
bind-address = 0.0.0.0
```

หรือสำหรับ Windows:
```ini
[mysqld]
bind-address = *
```

Restart MySQL service:
```bash
# Windows
net stop mysql
net start mysql

# Linux
sudo systemctl restart mysql
# หรือ
sudo service mysql restart

# Mac
brew services restart mysql
```

#### สร้าง User สำหรับเชื่อมต่อจาก Docker Container

```sql
-- เข้า MySQL
mysql -u root -p

-- สร้าง user ที่สามารถเชื่อมต่อจาก host ใดก็ได้
CREATE USER 'tutor_user'@'%' IDENTIFIED BY 'tutor_password';
GRANT ALL PRIVILEGES ON tutor_db.* TO 'tutor_user'@'%';
FLUSH PRIVILEGES;
```

หรือถ้าต้องการให้เชื่อมต่อได้เฉพาะจาก Docker network:

```sql
-- สำหรับ Windows/Mac (Docker Desktop)
CREATE USER 'tutor_user'@'172.%' IDENTIFIED BY 'tutor_password';
GRANT ALL PRIVILEGES ON tutor_db.* TO 'tutor_user'@'172.%';
FLUSH PRIVILEGES;
```

### 3. ตรวจสอบ Firewall

ตรวจสอบว่า firewall อนุญาตให้เชื่อมต่อ MySQL:

#### Windows Firewall
```powershell
# อนุญาต MySQL port
New-NetFirewallRule -DisplayName "MySQL" -Direction Inbound -LocalPort 3306 -Protocol TCP -Action Allow
```

#### Linux Firewall (ufw)
```bash
sudo ufw allow 3306/tcp
```

#### Linux Firewall (firewalld)
```bash
sudo firewall-cmd --permanent --add-port=3306/tcp
sudo firewall-cmd --reload
```

## การใช้งาน

### 1. ตั้งค่า `.env` file

```env
# Server Configuration
PORT=4000

# Database - ใช้ host.docker.internal สำหรับ Windows/Mac
DATABASE_URL="mysql://tutor_user:tutor_password@host.docker.internal:3306/tutor_db"

# JWT Authentication
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# MoneySpace Payment Integration
MONEYSPACE_SECRET_ID=your_moneyspace_secret_id_here
MONEYSPACE_SECRET_KEY=your_moneyspace_secret_key_here

# Payment Redirect URLs
PAYMENT_SUCCESS_REDIRECT=http://localhost:5176/learning/1
PAYMENT_FAIL_REDIRECT=http://localhost:5176/payment/fail
PAYMENT_CANCEL_REDIRECT=http://localhost:5176/payment/cancel

# Telegram Bot Integration
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
TELEGRAM_CHAT_ID=your_telegram_chat_id_here
```

### 2. Start Backend Container

```bash
docker-compose up -d
```

### 3. ตรวจสอบการเชื่อมต่อ

```bash
# ดู logs
docker-compose logs backend

# ตรวจสอบว่า backend เชื่อมต่อ database ได้
docker-compose exec backend node -e "require('dotenv').config(); const {PrismaClient} = require('./generated/prisma/client'); const prisma = new PrismaClient(); prisma.\$connect().then(() => console.log('✅ Connected!')).catch(e => console.error('❌ Error:', e));"
```

## การแก้ไขปัญหา

### Backend ไม่สามารถเชื่อมต่อ Database ได้

1. **ตรวจสอบ DATABASE_URL**
   ```bash
   docker-compose exec backend env | grep DATABASE_URL
   ```

2. **ทดสอบการเชื่อมต่อจาก container**
   ```bash
   # ติดตั้ง mysql client ใน container (ชั่วคราว)
   docker-compose exec backend sh -c "apk add --no-cache mysql-client && mysql -h host.docker.internal -u tutor_user -ptutor_password tutor_db -e 'SELECT 1;'"
   ```

3. **ตรวจสอบว่า MySQL ฟังที่ port 3306**
   ```bash
   # บน host
   netstat -an | grep 3306
   ```

4. **ตรวจสอบ MySQL user และ permissions**
   ```sql
   SELECT user, host FROM mysql.user WHERE user = 'tutor_user';
   SHOW GRANTS FOR 'tutor_user'@'%';
   ```

### Error: "Access denied for user"

- ตรวจสอบ username และ password
- ตรวจสอบว่า user มีสิทธิ์เชื่อมต่อจาก host ที่ถูกต้อง
- ลองสร้าง user ใหม่:
  ```sql
  DROP USER IF EXISTS 'tutor_user'@'%';
  CREATE USER 'tutor_user'@'%' IDENTIFIED BY 'tutor_password';
  GRANT ALL PRIVILEGES ON tutor_db.* TO 'tutor_user'@'%';
  FLUSH PRIVILEGES;
  ```

### Error: "Can't connect to MySQL server"

- ตรวจสอบว่า MySQL service รันอยู่
- ตรวจสอบว่า MySQL bind ที่ 0.0.0.0 (ไม่ใช่แค่ 127.0.0.1)
- ตรวจสอบ firewall rules
- สำหรับ Linux: ลองใช้ `network_mode: "host"` ใน docker-compose.yml

### สำหรับ Linux: ใช้ Host Network

ถ้า `host.docker.internal` ไม่ทำงานบน Linux:

1. แก้ไข `docker-compose.yml`:
   ```yaml
   backend:
     network_mode: "host"
   ```

2. ตั้งค่า `.env`:
   ```env
   DATABASE_URL="mysql://tutor_user:tutor_password@localhost:3306/tutor_db"
   ```

## ตัวอย่างการตั้งค่าตาม OS

### Windows
```env
DATABASE_URL="mysql://tutor_user:tutor_password@host.docker.internal:3306/tutor_db"
```

### Mac
```env
DATABASE_URL="mysql://tutor_user:tutor_password@host.docker.internal:3306/tutor_db"
```

### Linux
```env
# วิธีที่ 1: ใช้ IP
DATABASE_URL="mysql://tutor_user:tutor_password@172.17.0.1:3306/tutor_db"

# วิธีที่ 2: ใช้ host network mode
# ใน docker-compose.yml: network_mode: "host"
DATABASE_URL="mysql://tutor_user:tutor_password@localhost:3306/tutor_db"
```

### Remote Server
```env
DATABASE_URL="mysql://tutor_user:tutor_password@192.168.1.100:3306/tutor_db"
```

