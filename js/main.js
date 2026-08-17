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

const productDetails = {
    'Industrial': 'Din Rail mounted multifunction Wi-Fi controller designed for water treatment, hydroponics, aquariums, ' +
                 'swimming pools, solar thermal systems, HVAC applications, ' +
                 'and general process automation. ',
    'Premium System': 'Wall Mounting multifunction Wi-Fi controller designed for water treatment, hydroponics, aquariums, ' +
                 'swimming pools, solar thermal systems, HVAC applications, ' +
                 'and general process automation, provided with 2 built in dosing pumps and a USB-A output for additional dosing or control.',
    'Modular Controller': 'The central controller for building a flexible system around your water quality and dosing needs.',
    'Modular Plug': 'A compact expansion module that connects additional control and dosing functions to a modular setup.',
    'Modular Pump 60 ml': 'A compact 60 ml dosing pump for precise, efficient control in smaller modular systems.',
    'Modular Pump 180 ml': 'A balanced 180 ml dosing pump for everyday modular water treatment applications.',
    'Modular Pump 500 ml': 'A higher-capacity 500 ml dosing pump for larger modular water systems.',
    'Smart Plug pH ORP': 'A connected plug for monitoring pH and ORP values and keeping water chemistry under control.',
    'Smart Plug EC Temp': 'A connected plug for reading conductivity and temperature in one compact monitoring solution.',
    'Smart Pump 60': 'The compact 60 ml smart dosing pump for precise control in smaller installations.',
    'Smart Pump 180': 'The 180 ml smart dosing pump for reliable, balanced dosing in everyday systems.',
    'Smart Pump 500': 'The 500 ml smart dosing pump for higher-capacity water treatment applications.',
    'Smart Sens pH ORP': 'A smart sensor solution for live pH and ORP insight, helping maintain the right water balance.',
    'Smart Sens EC Temp': 'A smart sensor solution for live conductivity and temperature monitoring.',
    'pH Probe': 'A reliable pH probe for accurate measurement and precise water balance control.',
    'ORP Probe': 'An ORP probe for monitoring oxidation-reduction potential in water treatment systems.',
    'EC Probe': 'An EC probe for dependable conductivity measurement and dosing feedback.',
    'NTC Temperature Probe': 'A stable NTC probe for accurate temperature measurement and system control.',
    'DS18 Temperature Probe': 'A digital DS18 temperature probe for connected water quality systems.',
    'Silicone NTC Temperature Probe': 'A flexible silicone NTC temperature probe designed for protected installations.'
};

const productManuals = {
    Industrial: 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_INDUSTRIAL.pdf',
    'Premium System': 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_PREMIUM.pdf'
};

const productImageNames = {
    'Industrial': 'industrial.png',
    'Premium System': 'premium.jpg',
    'Modular Controller': 'modular-controller.png',
    'Modular Plug': 'modular-plug.jpg',
    'Modular Pump 60 ml': 'modular-pump60.jpg',
    'Modular Pump 180 ml': 'modular-pump180.jpg',
    'Modular Pump 500 ml': 'modular-pump500.jpg',
    'Smart Plug pH ORP': 'smart-plug-ph-orp.jpg',
    'Smart Plug EC Temp': 'smart-plug-ec-temp.jpg',
    'Smart Pump 60': 'smart-pump-180.jpg',
    'Smart Pump 180': 'smart-pump-180.jpg',
    'Smart Pump 500': 'smart-pump-500.jpg',
    'Smart Sens pH ORP': 'smart-sens-ph-orp.jpg',
    'Smart Sens EC Temp': 'smart-sens-ec-temp.jpg',
    'pH Probe': 'probe-ph.jpg',
    'ORP Probe': 'probe-orp.jpg',
    'EC Probe': 'probe-ec.jpg',
    'NTC Temperature Probe': 'probe-ntc.mp4',
    'DS18 Temperature Probe': 'probe-ds18.png',
    'Silicone NTC Temperature Probe': 'probe-ntc-ht.jpg'
};

document.querySelectorAll('.product-card').forEach((productCard) => {
    const productName = productCard.querySelector('.add-to-cart')?.dataset.product;
    const visual = productCard.querySelector('.product-visual');
    const imageName = productImageNames[productName];

    if (!visual || !imageName) return;

    visual.textContent = '';
    const media = imageName.endsWith('.mp4') ? document.createElement('video') : document.createElement('img');
    const mediaPath = `../assets/products/${imageName.includes('.') ? imageName : `${imageName}.jpg`}`;
    media.addEventListener('error', () => media.remove());
    if (media.tagName === 'VIDEO') {
        media.autoplay = true;
        media.loop = true;
        media.muted = true;
        media.playsInline = true;
        media.src = mediaPath;
    } else {
        media.alt = productName;
        media.src = mediaPath;
    }
    visual.prepend(media);
});

document.querySelectorAll('.industrial-gallery img').forEach((galleryImage) => {
    galleryImage.addEventListener('error', () => galleryImage.remove());
});

const productModal = document.createElement('div');
productModal.className = 'product-modal';
productModal.innerHTML = '<div class="product-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="product-modal-title"><button class="product-modal-close" type="button" aria-label="Close product details">×</button><h2 id="product-modal-title"></h2><p class="product-modal-description"></p><div class="product-media-preview"></div><div class="industrial-modal-content"><div class="industrial-modal-layout"><dl class="industrial-modal-spec-table"><div><dt>Power supply</dt><dd>⚡ 230 V AC</dd></div><div><dt>Outputs</dt><dd>4 relay outputs</dd></div><div><dt>pH / ORP</dt><dd>Supported</dd></div><div><dt>EC</dt><dd>Supported</dd></div><div><dt>TDS</dt><dd>Supported</dd></div><div><dt>Salinity</dt><dd>Supported</dd></div><div><dt>Temperature 1</dt><dd>DS18</dd></div><div><dt>Temperature 2</dt><dd>NTC</dd></div><div><dt>Control type</dt><dd>Smart dosing</dd></div><div><dt>Smart functions</dt><dd>Web server</dd></div><div><dt>Mounting</dt><dd>Wall / panel</dd></div><div><dt>Dimensions</dt><dd>To be confirmed</dd></div></dl><div class="industrial-modal-gallery"><img src="../assets/products/industrial-detail-1.png" alt="Industrial system detail 1"><img src="../assets/products/industrial-detail-2.png" alt="Industrial system detail 2"></div></div></div></div>';
document.body.append(productModal);

const combinedPhOrpRow = [...productModal.querySelectorAll('.industrial-modal-spec-table dt')]
    .find((label) => label.textContent.trim() === 'pH / ORP')?.parentElement;
if (combinedPhOrpRow) {
    const phRow = combinedPhOrpRow.cloneNode(true);
    const orpRow = combinedPhOrpRow.cloneNode(true);
    phRow.querySelector('dt').textContent = 'pH';
    orpRow.querySelector('dt').textContent = 'ORP';
    combinedPhOrpRow.replaceWith(phRow, orpRow);
}

const extraIndustrialSpecs = [
    ['Connectivity', 'WiFi in Access Point (No Router) and Station (with router)'],
    ['Advanced Functions', 'Sentinel, Reporter, Email Notification, Copilot'],
    ['Manual', 'View Manual']
];
const industrialSpecTable = productModal.querySelector('.industrial-modal-spec-table');
extraIndustrialSpecs.forEach(([name, value]) => {
    const row = document.createElement('div');
    row.innerHTML = `<dt>${name}</dt><dd>${value}</dd>`;
    industrialSpecTable.append(row);
});
const temperatureTwoRow = [...industrialSpecTable.querySelectorAll('dt')]
    .find((label) => label.textContent.trim() === 'Temperature 2')?.parentElement;
const controlTypeRow = [...industrialSpecTable.querySelectorAll('dt')]
    .find((label) => label.textContent.trim() === 'Control type')?.parentElement;
if (temperatureTwoRow && controlTypeRow) {
    ['Average Temp', '(T2+T1)/2', 'Diff Temp', 'T2-T1'].forEach((value, index) => {
        if (index % 2 !== 0) return;
        const row = document.createElement('div');
        row.innerHTML = `<dt>${value}</dt><dd>${['(T2+T1)/2', 'T2-T1'][index / 2]}</dd>`;
        industrialSpecTable.insertBefore(row, controlTypeRow);
    });
}

const industrialSpecIcons = {
    'Power supply': ['Power supply ⚡', '230V AC'],
    'Outputs': ['Relay outputs 🔌', '3 relay NO outputs'],
    'pH': ['pH 💧', '0.01 – 14.00'],
    'ORP': ['ORP ⚗️', '-1800 – +1800 mV'],
    'EC': ['EC ⚡', '10 – 20,000 µS/cm'],
    'TDS': ['TDS 💎 ', '6 – 12,800 ppm'],
    'Salinity': ['Salinity 🧂', '6 – 11,000 ppm'],
    'Temperature 1': ['Temperature 1 🌡️', 'digital 0-80°C'],
    'Temperature 2': ['Temperature 2 🌡️', 'analog 0-150°C'],
    'Average Temp': ['Average Temp Ø🌡️', '(T2+T1)/2'],
    'Diff Temp': ['Diff Temp Δ🌡️', 'T2-T1'],
    'Control type': ['Control Type ⚙️', 'ON-OFF with Hysteresis, logic Positive/negative, Timer associated'],
    'Mounting': ['Mounting 🛠️', 'Din Rail'],
    'Dimensions': ['Dimensions 📐', '105 × 90 × 60 mm'],
    'Connectivity': ['Connectivity 📡', 'WiFi in 🔗Access Point (No Router) and in 🌐 Station (with router)'],
    'Smart functions': ['Smart Functions 🌐', 'Home Assistant, HTTP Commands'],
    'Advanced Functions': ['Advanced Functions ⚙️', '🛡️Sentinel, 📊Reporter, 📧 Email Notification, 🤖Copilot'],
    'Manual': ['Manual 📖', 'View Manual']
};

const premiumSpecIcons = {
    'Power supply': ['Power supply ⚡', '12V DC (power adapter includeed)'],
    'Outputs': ['Outputs 🌊', '2 Built in Pumps 60ml/min, 1 USB-A output'],
    'pH': ['pH 💧', '0.01 – 14.00'],
    'ORP': ['ORP ⚗️', '-1800 – +1800 mV'],
    'EC': ['EC ⚡', '10 – 20,000 µS/cm'],
    'TDS': ['TDS 💎 ', '6 – 12,800 ppm'],
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
    'Advanced Functions': ['Advanced Functions ⚙️', '🛡️Sentinel, 📊Reporter, 📧 Email Notification, 🤖Copilot'],
    'Manual': ['Manual 📖', 'View Manual']
};

const applySpecIcons = (specIcons) => {
    productModal.querySelectorAll('.industrial-modal-spec-table dt').forEach((label) => {
        const labelText = label.dataset.specKey || label.textContent.trim();
        const spec = specIcons[labelText];
        if (!spec) return;
        label.dataset.specKey = labelText;
        label.textContent = spec[0];
        label.parentElement.querySelector('dd').textContent = spec[1];
    });
};

applySpecIcons(industrialSpecIcons);

const updateManualLink = (productName = 'Industrial') => {
    const manualRow = [...productModal.querySelectorAll('.industrial-modal-spec-table dt')]
        .find((label) => label.textContent.startsWith('Manual'))?.parentElement;
    const manualUrl = productManuals[productName] || productManuals.Industrial;
    if (manualRow) manualRow.querySelector('dd').innerHTML = `<a href="${manualUrl}" target="_blank" rel="noopener noreferrer">View manual ↗</a>`;
};
updateManualLink();

const closeProductModal = () => {
    productModal.classList.remove('is-open');
    productModal.classList.remove('media-modal');
    productModal.querySelector('.product-media-preview')?.replaceChildren();
};

const openProductMedia = (productCard) => {
    const productName = productCard.querySelector('.add-to-cart').dataset.product;
    const sourceMedia = productCard.querySelector('.product-visual img, .product-visual video');
    const mediaPreview = productModal.querySelector('.product-media-preview');
    const modalDialog = productModal.querySelector('.product-modal-dialog');
    const imageName = productImageNames[productName];
    if (!mediaPreview || (!sourceMedia && !imageName)) return;

    mediaPreview.replaceChildren();
    const media = sourceMedia?.cloneNode(true) || document.createElement(imageName.endsWith('.mp4') ? 'video' : 'img');
    if (!sourceMedia) media.src = `../assets/products/${imageName}`;
    media.removeAttribute('aria-hidden');
    if (media.tagName === 'VIDEO') {
        media.controls = true;
        media.autoplay = true;
        media.muted = false;
        media.playsInline = true;
    }
    mediaPreview.append(media);
    productModal.querySelector('#product-modal-title').textContent = productName;
    productModal.querySelector('.product-modal-description').textContent = '';
    modalDialog.classList.remove('industrial-modal');
    productModal.classList.add('media-modal', 'is-open');
};

document.querySelectorAll('.discover-link').forEach((discoverLink) => {
    discoverLink.childNodes[0].textContent = 'Details ';
    discoverLink.addEventListener('click', (event) => {
        event.preventDefault();
        const productName = discoverLink.closest('.product-card').querySelector('.add-to-cart').dataset.product;
        const modalDialog = productModal.querySelector('.product-modal-dialog');
        const galleryImages = productModal.querySelectorAll('.industrial-modal-gallery img');
        productModal.querySelector('#product-modal-title').textContent = productName;
        productModal.querySelector('.product-modal-description').textContent = productDetails[productName] || 'Product details coming soon.';
        const isDetailedProduct = productName === 'Industrial' || productName === 'Premium System';
        modalDialog.classList.toggle('industrial-modal', isDetailedProduct);
        applySpecIcons(productName === 'Premium System' ? premiumSpecIcons : industrialSpecIcons);
        updateManualLink(productName);
        if (productName === 'Premium System') {
            galleryImages[0].src = '../assets/products/premium-detail-1.jpg';
            galleryImages[0].alt = 'Premium system detail 1';
            galleryImages[1].src = '../assets/products/premium-detail-2.jpg';
            galleryImages[1].alt = 'Premium system detail 2';
            galleryImages[1].hidden = false;
        } else {
            galleryImages[0].src = '../assets/products/industrial-detail-1.png';
            galleryImages[0].alt = 'Industrial system detail 1';
            galleryImages[1].src = '../assets/products/industrial-detail-2.png';
            galleryImages[1].alt = 'Industrial system detail 2';
            galleryImages[1].hidden = false;
        }
        productModal.classList.add('is-open');
    });
});

productModal.querySelector('.product-modal-close').addEventListener('click', closeProductModal);
productModal.addEventListener('click', (event) => {
    if (event.target === productModal) closeProductModal();
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeProductModal();
});

document.querySelectorAll('.industrial-modal-gallery img').forEach((galleryImage) => {
    galleryImage.addEventListener('error', () => galleryImage.remove());
});

const pricingPath = new URL(window.location.pathname.includes('/products/') ? '../data/pricing.json' : 'data/pricing.json', document.baseURI).href;

const fallbackPricing = [
    ['Industrial', 2490], ['Premium System', 1490], ['Modular Controller', 399], ['Modular Plug', 129],
    ['Modular Pump 60 ml', 89], ['Modular Pump 180 ml', 119], ['Modular Pump 500 ml', 159],
    ['Smart Plug pH ORP', 149], ['Smart Plug EC Temp', 179], ['Smart Pump 60', 129],
    ['Smart Pump 180', 169], ['Smart Pump 500', 219], ['Smart Sens pH ORP', 199],
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
    .then((response) => {
        if (!response.ok) throw new Error(`Pricing request failed: ${response.status}`);
        return response.json();
    })
    .then((pricingData) => applyPricing(pricingData.products, pricingData.currency))
    .catch(() => {});

