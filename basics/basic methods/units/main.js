gsap.defaults({ repeat: -1, repeatDelay: 2 });

gsap.to('.cube[data-cube="1"]', { duration: 2, x: 300 });

gsap.to('.cube[data-cube="2"]', { duration: 2, x: '+=300' });

gsap.to('.cube[data-cube="3"]', { duration: 2, x: '20vw' });

gsap.to('.cube[data-cube="4"]', { duration: 2, x: getNewPosition });
function getNewPosition() {
  return Math.random() * 300;
}
