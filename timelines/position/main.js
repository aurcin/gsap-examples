const timeline1 = gsap.timeline();

timeline1
  .to('.cube[data-cube="10"]', { x: 600, duration: 1 }, 2)
  .to('.cube[data-cube="11"]', { x: 600, duration: 1 })
  .to('.cube[data-cube="12"]', { x: 600, duration: 1 }, 1)
  .to('.cube[data-cube="13"]', { x: 600, duration: 1 });
