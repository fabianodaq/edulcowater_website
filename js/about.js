const ABOUT_TRANSLATIONS = {
    EN: {
        sectionLabel: 'EDULCOWATER · ABOUT US',
        title: 'Water, under control.',
        nameExplanation: 'EDULCOWATER — “edulco” from Latin “to sweeten” and “water”: technology created to respect water.',
        storyTitle: 'Built from experience',
        storyParagraph: 'EdulcoWater is produced by a specialised studio with more than a decade of experience designing and building reliable control solutions. Over the years, our systems have been used in numerous real-world applications, helping customers monitor water quality, manage temperature, control dosing, automate pumps and operate connected installations with confidence.',
        missionParagraph: 'From compact sensors and smart plugs to complete controllers, every system is developed around the same goal: clear information, dependable control and technology that remains useful long after installation. The satisfaction of our customers and the variety of successful installations are the best evidence of that approach.',
        socialLabel: 'EdulcoWater social channels',
        legalNameLabel: 'Business name', legalAddressLabel: 'Address', legalEmailLabel: 'Email', legalVatLabel: 'VAT identification number'
    },
    IT: {
        sectionLabel: 'EDULCOWATER · CHI SIAMO',
        title: 'L’acqua, sotto controllo.',
        nameExplanation: 'EDULCOWATER — “edulco” dal latino “addolcire” e “acqua”: tecnologia creata per rispettare l’acqua.',
        storyTitle: 'Costruita sull’esperienza',
        storyParagraph: 'EdulcoWater è prodotto da uno studio specializzato con oltre dieci anni di esperienza nella progettazione e realizzazione di soluzioni di controllo affidabili. Nel corso degli anni, i nostri sistemi sono stati utilizzati in numerose applicazioni reali, aiutando i clienti a monitorare la qualità dell’acqua, gestire la temperatura, controllare il dosaggio, automatizzare le pompe e utilizzare impianti connessi con sicurezza.',
        missionParagraph: 'Dai sensori compatti e dalle prese intelligenti ai controller completi, ogni sistema è sviluppato con lo stesso obiettivo: informazioni chiare, controllo affidabile e una tecnologia utile nel tempo. La soddisfazione dei clienti e la varietà delle installazioni realizzate sono la migliore conferma di questo approccio.',
        socialLabel: 'Canali social EdulcoWater',
        legalNameLabel: 'Nome commerciale', legalAddressLabel: 'Indirizzo', legalEmailLabel: 'Email', legalVatLabel: 'Partita IVA'
    },
    ESP: {
        sectionLabel: 'EDULCOWATER · SOBRE NOSOTROS',
        title: 'El agua, bajo control.',
        nameExplanation: 'EDULCOWATER — “edulco”, del latín “endulzar”, y “water”: tecnología creada para respetar el agua.',
        storyTitle: 'Construido con experiencia',
        storyParagraph: 'EdulcoWater es producido por un estudio especializado con más de diez años de experiencia diseñando y construyendo soluciones de control fiables. A lo largo de los años, nuestros sistemas se han utilizado en numerosas aplicaciones reales, ayudando a los clientes a supervisar la calidad del agua, gestionar la temperatura, controlar la dosificación, automatizar bombas y operar instalaciones conectadas con confianza.',
        missionParagraph: 'Desde sensores compactos y enchufes inteligentes hasta controladores completos, cada sistema se desarrolla con el mismo objetivo: información clara, control fiable y una tecnología útil durante mucho tiempo. La satisfacción de nuestros clientes y la variedad de instalaciones realizadas son la mejor prueba de este enfoque.',
        socialLabel: 'Canales sociales de EdulcoWater',
        legalNameLabel: 'Nombre comercial', legalAddressLabel: 'Dirección', legalEmailLabel: 'Correo electrónico', legalVatLabel: 'Número de IVA'
    },
    DE: {
        sectionLabel: 'EDULCOWATER · ÜBER UNS',
        title: 'Wasser unter Kontrolle.',
        nameExplanation: 'EDULCOWATER — „edulco“ aus dem Lateinischen für „versüßen“ und „water“: Technologie mit Respekt für Wasser.',
        storyTitle: 'Aus Erfahrung entwickelt',
        storyParagraph: 'EdulcoWater wird von einem spezialisierten Studio mit mehr als zehn Jahren Erfahrung in der Entwicklung zuverlässiger Steuerungslösungen hergestellt. Im Laufe der Jahre wurden unsere Systeme in zahlreichen realen Anwendungen eingesetzt und helfen Kunden, Wasserqualität und Temperatur zu überwachen, Dosierungen zu steuern, Pumpen zu automatisieren und vernetzte Anlagen sicher zu bedienen.',
        missionParagraph: 'Von kompakten Sensoren und Smart Plugs bis hin zu vollständigen Controllern wird jedes System mit demselben Ziel entwickelt: klare Informationen, zuverlässige Steuerung und Technologie, die langfristig nützlich bleibt. Die Zufriedenheit unserer Kunden und die Vielfalt erfolgreicher Installationen bestätigen diesen Ansatz.',
        socialLabel: 'Social-Media-Kanäle von EdulcoWater',
        legalNameLabel: 'Geschäftsname', legalAddressLabel: 'Adresse', legalEmailLabel: 'E-Mail', legalVatLabel: 'Umsatzsteuer-Identifikationsnummer'
    },
    FR: {
        sectionLabel: 'EDULCOWATER · À PROPOS DE NOUS',
        title: 'L’eau, sous contrôle.',
        nameExplanation: 'EDULCOWATER — « edulco », du latin « adoucir », et « water » : une technologie créée dans le respect de l’eau.',
        storyTitle: 'Une expérience solide',
        storyParagraph: 'EdulcoWater est produit par un studio spécialisé qui possède plus de dix ans d’expérience dans la conception et la réalisation de solutions de contrôle fiables. Au fil des années, nos systèmes ont été utilisés dans de nombreuses applications réelles, aidant nos clients à surveiller la qualité de l’eau, gérer la température, contrôler le dosage, automatiser les pompes et piloter des installations connectées en toute confiance.',
        missionParagraph: 'Des capteurs compacts et prises intelligentes aux contrôleurs complets, chaque système est développé avec le même objectif : des informations claires, un contrôle fiable et une technologie utile dans la durée. La satisfaction de nos clients et la diversité des installations réalisées sont la meilleure preuve de cette approche.',
        socialLabel: 'Réseaux sociaux EdulcoWater',
        legalNameLabel: 'Nom commercial', legalAddressLabel: 'Adresse', legalEmailLabel: 'E-mail', legalVatLabel: 'Numéro de TVA'
    }
};

const applyAboutLanguage = () => {
    const language = localStorage.getItem('edulco_language') || 'EN';
    const translation = ABOUT_TRANSLATIONS[language] || ABOUT_TRANSLATIONS.EN;
    document.documentElement.lang = language.toLowerCase();

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const text = translation[element.dataset.i18n];
        if (text) element.textContent = text;
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
        const label = translation[element.dataset.i18nAriaLabel];
        if (label) element.setAttribute('aria-label', label);
    });

    const languageOption = document.querySelector(`.language-option[data-language="${language}"]`);
    const languageButton = document.querySelector('.language-button');
    if (languageOption && languageButton) {
        languageButton.childNodes[0].textContent = `${languageOption.textContent.trim()} `;
        document.querySelectorAll('.language-option').forEach((option) => option.classList.toggle('active', option === languageOption));
    }
};

applyAboutLanguage();