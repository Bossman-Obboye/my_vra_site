document.addEventListener('DOMContentLoaded', () => {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    const heroVideo = document.getElementById('bgVideo'); 

    let isPlaying = true;

    playPauseBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;

        if (isPlaying) {
            heroVideo.play(); 
            pauseIcon.classList.remove('hidden');
            playIcon.classList.add('hidden');
        } else {
            heroVideo.pause();
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        }
    });
});