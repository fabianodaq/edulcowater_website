const hotspotDefinitions = [
    { selector: '[data-component="Sonda ORP / Redox"]', label: 'pH / ORP probe', limit: 2 },
    { selector: '[data-component="Sonda temperatura"]', label: 'Temperature probe', limit: 2 },
    { selector: '[data-component="Centralina di controllo"]', label: 'Control unit', limit: 1 },
    { selector: '[data-component="Connessione diretta"]', label: 'Access Point', limit: 1 },
    { selector: '[data-component="Router / Internet"]', label: 'Router / Station', limit: 1 },
    { selector: '[data-component="Telefono remoto"]', label: 'Remote', limit: 1 },
    { selector: '[data-component="World"]', label: 'SPS', limit: 1 }
];

const getDistinctComponents = (svgDocument, selector, limit) => {
    const seen = new Set();
    return [...svgDocument.querySelectorAll(selector)].filter((component) => {
        if (typeof component.getBBox !== 'function') return false;
        const box = component.getBBox();
        if (!box.width || !box.height) return false;
        const key = [Math.round(box.x), Math.round(box.y), Math.round(box.width), Math.round(box.height)].join(':');
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    }).slice(0, limit);
};

const showHotspotInfo = (hotspot) => {
    const panel = hotspot.closest('.bypool-diagram').querySelector('.bypool-info-panel');
    panel.querySelector('.bypool-info-title').textContent = hotspot.dataset.component;
    panel.querySelector('.bypool-info-copy').textContent = `${hotspot.dataset.component} selected. Configuration details will be available here.`;
    panel.hidden = false;
};

const createHotspot = (layer, component, label, index) => {
    const svg = component.ownerSVGElement;
    const box = component.getBBox();
    const viewBox = svg.viewBox.baseVal;
    const hotspot = document.createElement('div');
    hotspot.className = 'bypool-hotspot';
    hotspot.style.left = `${((box.x + box.width / 2 - viewBox.x) / viewBox.width) * 100}%`;
    hotspot.style.top = `${((box.y + box.height / 2 - viewBox.y) / viewBox.height) * 100}%`;
    hotspot.dataset.component = index ? `${label} ${index}` : label;
    hotspot.tabIndex = 0;
    hotspot.setAttribute('role', 'group');
    hotspot.setAttribute('aria-label', `${hotspot.dataset.component}. Use plus, minus or info.`);
    hotspot.innerHTML = `
        <span class="bypool-hotspot-dot" aria-hidden="true"></span>
        <span class="bypool-hotspot-menu">
            <button type="button" data-action="decrease" aria-label="Remove ${hotspot.dataset.component}">-</button>
            <output aria-live="polite">0</output>
            <button type="button" data-action="increase" aria-label="Add ${hotspot.dataset.component}">+</button>
            <button type="button" data-action="info" aria-label="Info about ${hotspot.dataset.component}">i</button>
        </span>`;

    hotspot.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (!button) return;
        const output = hotspot.querySelector('output');
        const value = Number(output.value || output.textContent || 0);
        if (button.dataset.action === 'increase') output.textContent = value + 1;
        if (button.dataset.action === 'decrease') output.textContent = Math.max(0, value - 1);
        if (button.dataset.action === 'info') showHotspotInfo(hotspot);
    });

    layer.append(hotspot);
};

const initBypoolHotspots = (diagram) => {
    const object = diagram.querySelector('.bypool-svg');
    const layer = diagram.querySelector('.bypool-hotspot-layer');
    if (!object || !layer) return;

    const buildHotspots = () => {
        const svgDocument = object.contentDocument;
        if (!svgDocument) return;
        layer.replaceChildren();
        hotspotDefinitions.forEach(({ selector, label, limit }) => {
            getDistinctComponents(svgDocument, selector, limit).forEach((component, index) => {
                createHotspot(layer, component, label, index + 1);
            });
        });
    };

    object.addEventListener('load', buildHotspots);
    if (object.contentDocument) buildHotspots();
    window.addEventListener('resize', buildHotspots);
};

document.querySelectorAll('.bypool-diagram').forEach((diagram) => {
    const infoPanel = document.createElement('aside');
    infoPanel.className = 'bypool-info-panel';
    infoPanel.hidden = true;
    infoPanel.innerHTML = '<button type="button" class="bypool-info-close" aria-label="Close info">x</button><strong class="bypool-info-title"></strong><p class="bypool-info-copy"></p>';
    infoPanel.querySelector('.bypool-info-close').addEventListener('click', () => { infoPanel.hidden = true; });
    diagram.append(infoPanel);
    initBypoolHotspots(diagram);
});
