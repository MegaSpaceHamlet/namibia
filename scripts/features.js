        /* 
        console.log("we got here");
        var prev = document.createElement('button');
        var next = document.createElement('button');


        var prevIcon = document.createElement('img');
        prevIcon.src = "../images/icons/prev.webp";
        prevIcon.alt = 'Click here to access previous photo';
        prevIcon.title = 'Previous photo';


        var nextIcon = document.createElement('img');
        nextIcon.src = '../images/icons/next.webp';
        nextIcon.alt = 'Click here to access next photo';
        nextIcon.title = 'Next photo';

        console.log("And we even got here");
        prev = positionAndStyleElements(prev, prevIcon, "prev");
        next = positionAndStyleElements(next, nextIcon, "next");
        document.appendChild(prev);
        document.appendChild(next);
        */ 


    /* 
    function positionAndStyleElements(elm, icon, side) {
        if (side == "next") {
            elm.style.position = 'relative';
            elm.style.right = '0';
        } else {
            elm.style.position = 'absolute';
        }

        elm.style.top = '50%';
        elm.style.padding = '100vh 10vw';
        elm.appendChild(icon);
        elm.addEventListener('mouseenter', e => {
            elm.style.opacity = '0.8';
            elm.style.background = 'linear-gradient(to right, white, gray)';
        });
        elm.addEventListener('mouseleave', e => {
            elm.style.background = 'none';
            elm.style.opacity = '1';
        });

        return elm;

    }
    */