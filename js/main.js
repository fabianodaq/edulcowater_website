const renderSharedMenuFromConstant = () => {
    const menuContainer = document.querySelector('[data-menu-panel]');
    if (!menuContainer) return;

    const basePath = document.body.dataset.basePath || '.';
    const currentPage = document.body.dataset.page || '';
    const isRootPage = basePath === '.';

    const menuLinks = [
        { page: 'home', label: 'Home', rootHref: 'index.html', childHref: '../index.html' },
        { page: 'products', label: 'Products', rootHref: 'products/index.html', childHref: '../products/index.html' },
        { page: 'applications', label: 'Applications', rootHref: 'applications/', childHref: '../applications/' },
        { page: 'support', label: 'Support', rootHref: 'support/', childHref: '../support/' },
        { page: 'about', label: 'About', rootHref: 'about/', childHref: '../about/' }
    ];

    menuContainer.innerHTML = menuLinks.map((link) => {
        const href = isRootPage ? link.rootHref : link.childHref;
        const ariaCurrent = link.page === currentPage ? ' aria-current="page"' : '';
        return `<a href="${href}"${ariaCurrent}>${link.label}</a>`;
    }).join('');
};

renderSharedMenuFromConstant();

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

