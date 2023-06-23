gsap.defaults({
  duration: 1,
});

gsap.set('.front', {
  clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
});

const timeline = gsap
  .timeline({ repeat: -1 })
  .from('.front', {
    clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
  })
  .to('.front', {
    clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
  })
  .to('.front', {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  })
  .to('.front', {
    clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
  });
