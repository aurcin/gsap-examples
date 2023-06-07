const buttons = gsap.utils.toArray('.button');

buttons.forEach(button => {
  animate(button);
});

function animate(target) {
  const tween = gsap.to(target, {
    scale: 1,
    margin: '8px 8px',
    repeat: -1,
    yoyo: true,
    paused: true,
  });

  target.addEventListener('mouseenter', onMouseEnter);
  target.addEventListener('mouseleave', onMouseLeave);

  function onMouseEnter(e) {
    gsap.to(e.target, { backgroundColor: 'orange' });
    tween.restart();
  }

  function onMouseLeave() {
    tween.pause();
    gsap.to(target, {
      scale: 0.7,
      margin: '-9px -36px',
      backgroundColor: '#2c99d8',
    });
  }
}
