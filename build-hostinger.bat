@echo off
echo ========================================
echo Build for Hostinger - Philip Portfolio
echo ========================================
echo.

echo 🔨 Running Angular build...
call npm run build:hostinger

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Error during build!
    echo Check if all dependencies are installed.
    pause
    exit /b 1
)

echo.
echo ========================================
echo ✅ Build completed successfully!
echo ========================================
echo.
echo 📁 Folder created: hostinger-upload/
echo.
echo 📋 Next steps:
echo 1. Open the 'hostinger-upload/' folder
echo 2. Upload ALL files to the public_html folder on Hostinger
echo 3. Make sure the .htaccess file was included
echo 4. Test the site after upload
echo.
echo Press any key to open the folder...
pause > nul

if exist "hostinger-upload" (
    start hostinger-upload
) else (
    echo ❌ hostinger-upload folder not found!
    pause
) 