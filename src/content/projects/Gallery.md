---
title: 照片展示廊
description: 一个用于展示个人摄影作品的在线画廊网站
image: /images/Gallery/rendering.png
category: FullStack
---

### 🧭项目背景

**在线 Demo**： [访问网站](https://gallery.neuimay.com/)

平时会拍很多照片在手机或者相机里，时间长了内存爆满，天天弹出来提醒我内存不够😅，也很难系统的整理和展示。因此着手开发了这个 **在线照片展示廊 (Gallery)**，用于集中展示个人摄影作品，并提供类似现代图片画廊的浏览体验。开发这个项目的同时，我也顺便学习一下相关的 **前端开发、后端数据处理以及云存储集成**，一举两得😺。

目前网站版本还只是最初的阶段，后续会慢慢更新和迭代。

---

### ✨功能特点

- 📷 **图片画廊展示**  
  支持高分辨率图片浏览
- 🔍 **图片信息查看**  
  点击图片可以查看详细的拍摄参数与描述。
- ⚡ **优化的图片加载**  
  使用 CDN 和懒加载优化图片加载速度。
- 🗺 **拍摄地点地图展示**  
  通过地图展示照片的拍摄地点，可以直观查看不同作品的地理分布。
- 🌙 **深色 / 浅色主题切换**

---

### 🧱技术栈

**Frontend**

- React
- TypeScript
- Vite

**Backend / Data**

- Node.js
- JSON 数据构建
- Cloudflare R2（对象存储）

**Deployment**

- Vercel

---

### 🧩项目结构

```
gallery/
├── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # Route-level pages that compose components into full views
│   ├── lib/          # Data loading logic
│   ├── types/        # TypeScript type definitions and shared interfaces
│   ├── styles/       # Global styles, theme definitions, and layout-related styling

```

---

### 📌后续迭代

- 图片标签系统
- 添加图片元数据：拍摄时间、设备、EXIF 信息等
- ...
