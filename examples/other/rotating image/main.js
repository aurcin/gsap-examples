const animation = gsap
  .to('#sprite', {
    duration: 4,
    xPercent: (-100 / 16) * 15,
    ease: 'steps(15)',
  })
  .pause();

const slider = document.querySelector('#slider');
slider.addEventListener('input', onsliderValueChange);

function onsliderValueChange() {
  animation.progress(this.value).pause();
}
