# Script สำหรับ seed database ด้วย Prisma (PowerShell)
# Usage: .\seed-database.ps1

Write-Host "🌱 Seeding database..." -ForegroundColor Cyan

# ตรวจสอบว่า container รันอยู่หรือไม่
$backendStatus = docker-compose ps backend
if ($backendStatus -notmatch "Up") {
    Write-Host "❌ Error: Backend container is not running" -ForegroundColor Red
    Write-Host "Please run: docker-compose up -d" -ForegroundColor Yellow
    exit 1
}

# Run seed
docker-compose exec backend npm run seed

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Database seeded successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Admin credentials:" -ForegroundColor Cyan
    Write-Host "   Email: admin@example.com" -ForegroundColor White
    Write-Host "   Password: Admin123!" -ForegroundColor White
} else {
    Write-Host "❌ Error: Failed to seed database" -ForegroundColor Red
    exit 1
}

