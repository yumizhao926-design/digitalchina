# 神州数码 AI 官网部署指南

## 📋 项目信息

- **项目名称**: 神州数码 AI 官网
- **技术栈**: Next.js 16 + React 19 + TypeScript + Tailwind CSS 4
- **包管理器**: pnpm
- **运行端口**: 5000

---

## 🚀 快速部署（推荐使用 Coze CLI）

项目已配置 `.coze` 文件，支持一键部署。

### 方法一：使用 Coze CLI（最简单）

```bash
# 1. 确保在项目根目录
cd /workspace/projects

# 2. 执行构建
pnpm run build

# 3. 执行启动
pnpm run start
```

**构建成功标志**：
- 看到以下输出表示构建成功：
  ```
  ✓ Compiled successfully
  ✓ Linting and checking validity of types
  ✓ Collecting page data
  ✓ Generating static pages (X/X)
  ```

**启动成功标志**：
- 服务启动在 `http://localhost:5000`
- 访问页面返回 200 状态码

---

## 📦 详细部署步骤

### 第一步：安装依赖

```bash
# 使用 pnpm 安装依赖（项目强制使用 pnpm）
pnpm install
```

**注意事项**：
- ✅ 必须使用 `pnpm install`，不能使用 npm 或 yarn
- ✅ 项目配置了 `preinstall` 钩子，会自动检查包管理器
- ❌ 如果使用 npm 或 yarn，安装会失败

---

### 第二步：构建生产版本

```bash
# 执行构建脚本
pnpm run build
```

**构建过程**：
1. 安装生产依赖（如果需要）
2. 编译 TypeScript
3. 生成静态页面
4. 优化资源

**构建时间**：约 1-3 分钟（取决于机器性能）

**常见问题**：
- ❌ **构建失败**：检查 `pnpm install` 是否成功执行
- ❌ **类型错误**：运行 `pnpm run ts-check` 查看具体错误
- ✅ **警告信息**：通常可以忽略，不影响部署

---

### 第三步：启动生产服务

```bash
# 启动生产服务
pnpm run start
```

**启动后验证**：

```bash
# 检查端口是否正常监听
ss -lptn 'sport = :5000'

# 测试页面访问
curl -I http://localhost:5000
```

**预期结果**：
- 端口 5000 正在监听
- HTTP 返回 200 状态码

---

### 第四步：访问网站

打开浏览器访问：
- 本地: `http://localhost:5000`
- 内网: `http://[你的内网IP]:5000`

---

## 🔧 高级部署选项

### 使用 PM2 守护进程（推荐用于生产环境）

```bash
# 1. 安装 PM2
pnpm add -D pm2

# 2. 使用 PM2 启动
npx pm2 start npm --name "shenzhou-ai-website" -- start

# 3. 查看状态
npx pm2 status

# 4. 查看日志
npx pm2 logs shenzhou-ai-website

# 5. 重启服务
npx pm2 restart shenzhou-ai-website

# 6. 停止服务
npx pm2 stop shenzhou-ai-website
```

### 设置 PM2 开机自启

```bash
# 保存当前进程列表
npx pm2 save

# 生成开机启动脚本
npx pm2 startup
# 按提示执行生成的命令
```

---

## 🌐 Nginx 反向代理配置（可选）

如果需要使用 Nginx 作为反向代理，创建配置文件：

```nginx
# /etc/nginx/sites-available/shenzhou-ai
server {
    listen 80;
    server_name your-domain.com;  # 替换为你的域名

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

启用配置：
```bash
# 创建软链接
sudo ln -s /etc/nginx/sites-available/shenzhou-ai /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx
```

---

## 🛠️ 常用命令速查

| 操作 | 命令 |
|------|------|
| 安装依赖 | `pnpm install` |
| 开发模式 | `pnpm run dev` |
| 构建生产 | `pnpm run build` |
| 启动生产 | `pnpm run start` |
| 类型检查 | `pnpm run ts-check` |
| 停止服务 | `Ctrl + C` 或 `pkill -f "next-server"` |

---

## 📊 监控和日志

### 查看日志

```bash
# 应用日志
tail -f /app/work/logs/bypass/app.log

# 开发日志
tail -f /app/work/logs/bypass/dev.log

# 控制台日志
tail -f /app/work/logs/bypass/console.log
```

### 查看进程状态

```bash
# 查看端口占用
ss -lptn 'sport = :5000'

# 查看进程
ps aux | grep next-server
```

---

## ⚠️ 常见问题

### 1. 端口被占用

```bash
# 查找占用端口的进程
lsof -i:5000

# 或者
netstat -tulpn | grep 5000

# 杀死进程
kill -9 [PID]
```

### 2. 构建失败

```bash
# 清理缓存
rm -rf .next node_modules

# 重新安装
pnpm install

# 重新构建
pnpm run build
```

### 3. 内存不足

```bash
# 增加 Node.js 内存限制
NODE_OPTIONS="--max-old-space-size=4096" pnpm run build
```

### 4. 权限问题

```bash
# 确保文件权限正确
chmod -R 755 .
```

---

## 🔄 更新部署流程

当代码更新后，重新部署：

```bash
# 1. 停止当前服务
pkill -f "next-server"

# 2. 拉取最新代码（如果有版本控制）
# git pull

# 3. 安装依赖（如果有新依赖）
pnpm install

# 4. 重新构建
pnpm run build

# 5. 启动服务
pnpm run start

# 6. 验证部署
curl -I http://localhost:5000
```

---

## 📞 技术支持

如果遇到部署问题，请提供以下信息：

1. 完整的错误信息
2. 执行的命令
3. 相关日志内容（最后 20 行）
4. 系统环境信息

**查看环境信息**：
```bash
node --version
pnpm --version
```

---

## ✅ 部署检查清单

部署完成后，请检查以下项目：

- [ ] 服务成功启动（端口 5000 监听）
- [ ] 首页可以正常访问（HTTP 200）
- [ ] 所有链接可以正常跳转
- [ ] 图片资源正常加载
- [ ] 导航栏下拉菜单正常工作
- [ ] 页面响应式布局正常
- [ ] 无控制台错误信息

---

## 🎯 下一步

部署成功后，你可以：

1. 配置域名解析
2. 设置 HTTPS 证书（推荐使用 Let's Encrypt）
3. 配置 CDN 加速
4. 设置性能监控
5. 配置自动备份

---

**祝你部署顺利！** 🎉
