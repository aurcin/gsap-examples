gsap.to('.box', {
  scale: 100,
  duration: 8,
  ease: 'linear',
  opacity: 0,
  stagger: {
    each: 2,
    repeat: -1,
  },
});
