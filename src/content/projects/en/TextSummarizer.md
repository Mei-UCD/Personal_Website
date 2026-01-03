---
title: AI Text Summarizer
description: A text summarization tool based on Flask and OpenAI API, supporting long texts and file uploads for fast and intelligent summaries.
image: /images/TextSummarizer/AITexter.jpeg
category: FullStack
---

### 🧭 Project Background

**Online Demo**: [Visit Site](https://textsummarizer-y1lk.onrender.com)

This project is an **AI-powered text summarization application** designed to help users quickly extract key information from long texts. The system supports **manual text input** and **file uploads (PDF, DOCX, TXT)**, suitable for articles, research papers, reports, etc. Currently, only English is supported.

The backend is developed with the **Flask framework**, integrated with **OpenAI GPT models** for intelligent summarization, while the frontend offers a clean and smooth interactive experience.

---

### 🧱 Technology Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **AI Integration**: OpenAI GPT-3.5-turbo API
- **File Handling**: PyPDF2 (PDF parsing), python-docx (Word document parsing)
- **Environment Management**: dotenv
- **Deployment**: Render (free plan, may sleep)

---

### 🧩 Main Functional Modules

| Module               | Description                                                            |
| -------------------- | ---------------------------------------------------------------------- |
| Text Input           | Supports pasting long text (up to 15,000 characters) for summarization |
| File Upload          | Supports **PDF, DOCX, TXT** file uploads and automatic text extraction |
| AI Summarization     | Calls OpenAI GPT model to generate concise and coherent summaries      |
| Real-time Word Count | Displays word count of input text and summary in real time             |
| Responsive UI        | Adaptive design, compatible with desktop and mobile devices            |

---

### 🧑‍💻 Implementation Details

- **Backend API with Flask**:
  - `/uploads` → Handles file uploads and extracts text
  - `/summarize` → Calls OpenAI API to generate summaries
  - `/clear-file` → Clears uploaded temporary files
- Integrated **OpenAI GPT-3.5-turbo** for summary generation
- Frontend implemented using **JavaScript**:
  - Word count tracking
  - File upload interactions
  - Clear input area functionality
- Custom **CSS styling** for a clean and visually appealing UI

---

### 🖼️ Project Interface Preview

<div style="text-align:center; margin: 1em 0;">
  <img src="/images/TextSummarizer/AITexter.jpeg" alt="home" style="max-width:90%; border-radius:12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</div>

---

### 📈 Potential Extensions

- Support for **multilingual text summarization**
- Add **summary download functionality**
