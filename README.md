# AIGC Training Presentation - GitHub Pages 版本

这是一个专为 GitHub Pages 部署优化的 AIGC 培训演示网站。

## 🚀 快速部署到 GitHub Pages

### 1. 上传到 GitHub

1. 在 GitHub 上创建一个新的仓库，命名为 `aigc-presentation`
2. 将此文件夹中的所有文件上传到您的 GitHub 仓库

### 2. 修改配置

在上传之前，请修改 `package.json` 中的 `homepage` 字段：

```json
"homepage": "https://YOUR_USERNAME.github.io/aigc-presentation/"
```

将 `YOUR_USERNAME` 替换为您的 GitHub 用户名。

### 3. 部署步骤

在您的本地项目目录中运行以下命令：

```bash
# 安装依赖
pnpm install
# 或者使用 npm
npm install

# 构建项目
pnpm run build
# 或者使用 npm
npm run build

# 部署到 GitHub Pages
pnpm run deploy
# 或者使用 npm
npm run deploy
```

### 4. 启用 GitHub Pages

1. 在您的 GitHub 仓库中，进入 Settings 页面
2. 滚动到 Pages 部分
3. 在 Source 下拉菜单中选择 "Deploy from a branch"
4. 选择 `gh-pages` 分支
5. 点击 Save

### 5. 访问您的网站

几分钟后，您的网站将在以下地址可用：
`https://YOUR_USERNAME.github.io/aigc-presentation/`

## 📁 项目结构

- `src/` - React 源代码
- `dist/` - 构建后的静态文件（已包含）
- `vite.config.js` - 已配置为 GitHub Pages 部署
- `package.json` - 包含部署脚本

## ✨ 功能特色

- 🎨 高级审美的简约品牌研究风格
- 🎯 右侧导航点快速跳转
- 🎊 交互式庆祝按钮和礼花动画
- 📱 响应式设计，支持桌面和移动设备
- ⚡ 优化的加载性能

## 🔧 技术栈

- React 19
- Vite 6
- Tailwind CSS 4
- Framer Motion
- Lucide Icons

## 📝 内容结构

1. **章节一：什么是AIGC**
   - 1.1 写稿子不熬夜、画画不拿笔、写代码不敲键盘
   - 1.2 猜一下哪个真实自拍？
   - 1.3 看看腾讯内部落地成效

2. **章节二：常用的AI工具**
   - ChatGPT、DeepSeek、Manus、即梦AI 等

3. **章节三：提示词设计**
   - 3.1 提示词的基本结构
   - 3.2 不同角色下的场景与提示词
   - 3.3 珍藏多年的一些小技巧

4. **章节四：关于 AI Agent**
   - AI Agent 的应用场景和案例
   - 特色庆祝按钮和礼花动画

## 🆘 常见问题

**Q: 部署后页面显示空白？**
A: 请确保：
1. `package.json` 中的 `homepage` 字段正确设置
2. GitHub Pages 设置中选择了 `gh-pages` 分支
3. 等待几分钟让 GitHub Pages 生效

**Q: 如何更新网站内容？**
A: 修改源代码后，重新运行 `pnpm run build` 和 `pnpm run deploy`

---

**制作工具：** Manus AI  
**版本：** 2025.01

