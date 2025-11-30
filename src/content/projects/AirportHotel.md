---
title: 南洋机场酒店
description: 盐城市南洋机场配套酒店项目——集住宿、会议与餐饮于一体的现代商务空间
image: /images/AirportHotel/rendering1.jpg
category: Architecture
---

### 🧭项目背景

盐城南洋机场酒店项目位于盐城市亭湖区南洋镇南洋国际机场 T2 航站楼西侧，作为机场配套的重要设施之一，为旅客及商务人士提供住宿、会议与餐饮一体化服务。酒店整体定位为现代商务风格，设计上注重空间的功能性与舒适度，通过简洁的建筑语言与精致的室内装饰体现城市门户形象。

与以往使用 Rhino + Grasshopper 进行参数化建模和辅助施工下料的项目不同，本项目是我**首次在正式工程中使用 Revit 进行幕墙建模与协同工作**。由于本项目需与机电、建筑、结构等多个专业协同设计，因此采用 Revit 平台以保证信息的统一与协调。
在该项目中，我主要负责：

- 使用 Revit 基于结构模型构建外部幕墙模型
- 反馈冲突情况
- 模型成果输出

虽然是首次使用 Revit，但这次也学习了 Revit 建模技能以及深入理解 Revit 在协同设计与 BIM 流程中的作用，也积累了与其他专业配合的实战经验。

---

### 🧱项目信息

- **项目名称**：盐城南洋机场酒店
- **项目定位**：盐城南洋国际机场配套酒店，集住宿、会议、餐饮为一体的现代商务空间
- **项目体量**：总建筑幕墙面积约为**10000平方米**（含铝板幕墙、玻璃幕墙及石材幕墙）
- **详细地址**：江苏省盐城市亭湖区南洋镇南洋国际机场T2航站楼西侧
- **项目属性**：机场配套酒店/幕墙设计与施工

<div style="display:flex; flex-direction:column; align-items:center;">
    <img src="/images/AirportHotel/rendering1.jpg" alt="Rendering" style="width:90%;">
    <p style="font-size:14px; color:#666; margin-top:5px;">效果图</p>
</div>

---

### 🧩BIM 建模流程

#### 1. **确定建模范围与协同目标**

- 根据建筑资料，明确幕墙系统的建模范围，包括玻璃幕墙、铝板幕墙及石材幕墙。
- 确立本次建模的主要目标：
① 基于 CAD 设计图纸完成幕墙系统的 Revit 模型搭建；
② 与建筑、结构、机电等专业进行模型对接与冲突检测；
<div style="display:flex; gap:10px; justify-content:center; margin:10px 0; padding:0 5%;">
  <div style="flex:1; text-align:center;">
    <img src="/images/AirportHotel/ele1.jpg" style="width: 100%; height: 180px; object-fit: cover; object-position: center; border-radius: 8px;" alt="elevation" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">立面图1</p>
  </div>
  <div style="flex:1; text-align:center;">
    <img src="/images/AirportHotel/ele2.jpg" style="width: 100%; height: 180px; object-fit: cover; object-position: center; border-radius: 8px;" alt="elevation" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">立面图2</p>
  </div>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/AirportHotel/plane1.jpg" alt="plane" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">平面图</p>
</div>

#### 2. **Revit 幕墙建模**

- 通过族（Family）自定义实现玻璃横梁竖框、石材和铝板等构件的标准化建模。
- 利用 Revit 的参数化特性，快速调整幕墙尺寸、玻璃分格与龙骨节点。

<div style="display:flex; gap:10px; justify-content:center; margin:10px 0;padding:0 5%;">
  <div style="flex:1; text-align:center;">
    <img src="/images/AirportHotel/revit_family1.jpg" alt="family" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">族示例1</p>
  </div>
  <div style="flex:1; text-align:center;">
    <img src="/images/AirportHotel/revit_family2.jpg" alt="family" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">族示例2</p>
  </div>
  
  <div style="flex:1; text-align:center; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;">
    <img src="/images/AirportHotel/revit_family3.jpg" alt="family" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">族示例3</p>
    <img src="/images/AirportHotel/revit_family4.jpg" alt="family" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">族示例4</p>
    <img src="/images/AirportHotel/revit_family5.jpg" alt="family" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">族示例5</p>
  </div>
</div>

<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/AirportHotel/revit2.jpg" alt="structure" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Revit 结构模型</p>
</div>
<div style="display:flex; flex-direction:column; align-items:center;">
  <img src="/images/AirportHotel/revit1.jpg" alt="curtainwall" style="width:90%;">
  <p style="font-size:14px; color:#666; margin-top:5px;">Revit 幕墙模型</p>
</div>

#### 3.**跨专业模型协同与冲突检测**

- 通过 ifc 文件与建筑、结构、机电等专业共享模型。
- 由于最终 Revit 模型文件已经遗失，本次展示以 Rhino 早期阶段模型示意冲突情况。
- 对检测出的冲突进行记录，并与相关专业进行协商修改。（图中选中女儿墙部分和幕墙部分有冲突）

<div style="display:flex; gap:10px; justify-content:center; margin:10px 0;padding:0 5%;">
  <div style="flex:1; text-align:center;">
    <img src="/images/AirportHotel/clash1.jpg" alt="clash" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">女儿墙和幕墙冲突（Revit）</p>
  </div>
  <div style="flex:1; text-align:center;">
    <img src="/images/AirportHotel/clash2.jpg" alt="clash" style="width:100%; border-radius:8px;">
    <p style="font-size:14px; color:#666; margin-top:5px;">女儿墙和幕墙冲突（Rhino）</p>
  </div>
</div>

#### 4.**成果输出**

- 根据 BIM 模型协同成果，解决冲突问题，保证施工顺利落地。

---

### 🔮总结与反思

- **负责内容**：Rhino、Revit 模型搭建，冲突检测。
- **难点**：首次使用 Revit，建模和协同工作方面不够熟悉。
- **解决方案**：阅读 Revit 相关资料，学习如何利用族进行参数化建模。
- **经验总结**：本项目学习并实践了 Revit 建模技能，理解了协同工作的方便和重要性。
