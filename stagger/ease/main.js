gsap.to('.cube[data-cube="1"]', {
  duration: 2,
  height: 250,
  repeat: -1,
  repeatDelay: 1,
  stagger: {
    amount: 5,
    ease: 'power2',
  },
});

gsap.to('.cube[data-cube="2"]', {
  duration: 2,
  height: 250,
  repeat: -1,
  repeatDelay: 1,
  stagger: {
    amount: 5,
    ease: 'power4',
  },
});

gsap.to('.cube[data-cube="3"]', {
  duration: 2,
  height: 250,
  repeat: -1,
  repeatDelay: 1,
  stagger: {
    amount: 5,
    ease: 'power4.inOut',
  },
});
