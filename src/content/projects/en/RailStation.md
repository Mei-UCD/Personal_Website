---
title: Yancheng Railway Station
description: Curtain wall detailing and panel fabrication layout for the Coach Building and Bus Terminal at Yancheng High-Speed Railway Station West Plaza.
image: /images/RailStation/rendering1.jpg
category: Architecture
---

### 🧭 Project Background

The Coach Building and Bus Terminal at **Yancheng High-Speed Railway Station West Plaza** are located in **Tinghu District, Yancheng City, Jiangsu Province**.  
The site is bounded by **Hebin Road** to the east, **Century Avenue** to the south, **Dongjin Road** to the north, and **Fangong Road** to the west, forming a key part of Yancheng's integrated transportation hub.

The project integrates long-distance passenger transport, urban bus facilities, and commercial service spaces, aiming to create a comprehensive transportation complex that combines transit, waiting, and commercial functions.

In this project, I was mainly responsible for the **curtain wall panelization and fabrication layout** of both the **Coach Building** and the **Bus Terminal**.  
The curtain wall systems primarily include **glass curtain walls**, **aluminum panel curtain walls**, and **hybrid systems**, with geometry modeling and panel layout implemented using **Rhino + Grasshopper**.

---

### 🧱 Project Information

- **Project Name**: Curtain Wall Works for the Coach Building & Bus Terminal, Yancheng High-Speed Railway Station West Plaza
- **Project Type**: Transportation hub support buildings integrating passenger transport, bus services, and commercial functions
- **Building Area**: Approximately **48,298 ㎡**
- **Location**: Northwest corner of the intersection of Hebin Road and Century Avenue, Tinghu District, Yancheng, Jiangsu Province
- **Scope of Work**: Curtain wall detailing, modeling, and panel fabrication layout

<div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/RailStation/rendering2.jpg" alt="Rendering" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px;">Architectural rendering</p>
</div>

---

### 🧩 Modeling & Panelization Workflow

#### 1. **Curtain Wall Modeling Preparation**

- Based on construction drawings and façade grid layouts, the curtain wall modeling scope for the Coach Building and Bus Terminal was identified (magenta areas in the plans, covering the bus waiting hall and coach waiting hall).
- Imported CAD grids and finished façade surfaces into Rhino.

<div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
  <div style="flex:1; text-align:center;">
    <img src="/images/RailStation/plane_bus.jpg" alt="plan" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">Plan – Bus Terminal</p>
  </div>
  <div style="flex:1; text-align:center;">
    <img src="/images/RailStation/plane_coach.jpg" alt="plan" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">Plan – Coach Building</p>
  </div>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/RailStation/ele_bus.jpg" alt="elevation" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Façade elevation – Bus Terminal</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/RailStation/ele_coach.jpg" alt="elevation" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Façade elevation – Coach Building</p>
</div>

---

#### 2. **Rhino Geometry Modeling & Parametric Panel Layout**

- Curtain wall surfaces were modeled in **Rhino**, while **Grasshopper** was used to automate panelization and fabrication drawing output.
- Using the Bus Terminal glass panels as an example, the following animations demonstrate how Grasshopper was applied to:
  - Offset joint gaps between glass panels
  - Assign identical IDs to panels with identical dimensions
  - Export panel data to **Excel** and **CAD** formats

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/RailStation/bus_grasshopper.gif" alt="grasshopper" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Panelization example: Bus Terminal glass panels</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/RailStation/coach_grasshopper.gif" alt="grasshopper" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Panelization example: Coach Building glass panels</p>
</div>

---

#### 3. **Glass & Aluminum Panel Layout and Fabrication Data**

- Panel grid data was exported as **Excel** and **DWG** files, including panel IDs and fabrication dimensions.

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/RailStation/bus_GN_excel.jpg" alt="excel" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Example: Exported Excel data – Bus Terminal glass panels</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/RailStation/bus_GN_CAD.jpg" alt="cad" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Example: Exported CAD drawings – Bus Terminal glass panels</p>
</div>

---

#### 4. **Deliverables & Construction Coordination**

- Delivered panel fabrication schedules and drawings for both glass and aluminum curtain walls.
- Aluminum panels were output only for the **inclined façade areas**.

_(The following sections present representative outputs for different façade zones of the Bus Terminal and Coach Building, including panel numbering drawings, Excel fabrication lists, and CAD layouts.)_

---

### 🔮 Summary & Reflection

- **Scope of Responsibility**: Curtain wall system modeling, panel grid layout, and fabrication data generation for glass and aluminum curtain walls.
- **Key Challenges**:  
  Panels with identical dimensions needed to share the same ID, while the overall numbering sequence had to remain continuous and standardized to avoid confusion during fabrication and installation.
- **Solution**:  
  Implemented Grasshopper logic using panel area as a key parameter for classification and numbering. Panels with identical dimensions were automatically grouped and assigned the same ID, while numbering order followed the façade layout direction to ensure consistency across drawings and schedules.
- **Key Takeaways**:  
  This project significantly strengthened my ability to structure data logic and develop automation scripts during the curtain wall detailing phase. It also reinforced the importance of a well-designed numbering system and data consistency in real-world fabrication workflows. Parametric methods not only improved efficiency but also greatly reduced the risk of manual errors.
