@echo off
chcp 65001
echo ========================================
echo    神州数码 AI 官网 - 本地启动脚本
echo ========================================
echo.

REM 检查 Node.js 是否安装
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [错误] 未检测到 Node.js，请先安装 Node.js
    echo 下载地址：https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [✓] Node.js 已安装
node --version
echo.

REM 检查 pnpm 是否安装
pnpm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [提示] 未检测到 pnpm，正在安装...
    npm install -g pnpm
)

echo [✓] pnpm 已安装
pnpm --version
echo.

REM 检查是否需要安装依赖
if not exist "node_modules" (
    echo [提示] 正在安装项目依赖...
    call pnpm install
    if %errorlevel% neq 0 (
        echo [错误] 依赖安装失败
        pause
        exit /b 1
    )
    echo [✓] 依赖安装完成
    echo.
)

REM 检查是否需要构建
if not exist ".next" (
    echo [提示] 正在构建生产版本...
    call pnpm run build
    if %errorlevel% neq 0 (
        echo [错误] 构建失败
        pause
        exit /b 1
    )
    echo [✓] 构建完成
    echo.
)

echo ========================================
echo    正在启动服务器...
echo ========================================
echo.
echo 访问地址：http://localhost:5000
echo 按 Ctrl + C 停止服务
echo.

REM 启动服务
pnpm run start

pause
