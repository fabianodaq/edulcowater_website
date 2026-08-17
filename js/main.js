document.querySelectorAll('.language-button').forEach((languageButton) => {
    languageButton.addEventListener('click', () => {
        const languageMenu = document.getElementById(languageButton.getAttribute('aria-controls'));
        const isOpen = languageMenu.classList.toggle('open');
        languageButton.setAttribute('aria-expanded', String(isOpen));
    });
});

document.querySelectorAll('.language-option').forEach((languageOption) => {
    languageOption.addEventListener('click', () => {
        const languageButton = languageOption.closest('.language-switcher').querySelector('.language-button');
        const languageMenu = languageOption.closest('.language-menu');
        languageButton.childNodes[0].textContent = `${languageOption.dataset.language} `;
        languageMenu.querySelectorAll('.language-option').forEach((option) => option.classList.remove('active'));
        languageOption.classList.add('active');
        languageMenu.classList.remove('open');
        languageButton.setAttribute('aria-expanded', 'false');
    });
});

document.querySelectorAll('.audio-toggle').forEach((audioToggle) => {
    const video = audioToggle.closest('.intro-video').querySelector('.intro-video-media');
    const icon = audioToggle.querySelector('.audio-toggle-icon');
    const label = audioToggle.querySelector('.audio-toggle-label');

    audioToggle.addEventListener('click', () => {
        video.muted = !video.muted;
        const audioOn = !video.muted;
        audioToggle.setAttribute('aria-pressed', String(audioOn));
        audioToggle.setAttribute('aria-label', audioOn ? 'Turn audio off' : 'Turn audio on');
        icon.textContent = audioOn ? '🔊' : '🔇';
        label.textContent = audioOn ? 'Audio on' : 'Audio off';
    });
});

document.querySelectorAll('.add-to-cart').forEach((addButton) => {
    let quantity = 0;
    const cartCount = document.querySelector('.cart-count');
    const quantityControl = document.createElement('div');
    const decreaseButton = document.createElement('button');
    const quantityValue = document.createElement('span');
    const increaseButton = document.createElement('button');

    quantityControl.className = 'quantity-control';
    decreaseButton.className = 'quantity-button';
    decreaseButton.type = 'button';
    decreaseButton.setAttribute('aria-label', `Remove one ${addButton.dataset.product}`);
    decreaseButton.textContent = '−';
    quantityValue.className = 'quantity-value';
    increaseButton.className = 'quantity-button';
    increaseButton.type = 'button';
    increaseButton.setAttribute('aria-label', `Add one ${addButton.dataset.product}`);
    increaseButton.textContent = '+';
    quantityControl.append(decreaseButton, quantityValue, increaseButton);
    addButton.textContent = 'Add';
    addButton.setAttribute('aria-label', `Add ${addButton.dataset.product} to cart`);
    addButton.after(quantityControl);

    const updateQuantity = (change) => {
        const currentCartCount = Number.parseInt(cartCount.textContent, 10) || 0;
        quantity = Math.max(0, quantity + change);
        cartCount.textContent = String(currentCartCount + change);
        quantityValue.textContent = String(quantity);
        const hasItems = quantity > 0;
        addButton.hidden = hasItems;
        quantityControl.classList.toggle('is-visible', hasItems);
        if (!hasItems) addButton.focus();
    };

    addButton.addEventListener('click', () => updateQuantity(1));
    decreaseButton.addEventListener('click', () => updateQuantity(-1));
    increaseButton.addEventListener('click', () => updateQuantity(1));
    quantityValue.textContent = '0';
});

document.querySelectorAll('.quantity-control').forEach((quantityControl) => {
    quantityControl.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

const pricingPath = window.location.pathname.includes('/products/') ? '../data/pricing.json' : 'data/pricing.json';

const fallbackPricing = [
    ['Industrial System', 2490], ['Premium System', 1490], ['Modular Controller', 399], ['Modular Plug', 129],
    ['Modular Pump 60 ml', 89], ['Modular Pump 180 ml', 119], ['Modular Pump 500 ml', 159],
    ['Smart Plug pH ORP', 149], ['Smart Plug EC Temp', 179], ['Smart Pump 60', 129],
    ['Smart Pump 180', 169], ['Smart Pump 550', 219], ['Smart Sens pH ORP', 199],
    ['Smart Sens EC Temp', 229], ['pH Probe', 69], ['ORP Probe', 79], ['EC Probe', 89],
    ['NTC Temperature Probe', 39], ['DS18 Temperature Probe', 49], ['Silicone NTC Temperature Probe', 45]
];

const applyPricing = (products, currency = 'EUR') => {
    const normalizeProductName = (name) => name.replaceAll('/', ' ').replace(/\s+/g, ' ').trim();
    const pricesByName = new Map(products.map((product) => [normalizeProductName(product.name), product]));

    document.querySelectorAll('.product-card').forEach((productCard) => {
        const productName = productCard.querySelector('.add-to-cart')?.dataset.product;
        const product = pricesByName.get(normalizeProductName(productName));
        const priceElement = productCard.querySelector('.product-price');

        if (!product || !priceElement || product.price === null) return;

        const formattedPrice = new Intl.NumberFormat('en-IE', {
            currency,
            maximumFractionDigits: 2,
            style: 'currency'
        }).format(product.price);
        priceElement.textContent = product.volumeMl ? `${product.volumeMl} ml · ${formattedPrice}` : formattedPrice;
    });
};

applyPricing(fallbackPricing.map(([name, price]) => ({ name, price })));

fetch(pricingPath)
    .then((response) => response.json())
    .then((pricingData) => applyPricing(pricingData.products, pricingData.currency))
    .catch(() => {});

