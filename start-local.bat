@echo off
echo ========================================
echo   Start Digital China Website
echo ========================================
echo.

REM Check Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js not found
    echo Please install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js installed
node --version
echo.

REM Check pnpm
pnpm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Installing pnpm...
    npm install -g pnpm
)

echo [OK] pnpm installed
pnpm --version
echo.

REM Install dependencies
if not exist "node_modules" (
    echo Installing dependencies...
    call pnpm install
    if %errorlevel% neq 0 (
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
    echo [OK] Dependencies installed
    echo.
)

REM Build project
if not exist ".next" (
    echo Building project...
    call pnpm run build
    if %errorlevel% neq 0 (
        echo ERROR: Build failed
        pause
        exit /b 1
    )
    echo [OK] Build completed
    echo.
)

echo ========================================
echo   Starting server...
echo ========================================
echo.
echo Access: http://localhost:5000
echo Press Ctrl + C to stop
echo.

REM Start service
pnpm run start

pause
