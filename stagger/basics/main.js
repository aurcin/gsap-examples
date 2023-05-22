gsap.to('.cube[data-cube="1"]', {
  duration: 2,
  x: 600,
  repeat: -1,
  repeatDelay: 1,
  stagger: {
    each: 0.3,
    from: 'center',
  },
});

gsap.to('.cube[data-cube="2"]', {
  duration: 2,
  x: 600,
  repeat: -1,
  repeatDelay: 1,
  stagger: {
    each: 0.3,
    from: 'edges',
  },
});
