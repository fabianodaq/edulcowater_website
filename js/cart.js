const CART_STORAGE_KEY = 'edulco_cart_v1';
const CHECKOUT_API_BASE = window.EDULCO_CHECKOUT_API_BASE || 'https://edulco-checkout.onrender.com';
let healthRequested = false;
let healthPromise = null;

const wait = (milliseconds) => new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds);
});

const ensureCheckoutServerReady = () => {
    if (healthPromise) return healthPromise;

    healthPromise = (async () => {
        let lastError;
        for (let attempt = 0; attempt < 6; attempt += 1) {
            try {
                const response = await fetch(`${CHECKOUT_API_BASE}/health`, { method: 'GET' });
                const payload = await response.json().catch(() => ({}));
                if (response.ok && payload.ok === true) return;
                lastError = new Error('Payment system is not ready yet.');
            } catch (error) {
                lastError = error;
            }

            if (attempt < 5) await wait(2000);
        }

        throw lastError || new Error('Payment system is not ready yet.');
    })().catch((error) => {
        healthPromise = null;
        throw error;
    });

    return healthPromise;
};
const SHIPPING_RATES = {
    DE: 6.90,
    AT: 9.90,
    BE: 12.90,
    BG: 19.90,
    HR: 19.90,
    CY: 24.90,
    CZ: 12.90,
    DK: 14.90,
    EE: 19.90,
    ES: 19.90,
    FI: 19.90,
    FR: 12.90,
    GR: 24.90,
    HU: 14.90,
    IE: 19.90,
    IT: 14.90,
    LT: 19.90,
    LU: 12.90,
    LV: 19.90,
    MT: 24.90,
    NL: 12.90,
    PL: 14.90,
    PT: 19.90,
    RO: 19.90,
    SE: 19.90,
    SI: 14.90,
    SK: 14.90
};

const formatCurrency = (value) => new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
}).format(value);

const readCart = () => {
    try {
        const raw = localStorage.getItem(CART_STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(parsed)) return [];
        return parsed.filter((item) => item && item.id && item.name).map((item) => ({
            id: String(item.id),
            name: String(item.name),
            price: Number(item.price) || 0,
            qty: Math.max(0, Number(item.qty) || 0),
            selected: item.selected !== false,
            image: item.image || ''
        })).filter((item) => item.qty > 0);
    } catch (error) {
        return [];
    }
};

const writeCart = (items) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
};

const makeProductId = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const getCartItem = (items, id) => items.find((item) => item.id === id);

const getTotalUnits = (items) => items.reduce((sum, item) => sum + item.qty, 0);

const getSelectedTotal = (items) => items
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + (item.price * item.qty), 0);

const getSelectedUnits = (items) => items
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + item.qty, 0);

const updateHeaderBadges = (items) => {
    const count = String(getTotalUnits(items));
    document.querySelectorAll('.cart-count').forEach((badge) => {
        badge.textContent = count;
    });
};

const updateItemQuantity = (productMeta, nextQty) => {
    const items = readCart();
    const existing = getCartItem(items, productMeta.id);

    if (nextQty <= 0) {
        const filtered = items.filter((item) => item.id !== productMeta.id);
        writeCart(filtered);
        updateHeaderBadges(filtered);
        return;
    }

    if (existing) {
        existing.qty = nextQty;
        existing.price = productMeta.price;
        existing.image = productMeta.image;
        existing.name = productMeta.name;
    } else {
        items.push({
            id: productMeta.id,
            name: productMeta.name,
            price: productMeta.price,
            qty: nextQty,
            selected: true,
            image: productMeta.image
        });
    }

    writeCart(items);
    updateHeaderBadges(items);
};

const getProductMetaFromButton = (addButton) => {
    const card = addButton.closest('.product-card');
    const name = addButton.dataset.product || '';
    const priceNode = card ? card.querySelector('.product-price') : null;
    const imageNode = card ? card.querySelector('.product-visual img') : null;
    const priceText = priceNode ? priceNode.textContent : '0';
    const normalized = priceText.replace(/[^\d.,]/g, '').replace('.', '').replace(',', '.');
    const price = Number.parseFloat(normalized) || 0;
    return {
        id: makeProductId(name),
        name,
        price,
        image: imageNode ? imageNode.src : ''
    };
};

const syncProductCardState = (addButton, qty) => {
    const quantityControl = addButton.nextElementSibling;
    const quantityValue = quantityControl ? quantityControl.querySelector('.quantity-value') : null;
    if (!quantityControl || !quantityValue) return;
    quantityValue.textContent = String(qty);
    const hasItems = qty > 0;
    addButton.hidden = hasItems;
    quantityControl.classList.toggle('is-visible', hasItems);
};

const initSharedCartControls = () => {
    const addButtons = Array.from(document.querySelectorAll('.add-to-cart'));
    if (addButtons.length === 0) return;

    addButtons.forEach((addButton) => {
        const productId = makeProductId(addButton.dataset.product || '');
        const quantityControl = document.createElement('div');
        const decreaseButton = document.createElement('button');
        const quantityValue = document.createElement('span');
        const increaseButton = document.createElement('button');

        quantityControl.className = 'quantity-control';
        decreaseButton.className = 'quantity-button';
        decreaseButton.type = 'button';
        decreaseButton.setAttribute('aria-label', `Remove one ${addButton.dataset.product}`);
        decreaseButton.textContent = '-';
        quantityValue.className = 'quantity-value';
        increaseButton.className = 'quantity-button';
        increaseButton.type = 'button';
        increaseButton.setAttribute('aria-label', `Add one ${addButton.dataset.product}`);
        increaseButton.textContent = '+';
        quantityControl.append(decreaseButton, quantityValue, increaseButton);
        addButton.textContent = 'Add';
        addButton.setAttribute('aria-label', `Add ${addButton.dataset.product} to cart`);
        addButton.after(quantityControl);

        const existing = getCartItem(readCart(), productId);
        syncProductCardState(addButton, existing ? existing.qty : 0);

        const applyChange = (delta) => {
            const currentMeta = getProductMetaFromButton(addButton);
            const current = getCartItem(readCart(), productId);
            const currentQty = current ? current.qty : 0;
            const nextQty = Math.max(0, currentQty + delta);
            updateItemQuantity(currentMeta, nextQty);
            syncProductCardState(addButton, nextQty);
        };

        addButton.addEventListener('click', () => applyChange(1));
        decreaseButton.addEventListener('click', () => applyChange(-1));
        increaseButton.addEventListener('click', () => applyChange(1));
    });

    document.querySelectorAll('.quantity-control').forEach((quantityControl) => {
        quantityControl.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });
};

const renderCartPage = () => {
    const cartRoot = document.querySelector('[data-cart-page]');
    if (!cartRoot) return;

    const itemsWrap = cartRoot.querySelector('[data-cart-items]');
    const emptyState = cartRoot.querySelector('[data-cart-empty]');
    const totalNode = cartRoot.querySelector('[data-cart-total]');
    const itemsNode = cartRoot.querySelector('[data-cart-items-count]');
    const checkoutNode = cartRoot.querySelector('[data-cart-checkout-count]');
    const allCheckbox = cartRoot.querySelector('[data-cart-select-all]');
    const checkoutButton = cartRoot.querySelector('.cart-checkout-button');
    const shippingCountryNode = cartRoot.querySelector('[data-shipping-country]');
    const subtotalNode = cartRoot.querySelector('[data-cart-subtotal]');
    const shippingNode = cartRoot.querySelector('[data-cart-shipping]');

    const items = readCart();
    const hasItems = items.length > 0;
    const selectedTotal = getSelectedTotal(items);
    const selectedUnits = getSelectedUnits(items);
    const selectedCount = items.filter((item) => item.selected).length;
    const shippingCountry = shippingCountryNode ? shippingCountryNode.value : 'DE';
    const shippingTotal = SHIPPING_RATES[shippingCountry] || 0;

    itemsWrap.innerHTML = items.map((item) => `
        <article class="cart-item" data-cart-id="${item.id}">
            <label class="cart-item-check">
                <input type="checkbox" data-cart-action="toggle" ${item.selected ? 'checked' : ''}>
            </label>
            <div class="cart-item-image-wrap">
                <img class="cart-item-image" src="${item.image || '../assets/logo.jpg'}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>${formatCurrency(item.price)}</p>
            </div>
            <div class="cart-item-controls">
                <button type="button" data-cart-action="decrease" aria-label="Decrease quantity">-</button>
                <span>${item.qty}</span>
                <button type="button" data-cart-action="increase" aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="cart-item-remove" data-cart-action="remove">Remove</button>
        </article>
    `).join('');

    emptyState.hidden = hasItems;
    if (subtotalNode) subtotalNode.textContent = formatCurrency(selectedTotal);
    if (shippingNode) shippingNode.textContent = formatCurrency(hasItems ? shippingTotal : 0);
    totalNode.textContent = formatCurrency(selectedTotal + (hasItems ? shippingTotal : 0));
    itemsNode.textContent = String(selectedUnits);
    checkoutNode.textContent = String(selectedUnits);
    allCheckbox.checked = hasItems && selectedCount === items.length;
    allCheckbox.indeterminate = selectedCount > 0 && selectedCount < items.length;
    if (checkoutButton) checkoutButton.disabled = selectedUnits === 0;
};

const bindCartPageEvents = () => {
    const cartRoot = document.querySelector('[data-cart-page]');
    if (!cartRoot) return;

    const allCheckbox = cartRoot.querySelector('[data-cart-select-all]');
    const itemsWrap = cartRoot.querySelector('[data-cart-items]');
    const shippingCountryNode = cartRoot.querySelector('[data-shipping-country]');
    const customerFormFields = cartRoot.querySelectorAll('.cart-customer input, .cart-customer select');

    const wakeCheckoutServer = () => {
        if (healthRequested) return;
        healthRequested = true;
        ensureCheckoutServerReady().catch(() => {});
    };

    customerFormFields.forEach((field) => {
        field.addEventListener('focus', wakeCheckoutServer, { once: true });
        field.addEventListener('click', wakeCheckoutServer, { once: true });
    });

    shippingCountryNode.addEventListener('change', () => {
        renderCartPage();
    });

    allCheckbox.addEventListener('change', () => {
        const items = readCart().map((item) => ({ ...item, selected: allCheckbox.checked }));
        writeCart(items);
        updateHeaderBadges(items);
        renderCartPage();
    });

    itemsWrap.addEventListener('click', (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        const action = target.dataset.cartAction;
        if (!action) return;

        const itemNode = target.closest('[data-cart-id]');
        if (!itemNode) return;
        const itemId = itemNode.getAttribute('data-cart-id');
        if (!itemId) return;

        const items = readCart();
        const item = getCartItem(items, itemId);
        if (!item) return;

        if (action === 'increase') item.qty += 1;
        if (action === 'decrease') item.qty = Math.max(0, item.qty - 1);
        if (action === 'remove') item.qty = 0;

        const next = items.filter((entry) => entry.qty > 0);
        writeCart(next);
        updateHeaderBadges(next);
        renderCartPage();
    });

    itemsWrap.addEventListener('change', (event) => {
        const target = event.target;
        if (!(target instanceof HTMLInputElement)) return;
        if (target.dataset.cartAction !== 'toggle') return;

        const itemNode = target.closest('[data-cart-id]');
        if (!itemNode) return;
        const itemId = itemNode.getAttribute('data-cart-id');
        if (!itemId) return;

        const items = readCart();
        const item = getCartItem(items, itemId);
        if (!item) return;
        item.selected = target.checked;
        writeCart(items);
        updateHeaderBadges(items);
        renderCartPage();
    });
};

const bindCheckoutButton = () => {
    const checkoutButton = document.querySelector('.cart-checkout-button');
    const cartRoot = document.querySelector('[data-cart-page]');
    if (!checkoutButton || !cartRoot) return;
    const shippingCountryNode = cartRoot.querySelector('[data-shipping-country]');
    const customerFields = ['firstName', 'lastName', 'email', 'address', 'houseNumber', 'city', 'postalCode', 'country'];
    const optionalCustomerFields = ['phone'];

    checkoutButton.addEventListener('click', async () => {
        const items = readCart().filter((item) => item.selected && item.qty > 0).map((item) => ({
            id: item.id,
            qty: item.qty
        }));

        if (items.length === 0) return;

        const customer = Object.fromEntries([...customerFields, ...optionalCustomerFields].map((fieldName) => {
            const field = cartRoot.querySelector(`[name="${fieldName}"]`);
            return [fieldName, field ? field.value.trim() : ''];
        }));
        const hasMissingField = customerFields.some((fieldName) => !customer[fieldName]);
        if (hasMissingField || customer.country !== shippingCountryNode.value) {
            alert('Please complete the shipping address before continuing.');
            return;
        }

        checkoutButton.disabled = true;
        const originalText = checkoutButton.textContent;
        checkoutButton.textContent = 'Payment system initializing...';

        try {
            await ensureCheckoutServerReady();
            checkoutButton.textContent = 'Opening checkout...';
            const response = await fetch(`${CHECKOUT_API_BASE}/api/create-checkout-session`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items,
                    shippingCountry: shippingCountryNode.value,
                    customer
                })
            });

            const payload = await response.json().catch(() => ({}));
            if (!response.ok || !payload.url) {
                throw new Error(payload.error || 'Checkout session failed');
            }

            window.location.href = payload.url;
        } catch (error) {
            alert('Payment system is taking longer than expected. Please try again.');
            checkoutButton.disabled = false;
            checkoutButton.textContent = originalText;
        }
    });
};

const initCart = () => {
    const items = readCart();
    updateHeaderBadges(items);
    initSharedCartControls();
    bindCartPageEvents();
    bindCheckoutButton();
    renderCartPage();
};

initCart();
