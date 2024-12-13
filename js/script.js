document.addEventListener('DOMContentLoaded', (event) => {
    const options = {
        id: '1038824448', // Reemplaza esto con el ID de tu video de Vimeo
        background: true,
        autopause: false,
        autoplay: true,
        byline: false,
        controls: false,
        loop: true,
        muted: true,
        portrait: false,
        title: false
    };

    const player1 = new Vimeo.Player('background-video-1', options);
    const player2 = new Vimeo.Player('background-video-2', options);

    player1.setVolume(0);
    player2.setVolume(0);

    function resizeVideo() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const aspectRatio = 16 / 9;

        let newWidth = width;
        let newHeight = width / aspectRatio;

        if (newHeight < height) {
            newHeight = height;
            newWidth = height * aspectRatio;
        }

        player1.setWidth(newWidth).setHeight(newHeight);
        player2.setWidth(newWidth).setHeight(newHeight);
    }

    window.addEventListener('resize', resizeVideo);
    resizeVideo();
});

