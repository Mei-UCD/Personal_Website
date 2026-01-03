---
title: Travel Service Booking Platform
description: A responsive travel service booking platform developed with PHP and MySQL, supporting hotels, flights, shuttles, and tour guide reservations in one place.
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

### 🧭 Project Background

**Online Demo**: [Visit Site](https://meiyuan.infinityfreeapp.com)

This project was my final assignment for the **Informatics** course during my master's program. The goal was to build a **travel service booking platform** to help users efficiently find and reserve various travel services, including:

- 🏨 Hotel booking
- ✈️ Flight booking
- 🚐 Shuttle booking
- 🧭 Tour guide reservation

The system was developed using the **XAMPP stack** (Windows, Apache, MySQL, PHP, Perl), creating a complete interactive website with both frontend and backend data handling.

---

### 🧱 Technology Stack

- **Development Environment**: XAMPP (PHP + MySQL + Apache)
- **Languages & Tools**:
  - Backend: PHP
  - Frontend: HTML, CSS, JavaScript
  - Database: MySQL
  - Data Management: PhpMyAdmin
- **Deployment**: InfinityFree free hosting platform

---

### 🧩 Main Functional Modules

| Module         | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| Home           | Overview and quick navigation                                 |
| Hotel Search   | Search by city and number of guests                           |
| Hotel Info     | Display hotel name, location, price, rating, images           |
| Flight Search  | Search by departure, destination, date, passengers            |
| Flight Info    | Display departure, destination, departure/arrival times       |
| Shuttle Search | Search by airport and drop-off point                          |
| Shuttle Info   | Display vehicle type, price, rating                           |
| Guide Search   | Search by city, duration, budget, number of people            |
| Guide Info     | Display city, duration, price, group size, affiliated company |
| Booking        | Submit user reservation information                           |

---

### 🧑‍💻 Implementation Details

- Independently completed project requirements analysis
- Built database tables on phpMyAdmin
- Designed database with PHP & MySQL and implemented dynamic data binding
- Wrote SQL queries to filter data by category and keywords
- Designed responsive frontend pages integrated with backend content output

---

### 🖼️ Project Interface Preview

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

### 📈 Potential Extensions

- Add user registration, login, and booking features to implement a full e-commerce workflow
- Introduce user reviews and favorites to enhance interactivity
- Rebuild the frontend with Vue.js or React to improve dynamic performance
