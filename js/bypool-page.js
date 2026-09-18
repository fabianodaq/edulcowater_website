const BYPOOL_TRANSLATIONS = {
    EN: {
        sectionLabel: 'BUILD YOUR POOL',
        stepOne: '1. Select control type',
        stepTwo: '2. Click on blinking elements',
        stepThree: '3. Review your selection and checkout',
        dinRail: 'Din Rail',
        allInOne: 'All in One',
        expandable: 'Expandable',
        smart: 'Smart',
        industrialAria: 'Industrial Pool System',
        premiumAria: 'Premium Pool System',
        modularAria: 'Modular Pool System',
        smartAria: 'Smart Pool System',
        addedToCart: 'Added to cart!',
        price: 'Price'
    },
    IT: {
        sectionLabel: 'COSTRUISCI LA TUA PISCINA',
        stepOne: '1. Seleziona il tipo di controllo',
        stepTwo: '2. Clicca sugli elementi lampeggianti',
        stepThree: '3. Controlla la selezione e completa l’ordine',
        dinRail: 'Guida DIN',
        allInOne: 'Tutto in uno',
        expandable: 'Espandibile',
        smart: 'Smart',
        industrialAria: 'Sistema piscina industriale',
        premiumAria: 'Sistema piscina Premium',
        modularAria: 'Sistema piscina modulare',
        smartAria: 'Sistema piscina Smart',
        addedToCart: 'Aggiunto al carrello!',
        price: 'Prezzo'
    },
    ESP: {
        sectionLabel: 'CONSTRUYE TU PISCINA',
        stepOne: '1. Selecciona el tipo de control',
        stepTwo: '2. Haz clic en los elementos parpadeantes',
        stepThree: '3. Revisa tu selección y finaliza el pedido',
        dinRail: 'Carril DIN',
        allInOne: 'Todo en uno',
        expandable: 'Ampliable',
        smart: 'Smart',
        industrialAria: 'Sistema industrial para piscina',
        premiumAria: 'Sistema Premium para piscina',
        modularAria: 'Sistema modular para piscina',
        smartAria: 'Sistema Smart para piscina',
        addedToCart: 'Añadido al carrito.',
        price: 'Precio'
    },
    DE: {
        sectionLabel: 'STELLE DEIN POOLSYSTEM ZUSAMMEN',
        stepOne: '1. Wähle den Steuerungstyp',
        stepTwo: '2. Klicke auf die blinkenden Elemente',
        stepThree: '3. Prüfe deine Auswahl und schließe die Bestellung ab',
        dinRail: 'DIN-Schiene',
        allInOne: 'Alles in einem',
        expandable: 'Erweiterbar',
        smart: 'Smart',
        industrialAria: 'Industrielles Poolsystem',
        premiumAria: 'Premium-Poolsystem',
        modularAria: 'Modulares Poolsystem',
        smartAria: 'Smart-Poolsystem',
        addedToCart: 'Zum Warenkorb hinzugefügt.',
        price: 'Preis'
    },
    FR: {
        sectionLabel: 'CONSTRUISEZ VOTRE PISCINE',
        stepOne: '1. Sélectionnez le type de contrôle',
        stepTwo: '2. Cliquez sur les éléments clignotants',
        stepThree: '3. Vérifiez votre sélection et finalisez la commande',
        dinRail: 'Rail DIN',
        allInOne: 'Tout-en-un',
        expandable: 'Extensible',
        smart: 'Smart',
        industrialAria: 'Système de piscine industriel',
        premiumAria: 'Système de piscine Premium',
        modularAria: 'Système de piscine modulaire',
        smartAria: 'Système de piscine Smart',
        addedToCart: 'Ajouté au panier.',
        price: 'Prix'
    },
    PT: {
        sectionLabel: 'CONSTRUA A SUA PISCINA',
        stepOne: '1. Selecione o tipo de controlo',
        stepTwo: '2. Clique nos elementos intermitentes',
        stepThree: '3. Reveja a seleção e conclua a encomenda',
        dinRail: 'Calha DIN',
        allInOne: 'Tudo em um',
        expandable: 'Expansível',
        smart: 'Smart',
        industrialAria: 'Sistema industrial para piscina',
        premiumAria: 'Sistema Premium para piscina',
        modularAria: 'Sistema modular para piscina',
        smartAria: 'Sistema Smart para piscina',
        addedToCart: 'Adicionado ao carrinho!',
        price: 'Preço'
    },
    ZH: {
        sectionLabel: '构建您的泳池系统',
        stepOne: '1. 选择控制类型',
        stepTwo: '2. 点击闪烁的元素',
        stepThree: '3. 查看选择并完成结算',
        dinRail: 'DIN 导轨',
        allInOne: '一体化',
        expandable: '可扩展',
        smart: '智能型',
        industrialAria: '工业泳池系统',
        premiumAria: 'Premium 泳池系统',
        modularAria: '模块化泳池系统',
        smartAria: '智能泳池系统',
        addedToCart: '已加入购物车！',
        price: '价格'
    }
};

const applyBypoolLanguage = () => {
    const language = localStorage.getItem('edulco_language') || 'EN';
    const translation = BYPOOL_TRANSLATIONS[language] || BYPOOL_TRANSLATIONS.EN;
    document.documentElement.lang = language.toLowerCase();

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const text = translation[element.dataset.i18n];
        if (text) element.textContent = text;
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
        const label = translation[element.dataset.i18nAriaLabel];
        if (label) element.setAttribute('aria-label', label);
    });

    window.BYPOOL_PAGE_TEXT = translation;
    const languageOption = document.querySelector(`.language-option[data-language="${language}"]`);
    const languageButton = document.querySelector('.language-button');
    if (languageOption && languageButton) {
        languageButton.childNodes[0].textContent = `${languageOption.textContent.trim()} `;
        document.querySelectorAll('.language-option').forEach((option) => option.classList.toggle('active', option === languageOption));
    }
};

applyBypoolLanguage();