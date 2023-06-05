const items = gsap.utils.toArray('.menu-item');

items.forEach(item => {
  animate(item);
});

function animate(target) {
  const timeline = gsap.timeline({ paused: true });

  const link = target.querySelector('.link');
  const border = target.querySelector('.border');

  gsap.set(border, { scaleX: 0 });

  timeline
    .to(link, {
      color: '#6eb5d6',
      y: -10,
      ease: 'back.out(5)',
    })
    .to(border, { backgroundColor: '#6eb5d6', scaleX: 1, duration: 0.5 }, 0);

  target.addEventListener('mouseenter', () => timeline.play());
  target.addEventListener('mouseleave', () => timeline.timeScale(2).reverse());
}
