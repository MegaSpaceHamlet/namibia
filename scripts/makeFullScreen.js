function makeFullScreen(image) {
    var photo = document.getElementById(image);

    if (document.fullscreenElement) {
        /* photo.removeChild(prev);
        photo.removeChild(next); */
        document.exitFullscreen()
            .then(() => console.log("Document exited from full screen mode"))
            .catch((err) => console.error(err))
    } else {
        if (photo.requestFullScreen) {
            photo.requestFullScreen();
        }
        else if (photo.msRequestFullSceen) {
            photo.msRequestFullSceen();
        } 
        else if (photo.mozRequestFullScreen) {
            photo.mozRequestFullScreen();

        } 
        else if (photo.webkitRequestFullscreen) {
            photo.webkitRequestFullscreen();

        } else {
            console.log("Fullscreen API is not supported.");
        }
    }
}

        

