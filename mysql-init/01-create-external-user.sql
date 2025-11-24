-- สร้าง user สำหรับเชื่อมต่อจาก host ภายนอก
-- Script นี้จะรันอัตโนมัติเมื่อ MySQL container เริ่มครั้งแรก

-- สร้าง user ที่สามารถเชื่อมต่อจาก host ใดก็ได้ (%)
CREATE USER IF NOT EXISTS 'tutor_user'@'%' IDENTIFIED BY 'tutor_password';
GRANT ALL PRIVILEGES ON tutor_db.* TO 'tutor_user'@'%';

-- สร้าง root user สำหรับเชื่อมต่อจาก host ภายนอก (ถ้าต้องการ)
-- CREATE USER IF NOT EXISTS 'root'@'%' IDENTIFIED BY 'rootpassword';
-- GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;

FLUSH PRIVILEGES;

