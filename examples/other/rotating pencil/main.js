const timeline = gsap.timeline();

timeline
  .fromTo(
    '.color',
    { x: 0 },
    {
      x: 200,
      duration: 3,
      repeat: -1,
      ease: 'none',
      stagger: {
        each: 0.75,
        repeat: -1,
      },
    }
  )
  .seek(3);
