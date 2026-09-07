const PRODUCTS_PAGE_TRANSLATIONS = {
    EN: {
        familyTitles: ['CONTROLLERS-MONITORS', 'MODULAR EXPANDABILITY ACCESSORIES', 'SMART PLUGS', 'SMART PUMPS', 'SMART SENSORS', 'PH/ORP/EC PROBES', 'TEMPERATURE ANALOG PROBES', 'TEMPERATURE DIGITAL PROBES'],
        add: 'Add',
        details: 'Details',
        price: 'Price'
    },
    IT: {
        familyTitles: ['CONTROLLER-MONITOR', 'ACCESSORI MODULARI', 'SMART PLUG', 'SMART POMPE', 'SMART SENSORI', 'SONDE PH/ORP/EC', 'SONDE ANALOGICHE DI TEMPERATURA', 'SONDE DIGITALI DI TEMPERATURA'],
        add: 'Aggiungi',
        details: 'Dettagli',
        price: 'Prezzo'
    },
    ESP: {
        familyTitles: ['CONTROLADORES-MONITORES', 'ACCESORIOS MODULARES', 'SMART PLUGS', 'SMART BOMBAS', 'SMART SENSORES', 'SONDAS PH/ORP/EC', 'SONDAS ANALÓGICAS DE TEMPERATURA', 'SONDAS DIGITALES DE TEMPERATURA'],
        add: 'Añadir',
        details: 'Detalles',
        price: 'Precio'
    },
    DE: {
        familyTitles: ['CONTROLLER-MONITORE', 'MODULARE ERWEITERUNGEN', 'SMART-STECKER', 'SMART-PUMPEN', 'SMART-SENSOREN', 'PH/ORP/EC-SONDEN', 'ANALOGE TEMPERATURSONDEN', 'DIGITALE TEMPERATURSONDEN'],
        add: 'Hinzufügen',
        details: 'Details',
        price: 'Preis'
    },
    FR: {
        familyTitles: ['CONTRÔLEURS-MONITEURS', 'ACCESSOIRES MODULAIRES', 'SMART PLUGS', 'SMART POMPES', 'SMART CAPTEURS', 'SONDES PH/ORP/EC', 'SONDES DE TEMPÉRATURE ANALOGIQUES', 'SONDES DE TEMPÉRATURE NUMÉRIQUES'],
        add: 'Ajouter',
        details: 'Détails',
        price: 'Prix'
    }
};

const applyProductsLanguage = () => {
    const language = localStorage.getItem('edulco_language') || 'EN';
    const translation = PRODUCTS_PAGE_TRANSLATIONS[language] || PRODUCTS_PAGE_TRANSLATIONS.EN;
    document.documentElement.lang = language.toLowerCase();

    document.querySelectorAll('.product-family-title').forEach((title, index) => {
        if (translation.familyTitles[index]) title.textContent = translation.familyTitles[index];
    });

    document.querySelectorAll('.add-to-cart').forEach((button) => {
        button.textContent = translation.add;
    });

    document.querySelectorAll('.discover-link').forEach((link) => {
        const arrow = link.querySelector('span');
        link.childNodes[0].textContent = `${translation.details} `;
        if (arrow) arrow.textContent = '↗';
    });

    document.querySelectorAll('.product-price').forEach((priceNode) => {
        priceNode.textContent = priceNode.textContent.replace(/^(Price|Prezzo|Precio|Preis|Prix):\s*/, `${translation.price}: `);
    });

    const languageOption = document.querySelector(`.language-option[data-language="${language}"]`);
    const languageButton = document.querySelector('.language-button');
    if (languageOption && languageButton) {
        languageButton.childNodes[0].textContent = `${languageOption.textContent.trim()} `;
        document.querySelectorAll('.language-option').forEach((option) => option.classList.toggle('active', option === languageOption));
    }
};

applyProductsLanguage();