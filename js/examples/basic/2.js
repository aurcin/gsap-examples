gsap.from('.cube[data-cube="1"]', { duration: 2, xPercent: 500 });

gsap.to('.cube[data-cube="2"]', { duration: 3, rotation: 360 });
gsap.to('.cube[data-cube="21"]', { duration: 3, rotationX: 360 });
gsap.to('.cube[data-cube="22"]', { duration: 3, rotationY: 360 });

gsap.to('.cube[data-cube="3"]', { duration: 2, scale: 0.5 });
gsap.to('.cube[data-cube="31"]', { duration: 2, scaleX: 0.5 });
gsap.to('.cube[data-cube="32"]', { duration: 2, scaleY: 0.5 });

gsap.set('.cube[data-cube="4"]', { scale: 0.4, yPercent: -50, xPercent: 50 });
gsap.to('.cube[data-cube="4"]', {
  duration: 3,
  rotation: 360,
  transformOrigin: '0% 100%',
});

gsap.fromTo('.cube[data-cube="5"]', { x: 100 }, { duration: 2, skewX: -45 });
gsap.fromTo(
  '.cube[data-cube="51"]',
  { scale: 0.5 },
  { duration: 2, skewY: -45 }
);
