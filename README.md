# FunnyPics - 搞笑图片创建与分享平台（全英文站，适配移动端和PC端）

一个使用Next.js、Supabase和Creem构建的现代化网页应用，用于浏览、创建和分享搞笑图片。

![FunnyPics Banner](public/og-image.jpg)

## 🌟 项目概述

FunnyPics提供四个核心功能模块：

1. **图库浏览** - 探索和发现各种搞笑图片模板
2. **图片编辑器** - 使用文本和视觉元素编辑现有模板
3. **AI生成器** - 基于文本提示使用AI生成自定义搞笑图片
4. **订阅系统** - 提供免费和付费会员方案，解锁更多功能

## ✨ 主要特性

### 图库浏览
- 丰富的搞笑图片模板集合
- 过滤和搜索功能
- 响应式布局，支持各种设备

### 图片编辑器
- 可自定义的文本添加功能（字体、颜色、位置）
- 从流行图像库中选择模板
- 上传自己的图像创建搞笑图片

### AI生成器
- 文本到图像生成功能
- 幽默程度和风格自定义选项
- 每日生成次数限制（基于订阅计划）

### 订阅系统
- **免费方案**：每日2次AI生成、基础编辑工具、模板库访问、带明显水印下载
- **Pro方案** ($20/月)：每日25次AI生成（每月300次）、高级编辑工具、可选水印移除、HD图像质量
- **Unlimited方案**：即将推出，将提供更高的生成限制和额外高级功能

## 🛠️ 技术栈

- **前端框架**：Next.js 15.3（App Router）
- **UI库**：React 19
- **样式**：Tailwind CSS
- **组件库**：Shadcn UI（基于Radix UI原语）
- **状态管理**：React Hooks
- **认证**：Supabase Auth
- **数据库**：Supabase PostgreSQL
- **支付系统**：Creem.io（全球支付解决方案）
- **主题**：支持亮/暗模式
- **部署**：Vercel

## 📋 项目结构

```
funnypics/
├── app/                      # Next.js应用页面
│   ├── (auth-pages)/         # 认证相关页面
│   ├── api/                  # API路由
│   ├── dashboard/            # 用户仪表板
│   ├── editor/               # 图片编辑器
│   ├── gallery/              # 图库浏览
│   ├── generator/            # AI生成器
│   ├── pricing/              # 订阅价格页面
│   ├── layout.tsx            # 根布局组件
│   └── page.tsx              # 首页
├── components/               # React组件
│   ├── ui/                   # UI组件
│   ├── editor/               # 编辑器相关组件
│   ├── gallery/              # 图库相关组件
│   ├── home/                 # 首页相关组件
│   ├── layout/               # 布局组件
│   ├── theme/                # 主题相关组件
│   └── providers/            # 上下文提供者
├── config/                   # 配置文件
├── hooks/                    # 自定义React Hooks
├── lib/                      # 工具函数和辅助库
├── public/                   # 静态资源
├── supabase/                 # Supabase配置和迁移
├── types/                    # TypeScript类型定义
└── utils/                    # 实用工具函数
    └── supabase/             # Supabase工具
    └── creem/                # Creem支付工具
```

## 🚀 安装指南

### 前提条件

- Node.js 18+
- npm或yarn
- Supabase账户
- Creem.io账户

### 安装步骤

1. **克隆仓库**

```bash
git clone https://github.com/yourusername/funnypics.git
cd funnypics
```

2. **安装依赖**

```bash
npm install
# 或
yarn install
```

3. **环境变量配置**

复制`.env.example`文件为`.env.local`，并填写相应的环境变量：

```bash
cp .env.example .env.local
```

配置以下环境变量：

```env
# Supabase配置
NEXT_PUBLIC_SUPABASE_URL=你的Supabase项目URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的Supabase匿名密钥
SUPABASE_SERVICE_ROLE_KEY=你的Supabase服务密钥

# Creem支付配置
CREEM_WEBHOOK_SECRET=你的Creem Webhook密钥
CREEM_API_KEY=你的Creem API密钥
CREEM_API_URL=https://api.creem.io/v1

# 网站URL配置
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# 支付成功后的重定向URL
CREEM_SUCCESS_URL=http://localhost:3000/dashboard
```

4. **Supabase设置**

- 创建Supabase项目
- 在SQL编辑器中运行`supabase/migrations`目录下的SQL脚本

5. **Creem.io设置**

- 注册Creem.io账户
- 创建订阅产品，获取产品ID
- 设置Webhook（用于接收支付通知）

6. **启动开发服务器**

```bash
npm run dev
# 或
yarn dev
```

访问 http://localhost:3000 查看应用。

## 📱 使用指南

### 浏览图库

1. 导航至"图库"页面
2. 使用过滤器按类别浏览
3. 点击图片查看详情或选择编辑

### 使用编辑器

1. 从图库选择模板或上传自己的图片
2. 添加文本、调整颜色和位置
3. 下载或分享编辑后的图片

### 使用AI生成器

1. 导航至"生成器"页面
2. 输入描述文本，调整幽默程度
3. 点击"生成"创建图片
4. 下载或分享生成的图片

### 订阅管理

1. 访问"价格"页面查看订阅选项
2. 选择适合的计划并完成支付
3. 在用户仪表板查看订阅状态和剩余积分

## 🔐 认证与支付

FunnyPics使用Supabase提供安全的用户认证，支持：
- 电子邮件/密码认证
- 社交登录（Google）

支付系统通过Creem.io处理，提供：
- 安全的信用卡处理
- 订阅管理
- 全球支付支持

## 🧩 扩展与定制

### 添加新模板

通过管理员界面上传新的图片模板到图库中。

### 自定义UI主题

修改`tailwind.config.ts`文件中的颜色和主题设置。

### 添加新生成风格

在生成器页面中扩展AI生成选项。

## 📜 许可证

本项目采用MIT许可证。详情请查看LICENSE文件。

## 👥 贡献

欢迎贡献！请遵循以下步骤：
1. Fork仓库
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request

## 📞 联系方式

有问题或建议？请通过以下方式联系我们：
- 电子邮件：qqarlen2025@gmail.com
- 支持页面：/help
- 联系页面：/contact
