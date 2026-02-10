# 阿里云部署教程 - 神州数码 AI 官网

## 📋 目录

1. [购买阿里云服务器](#1-购买阿里云服务器)
2. [连接服务器](#2-连接服务器)
3. [安装 Node.js 和 pnpm](#3-安装-nodejs-和-pnpm)
4. [上传项目文件](#4-上传项目文件)
5. [安装依赖并构建](#5-安装依赖并构建)
6. [使用 PM2 启动服务](#6-使用-pm2-启动服务)
7. [配置防火墙](#7-配置防火墙)
8. [配置 Nginx 反向代理](#8-配置-nginx-反向代理)
9. [配置 HTTPS 证书](#9-配置-https-证书)
10. [配置域名解析](#10-配置域名解析)
11. [设置开机自启](#11-设置开机自启)
12. [常见问题](#12-常见问题)

---

## 1. 购买阿里云服务器

### 1.1 推荐配置

| 配置项 | 推荐 | 最低要求 |
|--------|------|---------|
| **实例规格** | 2核4GB | 1核2GB |
| **操作系统** | Ubuntu 22.04 LTS | Ubuntu 20.04+ |
| **系统盘** | 40GB SSD | 20GB SSD |
| **带宽** | 5Mbps | 1Mbps |
| **购买时长** | 1年（更便宜） | 1个月（测试） |

### 1.2 购买步骤

1. **访问**：https://www.aliyun.com/product/ecs
2. **点击**："立即购买"
3. **选择配置**：
   - 地域：选择离你最近的地域（如华东1-杭州）
   - 实例规格：选择 2核4GB 或更高
   - 镜像：选择 Ubuntu 22.04 LTS
   - 存储：40GB SSD 云盘
   - 带宽：按使用流量或固定带宽（推荐固定带宽）
4. **设置密码**：
   - 登录凭证：选择"自定义密码"
   - 设置 root 密码（**记住这个密码**）
5. **确认订单**并支付

### 1.3 获取服务器信息

购买完成后，在阿里云控制台找到：
- **公网 IP 地址**：如 `47.96.123.456`
- **root 密码**：你设置的密码

---

## 2. 连接服务器

### 2.1 Windows 用户 - 使用 Xshell 或 PowerShell

#### 方法A：使用 PowerShell（推荐）

```powershell
# 打开 PowerShell，输入：
ssh root@你的公网IP

# 示例：
# ssh root@47.96.123.456
```

#### 方法B：使用 Xshell

1. 下载安装 Xshell
2. 新建会话
3. 输入：
   - 主机：你的公网 IP
   - 端口：22
   - 用户名：root
   - 密码：你设置的密码
4. 点击连接

### 2.2 Mac/Linux 用户

```bash
# 打开终端，输入：
ssh root@你的公网IP

# 示例：
# ssh root@47.96.123.456
```

### 2.3 首次连接

首次连接会提示：
```
The authenticity of host '...' can't be established.
Are you sure you want to continue connecting (yes/no)?
```

输入：`yes`，然后输入密码（**密码不会显示**）

连接成功后会看到：
```
root@i-xxxx:~#
```

---

## 3. 安装 Node.js 和 pnpm

### 3.1 更新系统

```bash
# 更新包列表
apt update -y

# 升级系统包
apt upgrade -y
```

### 3.2 安装 Node.js 20

```bash
# 下载并安装 Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# 验证安装
node --version  # 应该显示 v20.x.x
npm --version   # 应该显示 10.x.x
```

### 3.3 安装 pnpm

```bash
# 使用 npm 安装 pnpm
npm install -g pnpm

# 验证安装
pnpm --version  # 应该显示 8.x.x 或更高
```

### 3.4 安装其他必要工具

```bash
# 安装 git
apt install -y git

# 安装构建工具（某些依赖可能需要）
apt install -y build-essential

# 验证 git 安装
git --version  # 应该显示 2.x.x
```

---

## 4. 上传项目文件

### 方法A：从 GitHub 克隆（推荐）

#### 4.1 设置 GitHub 仓库为公开

1. 访问：https://github.com/yumizhao926-design/digitalchina
2. 点击 **"Settings"** → **"General"**
3. 滚动到底部，找到 **"Danger Zone"**
4. 点击 **"Change visibility"** → **"Make public"**
5. 确认操作

#### 4.2 克隆项目

```bash
# 创建项目目录
mkdir -p /var/www
cd /var/www

# 克隆项目
git clone https://github.com/yumizhao926-design/digitalchina.git

# 进入项目目录
cd digitalchina

# 查看文件
ls -la
```

### 方法B：使用 SCP 上传（如果不想公开仓库）

#### 4.1 在本地打包

```bash
# 在沙箱中执行
cd /workspace
tar -czf digitalchina.tar.gz projects/
```

#### 4.2 上传到服务器

```bash
# 在本地终端执行（沙箱外）
scp digitalchina.tar.gz root@你的公网IP:/var/www/

# 示例：
# scp digitalchina.tar.gz root@47.96.123.456:/var/www/
```

#### 4.3 在服务器上解压

```bash
# 在服务器上执行
cd /var/www
tar -xzf digitalchina.tar.gz
mv projects digitalchina
cd digitalchina
```

---

## 5. 安装依赖并构建

### 5.1 安装依赖

```bash
# 进入项目目录
cd /var/www/digitalchina

# 安装依赖
pnpm install
```

**安装时间**：约 1-3 分钟

### 5.2 构建项目

```bash
# 构建生产版本
pnpm run build
```

**构建时间**：约 2-5 分钟

**构建成功标志**：
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (X/X)
```

### 5.3 验证构建

```bash
# 查看构建结果
ls -la .next/

# 应该看到：
# server/  static/  build-manifest.json  等文件
```

---

## 6. 使用 PM2 启动服务

### 6.1 安装 PM2

```bash
# 全局安装 PM2
npm install -g pm2

# 验证安装
pm2 --version  # 应该显示 5.x.x
```

### 6.2 启动服务

```bash
# 进入项目目录
cd /var/www/digitalchina

# 使用 PM2 启动服务
pm2 start npm --name "digitalchina-website" -- start

# 查看状态
pm2 status

# 应该看到：
# ┌────┬────────────────────┬────────┬─────┬─────────┬──────────┐
# │ id │ name               │ status │ cpu │ memory  │ uptime   │
# ├────┼────────────────────┼────────┼─────┼─────────┼──────────┤
# │ 0  │ digitalchina-website│ online │ 0%  │ 150MB   │ 0:00:05  │
# └────┴────────────────────┴────────┴─────┴─────────┴──────────┘
```

### 6.3 查看日志

```bash
# 查看实时日志
pm2 logs digitalchina-website

# 退出日志查看
# 按 Ctrl + C

# 查看错误日志
pm2 logs digitalchina-website --err
```

### 6.4 测试服务

```bash
# 测试本地访问
curl http://localhost:5000

# 应该返回 HTML 内容
```

---

## 7. 配置防火墙

### 7.1 阿里云安全组配置

1. **登录阿里云控制台**
2. **进入**：云服务器 ECS → 实例
3. **找到你的实例**，点击"更多" → "网络和安全组" → "安全组配置"
4. **添加入方向规则**：

| 协议类型 | 端口范围 | 授权对象 | 描述 |
|---------|---------|---------|------|
| TCP | 22 | 0.0.0.0/0 | SSH（必需） |
| TCP | 80 | 0.0.0.0/0 | HTTP（必需） |
| TCP | 443 | 0.0.0.0/0 | HTTPS（必需） |
| TCP | 5000 | 0.0.0.0/0 | 应用端口（可选） |

### 7.2 服务器内部防火墙（可选）

```bash
# 安装 UFW
apt install -y ufw

# 允许 SSH
ufw allow 22/tcp

# 允许 HTTP
ufw allow 80/tcp

# 允许 HTTPS
ufw allow 443/tcp

# 启用防火墙
ufw enable

# 查看状态
ufw status
```

---

## 8. 配置 Nginx 反向代理

### 8.1 安装 Nginx

```bash
# 安装 Nginx
apt install -y nginx

# 启动 Nginx
systemctl start nginx

# 设置开机自启
systemctl enable nginx

# 验证安装
nginx -v
```

### 8.2 创建 Nginx 配置文件

```bash
# 创建配置文件
nano /etc/nginx/sites-available/digitalchina
```

### 8.3 配置内容

粘贴以下内容（替换你的服务器 IP）：

```nginx
server {
    listen 80;
    server_name 47.96.123.456;  # 替换为你的服务器 IP 或域名

    # 日志配置
    access_log /var/log/nginx/digitalchina_access.log;
    error_log /var/log/nginx/digitalchina_error.log;

    # 反向代理到 Next.js 应用
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;

        # WebSocket 支持
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';

        # 头部设置
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # 超时设置
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # 静态文件缓存（可选）
    location /_next/static/ {
        proxy_pass http://localhost:5000;
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    # 静态资源缓存（可选）
    location /static/ {
        proxy_pass http://localhost:5000;
        expires 30d;
        add_header Cache-Control "public";
    }
}
```

保存并退出（按 `Ctrl + X`，然后按 `Y`，再按 `Enter`）

### 8.4 启用配置

```bash
# 创建软链接
ln -s /etc/nginx/sites-available/digitalchina /etc/nginx/sites-enabled/

# 删除默认配置（可选）
rm /etc/nginx/sites-enabled/default

# 测试配置
nginx -t

# 应该看到：
# nginx: configuration file /etc/nginx/nginx.conf test is successful

# 重启 Nginx
systemctl restart nginx
```

### 8.5 测试访问

```bash
# 测试 HTTP 访问
curl http://47.96.123.456  # 替换为你的 IP

# 或在浏览器访问：
# http://47.96.123.456
```

---

## 9. 配置 HTTPS 证书

### 方法A：使用 Let's Encrypt 免费证书（推荐）

#### 9.1 安装 Certbot

```bash
# 安装 Certbot
apt install -y certbot python3-certbot-nginx
```

#### 9.2 生成证书

**情况1：如果你有域名**

```bash
# 替换为你的域名
certbot --nginx -d www.yourdomain.com -d yourdomain.com
```

按提示操作：
1. 输入邮箱地址
2. 同意服务条款（输入 `Y`）
3. 选择是否分享邮箱（输入 `N`）
4. 证书会自动配置到 Nginx

**情况2：如果没有域名（仅测试）**

暂时跳过此步骤，使用 HTTP 访问即可。

#### 9.3 验证 HTTPS

```bash
# 测试 HTTPS 访问
curl https://yourdomain.com

# 在浏览器访问：
# https://yourdomain.com
```

#### 9.4 设置自动续期

```bash
# 测试续期命令
certbot renew --dry-run

# 添加自动续期任务
crontab -e

# 添加以下行（每月1号凌晨3点检查续期）
0 3 1 * * certbot renew --quiet --post-hook "systemctl reload nginx"
```

---

## 10. 配置域名解析（可选）

### 10.1 购买域名

如果还没有域名，可以购买：
- 阿里云域名：https://wanwang.aliyun.com
- 腾讯云域名：https://dnspod.cloud.tencent.com

### 10.2 配置 DNS 解析

1. **登录域名管理后台**
2. **添加解析记录**：

| 记录类型 | 主机记录 | 记录值 | TTL |
|---------|---------|--------|-----|
| A | @ | 你的服务器IP | 600 |
| A | www | 你的服务器IP | 600 |

**示例**：
- 主机记录：`@`
- 记录值：`47.96.123.456`（你的服务器 IP）

### 10.3 等待生效

DNS 解析通常需要 10-60 分钟生效。

### 10.4 更新 Nginx 配置

```bash
# 编辑配置
nano /etc/nginx/sites-available/digitalchina

# 修改 server_name
server_name yourdomain.com www.yourdomain.com;

# 重新加载 Nginx
systemctl reload nginx
```

---

## 11. 设置开机自启

### 11.1 保存 PM2 进程列表

```bash
# 保存当前 PM2 进程
pm2 save

# 查看保存的配置
pm2 list
```

### 11.2 生成开机启动脚本

```bash
# 生成启动脚本
pm2 startup

# 按提示执行生成的命令
# 示例输出：
# sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u root --hp /root
# 复制上面的命令执行
```

### 11.3 验证开机自启

```bash
# 重启服务器测试
reboot

# 重新连接后检查 PM2 状态
pm2 status

# 检查 Nginx 状态
systemctl status nginx
```

---

## 12. 常见问题

### 问题1：端口被占用

```bash
# 查看端口占用
netstat -tulpn | grep 5000

# 或者
ss -tulpn | grep 5000

# 杀死进程
kill -9 <PID>
```

### 问题2：构建失败

```bash
# 清理缓存
rm -rf .next node_modules

# 重新安装
pnpm install

# 重新构建
pnpm run build
```

### 问题3：PM2 服务无法启动

```bash
# 查看日志
pm2 logs digitalchina-website

# 查看错误详情
pm2 logs digitalchina-website --err

# 重启服务
pm2 restart digitalchina-website
```

### 问题4：Nginx 配置错误

```bash
# 检查配置
nginx -t

# 查看错误日志
tail -f /var/log/nginx/error.log

# 重启 Nginx
systemctl restart nginx
```

### 问题5：HTTPS 证书过期

```bash
# 手动续期
certbot renew

# 查看证书状态
certbot certificates
```

---

## 📋 完整命令速查

```bash
# 1. 更新系统
apt update -y && apt upgrade -y

# 2. 安装 Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# 3. 安装 pnpm
npm install -g pnpm

# 4. 安装工具
apt install -y git build-essential

# 5. 克隆项目
cd /var/www
git clone https://github.com/yumizhao926-design/digitalchina.git
cd digitalchina

# 6. 安装依赖
pnpm install

# 7. 构建项目
pnpm run build

# 8. 安装 PM2
npm install -g pm2

# 9. 启动服务
pm2 start npm --name "digitalchina-website" -- start

# 10. 安装 Nginx
apt install -y nginx

# 11. 配置 Nginx
nano /etc/nginx/sites-available/digitalchina
# （粘贴配置内容）

# 12. 启用配置
ln -s /etc/nginx/sites-available/digitalchina /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx

# 13. 设置防火墙（阿里云安全组）
# 在控制台添加规则

# 14. 配置 HTTPS（如果有域名）
certbot --nginx -d yourdomain.com

# 15. 设置开机自启
pm2 save
pm2 startup
# 执行生成的命令
```

---

## ✅ 部署检查清单

部署完成后，请检查：

- [ ] 服务器可以正常 SSH 连接
- [ ] Node.js 和 pnpm 已安装
- [ ] 项目文件已上传
- [ ] 依赖已安装
- [ ] 项目构建成功
- [ ] PM2 服务正常运行
- [ ] Nginx 配置正确
- [ ] 防火墙规则已设置
- [ ] 可以通过 IP 访问网站
- [ ] HTTPS 证书已配置（如果有域名）
- [ ] 域名解析已生效（如果有域名）
- [ ] PM2 和 Nginx 已设置开机自启

---

## 🎯 访问地址

部署成功后，你可以通过以下方式访问：

- **HTTP**: `http://你的服务器IP`
- **HTTPS**: `https://yourdomain.com`（如果有域名）
- **本地测试**: `http://localhost:5000`

---

## 📞 技术支持

如果遇到问题，提供以下信息：

1. 完整的错误信息
2. 服务器系统信息：`cat /etc/os-release`
3. Node.js 版本：`node --version`
4. PM2 日志：`pm2 logs digitalchina-website`
5. Nginx 日志：`tail -f /var/log/nginx/error.log`

---

**祝你部署顺利！** 🚀
