gsap.registerPlugin(ScrollTrigger);

gsap.to('.cube[data-cube="1"]', {
  scrollTrigger: '.cube[data-cube="1"]',
  x: 400,
  rotation: 360,
  duration: 3,
});

gsap.to('.cube[data-cube="11"]', {
  scrollTrigger: '.cube[data-cube="11"]',
  x: 400,
  rotation: 360,
  duration: 3,
});

gsap.to('.cube[data-cube="12"]', {
  scrollTrigger: {
    trigger: '.cube[data-cube="12"]',
    start: 'top center',
    toggleActions: 'restart pause reverse pause',
  },
  x: 400,
  rotation: 360,
  duration: 3,
});

gsap.to('.cube[data-cube="13"]', {
  scrollTrigger: {
    trigger: '.cube[data-cube="13"]',
    start: '30px 80%',
    end: 'bottom 20%',
    toggleActions: 'restart pause reverse pause',
  },
  x: 400,
  rotation: 360,
  duration: 3,
});

gsap.to('.cube[data-cube="14"]', {
  scrollTrigger: {
    trigger: '.cube[data-cube="14"]',
    start: '30px 80%',
    end: '+=100% 300px',
    toggleActions: 'restart pause reverse pause',
  },
  x: 400,
  rotation: 360,
  duration: 3,
});

gsap.to('.cube[data-cube="15"]', {
  scrollTrigger: {
    trigger: '.cube[data-cube="15"]',
    start: 'top center',
    end: () =>
      `+=${document.querySelector('.cube[data-cube="15"]').offsetHeight} 40%`,
    toggleActions: 'restart pause reverse pause',
    markers: true,
  },
  x: 400,
  rotation: 360,
  duration: 3,
});
