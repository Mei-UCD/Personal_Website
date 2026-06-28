---
title: Image to Text
description: An online **Image-to-Text (OCR)** application built with **Vue + Flask + EasyOCR**, supporting **Japanese and English**.
image: /images/ImageToText/ImgToText1.jpeg
category: FullStack
---

### 🧭 Project Background

**Online Demo**: [Visit Website](https://image-to-text-frontend-x600.onrender.com)

Traditional OCR tools focus solely on text extraction and often **ignore the original layout and spatial structure** of the image, resulting in outputs that are difficult to read—especially for tables, receipts, and poster-like images.

This project goes beyond basic OCR by leveraging **bounding box coordinates** returned from the OCR engine to **reconstruct text layout and reading order**, and visualizes the restored text positions directly on the frontend to achieve a result that closely resembles the original image.

---

### 🧱 Tech Stack

- **Frontend**: Vue.js
- **Backend**: Python, Flask
- **OCR Engine**: EasyOCR
- **Deployment**: Render + Google Cloud Run
- **Core Logic**: OCR + Coordinate Extraction + Layout Reconstruction

---

### 🧩 Key Features

| Module                | Description                                                        |
| --------------------- | ------------------------------------------------------------------ |
| Image Upload          | Supports single or multiple image uploads with thumbnail previews  |
| OCR Recognition       | Uses EasyOCR to recognize text, supporting English and Japanese    |
| Layout Reconstruction | Restores text positions and reading order based on OCR coordinates |
| Visual Preview        | Displays recognized text with bounding boxes overlaid on the image |
| One-click Copy        | Copies reconstructed text to the clipboard                         |
| Text Download         | Download OCR results as `.txt` files (single or batch)             |

---

### 🧑‍💻 Implementation Details

#### **1. Frontend (Vue)**

- Built with **Vue** using a component-based architecture.
- Core components:
  - `ImageUploader.vue`: Handles image upload, preview, and API requests.
  - `TextResult.vue`: Displays OCR results and provides copy/download/preview features.
- **Key interactions**:
  - Click to preview enlarged images.
  - Tooltip hints on hover for action buttons (Copy, Download).
- **Styling**:
  - Responsive layout using **Flexbox**, optimized for both desktop and mobile devices.

#### **2. Backend (Flask + EasyOCR)**

- Flask API endpoint `/ocr`:
  - Accepts uploaded images (supports multiple files).
  - Uses **EasyOCR** to extract text blocks, bounding box coordinates, and confidence scores.
  - Returns structured JSON responses to the frontend.
- **Privacy protection**:
  - Uploaded images are automatically deleted after processing.

#### **3. Text Layout Reconstruction**

- OCR results include **bounding box coordinates (x, y)** for each text block.
- Layout reconstruction logic is implemented on the frontend:
  - Group text blocks into lines based on Y-axis distance thresholds.
  - Sort text blocks within each line by X-axis position.
  - Concatenate them into readable text while preserving natural reading order.
  - Use `absolute positioning` to visually restore the original layout on the page.

#### **4. Interactive Features**

- **Copy**:
  - Copies reconstructed text directly to the clipboard.
- **Download**:
  - Single-file download as `.txt`.
  - Batch download for multiple images.

#### **5. Deployment & Containerization**

- **Dockerfile**:
  - Based on `python:3.10-slim`.
  - Installs required system libraries and Python dependencies (Flask, EasyOCR).
- Frontend deployed on **Render**.
- Backend deployed on **Google Cloud Run**.

---

### 🖼️ UI Preview

<div style="text-align:center; margin: 1em 0;">
  <img src="/images/ImageToText/ImgToText1.jpeg" alt="home" style="max-width:90%; border-radius:12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</div>
<div style="text-align:center; margin: 1em 0;">
  <img src="/images/ImageToText/ImgToText2.jpeg" alt="uploading" style="max-width:90%; border-radius:12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</div>
<div style="text-align:center; margin: 1em 0;">
  <img src="/images/ImageToText/ImgToText3.jpeg" alt="result" style="max-width:90%; border-radius:12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</div>

---

### 📈 Future Extensions

- **Multi-language Support**  
  Extend OCR support to additional languages such as Korean, German, and French to meet international use cases.

- **User Feedback & Rating System**  
  Integrate a database to collect user ratings and feedback for continuous improvement.
