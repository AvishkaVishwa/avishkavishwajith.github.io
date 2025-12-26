---
layout: default
title: Home
---

<section style="padding: 20px 0;">
    <h1 style="font-size: clamp(2.5rem, 8vw, 4.5rem); font-weight: 800; color: #fff; line-height: 1; letter-spacing: -2px;">{{ site.title }}</h1>
    <p style="color: var(--accent); font-family: var(--font-mono); font-size: 1.25rem; margin-top: 1rem; font-weight: 700;">
        Automation & Electronics Enthusiast
    </p>
    <p style="max-width: 700px; font-size: 1.15rem; color: var(--text-muted); margin: 2rem 0 3rem; line-height: 1.7;">
        Undergraduate in <strong>Instrumentation & Automation Technology</strong>. Building strong foundations in embedded systems, IoT, and circuit design at the University of Colombo.
    </p>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="{{ '/projects/' | relative_url }}" class="btn">View Portfolio <i class="fas fa-arrow-right"></i></a>
        <a href="mailto:{{ site.email }}" style="color: var(--text-main); text-decoration: none; display: flex; align-items: center; font-family: var(--font-mono); border: 1px solid var(--border); padding: 0.8rem 1.5rem; border-radius: 4px; font-size: 0.9rem;">Contact Me</a>
    </div>
</section>

<section style="margin-top: 8rem;">
    <h2 class="section-title">Technical Expertise</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
        <div style="background: var(--surface-dark); padding: 2rem; border-radius: 8px; border: 1px solid var(--border);">
            <i class="fas fa-microchip" style="color: var(--accent); font-size: 1.8rem; margin-bottom: 1.5rem;"></i>
            <h3 style="font-family: var(--font-mono); margin-bottom: 0.5rem; color: #fff;">Embedded Systems</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">ESP32, STM32, Arduino, AVR (ATmega328P). Bare-metal & RTOS.</p>
        </div>
        <div style="background: var(--surface-dark); padding: 2rem; border-radius: 8px; border: 1px solid var(--border);">
            <i class="fas fa-network-wired" style="color: var(--accent); font-size: 1.8rem; margin-bottom: 1.5rem;"></i>
            <h3 style="font-family: var(--font-mono); margin-bottom: 0.5rem; color: #fff;">IoT & Connectivity</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">MQTT, Blynk, Wireless Protocols, Cloud Integration.</p>
        </div>
        <div style="background: var(--surface-dark); padding: 2rem; border-radius: 8px; border: 1px solid var(--border);">
            <i class="fas fa-layer-group" style="color: var(--accent); font-size: 1.8rem; margin-bottom: 1.5rem;"></i>
            <h3 style="font-family: var(--font-mono); margin-bottom: 0.5rem; color: #fff;">PCB Engineering</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">KiCad, Altium Designer, Multi-layer Layout, Power Design.</p>
        </div>
    </div>
</section>
