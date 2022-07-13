gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let container = document.querySelector("body");

let height;
function setHeight() {
  height = container.clientHeight;
  document.body.style.height = height + "px";
}
ScrollTrigger.addEventListener("refreshInit", setHeight);

// smooth scrolling container
gsap.to(container, {
  y: () => -(height - document.documentElement.clientHeight),
  ease: "none",
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    invalidateOnRefresh: true
  }
});

// scrolltrigger for each box
gsap.utils.toArray('.box').forEach(box => {
  gsap.to(box, {
    backgroundColor: '#ffffff',
    scrollTrigger: {
      trigger: box,
      start: 'top center',
      toggleActions: 'play none none reverse',
      markers: true
    }
  });
});
    
