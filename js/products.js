// Technical specifications displayed in the products popup
const products = {
    'Industrial': {
        shortDescription: '💧 pH · ⚗️ ORP · ⚡ EC · 🌡️ 2× Temperature · 🔌 3× Relay Outputs · 📡 Wi-Fi',
        description: 'DIN Rail mounted multifunction Wi-Fi controller designed for 💧 water treatment, 🌱 hydroponics, 🐠 aquariums, 🏊 swimming pools, ☀️ solar thermal systems, 🌡️ HVAC applications and ⚙️ general process automation.',
        cardImage: 'industrial.png',
        price: 85,
        detailImages: [ '../assets/products/industrial-detail-1.png', '../assets/products/industrial-detail-2.png'],
        manual: 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_INDUSTRIAL.pdf',
        specs: {
            'Power supply': ['Power supply ⚡', '230V AC'],
            'Outputs': ['Relay outputs 🔌', '3 relay NO outputs 250Vac 3A'],
            'pH': ['pH 💧', '0.01 – 14.00'],
            'ORP': ['ORP ⚗️', '-1800 – +1800 mV'],
            'EC': ['EC ⚡', '10 – 20,000 µS/cm'],
            'TDS': ['TDS 💎', '6 – 12,800 ppm'],
            'Salinity': ['Salinity 🧂', '6 – 11,000 ppm'],
            'Temperature 1': ['Temperature 1 🌡️', 'digital 0-80°C'],
            'Temperature 2': ['Temperature 2 🌡️', 'analog 0-150°C'],
            'Average Temp': ['Average Temp Ø🌡️', '(T2+T1)/2'],
            'Diff Temp': ['Diff Temp Δ🌡️', 'T2-T1'],
            'Control type': [ 'Control Type ⚙️', 'ON-OFF with Hysteresis, logic Positive/negative, Timer associated'],
            'Mounting': ['Mounting 🛠️', 'Din Rail'],
            'Dimensions': ['Dimensions 📐', '105 × 90 × 60 mm'],
            'Connectivity': ['Connectivity 📡', 'WiFi in 🔗Access Point (No Router) and in 🌐 Station (with router)' ],
            'Smart functions': ['Smart Functions 🌐', 'Home Assistant, HTTP Commands' ],
            'Advanced Functions': [ 'Advanced Functions ⚙️', '🛡️ Sentinel, 📊 Reporter, 📧 Email Notification, 🤖 Copilot'],
            'Manual': ['Manual 📖', 'View Manual']
        }
    },

    'Premium': {
        shortDescription: '💧 pH · ⚗️ ORP · ⚡ EC · 🌡️ 2× Temperature · 🌊 2× Dosing Pumps · 🔌 1× USB-A Output · 📡 Wi-Fi',
        description: 'Wall Mounting multifunction Wi-Fi controller designed for water treatment, hydroponics, aquariums, ' +
                     'swimming pools, solar thermal systems, HVAC applications, and general process automation, ' +
                     'provided with 2 built in dosing pumps and a USB-A output for additional dosing or control.',
        cardImage: 'premium.jpg',
        price: 109,
        detailImages: [ '../assets/products/premium-detail-1.jpg', '../assets/products/premium-detail-2.jpg'],
        manual: 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_PREMIUM.pdf',
        specs: {
            'Power supply': ['Power supply ⚡', '12V DC (power adapter included)'],
            'Outputs': ['Outputs 🌊', '2 Built in Pumps 60ml/min, 1 USB-A output'],
            'pH': ['pH 💧', '0.01 – 14.00'],
            'ORP': ['ORP ⚗️', '-1800 – +1800 mV'],
            'EC': ['EC ⚡', '10 – 20,000 µS/cm'],
            'TDS': ['TDS 💎', '6 – 12,800 ppm'],
            'Salinity': ['Salinity 🧂', '6 – 11,000 ppm'],
            'Temperature 1': ['Temperature 1 🌡️', 'digital 0-80°C'],
            'Temperature 2': ['Temperature 2 🌡️', 'analog 0-150°C'],
            'Average Temp': ['Average Temp Ø🌡️', '(T2+T1)/2'],
            'Diff Temp': ['Diff Temp Δ🌡️', 'T2-T1'],
            'Control type': ['Control Type ⚙️', 'ON-OFF with Hysteresis, logic Positive/negative, Timer associated'],
            'Mounting': ['Mounting 🛠️', 'Wall Mounting'],
            'Dimensions': ['Dimensions 📐', '105 × 90 × 60 mm'],
            'Connectivity': ['Connectivity 📡', 'WiFi in 🔗Access Point (No Router) and in 🌐 Station (with router)'],
            'Smart functions': ['Smart Functions 🌐', 'Home Assistant, HTTP Commands'],
            'Advanced Functions': ['Advanced Functions ⚙️', '🛡️ Sentinel, 📊 Reporter, 📧 Email Notification, 🤖 Copilot'],
            'Manual': ['Manual 📖', 'View Manual']
        }
    },

    'Modular': {
        shortDescription: '💧 pH · ⚗️ ORP · ⚡ EC · 🌡️ 2× Temperature · 🔌 3× USB-A Outputs · 📡 Wi-Fi',
        description: 'The central controller for building a flexible system around your water quality and dosing needs.',
        cardImage: 'modular-controller.png',
        price: 78,
        detailImages: [ '../assets/products/modular-controller-detail-1.png', '../assets/products/modular-controller-detail-2.png'],
        manual: 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_MODULAR.pdf',
        specs: {
            'Power supply': ['Power supply ⚡', '12V DC (power adapter included)'],
            'Outputs': ['Outputs 🔌', '3 USB-A Outputs'],
            'pH': ['pH 💧', '0.01 – 14.00'],
            'ORP': ['ORP ⚗️', '-1800 – +1800 mV'],
            'EC': ['EC ⚡', '10 – 20,000 µS/cm'],
            'TDS': ['TDS 💎', '6 – 12,800 ppm'],
            'Salinity': ['Salinity 🧂', '6 – 11,000 ppm'],
            'Temperature 1': ['Temperature 1 🌡️', 'digital 0-80°C'],
            'Temperature 2': ['Temperature 2 🌡️', 'analog 0-150°C'],
            'Average Temp': ['Average Temp Ø🌡️', '(T2+T1)/2'],
            'Diff Temp': ['Diff Temp Δ🌡️', 'T2-T1'],
            'Control type': ['Control Type ⚙️', 'ON-OFF with Hysteresis, logic Positive/negative, Timer associated'],
            'Mounting': ['Mounting 🛠️', 'Wall Mounting'],
            'Dimensions': ['Dimensions 📐', '105 × 90 × 60 mm'],
            'Connectivity': ['Connectivity 📡', 'WiFi in 🔗Access Point (No Router) and in 🌐 Station (with router)'],
            'Smart functions': ['Smart Functions 🌐', 'Home Assistant, HTTP Commands'],
            'Advanced Functions': ['Advanced Functions ⚙️', '🛡️ Sentinel, 📊 Reporter, 📧 Email Notification, 🤖 Copilot'],
            'Manual': ['Manual 📖', 'View Manual']
        }
    },

    'Modular Plug': {
        shortDescription: '🔌 Schuko Plug Extension · 🎛️ USB-A Controlled · 🧩 Modular System Expansion',
        description: 'A compact expansion module that connects additional control and dosing functions to a modular setup.',
        cardImage: 'modular-plug.png',
        price: 45,
        detailImages: [ '../assets/products/modular-plug-detail-1.jpg', '../assets/products/modular-plug-detail-2.jpg'],
        manual: 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_MODULAR.pdf',
        specs: {
            'Power supply': ['Power supply ⚡', '230V AC'],
            'Inputs': ['Inputs 🔌', 'Power Plug 250Vac 3A // Drive 5V DC USB-A'],
            'Outputs': ['Outputs 🌊', 'Power Plug 250Vac 3A'],
            'Mounting': ['Mounting 🛠️', 'Power Plug'],
            'Dimensions': ['Dimensions 📐', 'To be confirmed'],
            'Manual': ['Manual 📖', 'View Manual']
        }
    },

    'Modular Pump 60': {
        shortDescription: '🌊 60 ml/min Dosing Pump · 🎛️ USB-A Controlled · 🧩 Modular System Expansion',
        description: 'A compact 60 ml dosing pump for precise, efficient control in smaller modular systems.',
        cardImage: 'modular-pump60.png',
        price: 55,
        detailImages: [ '../assets/products/modular-pump60-detail-1.jpg', '../assets/products/modular-pump60-detail-2.jpg'],
        manual: 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_MODULAR.pdf',
        specs: {
            'Power supply': ['Power supply ⚡', '12V DC'],
            'Inputs': ['Inputs 🔌', '12V DC (power adapter included) // Drive 5V DC USB-A'],
            'Outputs': ['Outputs 🌊', 'Peristaltic Pump 60 ml/min'],
            'Mounting': ['Mounting 🛠️', 'Wall mounting'],
            'Dimensions': ['Dimensions 📐', 'To be confirmed'],
            'Manual': ['Manual 📖', 'View Manual']
        }
    },

    'Modular Pump 180': {
        shortDescription: '🌊 180 ml/min Dosing Pump · 🎛️ USB-A Controlled · 🧩 Modular System Expansion',
        description: 'A balanced 180 ml dosing pump for everyday modular water treatment applications.',
        cardImage: 'modular-pump180.jpg',
        price: 60,
        detailImages: [ '../assets/products/modular-pump180-detail-1.jpg', '../assets/products/modular-pump180-detail-2.jpg'],
        manual: 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_MODULAR.pdf',
        specs: {
            'Power supply': ['Power supply ⚡', '12V DC'],
            'Inputs': ['Inputs 🔌', '12V DC (power adapter included) // Drive 5V DC USB-A'],
            'Outputs': ['Outputs 🌊', 'Peristaltic Pump 180 ml/min'],
            'Mounting': ['Mounting 🛠️', 'Wall mounting'],
            'Dimensions': ['Dimensions 📐', 'To be confirmed'],
            'Manual': ['Manual 📖', 'View Manual']
        }
    },

    'Modular Pump 500': {
        shortDescription: '🌊 500 ml/min Dosing Pump · 🎛️ USB-A Controlled · 🧩 Modular System Expansion',
        description: 'A higher-capacity 500 ml dosing pump for larger modular water systems.',
        cardImage: 'modular-pump500.jpg',
        price: 70,
        detailImages: [ '../assets/products/modular-pump500-detail-1.jpg', '../assets/products/modular-pump500-detail-2.jpg'],
        manual: 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_MODULAR.pdf',
        specs: {
            'Power supply': ['Power supply ⚡', '12V DC'],
            'Inputs': ['Inputs 🔌', '12V DC (power adapter included) // Drive 5V DC USB-A'],
            'Outputs': ['Outputs 🌊', 'Peristaltic Pump 500 ml/min'],
            'Mounting': ['Mounting 🛠️', 'Wall mounting'],
            'Dimensions': ['Dimensions 📐', 'To be confirmed'],
            'Manual': ['Manual 📖', 'View Manual']
        }
    },

    'Smart Plug pH/ORP': {
        shortDescription: '💧 pH / ⚗️ ORP  · 🔌 Relay Output · 📡 Wi-Fi',
        description: 'A connected plug for monitoring pH and ORP values and keeping water chemistry under control.',
        cardImage: 'smart-plug-ph-orp.jpg',
        price: 55,
        detailImages: [ '../assets/products/smart-plug-ph-orp-detail-1.jpg', '../assets/products/smart-plug-ph-orp-detail-2.jpg'],
        manual: 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_MODULAR.pdf',
        specs: {
            'Power supply': ['Power supply ⚡', '230V AC'],
            'Inputs': ['Inputs 🔌', 'Power Plug 250Vac 3A // Drive 5V DC USB-A'],
            'Outputs': ['Outputs 🌊', 'Power Plug 250Vac 3A'],
            'Mounting': ['Mounting 🛠️', 'Power Plug'],
            'Dimensions': ['Dimensions 📐', 'To be confirmed'],
            'Manual': ['Manual 📖', 'View Manual']
        }
    },

    'Smart Plug EC/Temp': {
        shortDescription: '⚡ EC · 💎 TDS · 🧂 Salinity · 🌡️ Temperature · 📡 Wi-Fi',
        description: 'A connected plug for reading conductivity and temperature in one compact monitoring solution.',
        cardImage: 'smart-plug-ec-temp.jpg',
        price: 55,
        detailImages: [ '../assets/products/smart-plug-ec-temp-detail-1.jpg', '../assets/products/smart-plug-ec-temp-detail-2.jpg'],
        manual: 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_MODULAR.pdf',
        specs: {
            'Power supply': ['Power supply ⚡', '230V AC'],
            'Inputs': ['Inputs 🔌', 'Power Plug 250Vac 3A // Drive 5V DC USB-A'],
            'Outputs': ['Outputs 🌊', 'Power Plug 250Vac 3A'],
            'Mounting': ['Mounting 🛠️', 'Power Plug'],
            'Dimensions': ['Dimensions 📐', 'To be confirmed'],
            'Manual': ['Manual 📖', 'View Manual']
        }
    },

    'Smart Pump 60': {
        shortDescription: '💧 pH / ⚗️ ORP  · 🌊 60 ml/min Dosing Pump  · 📡 Wi-Fi',
        description: 'The compact 60 ml smart dosing pump for precise control in smaller installations.',
        cardImage: 'smart-pump-60.jpg',
        price: 60,
        detailImages: [ '../assets/products/smart-pump-60-detail-1.jpg', '../assets/products/smart-pump-60-detail-2.jpg'],
        manual: 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_MODULAR.pdf',
        specs: {
            'Power supply': ['Power supply ⚡', '12V DC'],
            'Inputs': ['Inputs 🔌', '12V DC (power adapter included) // Drive 5V DC USB-A'],
            'Outputs': ['Outputs 🌊', 'Peristaltic Pump 60 ml/min'],
            'Mounting': ['Mounting 🛠️', 'Wall mounting'],
            'Dimensions': ['Dimensions 📐', 'To be confirmed'],
            'Manual': ['Manual 📖', 'View Manual']
        }
    },

    'Smart Pump 180': {
        shortDescription: '💧 pH / ⚗️ ORP  · 🌊 180 ml/min Dosing Pump  · 📡 Wi-Fi',
        description: 'The 180 ml smart dosing pump for reliable, balanced dosing in everyday systems.',
        cardImage: 'smart-pump-180.jpg',
        price: 65,
        detailImages: [ '../assets/products/smart-pump-180-detail-1.jpg', '../assets/products/smart-pump-180-detail-2.jpg'],
        manual: 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_MODULAR.pdf',
        specs: {
            'Power supply': ['Power supply ⚡', '12V DC'],
            'Inputs': ['Inputs 🔌', '12V DC (power adapter included) // Drive 5V DC USB-A'],
            'Outputs': ['Outputs 🌊', 'Peristaltic Pump 180 ml/min'],
            'Mounting': ['Mounting 🛠️', 'Wall mounting'],
            'Dimensions': ['Dimensions 📐', 'To be confirmed'],
            'Manual': ['Manual 📖', 'View Manual']
        }
    },

    'Smart Pump 500': {
        shortDescription: '💧 pH / ⚗️ ORP  · 🌊 500 ml/min Dosing Pump  · 📡 Wi-Fi',
        description: 'The 500 ml smart dosing pump for higher-capacity water treatment applications.',
        cardImage: 'smart-pump-500.jpg',
        price: 75,
        detailImages: [ '../assets/products/smart-pump-500-detail-1.jpg', '../assets/products/smart-pump-500-detail-2.jpg'],
        manual: 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_MODULAR.pdf',
        specs: {
            'Power supply': ['Power supply ⚡', '12V DC'],
            'Inputs': ['Inputs 🔌', '12V DC (power adapter included) // Drive 5V DC USB-A'],
            'Outputs': ['Outputs 🌊', 'Peristaltic Pump 500 ml/min'],
            'Mounting': ['Mounting 🛠️', 'Wall mounting'],
            'Dimensions': ['Dimensions 📐', 'To be confirmed'],
            'Manual': ['Manual 📖', 'View Manual']
        }
    },

    'Smart Sens pH/ORP': {
        shortDescription: '2c 💧 pH/⚗️ ORP ·  ♾️ Arduino Access · 📡 Wi-Fi',
        description: 'A smart sensor solution for live pH and ORP insight, helping maintain the right water balance.',
        cardImage: 'smart-sens-ph-orp.jpg',
        price: 45,
        detailImages: [ '../assets/products/smart-sens-ph-orp-detail-1.jpg', '../assets/products/smart-sens-ph-orp-detail-2.jpg'],
        manual: 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_SMART_SENS.pdf',
        specs: {
            'Power supply': ['Power supply ⚡', '230V AC'],
            'Inputs': ['Inputs 🔌', 'Power Plug 250Vac 3A // Drive 5V DC USB-A'],
            'Outputs': ['Outputs 🌊', 'Power Plug 250Vac 3A'],
            'Mounting': ['Mounting 🛠️', 'Power Plug'],
            'Dimensions': ['Dimensions 📐', 'To be confirmed'],
            'Manual': ['Manual 📖', 'View Manual']
        }
    },

    'Smart Sens EC/Temp': {
        shortDescription: '1x⚡EC/ 💎 TDS/🧂 Salinity 2x🌡️ Temperature ·  ♾️ Arduino Access · 📡 Wi-Fi',
        description: 'A smart sensor solution for live conductivity and temperature monitoring.',
        cardImage: 'smart-sens-ec-temp.jpg',
        price: 45,
        detailImages: [ '../assets/products/smart-sens-ec-temp-detail-1.jpg', '../assets/products/smart-sens-ec-temp-detail-2.jpg'],
        manual: 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_SMART_SENS.pdf',
        specs: {
            'Power supply': ['Power supply ⚡', '230V AC'],
            'Inputs': ['Inputs 🔌', 'Power Plug 250Vac 3A // Drive 5V DC USB-A'],
            'Outputs': ['Outputs 🌊', 'Power Plug 250Vac 3A'],
            'Mounting': ['Mounting 🛠️', 'Power Plug'],
            'Dimensions': ['Dimensions 📐', 'To be confirmed'],
            'Manual': ['Manual 📖', 'View Manual']
        }
    },

    'pH Probe': {
        shortDescription: '💧 pH probe electrode with BNC connector.',
        description: 'pH Electrode Probe BNC Connector for Laboratory Aquarium Hydroponic Water Analyzer',
        cardImage: 'probe-ph.png',
        price: 15,
        detailImages: [ '../assets/products/probe-ph-detail-1.png', '../assets/products/probe-ph-detail-2.png'],
        manual: null,
        specs: {
            'Connector': ['Connector 🔌', 'BNC'],
            'Range': ['Range 🌡️', '0-14.00 pH'],
            'CableLength': ['Cable Length 📏', '1 m'],
            'Rating': ['Electrical Rating ⚡', '5-75 ℃'],
        }
    },

    'ORP Probe': { 
        shortDescription: '⚗️ ORP probe electrode with BNC connector.',
        description: 'ORP Electrode Probe BNC Connector for Laboratory Aquarium Hydroponic Water Analyzer',
        cardImage: 'probe-orp.png',
        price: 25,
        detailImages: [ '../assets/products/probe-orp-detail-1.png', '../assets/products/probe-orp-detail-2.png'],
        manual: null,
        specs: {
            'Connector': ['Connector 🔌', 'BNC'],
            'Range': ['Range 🌡️', '-2000 ~ 2000 mv'],
            'CableLength': ['Cable Length 📏', '1 m'],
            'Rating': ['Electrical Rating ⚡', '5-75 ℃'],
        }
    },

    'EC Probe DCJack': {
        shortDescription: '⚡EC probe with DC Jack',
        description: 'EC TDS Salinity probe with DC Jack', 
        cardImage: 'probe-ec-DC.png',
        price: 20,
        detailImages: [ '../assets/products/probe-ec-DC-detail-1.png', '../assets/products/probe-ec-DC-detail-2.png'],
        manual: null,
        specs: {
            'Connector': ['Connector 🔌', 'DC Jack 3.6 mm'],
            'Range': ['Range 🌡️', '10-20000uS/cm'],
            'CableLength': ['Cable Length 📏', '1 m'],
            'Rating': ['Electrical Rating ⚡', 'Temperature 0-50°C, 10K B =3950 1% precision, pressure 0-0.5MPA costant K =0.05'],
        }
    },

    'EC Probe TB': {
        shortDescription: '⚡EC probe with Terminal Block', 
        description: 'EC TDS Salinity probe with Terminal Block',
        cardImage: 'probe-ec-TB.png',
        price: 20,
        detailImages: [ '../assets/products/probe-ec-TB-detail-1.png', '../assets/products/probe-ec-TB-detail-2.png'],
        manual: null,
        specs: {
            'Connector': ['Connector 🔌', 'Terminal Block'],
            'Range': ['Range 🌡️', '10-20000uS/cm'],
            'CableLength': ['Cable Length 📏', '1 m'],
            'Rating': ['Electrical Rating ⚡', '10K B =3950 1% precision'],
        }
    },

    'NTC DCJack': {
        shortDescription: '🌡️ Analog Temperature probe with DC Jack connector',
        description: '🌡️ Analog Temperature, waterproof probe with DC Jack connector',
        cardImage: 'probe-ntc-DC.png',
        price: 10,
        detailImages: [ '../assets/products/probe-ntc-DC-detail-1.png', '../assets/products/probe-ntc-DC-detail-2.png'],
        manual: null,
        specs: {
            'Connector': ['Connector 🔌', 'DC Jack 3.6 mm'],
            'Range': ['Range 🌡️', '-55 ~ +85'],
            'CableLength': ['Cable Length 📏', '1 m'],
            'Rating': ['Electrical Rating ⚡', '10K B =3950 1% precision'],
        }
    },

    'NTC TB': {
        shortDescription: '🌡️ Analog Temperature probe with Terminal Block connector',
        description: '🌡️ Analog Temperature, waterproof probe with Terminal Block connector',
        cardImage: 'probe-ntc-TB.png',
        price: 10,
        detailImages: [ '../assets/products/probe-ntc-TB-detail-1.png', '../assets/products/probe-ntc-TB-detail-2.png'],
        manual: null,
        specs: {
            'Connector': ['Connector 🔌', 'Terminal Block'],
            'Range': ['Range 🌡️', '-55 ~ +85'],
            'CableLength': ['Cable Length 📏', '1 m'],
            'Rating': ['Electrical Rating ⚡', '10K B =3950 1% precision'],
        }
    },

    'NTC HT TB': {
        shortDescription: '🌡️ Analog High Temperature probe with Terminal Block connector',
        description: '🌡️ Analog Temperature, waterproof probe with Terminal Block connector for extended measurement range',
        cardImage: 'probe-ntc-ht-TB.png',
        price: 10,
        detailImages: [ '../assets/products/probe-ntc-ht-TB-detail-1.png', '../assets/products/probe-ntc-ht-TB-detail-2.png'],
        manual: null,
        specs: {
            'Connector': ['Connector 🔌', 'Terminal Block'],
            'Range': ['Range 🌡️', '-55 to 180 ℃'],
            'CableLength': ['Cable Length 📏', '1 m'],
            'Rating': ['Electrical Rating ⚡', '10K B =3950 1% precision'],
        }
    },

    'NTC HT DCJack': {
        shortDescription: '🌡️ Analog High Temperature probe with DC Jack connector',
        description: '🌡️ Analog Temperature, waterproof probe with DC Jack connector for extended measurement range',
        cardImage: 'probe-ntc-ht-DC.png',
        price: 10,
        detailImages: [ '../assets/products/probe-ntc-ht-DC-detail-1.png', '../assets/products/probe-ntc-ht-DC-detail-2.png'],
        manual: null,
        specs: {
            'Connector': ['Connector 🔌', 'DC Jack 3.6mm'],
            'Range': ['Range 🌡️', '-55 to 180 ℃'],
            'CableLength': ['Cable Length 📏', '1 m'],
            'Rating': ['Electrical Rating ⚡', '10K B =3950 1% precision'],
        }
    },

    'Temp DS18 DCJack': {
        shortDescription: '🌡️ Digital Temperature probe with DC Jack connector',
        description: 'Digital Temperature, waterproof probe with DC Jack connector',
        cardImage: 'probe-ds18-DC.png',
        price: 10,
        detailImages: [ '../assets/products/probe-ds18-DC-detail-1.png', '../assets/products/probe-ds18-DC-detail-2.png'],
        manual: null,
        specs: {
            'Connector': ['Connector 🔌', 'DC Jack 3.6 mm'],
            'Range': ['Range 🌡️', '-55 ~ +85'],
            'CableLength': ['Cable Length 📏', '1 m'],
            'Rating': ['Electrical Rating ⚡', 'DS18B20 1-Wire Digital Temperature Sensor'],
        }
    },

    'Temp DS18 TB': {
        shortDescription: '🌡️ Digital Temperature probe with Terminal Block connector',
        description: 'Digital Temperature, waterproof probe with Terminal Block connector',
        cardImage: 'probe-ds18-TB.png',
        price: 10,
        detailImages: [ '../assets/products/probe-ds18-TB-detail-1.png', '../assets/products/probe-ds18-TB-detail-2.png'],
        manual: null,
        specs: {
            'Connector': ['Connector 🔌', 'Terminal Block'],
            'Range': ['Range 🌡️', '-55 ~ +85'],
            'CableLength': ['Cable Length 📏', '1 m'],
            'Rating': ['Electrical Rating ⚡', 'DS18B20 1-Wire Digital Temperature Sensor'],
        }
    }


};

const configuratorComponents = {
    default: {
        title: 'Configuration component',
        description: 'Choose the product option for this component example.',
        options: ['Industrial']
    },
    connectivity_access_point: {
        title: 'Direct connection (Access point)',
    description: 'Device is accessible directly via its own Wi-Fi network. ' +
        'No Internet needed, simple access with your Phone or Laptop. ' +
        'Wi-Fi credentials, access IP address can be modified by the user.',
    options: []
    },
    connectivity_remote: {
        title: 'Remote connection (All over the World)',
        description: 'By configuring Port Forwarding on your router, you can access and control the device remotely from anywhere in the world. ' +
        'No dedicated app required — simply connect through a standard web browser by using your global static IP address.',
        options: []
    },
    connectivity_station: {
        title: 'Network connection (Domestic Router)',
        description: 'Device connects to your existing Wi-Fi network. ' +
        'Access and control it from any Phone or Laptop on the same network. ' +
        'Network credentials and connection settings can be configured by the user.' +
        ' System supports also http protocol therefore is easily interfacable with Home Automation systems like Home Assistant.',
        options: []
    },
    connectivity_sps: {
        title: 'PLC Connectivity (e-PROFIBUS)',
        description: 'Device supports PROFIBUS communication for integration with SPS/PLC systems. ' +
        'Management registers can be accessed directly to read and write values, enabling external monitoring and control of the system.',
        options: []
    },
    control_unit_ec_temp: {
        title: 'EC and temperature control unit',
        description: 'Choose the smart EC and temperature control option.',
        options: ['Smart Plug EC/Temp']
    },
    control_unit_industrial: {
        title: 'DIN Rail Industrial Controller',
        description: 'DIN rail controller designed for electrical panel installation, featuring an integrated display and 3 relay outputs assignable to 4 independent internal control channels. ' +
        'Each channel supports configurable hysteresis logic and timer-based operation for precise control of load activation over time. ' +
        'Built-in Wi-Fi and web server provide direct, local network or remote access via router Port Forwarding, with integrated AI features such as Copilot and additional advanced functions. See product details for more information.',
        options: ['Industrial']
    },
    control_unit_modular: {
        title: 'Modular Controller',
        description: 'Expandable controller designed for wall-mounted or portable use. Powered via USB, it can also operate from a standard power bank, making it suitable for flexible and mobile installations. ' +
        'It can be used as a standalone monitoring unit or expanded into a complete control system by connecting Modular Pumps and Modular Plugs. ' +
        'Built-in Wi-Fi and web server provide direct, local network or remote access via router Port Forwarding, with configurable control logic, timers, integrated AI features such as Copilot, and additional advanced functions. See product details for more information.',
        options: ['Modular']
    },
    control_unit_premium: {
        title: 'Compact Premium Controller',
        description: 'Compact all-in-one controller designed as an elegant wall-mounted solution, featuring two integrated 60 ml/min dosing pumps for a clean and practical installation. ' +
        'It can operate as a complete monitoring and control system and includes a USB expansion port for additional Modular Pumps or Modular Plugs. ' +
        'Built-in Wi-Fi and web server provide direct, local network or remote access via router Port Forwarding, with configurable control logic, timers, integrated AI features such as Copilot, and additional advanced functions. See product details for more information.',
        options: ['Premium']
    },
    smart_plug_ec_temp: {
        title: 'Smart EC and Temperature Plug',
        description: 'Compact display-free controller designed for EC or analog temperature monitoring and control, with an extremely simple plug-and-play installation directly into a standard electrical outlet. ' +
        'It provides a controlled power outlet for connecting and automatically managing the desired electrical load according to the measured value. ' +
        'Built-in Wi-Fi and web server provide direct, local network or remote access via router Port Forwarding, with configurable control logic, timers, integrated AI features such as Copilot, and additional advanced functions.',
        options: ['Smart Plug EC/Temp']
    },
    smart_plug_ph_orp: {
        title: 'Smart pH and ORP Plug',
        description: 'Compact display-free controller designed for pH or ORP monitoring and control, with an extremely simple plug-and-play installation directly into a standard electrical outlet. ' +
        'It provides a controlled power outlet for connecting and automatically managing the desired electrical load according to the measured value. ' +
        'Built-in Wi-Fi and web server provide direct, local network or remote access via router Port Forwarding, with configurable control logic, timers, integrated AI features such as Copilot, and additional advanced functions.',
        options: ['Smart Plug pH/ORP']
    },
    smart_pump_ph_orp: {
        title: 'Smart pH and ORP Pump',
        description: 'Compact dosing pump designed for precise pH or ORP control, with an extremely simple plug-and-play installation directly into a standard electrical outlet. ' +
        'It provides a controlled power outlet for connecting and automatically managing the desired electrical load according to the measured value. ' +
        'Built-in Wi-Fi and web server provide direct, local network or remote access via router Port Forwarding, with configurable control logic, timers, integrated AI features such as Copilot, and additional advanced functions.',
        options: ['Smart Pump 60', 'Smart Pump 180', 'Smart Pump 500']
    },
    smart_sens_ec_temp: {
        title: 'Smart EC and Temperature Sensor',
        description: 'Compact display-free sensor designed for EC and temperature monitoring, ideal for distributed installations and Smart Home systems. ' +
        'Its compact and modular design allows multiple sensing points to be easily distributed throughout the installation for flexible and scalable monitoring. ' +
        'Built-in Wi-Fi and web server provide direct, local network or remote access via router Port Forwarding, with easy integration into Home Automation systems and additional advanced functions.',
        options: ['Smart Sens EC/Temp']
    },
    smart_sens_ph_orp: {
        title: 'Smart pH and ORP Sensor',
        description: 'Compact display-free sensor designed for pH and ORP monitoring, ideal for distributed installations and Smart Home systems. ' +
        'Its compact and modular design allows multiple sensing points to be easily distributed throughout the installation for flexible and scalable monitoring. ' +
        'Built-in Wi-Fi and web server provide direct, local network or remote access via router Port Forwarding, with easy integration into Home Automation systems and additional advanced functions.',
        options: ['Smart Sens pH/ORP']
    },
    modular_plug: {
        title: 'Modular plug',
        description: 'The Modular Plug is designed to be controlled via USB-A, allowing EDULCOWATER systems to be easily expanded with an additional controlled electrical outlet. ' +
        'It allows you to connect and control a general-purpose electrical load according to your application requirements. ' +
        'The connected load can be managed directly by the EDULCOWATER system.',
        options: ['Modular Plug']
    },
    modular_pump: {
        title: 'Modular pump',
        description: 'The Modular Pump is designed to be controlled via USB-A, allowing EDULCOWATER systems to be easily expanded with additional dosing channels. ' +
        'Different pump versions are available in this category to meet different flow-rate requirements. ' +
        'Each Modular Pump uses an external power supply, while control and communication are managed directly by the EDULCOWATER system.',
        options: ['Modular Pump 60', 'Modular Pump 180', 'Modular Pump 500']
    },
    probe_ec_jack: {
        title: 'EC Jack probe',
        description: 'EC probe designed for conductivity measurements from 0 to 2,000 µS with 1 µS resolution, and from 2,000 to 20,000 µS with 10 µS resolution. ' +
        'The probe includes an integrated NTC sensor for simultaneous temperature measurement and temperature compensation. ' +
        'Supplied with a DC Jack connector for quick and convenient connection.',
        options: ['EC Probe DCJack']
    },
    probe_ec_tb: {
        title: 'EC probe with Terminal Block',
        description: 'EC probe designed for conductivity measurements from 0 to 2,000 µS with 1 µS resolution, and from 2,000 to 20,000 µS with 10 µS resolution. ' +
        'The probe includes an integrated NTC sensor for simultaneous temperature measurement and temperature compensation. ' +
        'Supplied with a Terminal Block connection for simple and reliable installation.',
        options: ['EC Probe TB']
    },
    probe_ph_orp: {
        title: 'pH and ORP probes',
        description: 'Professional pH and ORP probes equipped with a standard BNC connector for quick and reliable connection. ' +
        'The pH probe provides a measurement range from 0 to 14 pH, while the ORP (Redox) probe measures from -200 to +200 mV. ' +
        'Designed for reliable and continuous water quality monitoring.',
        options: ['pH Probe', 'ORP Probe']
    },
    probe_temp_analog_jack: {
        title: 'Analog temperature probes with Jack connector',
        description: 'Immersion analog temperature probe designed for reliable measurements over a wide temperature range. ' +
        'The standard version measures temperatures up to 60°C, while the High Temperature version supports measurements up to 150°C. ' +
        'Both versions feature a Jack connector for quick and convenient connection.',
        options: ['NTC DCJack', 'NTC HT DCJack']
    },
    probe_temp_analog_tb: {
        title: 'Analog temperature probe with terminal block',
        description: 'Immersion analog temperature probe designed for reliable measurements over a wide temperature range. ' +
        'The standard version measures temperatures up to 60°C, while the High Temperature version supports measurements up to 150°C. ' +
        'Both versions are designed for immersion applications and are supplied with a terminal block for easy connection.',
        options: ['NTC TB', 'NTC HT TB']
    },
    probe_temp_digital_tb: {
        title: 'Digital temperature probe DS18 with terminal block',
        description: 'Immersion digital temperature probe designed for precise and reliable temperature measurements. ' +
        'Suitable for continuous monitoring in applications with temperatures up to 60°C. ' +
        'Supplied with terminal block for simple and secure connection.',
        options: ['Temp DS18 TB']
    }
};

window.productCatalog = products;
window.configuratorComponents = configuratorComponents;

// Loads product data into the product cards after prices are available.
const loadProductCards = () => {
    document.querySelectorAll('.product-card').forEach((productCard) => {
        const productName = productCard.querySelector('.add-to-cart').dataset.product;
        const product = products[productName];

        if (!product) return;

        productCard.querySelector('.product-name').textContent = productName;
        productCard.querySelector('.product-short-description').textContent = product.shortDescription;

        productCard.querySelector('.product-price').textContent = product.price === undefined
            ? ''
            : `Price: € ${Number(product.price).toFixed(2).replace('.', ',')}`;

        const image = document.createElement('img');
        image.src = `../assets/products/${product.cardImage}`;
        image.alt = productName;

        productCard.querySelector('.product-visual').replaceChildren(image);
    });
};

// Create and add the product details popup to the page.
const productModal = document.createElement('div');
productModal.className = 'product-modal';
productModal.innerHTML = `
    <div class="product-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
        <button class="product-modal-close" type="button" aria-label="Close product details">×</button>
        <h2 id="product-modal-title"></h2>
        <p class="product-modal-description"></p>
        <div class="product-modal-content">
            <div class="product-modal-layout">
                <dl class="product-modal-spec-table"></dl>
                <div class="product-modal-gallery">
                    <img src="" alt="" hidden>
                    <img src="" alt="" hidden>
                </div>
            </div>
        </div>
    </div>
`;
document.body.append(productModal);

// Populate the product specification table from products[productName].specs
const renderProductSpecs = (product) => {
    const specTable = productModal.querySelector('.product-modal-spec-table');
    specTable.innerHTML = '';
    Object.entries(product.specs).forEach(([specKey, [label, value]]) => {
        if (product.manual && specKey.toLowerCase() === 'manual') return;
        const row = document.createElement('div');
        row.innerHTML = `
            <dt>${label}</dt>
            <dd>${value}</dd>
        `;
        specTable.append(row);
    });
    if (product.manual) {
        const manualRow = document.createElement('div');
        manualRow.innerHTML = `
            <dt>Manual 📖</dt>
            <dd>
                <a href="${product.manual}"
                   target="_blank"
                   rel="noopener noreferrer">
                    View manual ↗
                </a>
            </dd>
        `;
        specTable.append(manualRow);
    }
};


const openProductDetails = (productName) => {
    const product = products[productName];
    if (!product) return;

    productModal.querySelector('.product-modal-dialog').classList.add('product-modal-dialog--detailed');
    const galleryImages = productModal.querySelectorAll('.product-modal-gallery img');
    productModal.querySelector('#product-modal-title').textContent = productName;
    productModal.querySelector('.product-modal-description').textContent = product.description || 'Product details coming soon.';
    renderProductSpecs(product);

    galleryImages.forEach((galleryImage, index) => {
        const detailImage = product.detailImages[index];
        galleryImage.src = detailImage || '';
        galleryImage.alt = detailImage ? `${productName} detail ${index + 1}` : '';
        galleryImage.hidden = !detailImage;
    });

    productModal.classList.add('is-open');
};

window.openProductDetails = openProductDetails;

document.querySelectorAll('.discover-link').forEach((discoverLink) => {
    discoverLink.addEventListener('click', (event) => {
        event.preventDefault();
        const productName = discoverLink.closest('.product-card').querySelector('.add-to-cart').dataset.product;
        openProductDetails(productName);
    });
});

// popup closure function
const closeProductModal = () => {
    productModal.classList.remove('is-open');
};

// popup population function
productModal.querySelector('.product-modal-close').addEventListener('click', closeProductModal);
productModal.addEventListener('click', (event) => {
    if (event.target === productModal) closeProductModal();
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeProductModal();
});

// Render cards from the product data.
loadProductCards();
