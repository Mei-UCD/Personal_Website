---
title: 城南游泳馆
description: 项目采用高精度 BIM 建模与参数化设计，通过 Rhino 与 Grasshopper 实现批量化施工图生成
image: /images/SwimCenter/rendering.jpg
category: Architecture
---

### 🧭项目背景

本项目为**城南奥体中心**“三馆一场一园”中游泳馆的 BIM 模型构建和辅助施工下料，旨在通过数字化工具高速高精度地实现设计检测和支援施工。主要使用 **Rhinoceros** 搭建高精度模型， **Grasshopper** 辅助生成批量化部件和施工图。

---

### 🧱项目信息

- **位置**：某市核心区
- **功能定位**：体育中心
- **设计目标**：创造高精度的 BIM 模型，检测设计冲突和利用参数化辅助施工生成加工图
<div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/SwimCenter/rendering.jpg" alt="render" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px; margin-bottom:0 !important;">效果图</p>
</div>

---

### 🧩BIM 建模流程

1. **确定涉及范围和建模目标**
   - 根据建筑设计方案，锁定游泳馆的建模区域 - 外铝板立面、玻璃门窗、玻璃幕墙和龙骨结构
   - 确定需要进行冲突检测与施工下料的数据范围 - 冲突检测包括幕墙和土建结构（梁柱）是否冲突，施工下料包括龙骨尺寸和龙骨定位

   <div style="display:flex; flex-direction:column; align-items:center;">
       <img src="/images/SwimCenter/ele1.jpg" alt="cad" style="width:90%;">
       <p style="font-size:14px; color:#666; margin-top:5px;">立面图1</p>
   </div>
   <div style="display:flex; flex-direction:column; align-items:center;">
       <img src="/images/SwimCenter/ele2.jpg" alt="cad" style="width:90%;">
       <p style="font-size:14px; color:#666; margin-top:5px;">立面图2</p>
   </div>

2. **Rhino 高精度建模**
   - 在 Rhino 中建立幕墙，龙骨钢架结构及主要空间体量
   - 通过精确尺寸控制，实现施工可用级别的模型精度

   <div style="display:flex; flex-direction:column; align-items:center;">
       <img src="/images/SwimCenter/rhino1.jpg" alt="rhino" style="width:90%;">
       <p style="font-size:14px; color:#666; margin-top:5px;">导入 CAD 轴网和剖面线</p>
   </div>
   <div style="display:flex; flex-direction:column; align-items:center;">
       <img src="/images/SwimCenter/rhino2.jpg" alt="rhino" style="width:90%;">
       <p style="font-size:14px; color:#666; margin-top:5px;">外立面模型</p>
   </div>
   <div style="display:flex; flex-direction:column; align-items:center;">
       <img src="/images/SwimCenter/rhino3.jpg" alt="rhino" style="width:90%;">
       <p style="font-size:14px; color:#666; margin-top:5px;">土建结构和幕墙龙骨模型</p>
   </div>

3. **Grasshopper 参数化建模**
   - 利用 Grasshopper 批量生成龙骨结构等重复性部件
   - 通过参数化逻辑快速修改设计，适应尺寸变化
   <div style="display:flex; flex-direction:column; align-items:center;">
       <img src="/images/SwimCenter/rhino_gh1.gif" alt="grasshopper" style="width:90%;">
       <p style="font-size:14px; color:#666; margin-top:5px;">竖直钢龙骨生成</p>
   </div>
   <div style="display:flex; flex-direction:column; align-items:center;">
       <img src="/images/SwimCenter/rhino_gh2.png" alt="grasshopper" style="width:90%;">
       <p style="font-size:14px; color:#666; margin-top:5px;">曲龙骨生成</p>
   </div>

4. **施工数据与加工图输出**
   - 将参数化生成的龙骨部件导出为 CAD 加工图
   - 输出节点和编号信息，保证施工可追溯性
   <div style="display:flex; flex-direction:column; align-items:center;">
     <img src="/images/SwimCenter/rhino_gh3.gif" alt="grasshopper" style="width:90%;">
     <p style="font-size:14px; color:#666; margin-top:5px;">龙骨加工图生成</p>
   </div>

---

### 📊项目成果

- 完成城南奥体中心游泳馆的高精度 BIM 建模（铝板幕墙、玻璃幕墙、钢龙骨、龙骨及埋件耳板等部件、屋面檩条布置、土建结构绘制）

  <div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
    <div style="flex:1; text-align:center;">
      <img src="/images/SwimCenter/rhino4.jpg" alt="rhino" style="width:100%; border-radius:8px;">
      <p style="font-size:14px; color:#666; margin-top:5px;">幕墙立面效果1</p>
    </div>
    <div style="flex:1; text-align:center;">
      <img src="/images/SwimCenter/rhino5.jpg" alt="rhino" style="width:100%; border-radius:8px;">
      <p style="font-size:14px; color:#666; margin-top:5px;">幕墙立面效果2</p>
    </div>
  </div>

  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/SwimCenter/rhino_steel.gif" alt="rhino" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px;">龙骨&埋件耳板部件&土建结构</p>
  </div>

  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/SwimCenter/rhino_roof.gif" alt="rhino" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px;">屋面檩条</p>
  </div>

- 成功实现**龙骨施工图纸 + 加工数据**的标准化导出

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/SwimCenter/cad_pd.gif" alt="cad" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">导出龙骨施工图</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/SwimCenter/cad_area.jpg" alt="cad" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">龙骨平面区域图</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/SwimCenter/cad_steel_number.jpg" alt="cad" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">区域 A 示例：龙骨立面布置编号图</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/SwimCenter/cad_steel_pd.jpg" alt="cad" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">区域 A 示例：龙骨编号数量图</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/SwimCenter/cad_steel_pd_exp.jpg" alt="cad" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">示例：A-09 & A-10龙骨加工图</p>
</div>

- 有效检测设计阶段的潜在冲突，避免施工返工

<div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
  <div style="flex:1; text-align:center;">
    <img src="/images/SwimCenter/rhino_clash1.jpg" alt="clash" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">外立面视角：幕墙和土建结构冲突</p>
  </div>
  <div style="flex:1; text-align:center;">
    <img src="/images/SwimCenter/rhino_clash2.jpg" alt="clash" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">内部视角：幕墙和土建结构冲突</p>
  </div>
</div>

- 节省约**50%-60%**的制图与数据处理时间

---

### 🔮总结与反思

- **优势**：Rhino + Grasshopper 的组合在大型体育建筑中表现出色，能够快速应对复杂结构与批量化部件需求
- **不足**：Grasshopper 在处理超大规模几何时运算速度仍有限，需要通过分区域导出来提高效率
