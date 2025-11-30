---
title: 竹林大饭店
description: 外立面采用参数化穿孔铝板设计，通过 Rhino 与 Grasshopper 实现高效建模与施工图输出
image: /images/ZhuLin/rendering.jpg
category: Architecture
---

### 🧭项目背景

本项目为 **竹林商业城** 外立面铝板穿孔图案的 BIM 参数化设计，旨在通过数字化工具高速高精度地实现参数化概念到施工。主要使用 **Rhinoceros + Grasshopper** 进行穿孔图案建模，导出铝板办公图指导施工，大幅提高效率和精确度，降低成本。

---

### 🧱项目信息

- **位置**：某市核心区
- **功能定位**：商业空间
- **设计目标**：创造视觉创意的建筑立面，实现高效的 BIM 参数化设计和施工数据输出
<div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/ZhuLin/rendering.jpg" alt="rendering" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px; margin-bottom:0 !important;">效果图</p>
</div>

---

### 🧩BIM 建模流程

1.根据建筑平立面，确定参数化设计区域（图中为黄色区域）

<div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
    <div style="flex:1; text-align:center;">
        <img src="/images/ZhuLin/zhulin2-1.jpg" alt="cad_plane" style="width:100%; border-radius:8px;">
        <p style="font-size:14px; color:#666; margin-top:5px;">立面图1</p>
    </div>
    <div style="flex:1; text-align:center;">
        <img src="/images/ZhuLin/zhulin2-2.jpg" alt="cad_plane" style="width:100%; border-radius:8px;">
        <p style="font-size:14px; color:#666; margin-top:5px;">立面图2</p>
    </div>
</div>

2. **Rhino 初步建模**：确定建筑铝板外立面体量与主要空间布局

- 在 Rhino 中建立幕墙铝板的基本几何体，确定铝板外立面的体量
- 通过参数化逻辑保证模型能快速响应建筑尺寸变化
<div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/ZhuLin/zhulin4-2.jpg" alt="rhino" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px;">铝板表皮模型</p>
</div>

3. **Grasshopper 参数化设计**

- 使用 **Grasshopper** 生成竹林图案的穿孔规则（基于图片 copy 点阵分布与渐变密度）
- 通过控制点、随机函数等方式，形成“疏密有致”的图案
- 参数化的优势在于可以通过修改少量参数，快速生成不同的立面效果方案
<div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
    <div style="flex:4.85; text-align:center;">
        <img src="/images/ZhuLin/zhulin3-1.jpg" alt="rhino" style="width:100%; border-radius:8px;">
        <p style="font-size:14px; color:#666; margin-top:5px;"> grasshopper 生成孔洞效果</p>
    </div>
    <div style="flex:5.15; text-align:center;">
        <img src="/images/ZhuLin/zhulin3-2.jpg" alt="gh" style="width:100%; border-radius:8px;">
        <p style="font-size:14px; color:#666; margin-top:5px;"> 疏密图案电池程序</p>
    </div>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/ZhuLin/zhulin3-3.jpg" alt="gh" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px;"> gh 程序</p>
</div>

4. **BIM 出图与施工数据导出**

- 将参数化生成的孔对铝板立面进行穿孔之后，对铝板模型分块编号，保证加工与施工时的可追溯性
- 输出包含板块尺寸、穿孔分布信息的施工图纸
- 同时生成数量统计表，用于工程量核算与成本控制
<div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
    <div style="flex:3.2; text-align:center;">
        <img src="/images/ZhuLin/zhulin5-1.jpg" alt="rhino" style="width:100%; border-radius:8px;">
        <p style="font-size:14px; color:#666; margin-top:5px;">铝板板块模型</p>
    </div>
    <div style="flex:6.8; text-align:center;">
        <img src="/images/ZhuLin/zhulin5-2.jpg" alt="rhino" style="width:100%; border-radius:8px;">
        <p style="font-size:14px; color:#666; margin-top:5px;">铝板板块编号</p>
    </div>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/ZhuLin/zhulin5-3.jpg" alt="rhino" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px;"> Rhino 铝板展开</p>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/ZhuLin/zhulin5-4.jpg" alt="Rendering" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px; margin-bottom:0 !important;">导入 CAD 铝板加工图</p>
</div>

---

### 📊项目成果

- 成功实现了竹林穿孔图案的参数化建模
- 导出**标准化施工图纸 + 加工数据**， 极大提升了工作效率
- 在施工阶段保证了设计与落地的一致性，避免了传统人工绘图的误差
- 节省约**60%-70%**的设计制图时间

---

### 🔮总结与反思

- **优势**: Rhino + Grasshopper 的组合使复杂图案在短时间内完成建模和出图，极大提高了建筑设计到施工的衔接效率
- **不足**: 对于超大面积的幕墙建模时，Grasshopper 的运算速度仍有瓶颈，需要合理分块与优化算法
