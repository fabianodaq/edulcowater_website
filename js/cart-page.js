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