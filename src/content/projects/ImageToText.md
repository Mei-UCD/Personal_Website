---
title: 图像转文字平台
description: 一个在线**图片转文字 (OCR)** 应用，基于**Vue + Flask + EasyOCR**，支持**日语、英语**
image: /images/ImageToText/ImgToText1.jpeg
category: FullStack
---

### 🧭项目背景

**在线 Demo**： [访问网站](https://image-to-text-frontend-x600.onrender.com)

传统 OCR 工具仅提取文字，**忽略原始图片中的排版布局**，导致输出结果不易阅读，其在表格、票据、广告图等场景中问题更明显。本项目不仅完成文字识别，还通过坐标信息**恢复文本的空间位置和阅读顺序**，并在前端实时呈现文字位置，以实现更接近原图的布局还原。

---

### 🧱技术栈

- **前端**：Vue.js
- **后端**：Python, Flask
- **OCR 引擎**：EasyOCR
- **部署**：Render + Google Cloud Run
- **核心逻辑**：OCR + 坐标提取 + 排版重建

---

### 🧩主要功能模块

| 功能模块     | 说明                                                            |
| ------------ | --------------------------------------------------------------- |
| 图片上传     | 支持单张或多张图片上传，并显示缩略图预览                        |
| OCR识别      | 调用 EasyOCR 识别图片中的文字，支持英、日文识别                 |
| 文字布局还原 | 根据 OCR 返回的坐标信息，还原文字在图片中的位置并按阅读顺序重排 |
| 可视化预览   | 文本框里标注识别出的文字                                        |
| 一键复制     | 复制当前图片还原后的完整文字                                    |
| 文本下载     | 单个或批量下载识别结果为 `.txt` 文件                            |

---

### 🧑‍💻具体实现

#### **1. 前端实现（Vue）**

- 使用 **Vue** 构建组件化结构，主要组件：
  - `ImageUploader.vue`：负责图片上传、预览及发送请求。
  - `TextResult.vue`：显示识别结果，提供复制、下载、预览等功能。
- **核心交互**：
  - 点击图片预览大图。
  - 按钮悬浮显示提示（Copy、Download）。
- **样式设计**：
  - 使用 **Flexbox** 实现响应式布局，保证 PC 和移动端体验。

#### **2. 后端实现（Flask + EasyOCR）**

- 使用 Flask 提供 `/ocr` API：
  - 接收上传图片（支持多张）。
  - 调用 **EasyOCR** 识别图片文本，提取文字块坐标与置信度。
  - 返回 JSON 格式结果给前端。
- 隐私保护：处理后自动删除上传文件。

#### **3. 文字布局还原**

- 识别结果中包含 **文字块的坐标 (x,y)**。
- 在前端实现布局重组算法：
  - 按 Y 坐标分行（设定行距阈值）。
  - 每行按 X 坐标排序。
  - 拼接为可阅读文本，并在页面使用 `absolute positioning` 实现视觉还原。

#### **4. 交互功能**

- **复制功能**：将重组后的文本复制到剪贴板。
- **下载功能**：
  - 单文件下载：以 `.txt` 文件保存。
  - 批量下载：遍历所有识别结果并逐个下载。

#### **5. 部署与容器化**

- 编写 **Dockerfile**：
  - 基于 `python:3.10-slim`。
  - 安装系统依赖与 Python 依赖（Flask、EasyOCR）。
- 前端部署至 **Render**
- 后端部署至 **Google Cloud Run**

---

### 🖼️项目界面一览

<!-- <div class="masonry">
  <img src="/images/ImgToText1.jpeg" alt="首页">
  <img src="/images/ImgToText2.jpeg" alt="上传中">
  <img src="/images/ImgToText3.jpeg" alt="结果">
</div> -->
<div style="text-align:center; margin: 1em 0;">
  <img src="/images/ImageToText/ImgToText1.jpeg" alt="home" style="max-width:90%; border-radius:12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</div>
<div style="text-align:center; margin: 1em 0;">
  <img src="/images/ImageToText/ImgToText2.jpeg" alt="home" style="max-width:90%; border-radius:12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</div>
<div style="text-align:center; margin: 1em 0;">
  <img src="/images/ImageToText/ImgToText3.jpeg" alt="home" style="max-width:90%; border-radius:12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</div>

---

### 📈可扩展方向

- **多语言支持扩展**  
  除中英文和日文外，增加对更多语言（如韩文、德文、法文）的 OCR 支持，满足国际化需求。
- **用户评分扩展**
  增加和数据库连接，收集用户评分。
