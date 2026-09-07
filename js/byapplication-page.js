const BYAPPLICATION_TRANSLATIONS = {
    EN: {
        application: { byaquarium: 'AQUARIUM', byhydro: 'HYDROPONICS', bysolar: 'SOLAR' },
        stepOne: '1. Select control type',
        stepTwo: '2. Click on blinking elements',
        stepThree: '3. Review your selection and checkout',
        dinRail: 'Din Rail',
        compact: 'Compact',
        expandable: 'Expandable',
        smart: 'Smart',
        addedToCart: 'Added to cart!',
        price: 'Price'
    },
    IT: {
        application: { byaquarium: 'ACQUARIO', byhydro: 'IDROPONICA', bysolar: 'SOLARE' },
        stepOne: '1. Seleziona il tipo di controllo',
        stepTwo: '2. Clicca sugli elementi lampeggianti',
        stepThree: '3. Controlla la selezione e completa l’ordine',
        dinRail: 'Guida DIN',
        compact: 'Compatto',
        expandable: 'Espandibile',
        smart: 'Smart',
        addedToCart: 'Aggiunto al carrello!',
        price: 'Prezzo'
    },
    ESP: {
        application: { byaquarium: 'ACUARIO', byhydro: 'HIDROPONÍA', bysolar: 'SOLAR' },
        stepOne: '1. Selecciona el tipo de control',
        stepTwo: '2. Haz clic en los elementos parpadeantes',
        stepThree: '3. Revisa tu selección y finaliza el pedido',
        dinRail: 'Carril DIN',
        compact: 'Compacto',
        expandable: 'Ampliable',
        smart: 'Smart',
        addedToCart: 'Añadido al carrito.',
        price: 'Precio'
    },
    DE: {
        application: { byaquarium: 'AQUARIUM', byhydro: 'HYDROPONIK', bysolar: 'SOLAR' },
        stepOne: '1. Wähle den Steuerungstyp',
        stepTwo: '2. Klicke auf die blinkenden Elemente',
        stepThree: '3. Prüfe deine Auswahl und schließe die Bestellung ab',
        dinRail: 'DIN-Schiene',
        compact: 'Kompakt',
        expandable: 'Erweiterbar',
        smart: 'Smart',
        addedToCart: 'Zum Warenkorb hinzugefügt.',
        price: 'Preis'
    },
    FR: {
        application: { byaquarium: 'AQUARIUM', byhydro: 'HYDROPONIE', bysolar: 'SOLAIRE' },
        stepOne: '1. Sélectionnez le type de contrôle',
        stepTwo: '2. Cliquez sur les éléments clignotants',
        stepThree: '3. Vérifiez votre sélection et finalisez la commande',
        dinRail: 'Rail DIN',
        compact: 'Compact',
        expandable: 'Extensible',
        smart: 'Smart',
        addedToCart: 'Ajouté au panier.',
        price: 'Prix'
    }
};

const applyByApplicationLanguage = () => {
    const page = document.body.dataset.page;
    const language = localStorage.getItem('edulco_language') || 'EN';
    const translation = BYAPPLICATION_TRANSLATIONS[language] || BYAPPLICATION_TRANSLATIONS.EN;
    const applicationName = translation.application[page] || translation.application.byaquarium;
    document.documentElement.lang = language.toLowerCase();

    const sectionLabel = document.querySelector('.section-label');
    if (sectionLabel) sectionLabel.textContent = language === 'EN'
        ? `BUILD YOUR ${applicationName}`
        : language === 'IT'
            ? `COSTRUISCI IL TUO ${applicationName}`
            : language === 'ESP'
                ? `CONSTRUYE TU ${applicationName}`
                : language === 'DE'
                    ? `STELLE DEIN ${applicationName}SYSTEM ZUSAMMEN`
                    : `CONSTRUISEZ VOTRE ${applicationName}`;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const text = translation[element.dataset.i18n];
        if (text) element.textContent = text;
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
        const labelKey = element.dataset.i18nAriaLabel;
        const label = element.getAttribute('aria-label');
        if (labelKey === 'industrialAria') element.setAttribute('aria-label', `${translation.dinRail} ${applicationName} System`);
        if (labelKey === 'premiumAria') element.setAttribute('aria-label', `${translation.compact} ${applicationName} System`);
        if (labelKey === 'modularAria') element.setAttribute('aria-label', `${translation.expandable} ${applicationName} System`);
        if (labelKey === 'smartAria') element.setAttribute('aria-label', `${translation.smart} ${applicationName} System`);
        void label;
    });

    window.BYAPPLICATION_PAGE_TEXT = translation;
    const languageOption = document.querySelector(`.language-option[data-language="${language}"]`);
    const languageButton = document.querySelector('.language-button');
    if (languageOption && languageButton) {
        languageButton.childNodes[0].textContent = `${languageOption.textContent.trim()} `;
        document.querySelectorAll('.language-option').forEach((option) => option.classList.toggle('active', option === languageOption));
    }
};

applyByApplicationLanguage();
