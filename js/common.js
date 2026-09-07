// Google Analytics 4: load the Google tag once on every page using common.js.
const GOOGLE_ANALYTICS_MEASUREMENT_ID = 'G-XK6NW0LHGH';

const initializeGoogleAnalytics = () => {
    if (window.__edulcoGoogleAnalyticsInitialized) return;

    window.__edulcoGoogleAnalyticsInitialized = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
        window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', GOOGLE_ANALYTICS_MEASUREMENT_ID);

    const googleTagScript = document.createElement('script');
    googleTagScript.async = true;
    googleTagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_MEASUREMENT_ID}`;
    document.head.append(googleTagScript);
};

initializeGoogleAnalytics();

// MANU HANDLING 
// 
// Template used to generate the navigation menu
const MENU_TEMPLATE = `
<a href="{HOME_HREF}" class="{HOME_ACTIVE}" {HOME_CURRENT}><span class="nav-icon" aria-hidden="true">🏠</span>Home</a>
<a href="{PRODUCTS_HREF}" class="{PRODUCTS_ACTIVE}" {PRODUCTS_CURRENT}><span class="nav-icon" aria-hidden="true">📦</span>Products</a>
<a href="{BYPOOL_HREF}" class="{BYPOOL_ACTIVE}" {BYPOOL_CURRENT}><span class="nav-icon" aria-hidden="true">🏊</span>BYPool</a>
<a href="{AQUARIUM_HREF}" class="{AQUARIUM_ACTIVE}" {AQUARIUM_CURRENT}><span class="nav-icon" aria-hidden="true">🐠</span>BYAquarium</a>
<a href="{HYDRO_HREF}" class="{HYDRO_ACTIVE}" {HYDRO_CURRENT}><span class="nav-icon" aria-hidden="true">🌱</span>BYHydro</a>
<a href="{SOLAR_HREF}" class="{SOLAR_ACTIVE}" {SOLAR_CURRENT}><span class="nav-icon" aria-hidden="true">☀️</span>BYSolar</a>
<a href="{ABOUT_HREF}" class="{ABOUT_ACTIVE}" {ABOUT_CURRENT}><span class="nav-icon" aria-hidden="true">ℹ️</span>About</a>
`;

// Generates the navigation menu according to the current page and folder level
const generateMenuPanel = (activePage, basePath) => {
    const isRootPage = basePath === '.'; // Checks whether the current page is in the website root folder
    const href = (rootHref, childHref) => (isRootPage ? rootHref : childHref);
    const isActive = (page) => activePage === page;

    let menuHtml = MENU_TEMPLATE; // Sets the correct URL for each menu item
    menuHtml = menuHtml.replace('{HOME_HREF}', href('index.html', '../index.html'));
    menuHtml = menuHtml.replace('{PRODUCTS_HREF}', href('products/index.html', '../products/index.html'));
    menuHtml = menuHtml.replace('{BYPOOL_HREF}', href('bypool/index.html', '../bypool/index.html'));
    menuHtml = menuHtml.replace('{AQUARIUM_HREF}', href('byaquarium/index.html', '../byaquarium/index.html'));
    menuHtml = menuHtml.replace('{HYDRO_HREF}', href('byhydro/index.html', '../byhydro/index.html'));
    menuHtml = menuHtml.replace('{SOLAR_HREF}', href('bysolar/index.html', '../bysolar/index.html'));
    menuHtml = menuHtml.replace('{ABOUT_HREF}', href('about/index.html', '../about/index.html'));

    menuHtml = menuHtml.replace('{HOME_ACTIVE}', isActive('home') ? 'active' : '');
    menuHtml = menuHtml.replace('{PRODUCTS_ACTIVE}', isActive('products') ? 'active' : '');
    menuHtml = menuHtml.replace('{BYPOOL_ACTIVE}', isActive('bypool') ? 'active' : '');
    menuHtml = menuHtml.replace('{AQUARIUM_ACTIVE}', isActive('byaquarium') ? 'active' : '');
    menuHtml = menuHtml.replace('{HYDRO_ACTIVE}', isActive('byhydro') ? 'active' : '');
    menuHtml = menuHtml.replace('{SOLAR_ACTIVE}', isActive('bysolar') ? 'active' : '');
    menuHtml = menuHtml.replace('{ABOUT_ACTIVE}', isActive('about') ? 'active' : '');

    menuHtml = menuHtml.replace('{HOME_CURRENT}', isActive('home') ? 'aria-current="page"' : '');
    menuHtml = menuHtml.replace('{PRODUCTS_CURRENT}', isActive('products') ? 'aria-current="page"' : '');
    menuHtml = menuHtml.replace('{BYPOOL_CURRENT}', isActive('bypool') ? 'aria-current="page"' : '');
    menuHtml = menuHtml.replace('{AQUARIUM_CURRENT}', isActive('byaquarium') ? 'aria-current="page"' : '');
    menuHtml = menuHtml.replace('{HYDRO_CURRENT}', isActive('byhydro') ? 'aria-current="page"' : '');
    menuHtml = menuHtml.replace('{SOLAR_CURRENT}', isActive('bysolar') ? 'aria-current="page"' : '');
    menuHtml = menuHtml.replace('{ABOUT_CURRENT}', isActive('about') ? 'aria-current="page"' : '');

    return menuHtml;
};

// Loads the shared navigation menu into the current page
const renderSharedMenuFromConstant = () => {
    const menuContainer = document.querySelector('[data-menu-panel]');
    if (!menuContainer) return;

    const menuPanel = menuContainer.closest('.menu-panel');
    const mainNav = document.querySelector('.main-nav');
    if (menuPanel && mainNav && !mainNav.querySelector('.menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.type = 'button';
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-controls', 'site-menu-links');
        menuToggle.setAttribute('aria-label', 'Open navigation menu');
        menuToggle.innerHTML = '<span></span><span></span><span></span>';
        menuContainer.id = 'site-menu-links';
        mainNav.insertBefore(menuToggle, mainNav.querySelector('.brand'));

        menuToggle.addEventListener('click', () => {
            const isOpen = menuPanel.classList.toggle('menu-open');
            menuToggle.classList.toggle('is-open', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
        });

        menuContainer.addEventListener('click', (event) => {
            if (!event.target.closest('a')) return;
            menuPanel.classList.remove('menu-open');
            menuToggle.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Open navigation menu');
        });
    }

    const basePath = document.body.dataset.basePath || '.';
    const currentPage = document.body.dataset.page || '';
    menuContainer.innerHTML = generateMenuPanel(currentPage, basePath);
};

renderSharedMenuFromConstant();

const initConfiguratorInfoPopup = () => {
    const diagrams = document.querySelectorAll('object.bypool-svg');
    if (!diagrams.length) return;

    const popup = document.createElement('div');
    popup.className = 'configurator-popup';
    popup.hidden = true;
    popup.innerHTML = `
        <div class="configurator-popup-dialog" role="dialog" aria-modal="true" aria-labelledby="configurator-popup-title">
            <button class="configurator-popup-close" type="button" aria-label="Close">x</button>
            <h2 id="configurator-popup-title" data-configurator-title>Component information</h2>
            <p class="configurator-popup-description" data-configurator-description></p>
            <div class="configurator-popup-options" data-configurator-options></div>
        </div>`;
    document.body.append(popup);

    const closeButton = popup.querySelector('.configurator-popup-close');
    const titleOutput = popup.querySelector('[data-configurator-title]');
    const descriptionOutput = popup.querySelector('[data-configurator-description]');
    const optionsOutput = popup.querySelector('[data-configurator-options]');
    const configuratorData = window.configuratorComponents || {};
    let activeSelection = null;
    let activeConfiguration = null;
    const defaultConfiguration = configuratorData.default || {
        title: 'Configuration component',
        description: 'Choose a product option for this component.',
        options: ['Industrial', 'Premium']
    };
    const optionNames = [...new Set(Object.values(configuratorData)
        .flatMap((configuration) => configuration.options || []))];
    const availableOptionNames = optionNames.length ? optionNames : defaultConfiguration.options;
    const renderOption = (productName) => {
        const product = window.productCatalog?.[productName];
        if (!product) return '';
        const imageSource = product.detailImages?.[0] || '';
        const price = product.price === undefined
            ? 'Price unavailable'
            : `€ ${Number(product.price).toFixed(2).replace('.', ',')}`;
        return `
            <article class="configurator-option" data-configurator-option="${productName}">
                <h3>${productName}</h3>
                <p>${product.description || 'Product details coming soon.'}</p>
                <img src="${imageSource}" alt="${productName}" ${imageSource ? '' : 'hidden'}>
                <dl class="configurator-popup-details">
                    <div><dt>Price</dt><dd>${price}</dd></div>
                </dl>
                <div class="configurator-popup-actions">
                    <button class="add-to-cart configurator-popup-add" type="button" data-product="${productName}" data-price="${product.price || 0}" data-image="${product.cardImage ? `../assets/products/${product.cardImage}` : ''}">Add</button>
                    <button class="configurator-popup-details-link" type="button" data-configurator-details="${productName}">Details ↗</button>
                </div>
            </article>`;
    };
    optionsOutput.innerHTML = availableOptionNames.map(renderOption).join('');
    const makeProductId = (name) => String(name || '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    const readCartItems = () => {
        try {
            const raw = localStorage.getItem('edulco_cart_v1');
            const items = raw ? JSON.parse(raw) : [];
            return Array.isArray(items) ? items : [];
        } catch (error) {
            return [];
        }
    };
    const sendSelectionStateToSvg = () => {
        if (!activeSelection || !activeConfiguration) return;

        const cartItems = readCartItems();
        const selected = activeConfiguration.options.some((productName) => {
            const productId = makeProductId(productName);
            const cartItem = cartItems.find((item) => item && item.id === productId);
            return Number(cartItem?.qty) > 0;
        });

        activeSelection.diagram.contentWindow?.postMessage({
            type: 'configurator:set-state',
            id: activeSelection.id,
            selected
        }, '*');
    };
    const closePopup = () => {
        sendSelectionStateToSvg();
        popup.hidden = true;
        document.removeEventListener('keydown', handleKeydown);
    };
    const handleKeydown = (event) => {
        if (event.key === 'Escape') closePopup();
    };
    const normalizeConfiguratorId = (id) => {
        const normalizedId = String(id || '')
            .replace(/'-\d+$/, '')
            .replace(/'$/, '');
        const canonicalIds = {
            connctivit_access_point: 'connectivity_access_point',
            connectivity_access_point: 'connectivity_access_point',
            probe_temp_temp_analog_2: 'probe_temp_analog_2'
        };
        return canonicalIds[normalizedId] || normalizedId;
    };
    const getConfiguration = (details) => {
        const normalizedId = normalizeConfiguratorId(details.id);
        const baseId = normalizedId.replace(/_\d+$/, '');
        if (details.component && configuratorData[details.component]) {
            return configuratorData[details.component];
        }
        if (configuratorData[normalizedId]) {
            return configuratorData[normalizedId];
        }
        if (configuratorData[baseId]) {
            return configuratorData[baseId];
        }

        const sourceHint = `${details.source || ''} ${details.id || ''}`.toLowerCase();
        if (sourceHint.includes('probe') || sourceHint.includes('sond')) return configuratorData.probes || defaultConfiguration;
        if (sourceHint.includes('industrial')) return configuratorData.industrial || defaultConfiguration;
        return defaultConfiguration;
    };
    const showPopup = (details = {}, diagram = null) => {
        const normalizedDetails = {
            ...details,
            id: normalizeConfiguratorId(details.id)
        };
        const configuration = getConfiguration(normalizedDetails);
        activeSelection = diagram ? { diagram, id: details.id } : activeSelection;
        activeConfiguration = configuration;
        titleOutput.textContent = normalizedDetails.title || configuration.title;
        descriptionOutput.textContent = normalizedDetails.description || configuration.description;
        popup.querySelectorAll('[data-configurator-option]').forEach((option) => {
            option.hidden = !configuration.options.includes(option.dataset.configuratorOption);
        });
        popup.hidden = false;
        closeButton.focus();
        document.addEventListener('keydown', handleKeydown);
    };

    closeButton.addEventListener('click', closePopup);
    popup.addEventListener('click', (event) => {
        const detailsButton = event.target.closest('[data-configurator-details]');
        if (detailsButton) {
            window.openProductDetails?.(detailsButton.dataset.configuratorDetails);
            return;
        }
        if (event.target === popup) closePopup();
    });

    diagrams.forEach((diagram) => {
        const listenToSvg = () => {
            const svg = diagram.contentDocument?.documentElement;
            if (!svg || svg.dataset.configuratorListenerAttached) return;
            svg.dataset.configuratorListenerAttached = 'true';
            svg.addEventListener('configurator:select', (event) => showPopup(event.detail || {}, diagram));
        };

        diagram.addEventListener('load', listenToSvg);
        listenToSvg();
    });

    window.addEventListener('message', (event) => {
        if (event.data?.type !== 'configurator:select') return;
        const sourceDiagram = Array.from(diagrams).find((diagram) => diagram.contentWindow === event.source);
        showPopup(event.data.detail || {}, sourceDiagram || null);
    });
};

initConfiguratorInfoPopup();









document.querySelectorAll('.language-button').forEach((languageButton) => {
    languageButton.addEventListener('click', () => {
        const languageMenu = document.getElementById(languageButton.getAttribute('aria-controls'));
        const isOpen = languageMenu.classList.toggle('open');
        languageButton.setAttribute('aria-expanded', String(isOpen));
    });
});

document.querySelectorAll('.language-option').forEach((languageOption) => {
    languageOption.addEventListener('click', () => {
        if (['home', 'about'].includes(document.body.dataset.page)) {
            const selectedLanguage = languageOption.dataset.language || 'EN';
            const currentLanguage = localStorage.getItem('edulco_language') || 'EN';
            localStorage.setItem('edulco_language', selectedLanguage);
            if (selectedLanguage !== currentLanguage) window.location.reload();
            return;
        }

        const languageButton = languageOption.closest('.language-switcher').querySelector('.language-button');
        const languageMenu = languageOption.closest('.language-menu');
        languageButton.childNodes[0].textContent = `${languageOption.textContent.trim()} `;
        languageMenu.querySelectorAll('.language-option').forEach((option) => option.classList.remove('active'));
        languageOption.classList.add('active');
        languageMenu.classList.remove('open');
        languageButton.setAttribute('aria-expanded', 'false');
    });
});








