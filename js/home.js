// Audio toggle button for the intro video on the home page
const initHomeAudioToggle = () => {
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
            label.textContent = audioOn ? 'Audio on' : 'Audio off';
        });
    });
};

initHomeAudioToggle();
