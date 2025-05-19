**IoT Project Proposal Document: Smart AC and Smart Lighting Automation**

---

**1. Project Title**
Smart Environment Automation System using IoT

---

**2. Objective**
To develop a smart automation system for Air Conditioning and Lighting using IoT-based embedded devices, sensors, and Wi-Fi modules, aiming to optimize energy consumption and improve convenience in office/home environments.

---

**3. Scope of the Project**

* Automate air conditioning based on presence and temperature.
* Automate lighting based on human presence and ambient light.
* Remote control and monitoring via mobile/web app.
* Energy consumption analytics.

---

**4. Components and Technologies Used**

**Hardware**

* ESP32 (Wi-Fi + Bluetooth enabled microcontroller)
* ESP8266 (NodeMCU)
* Raspberry Pi 4 Model B
* PIR Sensor (HC-SR501)
* IR Receiver Module (TSOP38238)
* IR LED Emitter
* Relay Module (5V compatible)
* Temperature Sensor (DHT11/DHT22 or DS18B20)
* LDR (Light Dependent Resistor)
* Power Supply Modules

**Optional Components**

* Raspberry Pi Zero W
* Ultrasonic Sensor (HC-SR04)
* Real-Time Clock (DS3231)
* Solid State Relay (SSR)

**Software**

* Arduino IDE (for ESP programming)
* Python (for Raspberry Pi logic)
* MQTT (for device communication)
* Node-RED/Dashboard or Web App (UI for monitoring)
* Firebase, AWS IoT, Azure IoT, or Blynk for cloud sync and storage

---

**5. System Architecture Overview**

```
[PIR Sensor]    [IR Sensor]    [Temp/LDR Sensor]
      |              |                  |
    [ESP8266/ESP32 NodeMCU] --------- Wi-Fi --------- [Raspberry Pi]
                                                   |
                                        [Cloud Platform: AWS IoT / Azure IoT / Blynk]
                                                   |
                                           [Mobile/Web Dashboard]
```

---

**6. Features and Functionalities**

* Motion-based Lighting
* Temperature-Controlled AC
* IR Remote Learning and Replay
* Manual Override via IR remote/app
* Logging and Monitoring
* Energy Optimization Suggestions

---

**7. Implementation Phases**

**Phase 1: POC**

* Setup PIR with ESP to control a bulb.
* Setup temperature sensor + relay with ESP for AC prototype.
* Connect ESP to Raspberry Pi over MQTT.

**Phase 2: Integration**

* Build mobile/web interface (Node-RED or Flask/React App).
* Integrate Firebase, Blynk, AWS or Azure for remote data sync.

**Phase 3: Testing & Deployment**

* Install in a room or lab.
* Monitor performance.
* Deploy in multiple rooms/zones.

---

**8. Development Boards and Sensors**

**Development Boards:**

* ESP32
* ESP8266 (NodeMCU)
* Raspberry Pi 4 Model B
* Optional: Raspberry Pi Zero W

**Sensors and Modules:**

* PIR Motion Sensor (HC-SR501)
* IR Receiver Module (TSOP38238)
* IR LED Emitter
* Temperature Sensor (DHT11/DHT22 or DS18B20)
* LDR Sensor
* Relay Module (5V)
* Optional: Ultrasonic Sensor (HC-SR04), Solid State Relay, RTC (DS3231)

**Communication & Software Tools:**

* MQTT (Mosquitto Broker on RPi)
* Arduino IDE, Python, Node-RED, Firebase/AWS IoT/Azure IoT/Blynk
* Fritzing for circuit design

---

**9. Cloud Platform Suggestions**

| Platform          | Best For                             | Key Features                          | Cost                  | Notes                                       |
| ----------------- | ------------------------------------ | ------------------------------------- | --------------------- | ------------------------------------------- |
| **AWS IoT Core**  | Scalable enterprise solutions        | MQTT, device shadows, rules engine    | Pay-as-you-go         | Great for integrating with Lambda, S3, etc. |
| **Azure IoT Hub** | Microsoft ecosystem                  | Bi-directional messaging, IoT Central | Free + Standard tiers | Ideal for office integrations               |
| **Blynk**         | Rapid prototyping, mobile dashboards | Drag-n-drop UI, direct ESP support    | Free/Pro              | Great for DIY and small pilots              |
| **Firebase**      | Real-time sync                       | NoSQL DB + web/mobile integration     | Pay-as-you-go         | Easy for small apps                         |
| **ThingsBoard**   | Open-source flexibility              | Custom dashboards                     | Free/self-host        | Needs hosting setup                         |

---

**10. Estimated Cost**

| Item                          | Quantity | Cost/Unit | Total     |
| ----------------------------- | -------- | --------- | --------- |
| ESP8266/ESP32                 | 2        | ₹400      | ₹800      |
| Raspberry Pi 4                | 1        | ₹5000     | ₹5000     |
| PIR Sensor                    | 2        | ₹100      | ₹200      |
| IR Receiver                   | 2        | ₹50       | ₹100      |
| Relay Module                  | 2        | ₹150      | ₹300      |
| Misc (Wires, PSU, Breadboard) | -        | ₹1000     | ₹1000     |
| **Total Estimated Cost**      |          |           | **₹7400** |

---

**11. Conclusion**
This project demonstrates how embedded systems and IoT can optimize energy consumption and provide smart control over appliances. The solution is scalable and adaptable to other smart home applications. Multiple cloud platforms including AWS, Azure, and Blynk ensure flexibility in deployment and monitoring based on the scale and use case.

---
