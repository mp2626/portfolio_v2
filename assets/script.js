let controller;
let slideScene;
let pageScene;

function animateSlides() {
    //initiate controller
    controller = new ScrollMagic.Controller();
    // selections
    const sliders = document.querySelectorAll('.slide')
    const nav = document.querySelector('.nav-header')
    // slide loop
    sliders.forEach((slide, index, slides) => {
        const revealImg = slide.querySelector('.reveal-image');
        const img = slide.querySelector('img');
        const revealText = slide.querySelector('.reveal-text');

        // GSAP trial
        const slideTl = gsap.timeline({
            defaults: { duration: 1, ease: "power2.inOut" }
        });
        slideTl.fromTo(revealImg, { x: '0%' }, { x: '100%' });
        slideTl.fromTo(img, { scale: 2 }, { scale: 1 }, '-=1');
        slideTl.fromTo(revealText, { x: '0%' }, { x: '100%' }, '-=0.75');
        slideTl.fromTo(nav, { y: '-100%' }, { y: '0%' }, '-=0.75')

        // Create Scene slides
        slideScene = new ScrollMagic.Scene({
            triggerElement: slide,
            triggerHook: 0.25,
            reverse: false
        })
            .setTween(slideTl)
            .addIndicators({
                colorStart: "white",
                colorTrigger: "white",
                name: "slide"
            })
            .addTo(controller);
        // create scene page
        const pageTl = gsap.timeline()
        pageTl.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 })
        // scene
        pageScene = new ScrollMagic.Scene({
            triggerElement: slide,
            duration: '100%',
            triggerHook: 0,
        })
            .addIndicators({
                colorStart: "white",
                colorTrigger: "white",
                name: "page",
                indent: 200
            })
            .setPin(slide, { pushFollowers: false })
            .setTween(pageTl)
            .addTo(controller)

    });
}
animateSlides();