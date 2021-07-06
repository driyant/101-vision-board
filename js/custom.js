const main = document.querySelector("main");

window.addEventListener("load", getAnime);

function getAnime() {
    anime({
        targets: "main",
        translateX: {
            value: 250,
            duration: 800,
        },
        rotate: {
            value: 360,
            duration: 1800,
            easing: "easeInOutSine",
        },
        scale: {
            value: 2,
            duration: 1600,
            delay: 800,
            easing: "easeInOutQuart",
        },
        delay: 250, // All properties except 'scale' inherit 250ms delay
    });
}
