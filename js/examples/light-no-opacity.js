const MAX_SIZE = 1500;

gsap.to('.box', {
  scale: MAX_SIZE,
  duration: 8,
  ease: 'linear',

  stagger: {
    each: 2,
    repeat: -1,

    onRepeat: updateZIndex,
  },
});

function updateZIndex() {
  let boxNumber = this._targets[0].dataset.number;
  if (boxNumber === '4') {
    gsap.set('.box', {
      css: {
        zIndex: 0,
      },
    });
  } else {
    gsap.set(this._targets, {
      css: {
        zIndex: 1,
      },
    });
  }
}
