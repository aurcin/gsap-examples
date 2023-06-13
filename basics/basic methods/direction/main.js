gsap.defaults({ repeat: -1, repeatDelay: 2 });

gsap.to('.cube[data-cube="1"]', {
  duration: 2,
  x: 300,
});

gsap.from('.cube[data-cube="2"]', {
  duration: 2,
  x: 300,
});

gsap.fromTo('.cube[data-cube="3"]', { x: 150 }, { duration: 2, x: 300 });

gsap.set('.cube[data-cube="4"]', { x: 300 });
