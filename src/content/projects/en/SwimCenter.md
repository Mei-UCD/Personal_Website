---
title: Swimming Center
description: The project employs high-precision BIM modeling and parametric design, generating batch construction drawings through Rhino and Grasshopper.
image: /images/SwimCenter/rendering.jpg
category: Architecture
---

### 🧭 Project Background

This project focuses on the BIM model construction and construction support for the **Swimming Center** within the “Three Halls, One Arena, One Park” of the South City Olympic Sports Center. The aim is to use digital tools to achieve high-speed and high-precision design validation and construction support. **Rhinoceros** is used for high-precision modeling, while **Grasshopper** assists in generating batch components and construction drawings.

---

### 🧱 Project Information

- **Location**: Core area of a city
- **Function**: Sports center
- **Design Goal**: Create a high-precision BIM model, detect design clashes, and assist construction with parametric-generated fabrication drawings

<div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/SwimCenter/rendering.jpg" alt="render" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px; margin-bottom:0 !important;">Rendering</p>
</div>

---

### 🧩 BIM Modeling Process

1. **Define Scope and Modeling Goals**
   - Based on architectural design, focus on the swimming center: exterior aluminum panels, glass doors and windows, curtain walls, and supporting steel structure
   - Determine the data scope for clash detection and fabrication: clashes include curtain walls and civil structures (beams and columns), fabrication includes steel frame dimensions and positioning

   <div style="display:flex; flex-direction:column; align-items:center;">
       <img src="/images/SwimCenter/ele1.jpg" alt="cad" style="width:90%;">
       <p style="font-size:14px; color:#666; margin-top:5px;">Elevation 1</p>
   </div>
   <div style="display:flex; flex-direction:column; align-items:center;">
       <img src="/images/SwimCenter/ele2.jpg" alt="cad" style="width:90%;">
       <p style="font-size:14px; color:#666; margin-top:5px;">Elevation 2</p>
   </div>

2. **High-Precision Modeling in Rhino**
   - Build curtain walls, steel frames, and main spatial volumes in Rhino
   - Control dimensions precisely to achieve construction-level model accuracy

   <div style="display:flex; flex-direction:column; align-items:center;">
       <img src="/images/SwimCenter/rhino1.jpg" alt="rhino" style="width:90%;">
       <p style="font-size:14px; color:#666; margin-top:5px;">Imported CAD grid and section lines</p>
   </div>
   <div style="display:flex; flex-direction:column; align-items:center;">
       <img src="/images/SwimCenter/rhino2.jpg" alt="rhino" style="width:90%;">
       <p style="font-size:14px; color:#666; margin-top:5px;">Exterior façade model</p>
   </div>
   <div style="display:flex; flex-direction:column; align-items:center;">
       <img src="/images/SwimCenter/rhino3.jpg" alt="rhino" style="width:90%;">
       <p style="font-size:14px; color:#666; margin-top:5px;">Civil structure and curtain wall steel frame model</p>
   </div>

3. **Parametric Modeling with Grasshopper**
   - Use Grasshopper to generate repetitive steel frame components in batches
   - Quickly modify designs through parametric logic to adapt to dimension changes
   <div style="display:flex; flex-direction:column; align-items:center;">
       <img src="/images/SwimCenter/rhino_gh1.gif" alt="grasshopper" style="width:90%;">
       <p style="font-size:14px; color:#666; margin-top:5px;">Vertical steel frame generation</p>
   </div>
   <div style="display:flex; flex-direction:column; align-items:center;">
       <img src="/images/SwimCenter/rhino_gh2.png" alt="grasshopper" style="width:90%;">
       <p style="font-size:14px; color:#666; margin-top:5px;">Curved frame generation</p>
   </div>

4. **Construction Data and Fabrication Drawings**
   - Export parametric-generated steel components as CAD fabrication drawings
   - Include node and numbering information to ensure construction traceability
   <div style="display:flex; flex-direction:column; align-items:center;">
     <img src="/images/SwimCenter/rhino_gh3.gif" alt="grasshopper" style="width:90%;">
     <p style="font-size:14px; color:#666; margin-top:5px;">Steel frame fabrication drawing generation</p>
   </div>

---

### 📊 Project Outcomes

- Completed high-precision BIM modeling for the South City Olympic Sports Center Swimming Center (aluminum curtain walls, glass curtain walls, steel frames, embedded brackets, roof purlins layout, and civil structures)

  <div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
    <div style="flex:1; text-align:center;">
      <img src="/images/SwimCenter/rhino4.jpg" alt="rhino" style="width:100%; border-radius:8px;">
      <p style="font-size:14px; color:#666; margin-top:5px;">Curtain wall elevation effect 1</p>
    </div>
    <div style="flex:1; text-align:center;">
      <img src="/images/SwimCenter/rhino5.jpg" alt="rhino" style="width:100%; border-radius:8px;">
      <p style="font-size:14px; color:#666; margin-top:5px;">Curtain wall elevation effect 2</p>
    </div>
  </div>

  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/SwimCenter/rhino_steel.gif" alt="rhino" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px;">Steel frames & embedded brackets & civil structures</p>
  </div>

  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/SwimCenter/rhino_roof.gif" alt="rhino" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px;">Roof purlins</p>
  </div>

- Successfully implemented standardized export of **steel frame construction drawings + fabrication data**

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/SwimCenter/cad_pd.gif" alt="cad" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Exported steel frame construction drawings</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/SwimCenter/cad_area.jpg" alt="cad" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Steel frame plan area diagram</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/SwimCenter/cad_steel_number.jpg" alt="cad" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Example Area A: Steel frame elevation numbering</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/SwimCenter/cad_steel_pd.jpg" alt="cad" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Example Area A: Steel frame quantity diagram</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/SwimCenter/cad_steel_pd_exp.jpg" alt="cad" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Example: Fabrication drawings for A-09 & A-10 steel frames</p>
</div>

- Effectively detected potential design clashes, avoiding construction rework

<div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
  <div style="flex:1; text-align:center;">
    <img src="/images/SwimCenter/rhino_clash1.jpg" alt="clash" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">Exterior view: curtain wall vs civil structure clash</p>
  </div>
  <div style="flex:1; text-align:center;">
    <img src="/images/SwimCenter/rhino_clash2.jpg" alt="clash" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">Interior view: curtain wall vs civil structure clash</p>
  </div>
</div>

- Saved approximately **50%-60%** of drafting and data processing time

---

### 🔮 Summary & Reflection

- **Advantages**: The Rhino + Grasshopper combination performs exceptionally well in large-scale sports buildings, quickly handling complex structures and batch components
- **Limitations**: Grasshopper’s computation speed is still limited when handling very large geometries, requiring regional exports to improve efficiency
