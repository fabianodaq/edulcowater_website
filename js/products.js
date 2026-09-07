// Technical specifications displayed in the products popup
const products = {
    'Industrial': {
        shortDescription: '💧 pH · ⚗️ ORP · ⚡ EC · 🌡️ 2× Temperature · 🔌 3× Relay Outputs · 📡 Wi-Fi',
        shortDescription_en: 'pH · ORP · EC · 2× Temperature · 3× Relay Outputs · Wi-Fi',
        shortDescription_it: 'pH · ORP · EC · 2× Temperature · 3× Uscite relè · Wi-Fi',
        shortDescription_esp: 'pH · ORP · EC · 2× Temperatura · 3× Salidas de relé · Wi-Fi',
        shortDescription_de: 'pH · ORP · EC · 2× Temperatur · 3× Relaisausgänge · Wi-Fi',
        shortDescription_fr: 'pH · ORP · EC · 2× Température · 3× Sorties relais · Wi-Fi',
        description: 'DIN Rail mounted multifunction Wi-Fi controller designed for 💧 water treatment, 🌱 hydroponics, 🐠 aquariums, 🏊 swimming pools, ☀️ solar thermal systems, 🌡️ HVAC applications and ⚙️ general process automation.',
        description_en: 'DIN Rail mounted multifunction Wi-Fi controller designed for water treatment, hydroponics, aquariums, swimming pools, solar thermal systems, HVAC applications and general process automation.',
        description_it: 'Controller multifunzione Wi-Fi su guida DIN progettato per il trattamento dell’acqua, l’idroponica, gli acquari, le piscine, gli impianti solari termici, le applicazioni HVAC e l’automazione dei processi.',
        description_esp: 'Controlador multifunción Wi-Fi para montaje en carril DIN, diseñado para tratamiento de agua, hidroponía, acuarios, piscinas, sistemas solares térmicos, aplicaciones HVAC y automatización de procesos.',
        description_de: 'Multifunktionaler Wi-Fi-Controller für die DIN-Schienenmontage zur Wasseraufbereitung, Hydroponik, Aquarien, Schwimmbäder, solarthermische Anlagen, HVAC-Anwendungen und Prozessautomatisierung.',
        description_fr: 'Contrôleur multifonction Wi-Fi sur rail DIN conçu pour le traitement de l’eau, l’hydroponie, les aquariums, les piscines, les systèmes solaires thermiques, les applications HVAC et l’automatisation des procédés.',
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
        shortDescription_en: 'pH · ORP · EC · 2× Temperature · 2× Dosing Pumps · 1× USB-A Output · Wi-Fi',
        shortDescription_it: 'pH · ORP · EC · 2× Temperature · 2× Pompe dosatrici · 1× Uscita USB-A · Wi-Fi',
        shortDescription_esp: 'pH · ORP · EC · 2× Temperatura · 2× Bombas dosificadoras · 1× Salida USB-A · Wi-Fi',
        shortDescription_de: 'pH · ORP · EC · 2× Temperatur · 2× Dosierpumpen · 1× USB-A-Ausgang · Wi-Fi',
        shortDescription_fr: 'pH · ORP · EC · 2× Température · 2× Pompes doseuses · 1× Sortie USB-A · Wi-Fi',
        description: 'Wall Mounting multifunction Wi-Fi controller designed for water treatment, hydroponics, aquariums, ' +
                     'swimming pools, solar thermal systems, HVAC applications, and general process automation, ' +
                     'provided with 2 built in dosing pumps and a USB-A output for additional dosing or control.',
        description_en: 'Wall-mounted multifunction Wi-Fi controller for water treatment, hydroponics, aquariums, swimming pools, solar thermal systems, HVAC applications and process automation, with two built-in dosing pumps and a USB-A output.',
        description_it: 'Controller multifunzione Wi-Fi da parete per il trattamento dell’acqua, l’idroponica, gli acquari, le piscine, gli impianti solari termici, le applicazioni HVAC e l’automazione, con due pompe dosatrici integrate e un’uscita USB-A.',
        description_esp: 'Controlador multifunción Wi-Fi de pared para tratamiento de agua, hidroponía, acuarios, piscinas, sistemas solares térmicos, aplicaciones HVAC y automatización, con dos bombas dosificadoras integradas y una salida USB-A.',
        description_de: 'Multifunktionaler Wi-Fi-Wandcontroller für Wasseraufbereitung, Hydroponik, Aquarien, Schwimmbäder, solarthermische Anlagen, HVAC-Anwendungen und Automatisierung, mit zwei integrierten Dosierpumpen und einem USB-A-Ausgang.',
        description_fr: 'Contrôleur multifonction Wi-Fi mural pour le traitement de l’eau, l’hydroponie, les aquariums, les piscines, les systèmes solaires thermiques, les applications HVAC et l’automatisation, avec deux pompes doseuses intégrées et une sortie USB-A.',
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
        shortDescription_en: 'pH · ORP · EC · 2× Temperature · 3× USB-A Outputs · Wi-Fi',
        shortDescription_it: 'pH · ORP · EC · 2× Temperature · 3× Uscite USB-A · Wi-Fi',
        shortDescription_esp: 'pH · ORP · EC · 2× Temperatura · 3× Salidas USB-A · Wi-Fi',
        shortDescription_de: 'pH · ORP · EC · 2× Temperatur · 3× USB-A-Ausgänge · Wi-Fi',
        shortDescription_fr: 'pH · ORP · EC · 2× Température · 3× Sorties USB-A · Wi-Fi',
        description: 'The central controller for building a flexible system around your water quality and dosing needs.',
        description_en: 'The central controller for building a flexible system around your water quality and dosing needs.',
        description_it: 'Il controller centrale per costruire un sistema flessibile in base alle esigenze di qualità dell’acqua e dosaggio.',
        description_esp: 'El controlador central para construir un sistema flexible según tus necesidades de calidad del agua y dosificación.',
        description_de: 'Der zentrale Controller für ein flexibles System zur Wasserqualitätsüberwachung und Dosierung.',
        description_fr: 'Le contrôleur central pour construire un système flexible adapté à vos besoins de qualité de l’eau et de dosage.',
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
        shortDescription_en: 'Schuko Plug Extension · USB-A Controlled · Modular System Expansion',
        shortDescription_it: 'Prolunga con presa Schuko · Controllata via USB-A · Espansione del sistema modulare',
        shortDescription_esp: 'Extensión con enchufe Schuko · Controlada por USB-A · Expansión del sistema modular',
        shortDescription_de: 'Schuko-Steckdose · USB-A-Steuerung · Modulare Systemerweiterung',
        shortDescription_fr: 'Extension avec prise Schuko · Contrôlée par USB-A · Extension du système modulaire',
        description: 'A compact expansion module that connects additional control and dosing functions to a modular setup.',
        description_en: 'A compact expansion module that connects additional control and dosing functions to a modular setup.',
        description_it: 'Un modulo di espansione compatto che aggiunge funzioni di controllo e dosaggio a un sistema modulare.',
        description_esp: 'Un módulo de expansión compacto que añade funciones de control y dosificación a un sistema modular.',
        description_de: 'Ein kompaktes Erweiterungsmodul für zusätzliche Steuerungs- und Dosierfunktionen in einem modularen System.',
        description_fr: 'Un module d’extension compact qui ajoute des fonctions de contrôle et de dosage à un système modulaire.',
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
        shortDescription_en: '60 ml/min Dosing Pump · USB-A Controlled · Modular System Expansion',
        shortDescription_it: 'Pompa dosatrice 60 ml/min · Controllata via USB-A · Espansione del sistema modulare',
        shortDescription_esp: 'Bomba dosificadora de 60 ml/min · Controlada por USB-A · Expansión del sistema modular',
        shortDescription_de: '60-ml/min-Dosierpumpe · USB-A-Steuerung · Modulare Systemerweiterung',
        shortDescription_fr: 'Pompe doseuse 60 ml/min · Contrôlée par USB-A · Extension du système modulaire',
        description: 'A compact 60 ml dosing pump for precise, efficient control in smaller modular systems.',
        description_en: 'A compact 60 ml dosing pump for precise, efficient control in smaller modular systems.',
        description_it: 'Una pompa dosatrice compatta da 60 ml/min per un controllo preciso ed efficiente nei sistemi modulari più piccoli.',
        description_esp: 'Una bomba dosificadora compacta de 60 ml/min para un control preciso y eficiente en sistemas modulares pequeños.',
        description_de: 'Eine kompakte 60-ml/min-Dosierpumpe für präzise und effiziente Steuerung in kleineren modularen Systemen.',
        description_fr: 'Une pompe doseuse compacte de 60 ml/min pour un contrôle précis et efficace dans les petits systèmes modulaires.',
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
        shortDescription_en: '180 ml/min Dosing Pump · USB-A Controlled · Modular System Expansion',
        shortDescription_it: 'Pompa dosatrice 180 ml/min · Controllata via USB-A · Espansione del sistema modulare',
        shortDescription_esp: 'Bomba dosificadora de 180 ml/min · Controlada por USB-A · Expansión del sistema modular',
        shortDescription_de: '180-ml/min-Dosierpumpe · USB-A-Steuerung · Modulare Systemerweiterung',
        shortDescription_fr: 'Pompe doseuse 180 ml/min · Contrôlée par USB-A · Extension du système modulaire',
        description: 'A balanced 180 ml dosing pump for everyday modular water treatment applications.',
        description_en: 'A balanced 180 ml dosing pump for everyday modular water treatment applications.',
        description_it: 'Una pompa dosatrice da 180 ml/min equilibrata per le applicazioni quotidiane di trattamento dell’acqua.',
        description_esp: 'Una bomba dosificadora equilibrada de 180 ml/min para aplicaciones habituales de tratamiento de agua.',
        description_de: 'Eine ausgewogene 180-ml/min-Dosierpumpe für alltägliche Anwendungen der Wasseraufbereitung.',
        description_fr: 'Une pompe doseuse équilibrée de 180 ml/min pour les applications courantes de traitement de l’eau.',
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
        shortDescription_en: '500 ml/min Dosing Pump · USB-A Controlled · Modular System Expansion',
        shortDescription_it: 'Pompa dosatrice 500 ml/min · Controllata via USB-A · Espansione del sistema modulare',
        shortDescription_esp: 'Bomba dosificadora de 500 ml/min · Controlada por USB-A · Expansión del sistema modular',
        shortDescription_de: '500-ml/min-Dosierpumpe · USB-A-Steuerung · Modulare Systemerweiterung',
        shortDescription_fr: 'Pompe doseuse 500 ml/min · Contrôlée par USB-A · Extension du système modulaire',
        description: 'A higher-capacity 500 ml dosing pump for larger modular water systems.',
        description_en: 'A higher-capacity 500 ml dosing pump for larger modular water systems.',
        description_it: 'Una pompa dosatrice ad alta capacità da 500 ml/min per sistemi modulari di trattamento dell’acqua più grandi.',
        description_esp: 'Una bomba dosificadora de alta capacidad de 500 ml/min para sistemas modulares de agua más grandes.',
        description_de: 'Eine leistungsstarke 500-ml/min-Dosierpumpe für größere modulare Wassersysteme.',
        description_fr: 'Une pompe doseuse haute capacité de 500 ml/min pour les systèmes modulaires de traitement de l’eau plus importants.',
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
        shortDescription_en: 'pH / ORP · Relay Output · Wi-Fi',
        shortDescription_it: 'pH / ORP · Uscita relè · Wi-Fi',
        shortDescription_esp: 'pH / ORP · Salida de relé · Wi-Fi',
        shortDescription_de: 'pH / ORP · Relaisausgang · Wi-Fi',
        shortDescription_fr: 'pH / ORP · Sortie relais · Wi-Fi',
        description: 'A connected plug for monitoring pH and ORP values and keeping water chemistry under control.',
        description_en: 'A connected plug for monitoring pH and ORP values and keeping water chemistry under control.',
        description_it: 'Una presa connessa per monitorare i valori di pH e ORP e mantenere sotto controllo la chimica dell’acqua.',
        description_esp: 'Un enchufe conectado para controlar los valores de pH y ORP y mantener bajo control la química del agua.',
        description_de: 'Ein vernetzter Stecker zur Überwachung von pH- und ORP-Werten und zur Kontrolle der Wasserchemie.',
        description_fr: 'Une prise connectée pour surveiller les valeurs de pH et d’ORP et contrôler la chimie de l’eau.',
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
        shortDescription_en: 'EC · TDS · Salinity · Temperature · Wi-Fi',
        shortDescription_it: 'EC · TDS · Salinità · Temperatura · Wi-Fi',
        shortDescription_esp: 'EC · TDS · Salinidad · Temperatura · Wi-Fi',
        shortDescription_de: 'EC · TDS · Salzgehalt · Temperatur · Wi-Fi',
        shortDescription_fr: 'EC · TDS · Salinité · Température · Wi-Fi',
        description: 'A connected plug for reading conductivity and temperature in one compact monitoring solution.',
        description_en: 'A connected plug for reading conductivity and temperature in one compact monitoring solution.',
        description_it: 'Una presa connessa per misurare conducibilità e temperatura in una soluzione compatta di monitoraggio.',
        description_esp: 'Un enchufe conectado para medir la conductividad y la temperatura en una solución compacta de monitorización.',
        description_de: 'Ein vernetzter Stecker zur Messung von Leitfähigkeit und Temperatur in einer kompakten Überwachungslösung.',
        description_fr: 'Une prise connectée pour mesurer la conductivité et la température dans une solution compacte de surveillance.',
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
        shortDescription_en: 'pH / ORP · 60 ml/min Dosing Pump · Wi-Fi',
        shortDescription_it: 'pH / ORP · Pompa dosatrice 60 ml/min · Wi-Fi',
        shortDescription_esp: 'pH / ORP · Bomba dosificadora de 60 ml/min · Wi-Fi',
        shortDescription_de: 'pH / ORP · 60-ml/min-Dosierpumpe · Wi-Fi',
        shortDescription_fr: 'pH / ORP · Pompe doseuse 60 ml/min · Wi-Fi',
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
        shortDescription_en: 'pH / ORP · 180 ml/min Dosing Pump · Wi-Fi',
        shortDescription_it: 'pH / ORP · Pompa dosatrice 180 ml/min · Wi-Fi',
        shortDescription_esp: 'pH / ORP · Bomba dosificadora de 180 ml/min · Wi-Fi',
        shortDescription_de: 'pH / ORP · 180-ml/min-Dosierpumpe · Wi-Fi',
        shortDescription_fr: 'pH / ORP · Pompe doseuse 180 ml/min · Wi-Fi',
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
        shortDescription_en: 'pH / ORP · 500 ml/min Dosing Pump · Wi-Fi',
        shortDescription_it: 'pH / ORP · Pompa dosatrice 500 ml/min · Wi-Fi',
        shortDescription_esp: 'pH / ORP · Bomba dosificadora de 500 ml/min · Wi-Fi',
        shortDescription_de: 'pH / ORP · 500-ml/min-Dosierpumpe · Wi-Fi',
        shortDescription_fr: 'pH / ORP · Pompe doseuse 500 ml/min · Wi-Fi',
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
        shortDescription_en: 'pH / ORP · Arduino Access · Wi-Fi',
        shortDescription_it: 'pH / ORP · Accesso Arduino · Wi-Fi',
        shortDescription_esp: 'pH / ORP · Acceso Arduino · Wi-Fi',
        shortDescription_de: 'pH / ORP · Arduino-Zugriff · Wi-Fi',
        shortDescription_fr: 'pH / ORP · Accès Arduino · Wi-Fi',
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
        shortDescription_en: 'EC / TDS / Salinity · 2× Temperature · Arduino Access · Wi-Fi',
        shortDescription_it: 'EC / TDS / Salinità · 2× Temperatura · Accesso Arduino · Wi-Fi',
        shortDescription_esp: 'EC / TDS / Salinidad · 2× Temperatura · Acceso Arduino · Wi-Fi',
        shortDescription_de: 'EC / TDS / Salzgehalt · 2× Temperatur · Arduino-Zugriff · Wi-Fi',
        shortDescription_fr: 'EC / TDS / Salinité · 2× Température · Accès Arduino · Wi-Fi',
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
        shortDescription_en: 'pH electrode with BNC connector.',
        shortDescription_it: 'Elettrodo pH con connettore BNC.',
        shortDescription_esp: 'Electrodo de pH con conector BNC.',
        shortDescription_de: 'pH-Elektrode mit BNC-Anschluss.',
        shortDescription_fr: 'Électrode pH avec connecteur BNC.',
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
        shortDescription_en: 'ORP electrode with BNC connector.',
        shortDescription_it: 'Elettrodo ORP con connettore BNC.',
        shortDescription_esp: 'Electrodo ORP con conector BNC.',
        shortDescription_de: 'ORP-Elektrode mit BNC-Anschluss.',
        shortDescription_fr: 'Électrode ORP avec connecteur BNC.',
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
        shortDescription_en: 'EC probe with DC Jack',
        shortDescription_it: 'Sonda EC con DC Jack',
        shortDescription_esp: 'Sonda EC con DC Jack',
        shortDescription_de: 'EC-Sonde mit DC-Jack',
        shortDescription_fr: 'Sonde EC avec DC Jack',
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
        shortDescription_en: 'EC probe with Terminal Block',
        shortDescription_it: 'Sonda EC con morsettiera',
        shortDescription_esp: 'Sonda EC con terminales',
        shortDescription_de: 'EC-Sonde mit Klemmenanschluss',
        shortDescription_fr: 'Sonde EC avec bornier',
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
        shortDescription_en: 'Analog temperature probe with DC Jack connector',
        shortDescription_it: 'Sonda analogica di temperatura con connettore DC Jack',
        shortDescription_esp: 'Sonda analógica de temperatura con conector DC Jack',
        shortDescription_de: 'Analoge Temperatursonde mit DC-Jack-Anschluss',
        shortDescription_fr: 'Sonde de température analogique avec connecteur DC Jack',
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
        shortDescription_en: 'Analog temperature probe with Terminal Block connector',
        shortDescription_it: 'Sonda analogica di temperatura con morsettiera',
        shortDescription_esp: 'Sonda analógica de temperatura con terminales',
        shortDescription_de: 'Analoge Temperatursonde mit Klemmenanschluss',
        shortDescription_fr: 'Sonde de température analogique avec bornier',
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
        shortDescription_en: 'Analog high-temperature probe with Terminal Block connector',
        shortDescription_it: 'Sonda analogica alta temperatura con morsettiera',
        shortDescription_esp: 'Sonda analógica de alta temperatura con terminales',
        shortDescription_de: 'Analoge Hochtemperatursonde mit Klemmenanschluss',
        shortDescription_fr: 'Sonde de température analogique haute température avec bornier',
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
        shortDescription_en: 'Analog high-temperature probe with DC Jack connector',
        shortDescription_it: 'Sonda analogica alta temperatura con connettore DC Jack',
        shortDescription_esp: 'Sonda analógica de alta temperatura con conector DC Jack',
        shortDescription_de: 'Analoge Hochtemperatursonde mit DC-Jack-Anschluss',
        shortDescription_fr: 'Sonde de température analogique haute température avec connecteur DC Jack',
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
        shortDescription_en: 'Digital temperature probe with DC Jack connector',
        shortDescription_it: 'Sonda digitale di temperatura con connettore DC Jack',
        shortDescription_esp: 'Sonda digital de temperatura con conector DC Jack',
        shortDescription_de: 'Digitale Temperatursonde mit DC-Jack-Anschluss',
        shortDescription_fr: 'Sonde de température numérique avec connecteur DC Jack',
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
        shortDescription_en: 'Digital temperature probe with Terminal Block connector',
        shortDescription_it: 'Sonda digitale di temperatura con morsettiera',
        shortDescription_esp: 'Sonda digital de temperatura con terminales',
        shortDescription_de: 'Digitale Temperatursonde mit Klemmenanschluss',
        shortDescription_fr: 'Sonde de température numérique avec bornier',
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
        title_en: 'Configuration component', title_it: 'Componente di configurazione', title_esp: 'Componente de configuración', title_de: 'Konfigurationskomponente', title_fr: 'Composant de configuration',
        description: 'Choose the product option for this component example.',
        description_en: 'Choose the product option for this component example.', description_it: 'Scegli l’opzione prodotto per questo componente.', description_esp: 'Elige la opción de producto para este componente.', description_de: 'Wähle die Produktoption für diese Komponente.', description_fr: 'Choisissez l’option produit pour ce composant.',
        options: ['Industrial']
    },
    connectivity_access_point: {
        title: 'Direct connection (Access point)',
        title_en: 'Direct connection (Access point)', title_it: 'Connessione diretta (Access point)', title_esp: 'Conexión directa (punto de acceso)', title_de: 'Direktverbindung (Access Point)', title_fr: 'Connexion directe (point d’accès)',
        description_en: 'Device is accessible directly via its own Wi-Fi network.', description_it: 'Il dispositivo è accessibile direttamente tramite la propria rete Wi-Fi.', description_esp: 'El dispositivo es accesible directamente mediante su propia red Wi-Fi.', description_de: 'Das Gerät ist direkt über sein eigenes Wi-Fi-Netzwerk erreichbar.', description_fr: 'L’appareil est accessible directement via son propre réseau Wi-Fi.',
    description: 'Device is accessible directly via its own Wi-Fi network. ' +
        'No Internet needed, simple access with your Phone or Laptop. ' +
        'Wi-Fi credentials, access IP address can be modified by the user.',
    options: []
    },
    connectivity_remote: {
        title: 'Remote connection (All over the World)',
        title_en: 'Remote connection (All over the World)', title_it: 'Connessione remota (da tutto il mondo)', title_esp: 'Conexión remota (desde cualquier lugar)', title_de: 'Fernverbindung (weltweit)', title_fr: 'Connexion à distance (partout dans le monde)',
        description_en: 'Access and control the device remotely from anywhere in the world.', description_it: 'Accedi e controlla il dispositivo da remoto ovunque nel mondo.', description_esp: 'Accede y controla el dispositivo a distancia desde cualquier lugar del mundo.', description_de: 'Greife weltweit auf das Gerät zu und steuere es aus der Ferne.', description_fr: 'Accédez et contrôlez l’appareil à distance depuis n’importe où dans le monde.',
        description: 'By configuring Port Forwarding on your router, you can access and control the device remotely from anywhere in the world. ' +
        'No dedicated app required — simply connect through a standard web browser by using your global static IP address.',
        options: []
    },
    connectivity_station: {
        title: 'Network connection (Domestic Router)',
        title_en: 'Network connection (Domestic Router)', title_it: 'Connessione di rete (router domestico)', title_esp: 'Conexión de red (router doméstico)', title_de: 'Netzwerkverbindung (Heimrouter)', title_fr: 'Connexion réseau (routeur domestique)',
        description_en: 'Device connects to your existing Wi-Fi network for local access and home automation.', description_it: 'Il dispositivo si collega alla rete Wi-Fi esistente per l’accesso locale e la domotica.', description_esp: 'El dispositivo se conecta a tu red Wi-Fi para acceso local y domótica.', description_de: 'Das Gerät verbindet sich mit deinem Wi-Fi-Netzwerk für lokalen Zugriff und Hausautomation.', description_fr: 'L’appareil se connecte à votre réseau Wi-Fi pour l’accès local et la domotique.',
        description: 'Device connects to your existing Wi-Fi network. ' +
        'Access and control it from any Phone or Laptop on the same network. ' +
        'Network credentials and connection settings can be configured by the user.' +
        ' System supports also http protocol therefore is easily interfacable with Home Automation systems like Home Assistant.',
        options: []
    },
    connectivity_sps: {
        title: 'PLC Connectivity (e-PROFIBUS)',
        title_en: 'PLC Connectivity (e-PROFIBUS)', title_it: 'Connettività PLC (e-PROFIBUS)', title_esp: 'Conectividad PLC (e-PROFIBUS)', title_de: 'SPS-Konnektivität (e-PROFIBUS)', title_fr: 'Connectivité API (e-PROFIBUS)',
        description_en: 'Integrate the device with PLC systems using PROFIBUS communication.', description_it: 'Integra il dispositivo con sistemi PLC tramite comunicazione PROFIBUS.', description_esp: 'Integra el dispositivo con sistemas PLC mediante comunicación PROFIBUS.', description_de: 'Integriere das Gerät über PROFIBUS-Kommunikation in SPS-Systeme.', description_fr: 'Intégrez l’appareil aux systèmes API grâce à la communication PROFIBUS.',
        description: 'Device supports PROFIBUS communication for integration with SPS/PLC systems. ' +
        'Management registers can be accessed directly to read and write values, enabling external monitoring and control of the system.',
        options: []
    },
    control_unit_ec_temp: {
        title: 'EC and temperature control unit',
        title_en: 'EC and temperature control unit', title_it: 'Unità di controllo EC e temperatura', title_esp: 'Unidad de control de EC y temperatura', title_de: 'EC- und Temperatur-Steuereinheit', title_fr: 'Unité de contrôle EC et température',
        description_en: 'Choose the smart EC and temperature control option.', description_it: 'Scegli l’opzione smart per il controllo di EC e temperatura.', description_esp: 'Elige la opción smart de control de EC y temperatura.', description_de: 'Wähle die Smart-Option zur EC- und Temperaturregelung.', description_fr: 'Choisissez l’option smart de contrôle EC et température.',
        description: 'Choose the smart EC and temperature control option.',
        options: ['Smart Plug EC/Temp']
    },
    control_unit_industrial: {
        title: 'DIN Rail Industrial Controller',
        title_en: 'DIN Rail Industrial Controller', title_it: 'Controller industriale su guida DIN', title_esp: 'Controlador industrial para carril DIN', title_de: 'Industriecontroller für DIN-Schiene', title_fr: 'Contrôleur industriel sur rail DIN',
        description_en: 'DIN rail controller with display, relay outputs, configurable hysteresis, timers, Wi-Fi and advanced functions.', description_it: 'Controller su guida DIN con display, uscite relè, isteresi configurabile, timer, Wi-Fi e funzioni avanzate.', description_esp: 'Controlador para carril DIN con pantalla, relés, histéresis configurable, temporizadores, Wi-Fi y funciones avanzadas.', description_de: 'DIN-Schienen-Controller mit Display, Relaisausgängen, Hysterese, Timern, Wi-Fi und erweiterten Funktionen.', description_fr: 'Contrôleur sur rail DIN avec écran, sorties relais, hystérésis configurable, minuteries, Wi-Fi et fonctions avancées.',
        description: 'DIN rail controller designed for electrical panel installation, featuring an integrated display and 3 relay outputs assignable to 4 independent internal control channels. ' +
        'Each channel supports configurable hysteresis logic and timer-based operation for precise control of load activation over time. ' +
        'Built-in Wi-Fi and web server provide direct, local network or remote access via router Port Forwarding, with integrated AI features such as Copilot and additional advanced functions. See product details for more information.',
        options: ['Industrial']
    },
    control_unit_modular: {
        title: 'Modular Controller',
        title_en: 'Modular Controller', title_it: 'Controller modulare', title_esp: 'Controlador modular', title_de: 'Modularer Controller', title_fr: 'Contrôleur modulaire',
        description_en: 'Expandable controller for flexible, portable or wall-mounted water monitoring and control systems.', description_it: 'Controller espandibile per sistemi flessibili, portatili o a parete di monitoraggio e controllo dell’acqua.', description_esp: 'Controlador ampliable para sistemas flexibles, portátiles o murales de control y monitorización del agua.', description_de: 'Erweiterbarer Controller für flexible, mobile oder wandmontierte Wasserüberwachungs- und Steuerungssysteme.', description_fr: 'Contrôleur extensible pour systèmes flexibles, portables ou muraux de surveillance et contrôle de l’eau.',
        description: 'Expandable controller designed for wall-mounted or portable use. Powered via USB, it can also operate from a standard power bank, making it suitable for flexible and mobile installations. ' +
        'It can be used as a standalone monitoring unit or expanded into a complete control system by connecting Modular Pumps and Modular Plugs. ' +
        'Built-in Wi-Fi and web server provide direct, local network or remote access via router Port Forwarding, with configurable control logic, timers, integrated AI features such as Copilot, and additional advanced functions. See product details for more information.',
        options: ['Modular']
    },
    control_unit_premium: {
        title: 'Compact Premium Controller',
        title_en: 'Compact Premium Controller', title_it: 'Controller Premium compatto', title_esp: 'Controlador Premium compacto', title_de: 'Kompakter Premium-Controller', title_fr: 'Contrôleur Premium compact',
        description_en: 'Elegant wall-mounted controller with two integrated 60 ml/min dosing pumps and USB expansion.', description_it: 'Elegante controller da parete con due pompe dosatrici integrate da 60 ml/min ed espansione USB.', description_esp: 'Elegante controlador mural con dos bombas dosificadoras integradas de 60 ml/min y expansión USB.', description_de: 'Eleganter Wandcontroller mit zwei integrierten 60-ml/min-Dosierpumpen und USB-Erweiterung.', description_fr: 'Élégant contrôleur mural avec deux pompes doseuses intégrées de 60 ml/min et extension USB.',
        description: 'Compact all-in-one controller designed as an elegant wall-mounted solution, featuring two integrated 60 ml/min dosing pumps for a clean and practical installation. ' +
        'It can operate as a complete monitoring and control system and includes a USB expansion port for additional Modular Pumps or Modular Plugs. ' +
        'Built-in Wi-Fi and web server provide direct, local network or remote access via router Port Forwarding, with configurable control logic, timers, integrated AI features such as Copilot, and additional advanced functions. See product details for more information.',
        options: ['Premium']
    },
    smart_plug_ec_temp: {
        title: 'Smart EC and Temperature Plug',
        title_en: 'Smart EC and Temperature Plug', title_it: 'Smart Plug EC e temperatura', title_esp: 'Smart Plug de EC y temperatura', title_de: 'Smart-Stecker für EC und Temperatur', title_fr: 'Smart Plug EC et température',
        description_en: 'Compact Wi-Fi plug for EC or analog temperature monitoring and control.', description_it: 'Presa Wi-Fi compatta per il monitoraggio e controllo di EC o temperatura analogica.', description_esp: 'Enchufe Wi-Fi compacto para monitorizar y controlar EC o temperatura analógica.', description_de: 'Kompakter Wi-Fi-Stecker zur Überwachung und Steuerung von EC oder analoger Temperatur.', description_fr: 'Prise Wi-Fi compacte pour surveiller et contrôler l’EC ou la température analogique.',
        description: 'Compact display-free controller designed for EC or analog temperature monitoring and control, with an extremely simple plug-and-play installation directly into a standard electrical outlet. ' +
        'It provides a controlled power outlet for connecting and automatically managing the desired electrical load according to the measured value. ' +
        'Built-in Wi-Fi and web server provide direct, local network or remote access via router Port Forwarding, with configurable control logic, timers, integrated AI features such as Copilot, and additional advanced functions.',
        options: ['Smart Plug EC/Temp']
    },
    smart_plug_ph_orp: {
        title: 'Smart pH and ORP Plug',
        title_en: 'Smart pH and ORP Plug', title_it: 'Smart Plug pH e ORP', title_esp: 'Smart Plug de pH y ORP', title_de: 'Smart-Stecker für pH und ORP', title_fr: 'Smart Plug pH et ORP',
        description_en: 'Compact Wi-Fi plug for pH or ORP monitoring and control.', description_it: 'Presa Wi-Fi compatta per il monitoraggio e controllo di pH o ORP.', description_esp: 'Enchufe Wi-Fi compacto para monitorizar y controlar pH u ORP.', description_de: 'Kompakter Wi-Fi-Stecker zur Überwachung und Steuerung von pH oder ORP.', description_fr: 'Prise Wi-Fi compacte pour surveiller et contrôler le pH ou l’ORP.',
        description: 'Compact display-free controller designed for pH or ORP monitoring and control, with an extremely simple plug-and-play installation directly into a standard electrical outlet. ' +
        'It provides a controlled power outlet for connecting and automatically managing the desired electrical load according to the measured value. ' +
        'Built-in Wi-Fi and web server provide direct, local network or remote access via router Port Forwarding, with configurable control logic, timers, integrated AI features such as Copilot, and additional advanced functions.',
        options: ['Smart Plug pH/ORP']
    },
    smart_pump_ph_orp: {
        title: 'Smart pH and ORP Pump',
        title_en: 'Smart pH and ORP Pump', title_it: 'Smart Pompa pH e ORP', title_esp: 'Smart Bomba de pH y ORP', title_de: 'Smart-Pumpe für pH und ORP', title_fr: 'Smart Pompe pH et ORP',
        description_en: 'Compact dosing pump for precise pH or ORP control.', description_it: 'Pompa dosatrice compatta per il controllo preciso di pH o ORP.', description_esp: 'Bomba dosificadora compacta para un control preciso de pH u ORP.', description_de: 'Kompakte Dosierpumpe zur präzisen pH- oder ORP-Regelung.', description_fr: 'Pompe doseuse compacte pour un contrôle précis du pH ou de l’ORP.',
        description: 'Compact dosing pump designed for precise pH or ORP control, with an extremely simple plug-and-play installation directly into a standard electrical outlet. ' +
        'It provides a controlled power outlet for connecting and automatically managing the desired electrical load according to the measured value. ' +
        'Built-in Wi-Fi and web server provide direct, local network or remote access via router Port Forwarding, with configurable control logic, timers, integrated AI features such as Copilot, and additional advanced functions.',
        options: ['Smart Pump 60', 'Smart Pump 180', 'Smart Pump 500']
    },
    smart_sens_ec_temp: {
        title: 'Smart EC and Temperature Sensor',
        title_en: 'Smart EC and Temperature Sensor', title_it: 'Smart Sensore EC e temperatura', title_esp: 'Smart Sensor de EC y temperatura', title_de: 'Smart-Sensor für EC und Temperatur', title_fr: 'Smart Capteur EC et température',
        description_en: 'Compact Wi-Fi sensor for distributed EC and temperature monitoring.', description_it: 'Sensore Wi-Fi compatto per il monitoraggio distribuito di EC e temperatura.', description_esp: 'Sensor Wi-Fi compacto para monitorizar EC y temperatura de forma distribuida.', description_de: 'Kompakter Wi-Fi-Sensor zur verteilten Überwachung von EC und Temperatur.', description_fr: 'Capteur Wi-Fi compact pour la surveillance distribuée de l’EC et de la température.',
        description: 'Compact display-free sensor designed for EC and temperature monitoring, ideal for distributed installations and Smart Home systems. ' +
        'Its compact and modular design allows multiple sensing points to be easily distributed throughout the installation for flexible and scalable monitoring. ' +
        'Built-in Wi-Fi and web server provide direct, local network or remote access via router Port Forwarding, with easy integration into Home Automation systems and additional advanced functions.',
        options: ['Smart Sens EC/Temp']
    },
    smart_sens_ph_orp: {
        title: 'Smart pH and ORP Sensor',
        title_en: 'Smart pH and ORP Sensor', title_it: 'Smart Sensore pH e ORP', title_esp: 'Smart Sensor de pH y ORP', title_de: 'Smart-Sensor für pH und ORP', title_fr: 'Smart Capteur pH et ORP',
        description_en: 'Compact Wi-Fi sensor for distributed pH and ORP monitoring.', description_it: 'Sensore Wi-Fi compatto per il monitoraggio distribuito di pH e ORP.', description_esp: 'Sensor Wi-Fi compacto para monitorizar pH y ORP de forma distribuida.', description_de: 'Kompakter Wi-Fi-Sensor zur verteilten Überwachung von pH und ORP.', description_fr: 'Capteur Wi-Fi compact pour la surveillance distribuée du pH et de l’ORP.',
        description: 'Compact display-free sensor designed for pH and ORP monitoring, ideal for distributed installations and Smart Home systems. ' +
        'Its compact and modular design allows multiple sensing points to be easily distributed throughout the installation for flexible and scalable monitoring. ' +
        'Built-in Wi-Fi and web server provide direct, local network or remote access via router Port Forwarding, with easy integration into Home Automation systems and additional advanced functions.',
        options: ['Smart Sens pH/ORP']
    },
    modular_plug: {
        title: 'Modular plug',
        title_en: 'Modular plug', title_it: 'Presa modulare', title_esp: 'Enchufe modular', title_de: 'Modularer Stecker', title_fr: 'Prise modulaire',
        description_en: 'USB-A controlled expansion plug for an additional switched electrical outlet.', description_it: 'Presa di espansione controllata via USB-A per un’uscita elettrica aggiuntiva.', description_esp: 'Enchufe de expansión controlado por USB-A para una salida eléctrica adicional.', description_de: 'USB-A-gesteuerter Erweiterungsstecker für einen zusätzlichen geschalteten Ausgang.', description_fr: 'Prise d’extension contrôlée par USB-A pour une sortie électrique supplémentaire.',
        description: 'The Modular Plug is designed to be controlled via USB-A, allowing EDULCOWATER systems to be easily expanded with an additional controlled electrical outlet. ' +
        'It allows you to connect and control a general-purpose electrical load according to your application requirements. ' +
        'The connected load can be managed directly by the EDULCOWATER system.',
        options: ['Modular Plug']
    },
    modular_pump: {
        title: 'Modular pump',
        title_en: 'Modular pump', title_it: 'Pompa modulare', title_esp: 'Bomba modular', title_de: 'Modulare Pumpe', title_fr: 'Pompe modulaire',
        description_en: 'USB-A controlled expansion pump available in different flow-rate versions.', description_it: 'Pompa di espansione controllata via USB-A disponibile con diverse portate.', description_esp: 'Bomba de expansión controlada por USB-A disponible con diferentes caudales.', description_de: 'USB-A-gesteuerte Erweiterungspumpe mit verschiedenen Förderleistungen.', description_fr: 'Pompe d’extension contrôlée par USB-A disponible avec plusieurs débits.',
        description: 'The Modular Pump is designed to be controlled via USB-A, allowing EDULCOWATER systems to be easily expanded with additional dosing channels. ' +
        'Different pump versions are available in this category to meet different flow-rate requirements. ' +
        'Each Modular Pump uses an external power supply, while control and communication are managed directly by the EDULCOWATER system.',
        options: ['Modular Pump 60', 'Modular Pump 180', 'Modular Pump 500']
    },
    probe_ec_jack: {
        title: 'EC Jack probe',
        title_en: 'EC Jack probe', title_it: 'Sonda EC Jack', title_esp: 'Sonda EC Jack', title_de: 'EC-Jack-Sonde', title_fr: 'Sonde EC Jack',
        description_en: 'EC probe with integrated temperature compensation and DC Jack connector.', description_it: 'Sonda EC con compensazione integrata della temperatura e connettore DC Jack.', description_esp: 'Sonda EC con compensación de temperatura integrada y conector DC Jack.', description_de: 'EC-Sonde mit integrierter Temperaturkompensation und DC-Jack-Anschluss.', description_fr: 'Sonde EC avec compensation de température intégrée et connecteur DC Jack.',
        description: 'EC probe designed for conductivity measurements from 0 to 2,000 µS with 1 µS resolution, and from 2,000 to 20,000 µS with 10 µS resolution. ' +
        'The probe includes an integrated NTC sensor for simultaneous temperature measurement and temperature compensation. ' +
        'Supplied with a DC Jack connector for quick and convenient connection.',
        options: ['EC Probe DCJack']
    },
    probe_ec_tb: {
        title: 'EC probe with Terminal Block',
        title_en: 'EC probe with Terminal Block', title_it: 'Sonda EC con morsettiera', title_esp: 'Sonda EC con terminales', title_de: 'EC-Sonde mit Klemmenanschluss', title_fr: 'Sonde EC avec bornier',
        description_en: 'EC probe with integrated temperature compensation and Terminal Block connection.', description_it: 'Sonda EC con compensazione integrata della temperatura e collegamento a morsettiera.', description_esp: 'Sonda EC con compensación de temperatura integrada y conexión de terminales.', description_de: 'EC-Sonde mit integrierter Temperaturkompensation und Klemmenanschluss.', description_fr: 'Sonde EC avec compensation de température intégrée et connexion par bornier.',
        description: 'EC probe designed for conductivity measurements from 0 to 2,000 µS with 1 µS resolution, and from 2,000 to 20,000 µS with 10 µS resolution. ' +
        'The probe includes an integrated NTC sensor for simultaneous temperature measurement and temperature compensation. ' +
        'Supplied with a Terminal Block connection for simple and reliable installation.',
        options: ['EC Probe TB']
    },
    probe_ph_orp: {
        title: 'pH and ORP probes',
        title_en: 'pH and ORP probes', title_it: 'Sonde pH e ORP', title_esp: 'Sondas de pH y ORP', title_de: 'pH- und ORP-Sonden', title_fr: 'Sondes pH et ORP',
        description_en: 'Professional BNC probes for reliable pH and ORP water quality monitoring.', description_it: 'Sonde professionali BNC per un monitoraggio affidabile di pH e ORP.', description_esp: 'Sondas BNC profesionales para una monitorización fiable de pH y ORP.', description_de: 'Professionelle BNC-Sonden zur zuverlässigen Überwachung von pH und ORP.', description_fr: 'Sondes BNC professionnelles pour une surveillance fiable du pH et de l’ORP.',
        description: 'Professional pH and ORP probes equipped with a standard BNC connector for quick and reliable connection. ' +
        'The pH probe provides a measurement range from 0 to 14 pH, while the ORP (Redox) probe measures from -200 to +200 mV. ' +
        'Designed for reliable and continuous water quality monitoring.',
        options: ['pH Probe', 'ORP Probe']
    },
    probe_temp_analog_jack: {
        title: 'Analog temperature probes with Jack connector',
        title_en: 'Analog temperature probes with Jack connector', title_it: 'Sonde analogiche di temperatura con connettore Jack', title_esp: 'Sondas analógicas de temperatura con conector Jack', title_de: 'Analoge Temperatursonden mit Jack-Anschluss', title_fr: 'Sondes de température analogiques avec connecteur Jack',
        description_en: 'Immersion analog temperature probes with standard and high-temperature versions.', description_it: 'Sonde analogiche a immersione con versioni standard e alta temperatura.', description_esp: 'Sondas analógicas de inmersión en versiones estándar y de alta temperatura.', description_de: 'Analoge Tauch-Temperatursonden in Standard- und Hochtemperaturausführung.', description_fr: 'Sondes de température analogiques à immersion en versions standard et haute température.',
        description: 'Immersion analog temperature probe designed for reliable measurements over a wide temperature range. ' +
        'The standard version measures temperatures up to 60°C, while the High Temperature version supports measurements up to 150°C. ' +
        'Both versions feature a Jack connector for quick and convenient connection.',
        options: ['NTC DCJack', 'NTC HT DCJack']
    },
    probe_temp_analog_tb: {
        title: 'Analog temperature probe with terminal block',
        title_en: 'Analog temperature probe with terminal block', title_it: 'Sonda analogica di temperatura con morsettiera', title_esp: 'Sonda analógica de temperatura con terminales', title_de: 'Analoge Temperatursonde mit Klemmenanschluss', title_fr: 'Sonde de température analogique avec bornier',
        description_en: 'Immersion analog temperature probes with Terminal Block connection.', description_it: 'Sonde analogiche a immersione con collegamento a morsettiera.', description_esp: 'Sondas analógicas de inmersión con conexión de terminales.', description_de: 'Analoge Tauch-Temperatursonden mit Klemmenanschluss.', description_fr: 'Sondes de température analogiques à immersion avec connexion par bornier.',
        description: 'Immersion analog temperature probe designed for reliable measurements over a wide temperature range. ' +
        'The standard version measures temperatures up to 60°C, while the High Temperature version supports measurements up to 150°C. ' +
        'Both versions are designed for immersion applications and are supplied with a terminal block for easy connection.',
        options: ['NTC TB', 'NTC HT TB']
    },
    probe_temp_digital_tb: {
        title: 'Digital temperature probe DS18 with terminal block',
        title_en: 'Digital temperature probe DS18 with terminal block', title_it: 'Sonda digitale di temperatura DS18 con morsettiera', title_esp: 'Sonda digital de temperatura DS18 con terminales', title_de: 'Digitale DS18-Temperatursonde mit Klemmenanschluss', title_fr: 'Sonde de température numérique DS18 avec bornier',
        description_en: 'Immersion DS18 digital temperature probe with secure Terminal Block connection.', description_it: 'Sonda digitale DS18 a immersione con collegamento sicuro a morsettiera.', description_esp: 'Sonda digital DS18 de inmersión con conexión segura de terminales.', description_de: 'Digitale DS18-Tauch-Temperatursonde mit sicherem Klemmenanschluss.', description_fr: 'Sonde de température numérique DS18 à immersion avec connexion sécurisée par bornier.',
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
        const language = localStorage.getItem('edulco_language') || 'EN';
        const localizedShortDescription = product[`shortDescription_${language.toLowerCase()}`] || product.shortDescription;
        productCard.querySelector('.product-short-description').textContent = localizedShortDescription;

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
    const language = localStorage.getItem('edulco_language') || 'EN';
    const localizedDescription = product[`description_${language.toLowerCase()}`] || product.description;
    productModal.querySelector('.product-modal-description').textContent = localizedDescription || 'Product details coming soon.';
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
