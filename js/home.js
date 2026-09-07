const HOME_TRANSLATIONS = {
    EN: {
        homeTitle: 'Water Quality System',
        homeTagline: '"...because every balance needs a solution"',
        introVideoLabel: 'Edulco Water introduction',
        introLabel: 'EDULCO WATER · INTRODUCTION',
        waterBecoming: 'Water becoming',
        care: 'care.',
        audioOn: 'Turn audio on',
        audioOff: 'Audio off',
        buildSystem: 'Build Your System',
        poolAria: 'Build your swimming pool system',
        pools: 'Swimming Pools ↗',
        hydroponicsAria: 'Build your hydroponics system',
        hydroponics: 'Hydroponics ↗',
        aquariumAria: 'Build your aquarium system',
        aquariums: 'Aquariums ↗',
        solarAria: 'Build your solar system',
        solar: 'Solar ↗'
    },
    IT: {
        homeTitle: 'Sistema per la qualità dell’acqua',
        homeTagline: '"...perché ogni equilibrio ha bisogno di una soluzione"',
        introVideoLabel: 'Introduzione Edulco Water',
        introLabel: 'EDULCO WATER · INTRODUZIONE',
        waterBecoming: 'L’acqua diventa',
        care: 'cura.',
        audioOn: 'Attiva audio',
        audioOff: 'Audio disattivato',
        buildSystem: 'Costruisci il tuo sistema',
        poolAria: 'Costruisci il tuo sistema per piscina',
        pools: 'Piscine ↗',
        hydroponicsAria: 'Costruisci il tuo sistema idroponico',
        hydroponics: 'Idroponica ↗',
        aquariumAria: 'Costruisci il tuo sistema per acquario',
        aquariums: 'Acquari ↗',
        solarAria: 'Costruisci il tuo sistema solare',
        solar: 'Solare ↗'
    },
    ESP: {
        homeTitle: 'Sistema de calidad del agua',
        homeTagline: '"...porque cada equilibrio necesita una solución"',
        introVideoLabel: 'Introducción de Edulco Water',
        introLabel: 'EDULCO WATER · INTRODUCCIÓN',
        waterBecoming: 'El agua se convierte en',
        care: 'cuidado.',
        audioOn: 'Activar audio',
        audioOff: 'Audio desactivado',
        buildSystem: 'Construye tu sistema',
        poolAria: 'Construye tu sistema para piscina',
        pools: 'Piscinas ↗',
        hydroponicsAria: 'Construye tu sistema hidropónico',
        hydroponics: 'Hidroponía ↗',
        aquariumAria: 'Construye tu sistema para acuario',
        aquariums: 'Acuarios ↗',
        solarAria: 'Construye tu sistema solar',
        solar: 'Solar ↗'
    },
    DE: {
        homeTitle: 'System für Wasserqualität',
        homeTagline: '"...weil jedes Gleichgewicht eine Lösung braucht"',
        introVideoLabel: 'Edulco Water Einführung',
        introLabel: 'EDULCO WATER · EINFÜHRUNG',
        waterBecoming: 'Wasser wird zu',
        care: 'Fürsorge.',
        audioOn: 'Ton einschalten',
        audioOff: 'Ton aus',
        buildSystem: 'Stelle dein System zusammen',
        poolAria: 'Stelle dein Schwimmbadsystem zusammen',
        pools: 'Schwimmbäder ↗',
        hydroponicsAria: 'Stelle dein Hydrokultursystem zusammen',
        hydroponics: 'Hydroponik ↗',
        aquariumAria: 'Stelle dein Aquariumsystem zusammen',
        aquariums: 'Aquarien ↗',
        solarAria: 'Stelle dein Solarsystem zusammen',
        solar: 'Solar ↗'
    },
    FR: {
        homeTitle: 'Système de qualité de l’eau',
        homeTagline: '"...parce que chaque équilibre a besoin d’une solution"',
        introVideoLabel: 'Introduction Edulco Water',
        introLabel: 'EDULCO WATER · INTRODUCTION',
        waterBecoming: 'L’eau devient',
        care: 'attention.',
        audioOn: 'Activer le son',
        audioOff: 'Son désactivé',
        buildSystem: 'Construisez votre système',
        poolAria: 'Construisez votre système de piscine',
        pools: 'Piscines ↗',
        hydroponicsAria: 'Construisez votre système hydroponique',
        hydroponics: 'Hydroponie ↗',
        aquariumAria: 'Construisez votre système pour aquarium',
        aquariums: 'Aquariums ↗',
        solarAria: 'Construisez votre système solaire',
        solar: 'Solaire ↗'
    }
};

const applyHomeLanguage = () => {
    const language = localStorage.getItem('edulco_language') || 'EN';
    const translation = HOME_TRANSLATIONS[language] || HOME_TRANSLATIONS.EN;
    document.documentElement.lang = language.toLowerCase();

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const text = translation[element.dataset.i18n];
        if (text) element.textContent = text;
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
        const label = translation[element.dataset.i18nAriaLabel];
        if (label) element.setAttribute('aria-label', label);
    });

    const languageOption = document.querySelector(`.language-option[data-language="${language}"]`);
    const languageButton = document.querySelector('.language-button');
    if (languageOption && languageButton) {
        languageButton.childNodes[0].textContent = `${languageOption.textContent.trim()} `;
        document.querySelectorAll('.language-option').forEach((option) => option.classList.toggle('active', option === languageOption));
    }
};

applyHomeLanguage();

// Audio toggle button for the intro video on the home page
const initHomeAudioToggle = () => {
    const language = localStorage.getItem('edulco_language') || 'EN';
    const translation = HOME_TRANSLATIONS[language] || HOME_TRANSLATIONS.EN;

    document.querySelectorAll('.audio-toggle').forEach((audioToggle) => {
        const introVideo = audioToggle.closest('.intro-video');
        if (!introVideo) return;

        const video = introVideo.querySelector('.intro-video-media');
        const icon = audioToggle.querySelector('.audio-toggle-icon');
        const label = audioToggle.querySelector('.audio-toggle-label');
        if (!video || !icon || !label) return;

        audioToggle.addEventListener('click', () => {
            video.muted = !video.muted;
            const audioOn = !video.muted;
            audioToggle.setAttribute('aria-pressed', String(audioOn));
            audioToggle.setAttribute('aria-label', audioOn ? 'Turn audio off' : 'Turn audio on');
            icon.textContent = audioOn ? '🔊' : '🔇';
            label.textContent = audioOn ? translation.audioOn : translation.audioOff;
        });
    });
};

initHomeAudioToggle();
