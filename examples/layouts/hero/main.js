const timeline = gsap.timeline({ defaults: { opacity: 0, ease: 'back' } });

timeline
  .from('.hero', { ease: 'linear', autoAlpha: 0 })
  .from('.title', { x: -600, ease: 'ease.in' }, 0)
  .from('.text', { duration: 0.7 })
  .from('.cta', { scale: 0 }, '<')
  .from(
    '.icon',
    {
      scale: 0,
      duration: 0.3,
      ease: 'linear',
      stagger: 0.2,
      transformOrigin: 'center center',
    },
    0
  );
