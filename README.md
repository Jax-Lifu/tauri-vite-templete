# React + TypeScript + Vite + Shadcn + TailwindCSS + Tauri

## 项目简介
这是一个使用 React、TypeScript、Vite、Shadcn、TailwindCSS 和 Tauri 构建的桌面应用程序。该项目旨在提供一个现代化的用户界面和良好的用户体验。

## 技术栈
- **React**: 用于构建用户界面
- **TypeScript**: 增强 JavaScript 的类型系统
- **Vite**: 快速的开发构建工具
- **Shadcn**: UI 组件库
- **TailwindCSS**: 实用优先的 CSS 框架
- **Tauri**: 用于构建跨平台桌面应用的框架

## 前端配置
1. 配置 Prettier 
   ```bash
   pnpm add --save-dev --save-exact prettier
   ```
2. 设置 Shadcn 和 TailwindCSS，参考 [shadcn-vite](https://ui.shadcn.com/docs/installation/vite)
   ```bash
   pnpm add tailwindcss @tailwindcss/vite
   pnpm add -D @types/node
   pnpm dlx shadcn@latest init
   pnpm dlx shadcn@latest add input textarea select checkbox radio-group switch slider label form button dialog alert-dialog tooltip popover hover-card sonner progress skeleton tabs accordion navigation-menu dropdown-menu scroll-area separator card avatar badge table calendar command 
   ```

## 安装步骤
1. 克隆项目
   ```bash
   git clone <your-repo-url>
   cd <your-project-directory>
   ```
2. 安装依赖
   ```bash
   pnpm install
   ```

## 使用
- 启动开发服务器
  ```bash
  pnpm dev
  ```
- 打包应用
  ```bash
  pnpm build
  ```


## 许可证
该项目采用 MIT 许可证。有关详细信息，请参见 [LICENSE](LICENSE) 文件。
