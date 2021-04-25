let controller;
let slideScene;

function animateSlides() {
    //initiate controller
    controller = new ScrollMagic.Controller();
    // selections
    const sliders = document.querySelectorAll('.slide')
    const nav = document.querySelector('.nav-header')
    // slide loop
    sliders.forEach(slide => {
        const revealImg = slide.querySelector('.reveal-image');
        const img = slide.querySelector('.img');
        const revealText = slide.querySelector('.reveal-text');

        // GESAP trial
        gsap.to(revealImg, 1, { x: "100%" });
    })
}

animateSlides();