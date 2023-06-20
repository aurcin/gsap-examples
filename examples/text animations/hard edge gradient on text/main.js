const timeline = gsap.timeline({ repeat: -1 });

timeline.to('.list-item', {
  '--position2': '100%',
  duration: 1,
  ease: 'power.out',
  stagger: {
    each: 0.4,
  },
});

timeline.to('.list-item', {
  '--position1': '100%',
  duration: 1,
  ease: 'power.out',
  stagger: {
    each: 0.4,
  },
  onComplete: setNewColor,
});

function setNewColor() {
  gsap.set('.main', {
    '--dark': generateRandomColor(),
  });
}

function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
