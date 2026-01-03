---
title: Xiangshui Kaiyuan Hotel
description: BIM modeling and drawing production for a hot spring resort hotel project during the bidding and design development stages.
image: /images/KaiYuan/rendering1.png
category: Architecture
---

### 🧭 Project Background

The **Xiangshui Kaiyuan Hot Spring Hotel** is located next to Dongming Lake Park in Xiangshui County, Jiangsu Province. It is a high-end hotel complex integrating hot spring wellness, leisure tourism, and conference functions.

The project occupies a site area of approximately **46 mu**, with a total gross floor area of about **56,000 m²**, including **37,000 m² above ground** and **19,000 m² underground**.  
The main building rises **19 stories**, providing approximately **330 guest rooms**, with a total investment of around **470 million RMB**.

As a key landmark project within the Dongming Lake Ecotourism Zone, the hotel aims to become a regional destination for high-end hospitality.  
My primary responsibility in this project was the **BIM modeling and precise positioning of the complex-shaped curtain wall at the connection zones**.

---

### 🧱 Project Information

- **Project Name**: Xiangshui Kaiyuan Hot Spring Hotel
- **Project Type**: Hot Spring Resort Hotel / Conference Complex
- **Project Scale**:
  - Total GFA: 56,000 m²
  - Above Ground: 37,000 m²
  - Underground: 19,000 m²
  - Total Curtain Wall Area: approx. 83,800 m²
- **Location**: Dongming Lake Park, Xiangshui County, Jiangsu Province
- **Investment**: Approx. 470 million RMB
- **Building Height**: 19 stories, approx. 330 guest rooms
- **Project Stage**: Bidding / Design Development Phase

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/KaiYuan/rendering1.png" alt="rendering" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Architectural Rendering</p>
</div>

---

### 🧩 BIM Modeling & Design Workflow

This project utilized **Rhinoceros (Rhino)** for BIM modeling of the curved and irregular curtain wall components, primarily to support **on-site construction positioning and installation accuracy**.

#### 1. **Understanding Irregular Curtain Wall Drawings**

Based on architectural elevations, plans, and detailed curtain wall drawings, the overall geometry and direction of the irregular façade were analyzed to establish a clear modeling strategy.

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/KaiYuan/ele1.jpg" alt="elevation" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Elevation Drawing</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/KaiYuan/plane1.jpg" alt="plan" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Plan Drawing</p>
</div>

#### 2. **Concept and BIM Model Development**

CAD grids, plans, and elevations were imported into Rhino to construct the aluminum curtain wall model. My responsibility mainly covered **two irregular façade zones (Zone ① and Zone ②)**, including aluminum panels and supporting substructures.

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/KaiYuan/range.jpg" alt="scope" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Scope of Responsibility</p>
</div>

---

##### **Zone ①**

- Modeling of planar aluminum panels and supporting keel structures

<div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
  <div style="flex:1; text-align:center;">
    <img src="/images/KaiYuan/①_rhino_front.jpg" alt="rhino front" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">Rhino Model – Front View</p>
  </div>
  <div style="flex:1; text-align:center;">
    <img src="/images/KaiYuan/①_rhino_back.jpg" alt="rhino back" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">Rhino Model – Back View</p>
  </div>
</div>

- Parametric keel positioning for construction assistance (Grasshopper)

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/KaiYuan/grasshopper_positions.jpg" alt="grasshopper" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Grasshopper: Keel Position Indexing & Coordinate Export</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/KaiYuan/excel.jpg" alt="excel" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Sample of Exported Coordinate Data (Excel)</p>
</div>

---

##### **Zone ②**

- Collaboration with the steel structure team to obtain line models
- Refinement of the steel structure in Rhino based on standard member dimensions

<div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
  <div style="flex:1; text-align:center;">
    <img src="/images/KaiYuan/structure.jpg" alt="structure line model" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">Steel Structure Line Model</p>
  </div>
  <div style="flex:1; text-align:center;">
    <img src="/images/KaiYuan/②_structure_model.jpg" alt="structure model" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">Refined Steel Structure in Rhino</p>
  </div>
</div>

- Generation of aluminum curtain wall finish surface by offsetting **400 mm** outward from the most protruding steel structure points

<div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
  <div style="flex:1; text-align:center;">
    <img src="/images/KaiYuan/②_rhino_front.jpg" alt="front" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">Irregular Aluminum Curtain Wall – Front</p>
  </div>
  <div style="flex:1; text-align:center;">
    <img src="/images/KaiYuan/②_rhino_back.jpg" alt="back" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">Irregular Aluminum Curtain Wall – Back</p>
  </div>
</div>

- Numbering of bolt-sphere nodes in the irregular steel structure

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/KaiYuan/②_grasshopper_ballnumber.jpg" alt="numbering" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Bolt-Sphere Node Numbering</p>
</div>

- Division of curtain wall panel grid lines into five equal segments to generate positioning points

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/KaiYuan/②_grasshopper_positions.jpg" alt="positions" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Example: Positioning Points for Bolt-Sphere T-09 Area</p>
</div>

- Export of positioning coordinates relative to bolt-sphere centers and generation of CAD positioning drawings

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/KaiYuan/②_cad_ballnumber.jpg" alt="cad numbering" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Example: CAD Drawing with Bolt-Sphere Numbering</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/KaiYuan/②_cad_position.jpg" alt="cad positions" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Example: Positioning Coordinate Table</p>
</div>

---

#### 3. **Deliverables**

- **Zone ①**

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/KaiYuan/①_cad_number.jpg" alt="construction drawing" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Construction Positioning Drawing</p>
</div>

<div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
  <div style="flex:6.95; text-align:center;">
    <img src="/images/KaiYuan/①_cad_position1.jpg" alt="table 1" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">Coordinate Table 1</p>
  </div>
  <div style="flex:3.05; text-align:center;">
    <img src="/images/KaiYuan/①_cad_position2.jpg" alt="table 2" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">Coordinate Table 2</p>
  </div>
</div>

- **Zone ②**

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/KaiYuan/②_cad_B-P.jpg" alt="B-P area" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Construction Positioning Drawing – Bolt-Sphere Area B–P</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/KaiYuan/②_cad_Q-U.jpg" alt="Q-U area" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Construction Positioning Drawing – Bolt-Sphere Area Q–U</p>
</div>

---

### 🔮 Summary & Reflection

- **Scope of Responsibility**:  
  Responsible for BIM modeling and precise positioning of **irregular curtain wall connection zones**, including façade panelization and drawing output.

- **Key Challenges**:  
  High complexity of irregular curtain wall nodes, dense structural connections, and strict requirements for geometric accuracy to ensure constructability and aesthetic quality.

- **Solutions**:  
  Accurate geometric modeling using Rhino, combined with **parametric workflows in Grasshopper** to efficiently generate reliable positioning data for construction use.

- **Takeaways**:  
  This project strengthened my experience in parametric modeling of complex curtain wall systems and enhanced my understanding of spatial coordination between architectural form, structure, and construction logic—providing a solid foundation for future large-scale hotel and public building BIM collaboration.
