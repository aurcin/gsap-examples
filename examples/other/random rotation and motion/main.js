let speed = 100;

const SIZE = 450;

function move(target) {
  let destination = {
    x: gsap.utils.random(0, SIZE),
    y: gsap.utils.random(0, SIZE),
  };

  let position = {
    x: gsap.getProperty(target, 'x'),
    y: gsap.getProperty(target, 'y'),
  };

  let deltaX = position.x - destination.x;
  let deltaY = position.y - destination.y;

  let distance = Math.hypot(deltaX, deltaY);
  let duration = distance / speed;

  let angleDeg =
    (Math.atan2(destination.y - position.y, destination.x - position.x) * 180) /
    Math.PI;

  gsap.to(target, { rotation: angleDeg + '_short', duration: 0.2 });

  gsap.to(target, {
    x: destination.x,
    y: destination.y,
    duration: duration,
    ease: 'none',
    onComplete: move,
    onCompleteParams: [target],
  });
}

gsap.utils.toArray('.bot').forEach(el => move(el));
