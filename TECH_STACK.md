# สรุป Tech Stack - Tutor Backend

## 🎯 ภาพรวม
Backend API สำหรับระบบจัดการคอร์สเรียนออนไลน์ (E-Learning Platform) ที่พัฒนาด้วย Node.js และ TypeScript

---

## 🔧 Core Technologies

### **Runtime & Language**
- **Node.js** - JavaScript runtime
- **TypeScript** (v5.9.3) - Type-safe JavaScript
- **ES Modules** - ใช้ `"type": "module"` สำหรับ ES6 imports

### **Web Framework**
- **Express.js** (v5.1.0) - Web application framework
- **CORS** (v2.8.5) - Cross-Origin Resource Sharing

### **Database & ORM**
- **Prisma** (v6.19.0) - Next-generation ORM
- **MySQL** - Relational database
- **Prisma Client** - Type-safe database client

### **Authentication & Security**
- **JWT** (jsonwebtoken v9.0.2) - JSON Web Token สำหรับ authentication
- **bcryptjs** (v3.0.3) - Password hashing

---

## 📦 Dependencies

### **Core Dependencies**
- `express` - Web framework
- `@prisma/client` - Prisma database client
- `prisma` - Prisma CLI และ tools
- `jsonwebtoken` - JWT authentication
- `bcryptjs` - Password encryption
- `cors` - CORS middleware
- `dotenv` - Environment variables
- `multer` (v2.0.2) - File upload handling
- `axios` (v1.13.2) - HTTP client (สำหรับเรียก external APIs)

### **Development Dependencies**
- `typescript` - TypeScript compiler
- `tsx` (v4.20.6) - TypeScript execution สำหรับ development
- `@types/*` - TypeScript type definitions
  - `@types/express`
  - `@types/node`
  - `@types/jsonwebtoken`
  - `@types/bcryptjs`
  - `@types/cors`
  - `@types/multer`

---

## 🏗️ Architecture & Structure

### **Project Structure**
```
src/
├── app.ts              # Express app configuration
├── server.ts           # Server entry point
├── prisma.ts           # Prisma client instance
├── middlewares/        # Custom middlewares
│   ├── authMiddleware.ts
│   └── errorHandler.ts
├── modules/            # Feature modules
│   ├── auth/           # Authentication
│   ├── users/          # User management
│   ├── roles/          # Role-based access control
│   ├── permissions/    # Permission management
│   ├── teachers/       # Teacher management
│   ├── courses/        # Course management
│   ├── sections/       # Course sections
│   ├── lessons/        # Lessons
│   ├── enrollments/    # Student enrollments
│   ├── payments/       # Payment processing
│   └── coupons/        # Coupon system
└── utils/              # Utility functions
    ├── jwt.ts          # JWT helpers
    ├── password.ts     # Password utilities
    ├── apiResponse.ts  # API response helpers
    ├── upload.ts       # File upload utilities
    └── telegram.ts     # Telegram bot integration
```

---

## 🗄️ Database Schema

### **Main Models**
- **User** - ผู้ใช้ระบบ
- **Role** - บทบาท (Role-based access control)
- **Permission** - สิทธิ์การเข้าถึง
- **Teacher** - ครูผู้สอน
- **Course** - คอร์สเรียน
- **Section** - ส่วนของคอร์ส
- **Lesson** - บทเรียน
- **Enrollment** - การลงทะเบียนเรียน
- **Order** - คำสั่งซื้อ
- **LessonCompletion** - การเรียนจบบทเรียน
- **Coupon** - คูปองส่วนลด
- **CouponUsage** - การใช้งานคูปอง

### **Relationships**
- User ↔ Role (Many-to-Many)
- Role ↔ Permission (Many-to-Many)
- Teacher → Course (One-to-Many)
- Course → Section → Lesson (Hierarchical)
- User → Enrollment → Course (Many-to-Many)
- User → Order → Course
- User → LessonCompletion → Lesson

---

## 🔌 External Integrations

### **Payment Gateway**
- **MoneySpace** - ระบบชำระเงิน
  - Webhook support
  - QR code payment
  - Payment redirect URLs

### **Notifications**
- **Telegram Bot** - แจ้งเตือนผ่าน Telegram
  - Bot token configuration
  - Chat ID for notifications

---

## 🐳 DevOps & Deployment

### **Containerization**
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Multi-stage builds** - Optimized Docker images

### **Build Process**
1. Install dependencies
2. Generate Prisma Client
3. Compile TypeScript → JavaScript
4. Run database migrations
5. Start Express server

### **Scripts**
- `npm run dev` - Development mode with hot reload (tsx watch)
- `npm run build` - Build production bundle
- `npm run seed` - Seed database
- Custom scripts for database fixes:
  - `fix:enrollments`
  - `fix:payment-status`
  - `create:enrollment`

---

## 🔐 Security Features

- **JWT Authentication** - Token-based auth
- **Password Hashing** - bcryptjs
- **CORS Configuration** - Configurable allowed origins
- **Environment Variables** - Sensitive data protection
- **Role-Based Access Control (RBAC)** - User roles & permissions

---

## 📁 File Upload

- **Multer** - File upload middleware
- **Static File Serving** - `/uploads` endpoint
- Support for:
  - Course cover images
  - Section attachments (PDF)
  - Lesson content files

---

## 🌐 API Endpoints Structure

```
/api/
├── /auth              # Authentication
├── /courses/public    # Public course listings
├── /payments          # Payment processing
├── /payments/webhook  # Payment webhooks
├── /enrollments       # Student enrollments
├── /coupons           # Coupon management
└── /admin/
    ├── /users         # User management
    ├── /roles         # Role management
    ├── /permissions   # Permission management
    ├── /teachers      # Teacher management
    ├── /courses       # Course management
    ├── /sections      # Section management
    ├── /lessons       # Lesson management
    └── /payments      # Payment administration
```

---

## ⚙️ Configuration

### **TypeScript Config**
- Target: `ESNext`
- Module: `NodeNext`
- Strict mode enabled
- Source maps enabled
- Declaration files generated

### **Environment Variables**
- `DATABASE_URL` - MySQL connection string
- `JWT_SECRET` - JWT signing secret
- `MONEYSPACE_SECRET_ID` - Payment gateway ID
- `MONEYSPACE_SECRET_KEY` - Payment gateway key
- `TELEGRAM_BOT_TOKEN` - Telegram bot token (optional)
- `TELEGRAM_CHAT_ID` - Telegram chat ID (optional)
- `PORT` - Server port (default: 4000)
- `NODE_ENV` - Environment (development/production)
- `CORS_ORIGINS` - Allowed CORS origins (comma-separated)

---

## 📊 Key Features

1. **User Management** - Registration, authentication, profile
2. **Course Management** - CRUD operations for courses
3. **Content Management** - Sections, lessons, multimedia content
4. **Enrollment System** - Student course enrollment
5. **Payment Processing** - Integration with MoneySpace
6. **Coupon System** - Discount codes with flexible rules
7. **Progress Tracking** - Lesson completion tracking
8. **Role-Based Access** - Admin, teacher, student roles
9. **File Upload** - Course materials and media
10. **Telegram Notifications** - Payment and system notifications

---

## 🚀 Development Workflow

1. **Development**: `npm run dev` (uses tsx watch)
2. **Build**: `npm run build` (TypeScript compilation)
3. **Database**: Prisma migrations and seed scripts
4. **Testing**: Manual testing with scripts
5. **Deployment**: Docker containerization

---

## 📝 Notes

- ใช้ ES Modules แทน CommonJS
- Prisma Client generated ไปที่ `generated/prisma`
- TypeScript compiled ไปที่ `dist/`
- Static files served จาก `/uploads` directory
- Health check endpoint: `/api/health`

