let isPlaying = false;

const cubes = document.querySelectorAll('.cubesm');
console.log(cubes);

cubes.forEach((cube, index) => {
  cube.addEventListener('click', clickHandler(index));
});

function clickHandler(index) {
  return function f() {
    if (!isPlaying) {
      isPlaying = true;
      gsap.to(cubes, {
        duration: 0.3,
        scale: 0.7,
        backgroundColor: getNewColor(),
        stagger: {
          each: 0.1,
          from: index,
          grid: [7, 7],
          repeat: 1,
          yoyo: true,
        },

        onComplete: animationDone,
      });
    }
  };
}

function animationDone() {
  isPlaying = false;
}

function getNewColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
