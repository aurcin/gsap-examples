const MAX_SIZE = 1500;
const switcher = document.querySelector('#switch');

switcher.addEventListener('click', onSwitch);

const anim = gsap.to('.box', {
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

function onSwitch() {
  gsap.fromTo(
    switcher,
    { scaleY: 1 },
    { scaleY: 3, duration: 0.3, yoyo: true, repeat: 1 }
  );
  if (anim.isActive()) {
    anim.seek(0).pause();
  } else {
    gsap.set('.box', {
      css: {
        zIndex: 0,
      },
    });
    anim.resume();
  }
}
