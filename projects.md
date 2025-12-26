---
layout: default
title: Projects
---

<h1 class="section-title">Portfolio</h1>
<p style="color: var(--text-gray); margin-bottom: 4rem; max-width: 700px; font-size: 1.15rem; line-height: 1.7;">
    A comprehensive documentation of my technical research and development across <strong style="color: var(--text-light);">robotics, IoT, industrial automation, and embedded systems</strong>. Each project represents hands-on experience solving real-world engineering challenges.
</p>

<div class="portfolio-grid">
    <!-- Project 1: RoboCore 2.0 -->
    <div class="project-card">
        <span class="project-tech">ESP32-S3 / TB6612FNG / MPU6050 / Robotics</span>
        <h3>RoboCore 2.0</h3>
        <p>A custom self-balancing robot controller featuring advanced motion control and sensor fusion algorithms.  Implements PID control for stability and real-time IMU data processing. </p>
        <a href="/2025/12/26/robocore-intro.html" class="project-link">Read Full Article <i class="fas fa-arrow-right"></i></a>
    </div>

    <!-- Project 2: Greenhouse Monitoring -->
    <div class="project-card">
        <span class="project-tech">IoT / ESP8266 / Blynk / Sensors</span>
        <h3>Greenhouse Monitoring System</h3>
        <p>Full-stack IoT solution for environmental control and monitoring.  Integration of MQ-135, DHT11, and LDR sensors with real-time Blynk dashboard for remote monitoring and actuation.</p>
        <a href="https://github.com/AvishkaVishwa/Green-House-Monitoring-System" target="_blank" class="project-link">View Repository <i class="fas fa-external-link-alt"></i></a>
    </div>

    <!-- Project 3: Temperature Monitoring -->
    <div class="project-card">
        <span class="project-tech">AVR / ATmega328P / Bare-Metal C</span>
        <h3>Temperature Monitoring System</h3>
        <p>Bare-metal C development using interrupts and high-speed multiplexing for 4-digit 7-segment display control. Features highly accurate thermal sensing with real-time temperature display.</p>
        <a href="https://github.com/AvishkaVishwa/Microcontroller-Design-Project-Temperature-Monitoring-System" target="_blank" class="project-link">View Repository <i class="fas fa-external-link-alt"></i></a>
    </div>

    <!-- Project 4: Step Counter & Fall Detection -->
    <div class="project-card">
        <span class="project-tech">ESP32 / ESP-IDF / IMU / Wearable</span>
        <h3>Step Counter & Fall Detection</h3>
        <p>Wearable device utilizing MPU6050 signal processing via ESP-IDF to detect human movement patterns and emergency fall events. Implements real-time accelerometer and gyroscope data analysis.</p>
        <a href="https://github.com/AvishkaVishwa/ESP32-MPU6050-Step-Counter-Fall-Detection-System" target="_blank" class="project-link">View Repository <i class="fas fa-external-link-alt"></i></a>
    </div>

    <!-- Project 5: ESP32 Automation Board -->
    <div class="project-card">
        <span class="project-tech">IIoT / KiCad / PCB Design / Power</span>
        <h3>ESP32 Industrial Automation Board</h3>
        <p>Industrial-grade controller featuring 5 opto-isolated inputs and 4 SSR outputs.  Includes onboard buck regulation and galvanic isolation for reliable operation in harsh environments.</p>
        <a href="https://github.com/AvishkaVishwa/Auto_Board" target="_blank" class="project-link">View Repository <i class="fas fa-external-link-alt"></i></a>
    </div>

    <!-- Project 6: Sumo Robot -->
    <div class="project-card">
        <span class="project-tech">Robotics / ESP32 / Competition / 🏆 1st Runners-Up</span>
        <h3>Autonomous Sumo Robot</h3>
        <p>Competition-ready autonomous robot using ESP32 and TB6612FNG motor driver. Won 1st Runners-up at UoC FOT 2024. Features optimized object detection algorithms and aggressive competition strategy.</p>
        <a href="https://github.com/AvishkaVishwa/Sumo_Robot_2024" target="_blank" class="project-link">View Repository <i class="fas fa-external-link-alt"></i></a>
    </div>

    <!-- Project 7: Wireless Grow Light -->
    <div class="project-card">
        <span class="project-tech">IoT / Power Electronics / Agriculture</span>
        <h3>Wireless Grow Light System</h3>
        <p>Automated plant illumination system with remote actuator control for optimal plant growth conditions. Features wireless communication, scheduling, and adaptive lighting based on environmental conditions.</p>
        <a href="https://github.com/AvishkaVishwa" target="_blank" class="project-link">View Details <i class="fas fa-external-link-alt"></i></a>
    </div>

    <!-- Project 8: Custom Breakout Boards -->
    <div class="project-card">
        <span class="project-tech">KiCad / PCB Design / Tools</span>
        <h3>Custom Development Breakout Boards</h3>
        <p>USB-to-TTL and ESP32 Breakout boards designed in KiCad for streamlined development and prototyping workflows. Features professional-grade layout, ESD protection, and optimized routing.</p>
        <a href="https://github.com/AvishkaVishwa" target="_blank" class="project-link">View Details <i class="fas fa-external-link-alt"></i></a>
    </div>
</div>

<section style="margin-top: 6rem; padding:  3rem; background: var(--card-bg); border-radius: 12px; border: 1px solid var(--border-color);">
    <h2 style="color: var(--neon-green); font-size: 1.8rem; margin-bottom: 1.5rem;">Interested in Collaboration?</h2>
    <p style="font-size: 1.1rem; color: var(--text-gray); margin-bottom: 2rem;">
        I'm always open to working on innovative projects in embedded systems, robotics, and IoT. Let's build something amazing together!
    </p>
    <a href="mailto:{{ site.email }}" class="btn">Get In Touch <i class="fas fa-envelope"></i></a>
</section>
