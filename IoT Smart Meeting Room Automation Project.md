**IoT Smart Meeting Room Automation Project**

---

### **1. Requirement Specification Document**

#### **Project Title:**

IoT-Based Automation of Smart AC and Smart Lights in Meeting Rooms

#### **Objective:**

To automate the operation of air conditioning and lighting in organizational meeting rooms using PIR and IR sensors with embedded boards like ESP32 and Raspberry Pi. The aim is to optimize energy usage, enhance user convenience, and support environment-friendly practices.

#### **Scope:**

* Automate AC and lighting based on room occupancy
* Enable remote and scheduled control
* Real-time monitoring via dashboard
* Operate on existing Wi-Fi infrastructure
* Work completely on-premises

#### **Key Functional Requirements:**

1. **Motion Detection:** Detect occupancy using PIR sensors.
2. **AC & Light Control:** Use relay modules to switch appliances.
3. **Infrared Sensor:** Detect remote usage or presence via IR.
4. **Data Logging:** Record status logs of device usage.
5. **User Interface:** Simple dashboard for control and monitoring.
6. **Alert Mechanism:** Notify for long-running appliances or errors.

#### **Non-Functional Requirements:**

* Fast and stable device communication (low latency)
* Secure Wi-Fi communication
* Modular and scalable for multiple rooms

#### **Constraints:**

* Use only organization-approved Wi-Fi networks
* Maintain on-premise data storage and control

#### **Assumptions:**

* Reliable internet is available in meeting rooms
* Power sockets are accessible for devices

#### **Hardware Requirements:**

* ESP32 / ESP8266 boards
* Raspberry Pi (for local server)
* PIR sensors
* IR receivers
* Relay modules
* Jumper wires, resistors, breadboards

#### **Software Requirements:**

* Arduino IDE / PlatformIO
* Node-RED / Python Flask
* MQTT broker (Mosquitto)
* Grafana + InfluxDB or SQLite for logs

---

### **2. Project Planning Document**

#### **Project Phases & Timeline:**

| Phase                | Duration (Days) | Description                            |
| -------------------- | --------------- | -------------------------------------- |
| Requirement Analysis | 3               | Room survey, spec confirmation         |
| Planning             | 2               | Resource planning, architecture, roles |
| Design               | 4               | Circuit, network, UI/UX design         |
| Development          | 10              | Coding, wiring, server setup           |
| Testing              | 5               | Functional and integration testing     |
| Deployment           | 3               | Device installation in meeting rooms   |
| Maintenance Setup    | 2               | Dashboards, logs, training support     |

#### **Roles & Responsibilities:**

* **Project Lead:** Oversee project delivery
* **IoT Engineer:** Sensor/device setup and firmware
* **Software Developer:** Backend & dashboard
* **Network Admin:** Wi-Fi setup and IP assignments
* **Facilities Manager:** Room access and installations

#### **Tools to be Used:**

* **Project Tracking:** Trello / Jira
* **Documentation:** Google Docs / Notion
* **Design:** Lucidchart / Fritzing / Draw\.io
* **Source Code Management:** GitHub / GitLab

#### **Risk Assessment:**

| Risk                             | Mitigation                       |
| -------------------------------- | -------------------------------- |
| Network instability              | Use local fallback logic         |
| Power outages                    | Use UPS or backup power          |
| Sensor malfunctions              | Spare hardware and test protocol |
| Unauthorized access to dashboard | Local authentication or firewall |

#### **Milestones:**

1. Room audit and documentation – Day 3
2. Architecture and BOM freeze – Day 5
3. Working prototype – Day 14
4. Installation & Testing – Day 20
5. Final handover and demo – Day 25

---

Let me know if you'd like a Gantt chart or editable Excel tracker for this plan.
