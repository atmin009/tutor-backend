# Script สำหรับตั้งค่า MySQL ให้รับการเชื่อมต่อจาก host ภายนอก
# Usage: .\setup-external-access.ps1

Write-Host "🔧 Setting up MySQL for external access..." -ForegroundColor Cyan

# ตรวจสอบว่า container รันอยู่หรือไม่
$mysqlStatus = docker-compose ps mysql
if ($mysqlStatus -notmatch "Up") {
    Write-Host "❌ Error: MySQL container is not running" -ForegroundColor Red
    Write-Host "Please run: docker-compose up -d" -ForegroundColor Yellow
    exit 1
}

Write-Host "📝 Creating user for external access..." -ForegroundColor Cyan

# อ่านค่าจาก environment หรือใช้ค่า default
$mysqlUser = $env:MYSQL_USER
if (-not $mysqlUser) { $mysqlUser = "tutor_user" }

$mysqlPassword = $env:MYSQL_PASSWORD
if (-not $mysqlPassword) { $mysqlPassword = "tutor_password" }

$mysqlDatabase = $env:MYSQL_DATABASE
if (-not $mysqlDatabase) { $mysqlDatabase = "tutor_db" }

# สร้าง SQL commands
$sqlCommands = @"
CREATE USER IF NOT EXISTS '$mysqlUser'@'%' IDENTIFIED BY '$mysqlPassword';
GRANT ALL PRIVILEGES ON $mysqlDatabase.* TO '$mysqlUser'@'%';
FLUSH PRIVILEGES;
SELECT 'User created successfully!' AS message;
"@

# Execute SQL
$sqlCommands | docker-compose exec -T mysql mysql -u root -prootpassword

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ MySQL external access configured successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Connection Information:" -ForegroundColor Cyan
    Write-Host "   Host: localhost (or your server IP)" -ForegroundColor White
    Write-Host "   Port: 3307" -ForegroundColor White
    Write-Host "   Database: $mysqlDatabase" -ForegroundColor White
    Write-Host "   Username: $mysqlUser" -ForegroundColor White
    Write-Host "   Password: $mysqlPassword" -ForegroundColor White
    Write-Host ""
    Write-Host "💡 Connection String:" -ForegroundColor Cyan
    Write-Host "   mysql://$mysqlUser`:$mysqlPassword@localhost:3307/$mysqlDatabase" -ForegroundColor Yellow
} else {
    Write-Host "❌ Error: Failed to configure external access" -ForegroundColor Red
    exit 1
}

