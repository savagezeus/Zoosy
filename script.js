function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

window.onload = function() {
    document.getElementById("crosshairCopy").onclick = () => {
        crosshairCopy();
        console.log("worked1")
    }
}

function crosshairCopy() {
    var copyText = document.getElementById("crosshairInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    console.log("worked")
}

window.onload = function() {
    myTimeline();
    cssAdjustment();
};


function myTimeline() {
    let animation = document.querySelector('.logoAnim');

    let animationPlay = bodymovin.loadAnimation({
        container: animation,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: "./img/logoAnim.json"
    });

    animation.addEventListener('onload', function() {
        animationPlay.goToAndPlay(0);
    });

    var tl = gsap.timeline({ defualts: { duration: 1 } })
    tl.delay(1.1)
    tl.to('#preloader', { opacity: 0, duration: 1, ease: 'power2', stagger: 0.6 })
    tl.to('#preloader', { width: "0px", height: "0px", duration: 1 }, "-=0")
        .from('.column1', { opacity: 0, duration: 1, y: -50, ease: 'power2', stagger: 0.6 }, "-=1.5")
        .from('.column2', { opacity: 0, duration: 1, y: -50, ease: 'power2', stagger: 0.2 }, "-=1")
        .from('.column3', { opacity: 0, duration: 1, y: -50, ease: 'power2', stagger: 0.2 }, "-=0.5");

};

var selector;

function cssAdjustment() {
    selector = setTimeout(function() {
        function device(x) {
            if (x.matches) { // If media query matches
                document.body.style.overflowY = "scroll";
                console.log("small")
            } else {
                document.body.style.overflowY = "scroll";
                console.log("desktop")
            }
        }

        var x = window.matchMedia("(max-width: 900px)")
        device(x)
        x.addListener(device)



    }, 3500);
}