#!/bin/bash

echo "========================================"
echo "   神州数码 AI 官网 - 本地启动脚本"
echo "========================================"
echo ""

# 检查 Node.js 是否安装
if ! command -v node &> /dev/null; then
    echo "[错误] 未检测到 Node.js，请先安装 Node.js"
    echo "下载地址：https://nodejs.org/"
    echo ""
    exit 1
fi

echo "[✓] Node.js 已安装"
node --version
echo ""

# 检查 pnpm 是否安装
if ! command -v pnpm &> /dev/null; then
    echo "[提示] 未检测到 pnpm，正在安装..."
    npm install -g pnpm
fi

echo "[✓] pnpm 已安装"
pnpm --version
echo ""

# 检查是否需要安装依赖
if [ ! -d "node_modules" ]; then
    echo "[提示] 正在安装项目依赖..."
    pnpm install
    if [ $? -ne 0 ]; then
        echo "[错误] 依赖安装失败"
        exit 1
    fi
    echo "[✓] 依赖安装完成"
    echo ""
fi

# 检查是否需要构建
if [ ! -d ".next" ]; then
    echo "[提示] 正在构建生产版本..."
    pnpm run build
    if [ $? -ne 0 ]; then
        echo "[错误] 构建失败"
        exit 1
    fi
    echo "[✓] 构建完成"
    echo ""
fi

echo "========================================"
echo "   正在启动服务器..."
echo "========================================"
echo ""
echo "访问地址：http://localhost:5000"
echo "按 Ctrl + C 停止服务"
echo ""

# 启动服务
pnpm run start
