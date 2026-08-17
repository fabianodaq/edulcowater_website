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

