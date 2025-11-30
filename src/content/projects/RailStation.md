---
title: 盐城高铁站西广场
description: 盐城市高铁站西广场配套交通建筑——长途楼与公交楼幕墙深化下料
image: /images/RailStation/rendering1.jpg
category: Architecture
---

### 🧭项目背景

盐城高铁站西广场长途楼与公交楼项目位于**江苏省盐城市亭湖区**， 地处东临河滨路、南接世纪大道、北近东进路、西靠范公路的合围地带，是盐城高铁站综合交通枢纽的重要组成部分。  
项目整体功能包括长途客运中心、城市公交配套设施及商业服务空间，旨在构建一个集交通换乘、休憩与商业服务于一体的综合交通服务枢纽。

本项目中，我主要负责**长途楼与公交楼部分幕墙系统的下料工作**。幕墙基本类型包含玻璃幕墙、铝板幕墙及其组合系统幕墙，通过 Rhino + Grasshopper 实现面板的几何建模与排版下料。

---

### 🧱项目信息

- **项目名称**：盐城高铁站西广场长途楼与公交楼幕墙工程
- **项目定位**：高铁站西广场配套交通枢纽建筑，集客运、公交与商业功能于一体
- **项目体量**：建筑总面积约 **48298 ㎡**
- **详细地址**：江苏省盐城市亭湖区河滨路与世纪大道交汇处西北侧
- **项目属性**：交通枢纽配套建筑 / 幕墙深化建模与下料

<div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/RailStation/rendering2.jpg" alt="Rendering" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px;">效果图</p>
</div>

---

### 🧩建模与下料流程

#### 1.**幕墙建模准备**

- 根据施工图及立面分格图，整理长途楼和公交楼需要建模的幕墙范围（平面图中洋红色区域，公交候车大厅和长途候车大厅）。
- 导入 CAD 轴网图和幕墙完成面

<div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
  <div style="flex:1; text-align:center;">
    <img src="/images/RailStation/plane_bus.jpg" alt="plane" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">平面图-公交楼</p>
  </div>
  <div style="flex:1; text-align:center;">
    <img src="/images/RailStation/plane_coach.jpg" alt="plane" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">平面图-长途楼</p>
  </div>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/RailStation/ele_bus.jpg" alt="elevation" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">立面展开图-公交楼</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/RailStation/ele_coach.jpg" alt="elevation" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">立面展开图-长途楼</p>
</div>

#### 2.**Rhino 几何建模与参数化板块下料**

- 使用 Rhino 进行幕墙面建模，并通过 Grasshopper 实现快速板块下料和出加工图。以公交楼玻璃板块为示例，下方动图展示如何运用 Grasshopper 对板块进行精确下料，比如抠玻璃板块之间的胶缝、相同尺寸板块给予相同的编号、数据导出 Excel 和 CAD 等。

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/RailStation/bus_grasshopper.gif" alt="grasshopper" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">下料示例：公交楼玻璃板块</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/RailStation/coach_grasshopper.gif" alt="grasshopper" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">下料示例：长途楼玻璃板块</p>
</div>

#### 3.**玻璃和铝板幕墙板块排版与下料**

- 将分格数据导出为 Excel 和 DWG 格式，生成每块板的编号和加工尺寸

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/RailStation/bus_GN_excel.jpg" alt="excel" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">示例：公交楼玻璃板块导出 Excel</p>
</div>
<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/RailStation/bus_GN_CAD.jpg" alt="cad" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">示例：公交楼玻璃板块导出 CAD</p>
</div>

#### 4.**成果输出与施工配合**

- 输出幕墙玻璃和铝板板块下料清单和加工图，其中铝板板块只输出斜面幕墙区域。
  - 公交楼：
    - GN 区域玻璃板块：
      <div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
        <div style="flex:7.55; text-align:center;">
          <img src="/images/RailStation/bus_GN_number.jpg" alt="image" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">GN 区域玻璃板块编号图</p>
        </div>
        <div style="flex:2.45; text-align:center;">
          <img src="/images/RailStation/bus_GN_excel.jpg" alt="excel" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">GN 区域玻璃板块导出 Excel</p>
        </div>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center;">
        <img src="/images/RailStation/bus_GN_CAD.jpg" alt="cad" style="width:90%;">
        <p style="font-size:14px; color:#666; margin-top:5px;">GN 区域玻璃板块导出 CAD</p>
      </div>

    - GN 区域铝板板块：
      <div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
        <div style="flex:6.8; text-align:center;">
          <img src="/images/RailStation/bus_GN-LB_number.jpg" alt="image" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">GN 区域铝板板块编号图</p>
        </div>
        <div style="flex:3.2; text-align:center;">
          <img src="/images/RailStation/bus_GN-LB_excel.jpg" alt="excel" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">GN 区域铝板板块导出 Excel</p>
        </div>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center;">
        <img src="/images/RailStation/bus_GN-LB_CAD.jpg" alt="cad" style="width:90%;">
        <p style="font-size:14px; color:#666; margin-top:5px;">GN 区域铝板板块导出 CAD</p>
      </div>

    - GB 区域玻璃板块：

      <div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
        <div style="flex:6.15; text-align:center;">
          <img src="/images/RailStation/bus_GB_number.jpg" alt="image" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">GB 区域玻璃板块编号图</p>
        </div>
        <div style="flex:3.85; text-align:center;">
          <img src="/images/RailStation/bus_GB_excel.jpg" alt="excel" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">GB 区域玻璃板块导出 Excel</p>
        </div>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center;">
        <img src="/images/RailStation/bus_GB_CAD.jpg" alt="cad" style="width:90%;">
        <p style="font-size:14px; color:#666; margin-top:5px;">GB 区域玻璃板块导出 CAD</p>
      </div>

    - GX 区域玻璃板块：

      <div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
        <div style="flex:4.38; text-align:center;">
          <img src="/images/RailStation/bus_GX_number.jpg" alt="image" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">GX 区域玻璃板块编号图</p>
        </div>
        <div style="flex:5.62; text-align:center;">
          <img src="/images/RailStation/bus_GX_excel.jpg" alt="excel" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">GX 区域玻璃板块导出 Excel</p>
        </div>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center;">
        <img src="/images/RailStation/bus_GX_CAD.jpg" alt="cad" style="width:90%;">
        <p style="font-size:14px; color:#666; margin-top:5px;">GX 区域玻璃板块导出 CAD</p>
      </div>

  - 长途楼：
    - CN 区域玻璃板块：
      <div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
        <div style="flex:4.9; text-align:center;">
          <img src="/images/RailStation/coach_CN_number.jpg" alt="image" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">CN 区域玻璃板块编号图</p>
        </div>
        <div style="flex:5.1; text-align:center;">
          <img src="/images/RailStation/coach_CN_excel.jpg" alt="excel" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">CN 区域玻璃板块导出 Excel</p>
        </div>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center;">
        <img src="/images/RailStation/coach_CN_CAD.jpg" alt="cad" style="width:90%;">
        <p style="font-size:14px; color:#666; margin-top:5px;">CN 区域玻璃板块导出 CAD</p>
      </div>

    - CB 区域玻璃板块：
      <div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
        <div style="flex:6.25; text-align:center;">
          <img src="/images/RailStation/coach_CB_number.jpg" alt="image" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">CB 区域玻璃板块编号图</p>
        </div>
        <div style="flex:3.75; text-align:center;">
          <img src="/images/RailStation/coach_CB_excel.jpg" alt="excel" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">CB 区域玻璃板块导出 Excel</p>
        </div>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center;">
        <img src="/images/RailStation/coach_CB_CAD.jpg" alt="cad" style="width:90%;">
        <p style="font-size:14px; color:#666; margin-top:5px;">CB 区域玻璃板块导出 CAD</p>
      </div>

    - CB 区域铝板板块：
      <div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
        <div style="flex:6.05; text-align:center;">
          <img src="/images/RailStation/coach_CB-LB_number.jpg" alt="image" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">CB 区域铝板板块编号图</p>
        </div>
        <div style="flex:3.95; text-align:center;">
          <img src="/images/RailStation/coach_CB-LB_excel.jpg" alt="excel" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">CB 区域铝板板块导出 Excel</p>
        </div>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center;">
        <img src="/images/RailStation/coach_CB-LB_CAD.jpg" alt="cad" style="width:90%;">
        <p style="font-size:14px; color:#666; margin-top:5px;">CB 区域铝板板块导出 CAD</p>
      </div>

    - CX 区域玻璃板块：
      <div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
        <div style="flex:4.65; text-align:center;">
          <img src="/images/RailStation/coach_CX_number.jpg" alt="image" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">CX 区域玻璃板块编号图</p>
        </div>
        <div style="flex:5.35; text-align:center;">
          <img src="/images/RailStation/coach_CX_excel.jpg" alt="excel" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">CX 区域玻璃板块导出 Excel</p>
        </div>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center;">
        <img src="/images/RailStation/coach_CX_CAD.jpg" alt="cad" style="width:90%;">
        <p style="font-size:14px; color:#666; margin-top:5px;">CX 区域玻璃板块导出 CAD</p>
      </div>

---

### 🔮总结与反思

- **负责内容**：幕墙系统（玻璃和铝板幕墙）建模、分格排版与下料。
- **难点**：尺寸相同的板块在输出编号时需要保持一致编号，同时整体编号顺序必须连续、规范，避免加工与安装阶段混乱。
- **解决方案**：通过 Grasshopper 电池组逻辑控制，将板块面积作为关键参数进行分类与编号；对相同尺寸的板块自动分组并赋予相同编号，同时根据幕墙排版方向实现连续编号，确保数据与下料表与图纸间一一对应。
- **经验总结**：本项目强化了我在幕墙深化阶段的数据逻辑与自动化脚本编制能力，也让我认识到在实际加工阶段，合理的编号体系与数据一致性的重要性。通过参数化方法，不仅提高了效率，也降低了人工错误率。
