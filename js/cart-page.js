const CART_TRANSLATIONS = {
    EN: {
        cartTitle: 'Cart', itemsSelected: 'items selected', selectAll: 'Select all items', shippingAddress: 'Shipping address', firstName: 'First name', lastName: 'Last name', email: 'Email', phone: 'Phone (optional)', street: 'Street', houseNumber: 'House number', city: 'City', postalCode: 'Postal code', country: 'Country',
        emptyCart: 'Your cart is empty. Add products from the catalog.', summary: 'Summary', subtotal: 'Subtotal', shipping: 'Shipping', total: 'Total', checkout: 'Checkout',
        remove: 'Remove', decreaseQuantity: 'Decrease quantity', increaseQuantity: 'Increase quantity', addressRequired: 'Please complete the shipping address before continuing.',
        initializingPayment: 'Payment system initializing...', openingCheckout: 'Opening checkout...', paymentDelayed: 'Payment system is taking longer than expected. Please try again.'
    },
    IT: {
        cartTitle: 'Carrello', itemsSelected: 'articoli selezionati', selectAll: 'Seleziona tutti gli articoli', shippingAddress: 'Indirizzo di spedizione', firstName: 'Nome', lastName: 'Cognome', email: 'Email', phone: 'Telefono (opzionale)', street: 'Via', houseNumber: 'Numero civico', city: 'Città', postalCode: 'CAP', country: 'Paese',
        emptyCart: 'Il carrello è vuoto. Aggiungi prodotti dal catalogo.', summary: 'Riepilogo', subtotal: 'Subtotale', shipping: 'Spedizione', total: 'Totale', checkout: 'Pagamento',
        remove: 'Rimuovi', decreaseQuantity: 'Diminuisci quantità', increaseQuantity: 'Aumenta quantità', addressRequired: 'Completa l’indirizzo di spedizione prima di continuare.',
        initializingPayment: 'Inizializzazione del pagamento...', openingCheckout: 'Apertura del pagamento...', paymentDelayed: 'Il sistema di pagamento sta impiegando più tempo del previsto. Riprova.'
    },
    ESP: {
        cartTitle: 'Carrito', itemsSelected: 'artículos seleccionados', selectAll: 'Seleccionar todos los artículos', shippingAddress: 'Dirección de envío', firstName: 'Nombre', lastName: 'Apellidos', email: 'Correo electrónico', phone: 'Teléfono (opcional)', street: 'Calle', houseNumber: 'Número', city: 'Ciudad', postalCode: 'Código postal', country: 'País',
        emptyCart: 'Tu carrito está vacío. Añade productos del catálogo.', summary: 'Resumen', subtotal: 'Subtotal', shipping: 'Envío', total: 'Total', checkout: 'Pagar',
        remove: 'Eliminar', decreaseQuantity: 'Reducir cantidad', increaseQuantity: 'Aumentar cantidad', addressRequired: 'Completa la dirección de envío antes de continuar.',
        initializingPayment: 'Inicializando el pago...', openingCheckout: 'Abriendo el pago...', paymentDelayed: 'El sistema de pago está tardando más de lo esperado. Inténtalo de nuevo.'
    },
    DE: {
        cartTitle: 'Warenkorb', itemsSelected: 'Artikel ausgewählt', selectAll: 'Alle Artikel auswählen', shippingAddress: 'Lieferadresse', firstName: 'Vorname', lastName: 'Nachname', email: 'E-Mail', phone: 'Telefon (optional)', street: 'Straße', houseNumber: 'Hausnummer', city: 'Stadt', postalCode: 'Postleitzahl', country: 'Land',
        emptyCart: 'Dein Warenkorb ist leer. Füge Produkte aus dem Katalog hinzu.', summary: 'Zusammenfassung', subtotal: 'Zwischensumme', shipping: 'Versand', total: 'Gesamt', checkout: 'Zur Kasse',
        remove: 'Entfernen', decreaseQuantity: 'Menge verringern', increaseQuantity: 'Menge erhöhen', addressRequired: 'Bitte vervollständige die Lieferadresse, bevor du fortfährst.',
        initializingPayment: 'Zahlungssystem wird gestartet...', openingCheckout: 'Zahlungsseite wird geöffnet...', paymentDelayed: 'Das Zahlungssystem benötigt länger als erwartet. Bitte versuche es erneut.'
    },
    FR: {
        cartTitle: 'Panier', itemsSelected: 'articles sélectionnés', selectAll: 'Sélectionner tous les articles', shippingAddress: 'Adresse de livraison', firstName: 'Prénom', lastName: 'Nom', email: 'E-mail', phone: 'Téléphone (facultatif)', street: 'Rue', houseNumber: 'Numéro', city: 'Ville', postalCode: 'Code postal', country: 'Pays',
        emptyCart: 'Votre panier est vide. Ajoutez des produits du catalogue.', summary: 'Résumé', subtotal: 'Sous-total', shipping: 'Livraison', total: 'Total', checkout: 'Paiement',
        remove: 'Supprimer', decreaseQuantity: 'Diminuer la quantité', increaseQuantity: 'Augmenter la quantité', addressRequired: 'Veuillez compléter l’adresse de livraison avant de continuer.',
        initializingPayment: 'Initialisation du paiement...', openingCheckout: 'Ouverture du paiement...', paymentDelayed: 'Le système de paiement prend plus de temps que prévu. Veuillez réessayer.'
    },
    PT: {
        cartTitle: 'Carrinho', itemsSelected: 'artigos selecionados', selectAll: 'Selecionar todos os artigos', shippingAddress: 'Morada de entrega', firstName: 'Nome', lastName: 'Apelido', email: 'E-mail', phone: 'Telefone (opcional)', street: 'Rua', houseNumber: 'Número da porta', city: 'Cidade', postalCode: 'Código postal', country: 'País',
        emptyCart: 'O seu carrinho está vazio. Adicione produtos do catálogo.', summary: 'Resumo', subtotal: 'Subtotal', shipping: 'Envio', total: 'Total', checkout: 'Pagamento',
        remove: 'Remover', decreaseQuantity: 'Diminuir quantidade', increaseQuantity: 'Aumentar quantidade', addressRequired: 'Preencha a morada de entrega antes de continuar.',
        initializingPayment: 'A iniciar o sistema de pagamento...', openingCheckout: 'A abrir o pagamento...', paymentDelayed: 'O sistema de pagamento está a demorar mais do que o esperado. Tente novamente.'
    },
    ZH: {
        cartTitle: '购物车', itemsSelected: '件商品已选择', selectAll: '选择所有商品', shippingAddress: '配送地址', firstName: '名', lastName: '姓', email: '电子邮箱', phone: '电话（可选）', street: '街道', houseNumber: '门牌号', city: '城市', postalCode: '邮政编码', country: '国家',
        emptyCart: '购物车为空。请从产品目录添加商品。', summary: '摘要', subtotal: '小计', shipping: '运费', total: '总计', checkout: '结账',
        remove: '移除', decreaseQuantity: '减少数量', increaseQuantity: '增加数量', addressRequired: '请填写配送地址后再继续。',
        initializingPayment: '正在初始化支付系统……', openingCheckout: '正在打开结账页面……', paymentDelayed: '支付系统响应时间较长，请重试。'
    }
};

const applyCartLanguage = () => {
    const language = localStorage.getItem('edulco_language') || 'EN';
    const translation = CART_TRANSLATIONS[language] || CART_TRANSLATIONS.EN;
    document.documentElement.lang = language.toLowerCase();
    window.CART_PAGE_TEXT = translation;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const text = translation[element.dataset.i18n];
        if (text) element.textContent = text;
    });

    const languageOption = document.querySelector(`.language-option[data-language="${language}"]`);
    const languageButton = document.querySelector('.language-button');
    if (languageOption && languageButton) {
        languageButton.childNodes[0].textContent = `${languageOption.textContent.trim()} `;
        document.querySelectorAll('.language-option').forEach((option) => option.classList.toggle('active', option === languageOption));
    }
};

applyCartLanguage();