# Script สำหรับ export database จาก Docker MySQL container (PowerShell)
# Usage: .\export-database.ps1 [output-file]

param(
    [string]$OutputFile = "backup-$(Get-Date -Format 'yyyyMMdd-HHmmss').sql"
)

Write-Host "📦 Exporting database to $OutputFile..." -ForegroundColor Cyan

# ตรวจสอบว่า container รันอยู่หรือไม่
$mysqlStatus = docker-compose ps mysql
if ($mysqlStatus -notmatch "Up") {
    Write-Host "❌ Error: MySQL container is not running" -ForegroundColor Red
    Write-Host "Please run: docker-compose up -d" -ForegroundColor Yellow
    exit 1
}

# Export database
docker-compose exec mysql mysqldump -u tutor_user -ptutor_password --single-transaction --routines --triggers tutor_db | Out-File -FilePath $OutputFile -Encoding utf8

if ($LASTEXITCODE -eq 0) {
    $fileSize = (Get-Item $OutputFile).Length / 1KB
    Write-Host "✅ Database exported successfully to $OutputFile" -ForegroundColor Green
    Write-Host "📊 File size: $([math]::Round($fileSize, 2)) KB" -ForegroundColor Cyan
} else {
    Write-Host "❌ Error: Failed to export database" -ForegroundColor Red
    exit 1
}

