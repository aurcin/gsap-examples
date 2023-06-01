let active;
const cards = gsap.utils.toArray('.card');
cards.forEach(manageCardSize);

function manageCardSize(target) {
  const closeButton = target.querySelector('.close');
  const info = target.querySelector('.info');

  let animation = gsap.timeline({ paused: true });

  animation
    .to(target, { width: 400, duration: 0.4 })
    .from(
      closeButton,
      { opacity: 0, scale: 0.4, duration: 0.1, x: '-=10' },
      '-=0.1'
    )
    .from(info, { scale: 0, duration: 0.2 });

  target.animation = animation;
  target.addEventListener('click', function () {
    if (active) {
      active.animation.reverse();
    }

    target.animation.play();
    active = target;
  });

  closeButton.addEventListener('click', function (event) {
    event.stopPropagation();
    target.animation.reverse();
  });
}
