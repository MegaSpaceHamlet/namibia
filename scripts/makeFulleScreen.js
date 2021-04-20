function makeFullScreen(image) {
    var photo = document.getElementById(image);
    console.log(image);
/*
    if (document.fullscreenElement) {
        document.exitFullscreen()
            .then(() => console.log("Document exited from full screen mode"))
            .catch((err) => console.error(err))
    } else { */
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
    
    photo.onfullscreenchange = widenImage;

}
/* 
function widenImage(event) {
    let photo = event.target;
    photo.style.height = 'auto !important';
    photo.style.width = 'auto !important';
}
*/