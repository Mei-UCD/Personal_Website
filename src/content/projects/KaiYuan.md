---
title: 响水开元酒店
description: 位于东鸣湖公园旁的响水开元温泉酒店项目，招标与设计阶段的 BIM 建模与图纸输出工作
image: /images/KaiYuan/rendering1.png
category: Architecture
---

### 🧭项目背景

**响水开元温泉酒店**位于江苏省响水县东鸣湖公园旁，是集温泉养生、休闲度假和会议功能于一体的高端酒店项目。
项目规划用地面积约 **46 亩**，总建筑面积约 **5.6 万平方米**，其中地上建筑面积约 **3.7 万平方米**，地下建筑面积约 **1.9 万平方米**。主体建筑为 **19 层**，规划客房约 **330 间**，总投资约 **4.7 亿元人民币**。

本项目作为东鸣湖生态旅游区的重要组成部分，旨在打造区域地标性高端酒店。
我主要负责本项目的 **连接部位异形幕墙的建模和定位** 工作。

---

### 🧱 项目信息

- **项目名称**：响水开元温泉酒店
- **项目类型**：温泉度假酒店 / 会议综合体
- **项目体量**：总建筑面积 56,000㎡（地上 37,000㎡ / 地下 19,000㎡），总幕墙面积约 83,800㎡
- **项目位置**：江苏省响水县东鸣湖公园旁
- **投资规模**：约 4.7 亿元人民币
- **建筑层数**：地上 19 层，约 330 间客房
- **项目阶段**：招标 / 设计深化阶段

<div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/KaiYuan/rendering1.png" alt="rendering" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px;">效果图</p>
</div>

---

### 🧩 BIM建模与设计流程

本项目采用 **Rhinoceros** 进行幕墙曲面部分的 BIM 建模，主要用于辅助施工部门现场定位。

#### 1. **把握异形幕墙平立面施工图**

根据幕墙建筑平立面及大样节点，准确把握异形部分整体走向，确定建模思路。

<div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/KaiYuan/ele1.jpg" alt="elevation" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px;">立面图</p>
</div>
<div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/KaiYuan/plane1.jpg" alt="plane" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px;">平面图</p>
</div>

#### 2. **方案模型建立**

导入CAD轴网及平立面，在Rhino中建立铝板幕墙模型，主要是①②两部分异形铝板及其支撑龙骨结构，如下图所示：

<div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/KaiYuan/range.jpg" alt="range" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px;">负责范围</p>
</div>

- ①区域
  - 平面铝板及其龙骨结构模型
      <div style="display:flex; gap:10px; justify-content:center; margin:10px 0;padding:0 5%;">
      <div style="flex:1; text-align:center;">
          <img src="/images/KaiYuan/①_rhino_front.jpg" alt="rhino" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">Rhino模型正面</p>
      </div>
      <div style="flex:1; text-align:center;">
          <img src="/images/KaiYuan/①_rhino_back.jpg" alt="rhino" style="width:100%; border-radius:8px;">
          <p style="font-size:14px; color:#666; margin-top:5px;">Rhino模型背面</p>
      </div>
      </div>
  - 龙骨定位辅助施工（Grasshopper）
      <div style="display:flex; flex-direction:column; align-items:center;">
          <img src="/images/KaiYuan/grasshopper_positions.jpg" alt="grasshopper" style="width:90%;">
          <p style="font-size:14px; color:#666; margin-top:5px;">Grasshopper龙骨定位点编号及坐标导出</p>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center;">
          <img src="/images/KaiYuan/excel.jpg" alt="excel" style="width:90%;">
          <p style="font-size:14px; color:#666; margin-top:5px;">部分Excel导出数据</p>
      </div>

- ②区域
  - 协同钢结构专业，得到钢结构线模，依据钢结构杆件尺寸标准，利用Rhinocero完善钢结构模型
      <div style="display:flex; gap:10px; justify-content:center; margin:10px 0;padding:0 5%;">
          <div style="flex:1; text-align:center;">
              <img src="/images/KaiYuan/structure.jpg" alt="structure" style="width:100%; border-radius:8px;">
              <p style="font-size:14px; color:#666; margin-top:5px;">线模</p>
          </div>
          <div style="flex:1; text-align:center;">
              <img src="/images/KaiYuan/②_structure_model.jpg" alt="structure" style="width:100%; border-radius:8px;">
              <p style="font-size:14px; color:#666; margin-top:5px;">Rhino钢结构完善</p>
          </div>
      </div>
  - 以异形钢结构表面最突出的点为基准，往外偏移400mm，得到铝板幕墙完成面
      <div style="display:flex; gap:10px; justify-content:center; margin:10px 0;padding:0 5%;">
          <div style="flex:1; text-align:center;">
              <img src="/images/KaiYuan/②_rhino_front.jpg" alt="rhino" style="width:100%; border-radius:8px;">
              <p style="font-size:14px; color:#666; margin-top:5px;">Rhino异形铝板幕墙正面</p>
          </div>
          <div style="flex:1; text-align:center;">
              <img src="/images/KaiYuan/②_rhino_back.jpg" alt="rhino" style="width:100%; border-radius:8px;">
              <p style="font-size:14px; color:#666; margin-top:5px;">Rhino异形铝板幕墙背面</p>
          </div>
      </div>
  - 对异形钢结构中的螺栓球进行编号
     <div style="display:flex; flex-direction:column; align-items:center;">
         <img src="/images/KaiYuan/②_grasshopper_ballnumber.jpg" alt="position" style="width:90%;">
         <p style="font-size:14px; color:#666; margin-top:5px;">螺栓球编号</p>
     </div>
  - 在铝板分格线处均匀五等分，生成分格线上的五个点，作为定位点
     <div style="display:flex; flex-direction:column; align-items:center;">
         <img src="/images/KaiYuan/②_grasshopper_positions.jpg" alt="position" style="width:90%;">
         <p style="font-size:14px; color:#666; margin-top:5px;">示例：T-09螺栓球区域定位点图</p>
     </div>
  - 以螺栓球中心点为基准点，输出铝板定位点位置坐标，导出CAD定位图
     <div style="display:flex; flex-direction:column; align-items:center;">
         <img src="/images/KaiYuan/②_cad_ballnumber.jpg" alt="cad" style="width:90%;">
         <p style="font-size:14px; color:#666; margin-top:5px;">示例：T-09螺栓球区域CAD图</p>
     </div>
     <div style="display:flex; flex-direction:column; align-items:center;">
         <img src="/images/KaiYuan/②_cad_position.jpg" alt="cad" style="width:90%;">
         <p style="font-size:14px; color:#666; margin-top:5px;">示例：T-09螺栓球区域定位点坐标</p>
     </div>

#### 3. **成果输出**

- ①区域
    <div style="display:flex; flex-direction:column; align-items:center;">
        <img src="/images/KaiYuan/①_cad_number.jpg" alt="result" style="width:90%;">
        <p style="font-size:14px; color:#666; margin-top:5px;">施工定位图</p>
    </div>
    <div style="display:flex; gap:10px; justify-content:center; margin:10px 0;padding:0 5%;">
        <div style="flex:6.95; text-align:center;">
            <img src="/images/KaiYuan/①_cad_position1.jpg" alt="result" style="width:100%; border-radius:8px;">
            <p style="font-size:14px; color:#666; margin-top:5px;">定位坐标表1</p>
        </div>
        <div style="flex:3.05; text-align:center;">
            <img src="/images/KaiYuan/①_cad_position2.jpg" alt="result" style="width:100%; border-radius:8px;">
            <p style="font-size:14px; color:#666; margin-top:5px;">定位坐标表2</p>
        </div>
    </div>

- ②区域
    <div style="display:flex; flex-direction:column; align-items:center;">
        <img src="/images/KaiYuan/②_cad_B-P.jpg" alt="result" style="width:90%;">
        <p style="font-size:14px; color:#666; margin-top:5px;">施工定位图B-P螺栓球区域</p>
    </div>

    <div style="display:flex; flex-direction:column; align-items:center;">
        <img src="/images/KaiYuan/②_cad_Q-U.jpg" alt="result" style="width:90%;">
        <p style="font-size:14px; color:#666; margin-top:5px;">施工定位图Q-U螺栓球区域</p>
    </div>

---

### 🔮总结与反思

- **负责内容**：主要负责本项目的 **连接部位异形幕墙的建模和定位** 工作，参与幕墙系统的整体分格及图纸输出。
- **难点**：异形幕墙节点数量多，结构与造型关系复杂，且需与主体结构精确定位，保证安装可行性与美观性。
- **解决方案**：通过 Rhino 精确构建异形节点几何关系，并利用参数化编程快速且精确的导出定位数据。
- **经验总结**：本项目使我积累了异形幕墙节点的参数化建模经验，对复杂结构的空间定位与施工逻辑有了更深理解，为后续大型酒店与公共建筑的 BIM 协同提供了实践基础。
