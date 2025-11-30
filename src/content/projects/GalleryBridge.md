---
title: 串场河廊桥
description: 建筑外立面和幕墙结构BIM模型绘制和利用参数化配合施工下料
image: /images/GalleryBridge/rendering1.jpg
category: Architecture
---

### 🧭项目背景

盐城**串场河廊桥**位于江苏省盐南高新区，是一座跨越串场河的综合性桥梁与建筑结合体。它不仅承担跨河交通功能，同时在桥面上植入了商业及公共建筑，形成了集**交通枢纽、商业配套、城市景观**于一体的复合型城市节点。
桥上建筑总高度约**15.4m**,共**3层**，商业总建筑面积约**6000平方米**。结构采用**钢结构体系**，外立面为**全玻幕墙、铝板幕墙与金属屋面板**的组合。设计目标是在满足交通荷载与建筑荷载的双重需求下，打造一个具有城市地标属性的公共空间。

---

### 🧱项目信息

- **位置**：江苏省盐城市盐南高新区
- **功能定位**：桥梁 + 商业综合体
- **结构形式**：钢结构
- **幕墙系统**：全玻幕墙、铝板幕墙、金属屋面系统
- **建筑规模**：3 层，约 6000㎡

<div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/GalleryBridge/rendering1.jpg" alt="Rendering" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px; margin-bottom:0 !important;">效果图</p>
</div>

---

### 🧩BIM 建模流程

#### 1.**确定涉及范围和建模目标**

- 主要建模范围：商业建筑幕墙（全玻、铝板、金属屋面幕墙）、檩条钢结构、玻璃栏杆，辅助建模范围：建筑结构、桥梁主体（梁、柱、墙体、楼板）
- 确定冲突检测范围：幕墙与建筑梁柱
- 明确施工下料需求：檩条钢龙骨尺寸、数量与定位

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/GalleryBridge/elevation3.png" alt="elevaton" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">立面图</p>
</div>

<div style="display:flex; gap:10px; justify-content:center; margin:10px 0;padding:0 5%;">
  <div style="flex:1; text-align:center;">
    <img src="/images/GalleryBridge/plane2.png" alt="plane" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">平面图</p>
  </div>
  <div style="flex:1; text-align:center;">
    <img src="/images/GalleryBridge/section1.png" alt="section" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">剖面图</p>
  </div>
</div>

#### 2.**Rhino 高精度建模**

- Rhino 中粗略搭建整体桥梁基础，详细绘制上部商业建筑（幕墙、土木建筑结构、檩条）
- 精细化铝板、玻璃和金属屋面幕墙与檩条排布
- 保证结构与建筑模型达到施工可用的精度

<div style="display:flex; gap:10px; justify-content:center; margin:10px 0;padding:0 5%;">
  <div style="flex:1; text-align:center;">
    <img src="/images/GalleryBridge/model1.jpg" alt="model1" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">幕墙模型</p>
  </div>
  <div style="flex:1; text-align:center;">
    <img src="/images/GalleryBridge/model3.jpg" alt="model3" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">檩条模型</p>
  </div>
</div>

#### 3.**施工数据与加工图输出**

- 屋面主檩条算量，录入采购申请单
<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/GalleryBridge/主檩条算量.jpg" alt="construction1" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">北区示例：主檩条算量</p>
</div>
<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/GalleryBridge/主檩条算量2.jpg" alt="construction2" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">导出采购清单</p>
</div>

- 屋面主檩条输出定位图
<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/GalleryBridge/北区主檩条定位0.jpg" alt="N-position0" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">北区示例：主檩条区域划分（根据柱分成 Z01-Z13 跨）</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/GalleryBridge/北区主檩条定位3.jpg" alt="N-position3" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">北区示例：Grasshopper 导出定位数据</p>
</div>

<div style="display:flex; gap:10px; justify-content:center; margin:10px 0;padding:0 5%;">
  <div style="flex:1; text-align:center;">
    <img src="/images/GalleryBridge/北区主檩条定位1.jpg" alt="N-position1" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">北区示例：主檩条定位编号</p>
  </div>
  <div style="flex:1; text-align:center;">
    <img src="/images/GalleryBridge/北区主檩条定位2.jpg" alt="N-position2" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">北区示例：主檩条定位坐标</p>
  </div>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/GalleryBridge/北区檩条定位.gif" alt="CAD1" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">北区示例：CAD 主檩条定位图</p>
</div>

- 屋面主檩条输出加工图
<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/GalleryBridge/南区檩条加工图导出.gif" alt="grasshopper1" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">南区示例：Grasshopper 主檩条加工数据生成</p>
</div>

<div style="display:flex; gap:10px; justify-content:center; margin:10px 0;padding:0 5%;">
  <div style="flex:1; text-align:center;">
    <img src="/images/GalleryBridge/南桥主檩条加工1.jpg" alt="S-fabrication1" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">南区示例：檩条编号图</p>
  </div>
  <div style="flex:1; text-align:center;">
    <img src="/images/GalleryBridge/南桥主檩条加工2.jpg" alt="S-fabrication2" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">南区示例：檩条加工图 C3-01</p>
  </div>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/GalleryBridge/南区檩条加工图.gif" alt="CAD-S" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">南区示例：CAD 主檩条加工图</p>
</div>

- 输出屋面∅50x3铝合金圆管加工图
<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/GalleryBridge/铝圆管节点.png" alt="pipecad" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">金属屋面 ∅50x3 铝合金圆管</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/GalleryBridge/南区铝圆管grasshopper.gif" alt="grasshopper-pipe" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">南区示例：Grasshopper 铝合金圆管编号和加工数据生成</p>
</div>
<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/GalleryBridge/南区铝圆管CAD.gif" alt="cad-pipe" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">南区示例：CAD 铝圆管加工图</p>
</div>

#### 4.**其它**

- 玻璃栏杆扶手方案设计和效果对比
<div style="display:flex; gap:10px; justify-content:center; margin:10px 0;padding:0 5%;">
  <div style="flex:1; text-align:center;">
    <img src="/images/GalleryBridge/栏杆1.jpg" alt="railing1" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">玻璃栏杆1</p>
  </div>
  <div style="flex:1; text-align:center;">
    <img src="/images/GalleryBridge/栏杆2.jpg" alt="railing2" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">玻璃栏杆2</p>
  </div>
</div>

- 鱼尾部分结构参数化建模
<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/GalleryBridge/鱼尾圆管1.jpg" alt="cad-pipe2" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">南区示例：鱼尾圆管结构模型</p>
</div>

---

### 🔮总结与反思

- **难点**：本项目最大的挑战在于鱼尾形建筑部分的设计。该部分既要保持美观，又需满足结构受力要求，如何在建筑美学与结构逻辑之间取得平衡是首要难点。同时，由于整个建筑为异形体，如何利用参数化设计辅助施工，保持高精度以减少施工成本，也是项目中的关键难点。
- **建模策略**：非重复和施工辅助部分的模型基于 CAD 设计图手动建模保证速度，重复且辅助施工部分（主檩条、主檩条加长、铝合金圆管、鱼尾圆管结构）通过 Rhino + Grasshopper 实现参数化建模，以便高效率和高精度的辅助下料。
- **施工配合**：在施工阶段，利用 BIM 模型进行下料与碰撞检查，体检发现钢结构节点与幕墙之间的干涉问题，大幅提高现场施工效率。
- **经验总结**：该项目让我进一步熟悉了 BIM 工程师的工作流程，了解在建模前需要注意的关键事项，并在实际操作中加深了对 Grasshopper 参数化编程的理解。这不仅提升了我在建筑异形结构建模与施工配合上的能力，也增强了对设计与施工一体化的认知。
