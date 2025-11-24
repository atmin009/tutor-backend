# Script สำหรับ import database ลงใน Docker MySQL container (PowerShell)
# Usage: .\import-database.ps1 <sql-file>

param(
    [Parameter(Mandatory=$true)]
    [string]$SqlFile
)

if (-not (Test-Path $SqlFile)) {
    Write-Host "❌ Error: SQL file not found: $SqlFile" -ForegroundColor Red
    exit 1
}

Write-Host "📦 Importing database from $SqlFile..." -ForegroundColor Cyan

# ตรวจสอบว่า container รันอยู่หรือไม่
$mysqlStatus = docker-compose ps mysql
if ($mysqlStatus -notmatch "Up") {
    Write-Host "❌ Error: MySQL container is not running" -ForegroundColor Red
    Write-Host "Please run: docker-compose up -d" -ForegroundColor Yellow
    exit 1
}

# Import database
Get-Content $SqlFile | docker-compose exec -T mysql mysql -u tutor_user -ptutor_password tutor_db

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Database imported successfully!" -ForegroundColor Green
} else {
    Write-Host "❌ Error: Failed to import database" -ForegroundColor Red
    exit 1
}

