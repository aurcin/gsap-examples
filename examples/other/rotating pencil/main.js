const stripes = gsap.utils.toArray('.stripe');
const stripeLength = stripes[0].offsetWidth;

gsap
  .fromTo(
    '.stripe',
    { x: 0 },
    {
      x: stripeLength * stripes.length,
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

gsap.set('.pencil', { x: 200 });
//gsap.to('.pencil', { x: 350, duration: 2 });
