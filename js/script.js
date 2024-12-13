function adjustVideoSize() {
    const videos = document.querySelectorAll('.background-video');
    const windowRatio = window.innerWidth / window.innerHeight;
    const videoRatio = 16 / 9; // Asumiendo que el video es 16:9

    videos.forEach(video => {
        if (windowRatio < videoRatio) {
            video.style.width = '100%';
            video.style.height = 'auto';
        } else {
            video.style.width = 'auto';
            video.style.height = '100%';
        }
    });
}

window.addEventListener('load', adjustVideoSize);
window.addEventListener('resize', adjustVideoSize);