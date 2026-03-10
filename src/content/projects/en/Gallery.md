---
title: Photo Gallery
description: An online gallery website for showcasing personal photography
image: /images/Gallery/rendering.png
category: FullStack
---

### 🧭 Project Background

**Live Demo**: [Visit Website](https://gallery.neuimay.com/)

Over time, I accumulated a large number of photos on my phone and camera. Eventually the storage started getting full and the system kept reminding me about it 😅. It also became difficult to organize and showcase these photos in a structured way.

So I decided to build this **online photo gallery (Gallery)** to store and display my photography in one place, while providing a modern gallery-style browsing experience.

At the same time, this project also served as an opportunity for me to explore and practice **frontend development, backend data processing, and cloud storage integration** — a win-win situation 😺.

The current version of the website is still an early stage, and I plan to continue improving and iterating on it over time.

---

### ✨ Features

- 📷 **Photo Gallery Display**  
  Browse photography works in a gallery layout with support for high-resolution images.

- 🔍 **Photo Information View**  
  Click on an image to view detailed shooting parameters and descriptions.

- ⚡ **Optimized Image Loading**  
  Uses CDN and lazy loading to improve image loading performance.

- 🗺 **Photo Location Map**  
  Display photo locations on a map to visually explore where the photos were taken.

- 🌙 **Dark / Light Theme Toggle**

---

### 🧱 Tech Stack

**Frontend**

- React
- TypeScript
- Vite

**Backend / Data**

- Node.js
- JSON data generation
- Cloudflare R2 (Object Storage)

**Deployment**

- Vercel

---

### 🧩 Project Structure

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

### 📌 Future Improvements

- Photo tagging system
- Add photo metadata (shooting time, camera, lens, EXIF information)
- More features coming soon...
