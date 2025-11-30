---
title: AI 文本摘要工具
description: 基于Flask和OpenAI API的文本摘要工具，支持长文本与文件上传，实现快速智能摘要
image: /images/TextSummarizer/AITexter.jpeg
category: FullStack
---

### 🧭项目背景

**在线 Demo**： [访问网站](https://textsummarizer-y1lk.onrender.com)

该项目是一个 **AI 驱动的文本摘要应用**，旨在帮助用户快速从长篇文本中提取核心信息。系统支持**手动文本输入**和**文件上传（PDF、DOCX、TXT）**，适用于文章、研究论文、报告等场景，目前只支持英文。

后端基于 **Flask 框架** 开发，集成 **OpenAI GPT 模型** 实现智能摘要，前端界面简洁、交互流畅。

---

### 🧱技术栈

- **后端**：Flask (Python)
- **前端**：HTML, CSS, JavaScript
- **AI 集成**：OpenAI GPT-3.5-turbo API
- **文件处理**：PyPDF2（PDF 解析）、python-docx（Word 文档解析）
- **环境管理**：dotenv
- **部署**：Render (免费计划，会休眠)

---

### 🧩主要功能模块

| 功能模块     | 说明                                           |
| ------------ | ---------------------------------------------- |
| 文本输入     | 支持粘贴长文本（最大 15,000 字符）进行摘要     |
| 文件上传     | 支持 **PDF、DOCX、TXT** 文件上传并自动提取文本 |
| AI 智能摘要  | 调用 OpenAI GPT 模型生成简洁、连贯的摘要       |
| 实时字数统计 | 输入文本和摘要结果的字数实时显示               |
| 响应式界面   | 采用自适应设计，兼容桌面端和移动端             |

---

### 🧑‍💻具体实现

- 使用 **Flask** 搭建后端 API：
  - `/uploads` → 处理文件上传并提取文本
  - `/summarize` → 调用 OpenAI API 生成摘要
  - `/clear-file` → 清理已上传的临时文件
- 集成 **OpenAI GPT-3.5-turbo** 实现摘要生成
- 前端通过 **JavaScript** 实现：
  - 字数统计
  - 文件上传交互
  - 清空输入区功能
- 自定义 **CSS 样式** 实现简洁美观的 UI

---

### 🖼️项目界面一览

<div style="text-align:center; margin: 1em 0;">
  <img src="/images/TextSummarizer/AITexter.jpeg" alt="home" style="max-width:90%; border-radius:12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</div>

---

### 📈可扩展方向

- 支持**多语言文本摘要**
- 增加**摘要下载功能**
