gsap.registerPlugin(ScrollTrigger);

gsap.to('.cube[data-cube="11"]', {
  scrollTrigger: {
    trigger: '.cube[data-cube="11"]',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: true,
  },
  x: 400,
  rotation: 360,
  duration: 3,
});

gsap.to('.cube[data-cube="12"]', {
  scrollTrigger: {
    trigger: '.cube[data-cube="12"]',
    start: 'top 80%',
    end: 'bottom 20%',
    markers: true,
    scrub: 1,
  },
  x: 400,
  rotation: 360,
  duration: 3,
});
