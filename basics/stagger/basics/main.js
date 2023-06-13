gsap.defaults({ repeat: -1, repeatDelay: 1 });

gsap.to('.cube[data-cube="1"]', {
  duration: 2,
  x: 600,
  stagger: {
    each: 0.3,
    from: 'center',
  },
});

gsap.to('.cube[data-cube="2"]', {
  duration: 2,
  x: 600,
  stagger: {
    each: 0.3,
    from: 'edges',
  },
});

gsap.to('.cube[data-cube="3"]', {
  duration: 2,
  x: 600,
  stagger: {
    each: 0.3,
    from: 3,
  },
});
