const circles = gsap.utils.toArray('.circle');

const mainTimeline = gsap.timeline({ repeat: -1 });
mainTimeline.timeScale(0.2);

circles.forEach((circle, index) => {
  gsap.set(circle, { backgroundColor: generatecolor(index, circles.length) });
  const timeline = animateCircle(circle);
  mainTimeline.add(timeline, index * 0.071);
});

function animateCircle(circle) {
  const timeline = gsap.timeline({ repeat: -1 });

  timeline.set(circle, { transformOrigin: '60px 10px', opacity: 1 });
  timeline.to(circle, { rotation: -360, ease: 'none' });
  timeline.set(circle, { transformOrigin: '-40px 10px', rotation: 0 });
  timeline.to([circle], { rotation: 360, ease: 'none' });

  return timeline;
}

function generatecolor(seed, range) {
  let hue = (seed / range) * 360;
  return `hsl(${hue}, 80%, 50%)`;
}
