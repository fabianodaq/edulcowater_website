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



document.querySelectorAll('.product-card').forEach((productCard) => {
    const productName = productCard.querySelector('.add-to-cart')?.dataset.product;
    const visual = productCard.querySelector('.product-visual');
    const imageName = null;

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









// Create and add the product details popup to the page.
const productModal = document.createElement('div');
productModal.className = 'product-modal';
productModal.innerHTML = '<div class="product-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="product-modal-title"><button class="product-modal-close" type="button" aria-label="Close product details">×</button><h2 id="product-modal-title"></h2><p class="product-modal-description"></p><div class="industrial-modal-content"><div class="industrial-modal-layout"><dl class="industrial-modal-spec-table"><div><dt>Power supply</dt><dd>⚡ 230 V AC</dd></div><div><dt>Outputs</dt><dd>4 relay outputs</dd></div><div><dt>pH / ORP</dt><dd>Supported</dd></div><div><dt>EC</dt><dd>Supported</dd></div><div><dt>TDS</dt><dd>Supported</dd></div><div><dt>Salinity</dt><dd>Supported</dd></div><div><dt>Temperature 1</dt><dd>DS18</dd></div><div><dt>Temperature 2</dt><dd>NTC</dd></div><div><dt>Control type</dt><dd>Smart dosing</dd></div><div><dt>Smart functions</dt><dd>Web server</dd></div><div><dt>Mounting</dt><dd>Wall / panel</dd></div><div><dt>Dimensions</dt><dd>To be confirmed</dd></div></dl><div class="product-modal-gallery"><img src="../assets/products/industrial-detail-1.png" alt="Industrial system detail 1"><img src="../assets/products/industrial-detail-2.png" alt="Industrial system detail 2"></div></div></div></div>';
document.body.append(productModal);

// Technical specifications displayed in the products popup
const products = {
    'Industrial': {
        description: 'Din Rail mounted multifunction Wi-Fi controller designed for water treatment, hydroponics, aquariums, ' +
                     'swimming pools, solar thermal systems, HVAC applications, and general process automation.',
        cardImage: 'industrial.png',
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

    'Premium System': {
        description: 'Wall Mounting multifunction Wi-Fi controller designed for water treatment, hydroponics, aquariums, ' +
                     'swimming pools, solar thermal systems, HVAC applications, and general process automation, ' +
                     'provided with 2 built in dosing pumps and a USB-A output for additional dosing or control.',
        cardImage: 'premium.jpg',
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

    'Modular Controller': {
        description: 'The central controller for building a flexible system around your water quality and dosing needs.',
        cardImage: 'modular-controller.png',
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
        description: 'A compact expansion module that connects additional control and dosing functions to a modular setup.',
        cardImage: 'modular-plug.jpg',
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

    'Modular Pump 60 ml': {
        description: 'A compact 60 ml dosing pump for precise, efficient control in smaller modular systems.',
        cardImage: 'modular-pump60.jpg',
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

    'Modular Pump 180 ml': {
        description: 'A balanced 180 ml dosing pump for everyday modular water treatment applications.',
        cardImage: 'modular-pump180.jpg',
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

    'Modular Pump 500 ml': {
        description: 'A higher-capacity 500 ml dosing pump for larger modular water systems.',
        cardImage: 'modular-pump500.jpg',
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

    'Smart Plug pH ORP': {
        description: 'A connected plug for monitoring pH and ORP values and keeping water chemistry under control.',
        cardImage: 'smart-plug-ph-orp.jpg',
        detailImages: [ '../assets/products/smart-plug-ph-orp-detail-1.jpg', '../assets/products/smart-plug-ph-orp-detail-2.jpg'],
        manual: 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_MODULAR.pdf',
        specs: {}
    },

    'Smart Plug EC Temp': {
        description: 'A connected plug for reading conductivity and temperature in one compact monitoring solution.',
        cardImage: 'smart-plug-ec-temp.jpg',
        detailImages: [ '../assets/products/smart-plug-ec-temp-detail-1.jpg', '../assets/products/smart-plug-ec-temp-detail-2.jpg'],
        manual: 'https://github.com/fabianodaq/EdulcoWaterDocs/blob/main/Manuals/EDULCOWATER_MODULAR.pdf',
        specs: {}
    },

    'Smart Pump 60': {
        description: 'The compact 60 ml smart dosing pump for precise control in smaller installations.',
        cardImage: 'smart-pump-180.jpg',
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
        description: 'The 180 ml smart dosing pump for reliable, balanced dosing in everyday systems.',
        cardImage: 'smart-pump-180.jpg',
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
        description: 'The 500 ml smart dosing pump for higher-capacity water treatment applications.',
        cardImage: 'smart-pump-500.jpg',
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

    'Smart Sens pH ORP': {
        description: 'A smart sensor solution for live pH and ORP insight, helping maintain the right water balance.',
        cardImage: 'smart-sens-ph-orp.jpg',
        detailImages: [],
        manual: null,
        specs: {}
    },

    'Smart Sens EC Temp': {
        description: 'A smart sensor solution for live conductivity and temperature monitoring.',
        cardImage: 'smart-sens-ec-temp.jpg',
        detailImages: [],
        manual: null,
        specs: {}
    },

    'pH Probe': {
        description: 'A reliable pH probe for accurate measurement and precise water balance control.',
        cardImage: 'probe-ph.jpg',
        detailImages: [],
        manual: null,
        specs: {}
    },

    'ORP Probe': {
        description: 'An ORP probe for monitoring oxidation-reduction potential in water treatment systems.',
        cardImage: 'probe-orp.jpg',
        detailImages: [],
        manual: null,
        specs: {}
    },

    'EC Probe': {
        description: 'An EC probe for dependable conductivity measurement and dosing feedback.',
        cardImage: 'probe-ec.jpg',
        detailImages: [],
        manual: null,
        specs: {}
    },

    'NTC Temperature Probe': {
        description: 'A stable NTC probe for accurate temperature measurement and system control.',
        cardImage: 'probe-ntc.mp4',
        detailImages: [],
        manual: null,
        specs: {}
    },

    'DS18 Temperature Probe': {
        description: 'A digital DS18 temperature probe for connected water quality systems.',
        cardImage: 'probe-ds18.png',
        detailImages: [],
        manual: null,
        specs: {}
    },

    'Silicone NTC Temperature Probe': {
        description: 'A flexible silicone NTC temperature probe designed for protected installations.',
        cardImage: 'probe-ntc-ht.jpg',
        detailImages: [],
        manual: null,
        specs: {}
    }
};

document.querySelectorAll('.product-card').forEach((productCard) => {
    const productName = productCard.querySelector('.add-to-cart')?.dataset.product;
    const visual = productCard.querySelector('.product-visual');
    const imageName = products[productName]?.cardImage;

    if (!visual || !imageName) return;

    visual.textContent = '';
    const media = imageName.endsWith('.mp4') ? document.createElement('video') : document.createElement('img');
    const mediaPath = `../assets/products/${imageName}`;
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

// Populate the product specification table from products[productName].specs
const renderProductSpecs = (product) => {
    const specTable = productModal.querySelector('.industrial-modal-spec-table');
    specTable.innerHTML = '';
    Object.values(product.specs).forEach(([label, value]) => {
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


// popup closure function
const closeProductModal = () => {
    productModal.classList.remove('is-open');
};

document.querySelectorAll('.discover-link').forEach((discoverLink) => {
    discoverLink.addEventListener('click', (event) => {
        event.preventDefault();

        const productName = discoverLink.closest('.product-card').querySelector('.add-to-cart').dataset.product;
        const product = products[productName];
        if (!product) return;

        productModal.querySelector('.product-modal-dialog').classList.add('industrial-modal');
        const galleryImages = productModal.querySelectorAll('.product-modal-gallery img');
        productModal.querySelector('#product-modal-title').textContent = productName;
        productModal.querySelector('.product-modal-description').textContent = product.description || 'Product details coming soon.';
        renderProductSpecs(product);

        galleryImages.forEach((galleryImage, index) => {
            const detailImage = product.detailImages[index];
            galleryImage.hidden = !detailImage;
            if (detailImage) {
                galleryImage.src = detailImage;
                galleryImage.alt = `${productName} detail ${index + 1}`;
            }
        });

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

document.querySelectorAll('.product-modal-gallery img').forEach((galleryImage) => {
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