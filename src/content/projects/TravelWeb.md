---
title: 旅游服务预订平台
description: 基于 PHP 和 MySQL 开发的响应式旅游服务预订平台，支持酒店、航班、接驳车及导游一站式预订
image: /images/TravelWeb/cover.jpeg
category: FullStack
---

<style>
.masonry {
  column-count: 3;
  column-gap: 10px;
}
.masonry img {
  width: 100%;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.masonry img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}
@media (max-width: 768px) {
  .masonry { column-count: 2; }
}
@media (max-width: 480px) {
  .masonry { column-count: 1; }
}
</style>

### 🧭项目背景

**在线 Demo**： [访问网站](https://meiyuan.infinityfreeapp.com)

该项目是我在硕士期间《Informatics》课程的最终项目，目标是构建一个**旅游预订服务平台**，帮助用户高效获取并预定旅行所需的各类服务，包括：

- 🏨 酒店预订
- ✈️ 航班预订
- 🚐 接驳车 (Shuttle) 预订
- 🧭 导游预约服务

系统使用**XAMPP 技术栈**（Windows, Apache, MySQL, PHP, Perl）开发，实现了一个完整的前后端数据交互型网站。

---

### 🧱技术栈

- **开发环境**：XAMPP（PHP + MySQL + Apache）
- **语言与工具**：
  - 后端：PHP
  - 前端：HTML, CSS, JavaScript
  - 数据库：MySQL
  - 数据管理：PhpMyAdmin
- **部署**：InfinityFree 免费托管平台

---

### 🧩主要功能模块

| 功能模块              | 说明                                           |
| --------------------- | ---------------------------------------------- |
| 首页(Home)            | 介绍与快速入口导航                             |
| 酒店搜索页(Hotel)     | 按城市、入住人数搜索                           |
| 酒店信息页(Hotel)     | 展示酒店名称、位置、价格、星级、图片等         |
| 航班搜索页(Flight)    | 按始发地、目的地、出发日期、乘客人数搜索       |
| 航班信息页(Flight)    | 展示始发地、目的地、出发/到达时间等            |
| 接驳车搜索页(Shuttle) | 按机场名称、下车口搜索                         |
| 接驳车信息页(Shuttle) | 展示车辆类型、价格、评分等                     |
| 导游搜索页(Guide)     | 按城市、游玩天数、预算、接待人数搜索           |
| 导游信息页(Guide)     | 展示负责城市、时长、价格、接待人数、所属公司等 |
| 预定页(Booking)       | 提交用户预定信息                               |

---

### 🧑‍💻具体实现

- 独立完成项目需求分析
- phpMyAdmin 数据库平台构建相关表格数据
- 使用 PHP 与 MySQL 进行数据库设计与数据动态绑定
- 编写 SQL 查询语句，支持按分类与关键字筛选数据
- 设计响应式前端页面并集成后端内容输出

---

### 🖼️项目界面一览

<div class="masonry" style="padding: 0 5%">
  <img src="/images/TravelWeb/home.jpeg" alt="home">
  <img src="/images/TravelWeb/about.jpeg" alt="about">
  <img src="/images/TravelWeb/service.jpeg" alt="service">
  <img src="/images/TravelWeb/book.jpeg" alt="book">
  <img src="/images/TravelWeb/hotel_search.jpeg" alt="hotel_search">
  <img src="/images/TravelWeb/hotel_result.jpeg" alt="hotel_result">
  <img src="/images/TravelWeb/flight_search.jpeg" alt="flight_search">
  <img src="/images/TravelWeb/flight_result.jpeg" alt="flight_result">
  <img src="/images/TravelWeb/bus_search.jpeg" alt="bus_search">
  <img src="/images/TravelWeb/bus_result.jpeg" alt="bus_result">
  <img src="/images/TravelWeb/guide_search.jpeg" alt="guide_search">
  <img src="/images/TravelWeb/guide_result.jpeg" alt="guide_result">
</div>

---

### 📈可扩展方向

- 增加用户注册、登录与预订功能，实现完整电商流程
- 加入用户评价、收藏功能，提升交互性
- 使用 Vue.js 或 React 重构前端以增强动态表现力
