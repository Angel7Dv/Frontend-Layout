



gsap.registerPlugin(ScrollTrigger)


gsap.from('#hero',{
    duration: 1,
    y:240,
    delay: 0,
    opacity: 0
})


const hero = gsap.timeline({
    repeat:0,
    scrollTrigger:{
        trigger: '.hero',
        start: 'bottom bottom',
        scrub: 3
    }
    
})
hero.from('.hero-img',{
    duration: 1,
    x:240,
    delay: 0,
    opacity: 0
})

