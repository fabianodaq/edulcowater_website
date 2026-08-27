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
    menuHtml = menuHtml.replace('{BYPOOL_HREF}', href('bypool/', '../bypool/'));
    menuHtml = menuHtml.replace('{AQUARIUM_HREF}', href('byaquarium/', '../byaquarium/'));
    menuHtml = menuHtml.replace('{HYDRO_HREF}', href('byhydro/', '../byhydro/'));
    menuHtml = menuHtml.replace('{SOLAR_HREF}', href('bysolar/', '../bysolar/'));
    menuHtml = menuHtml.replace('{ABOUT_HREF}', href('about/', '../about/'));

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








