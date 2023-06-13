gsap.defaults({ repeat: -1, repeatDelay: 2 });

gsap.to('.cube[data-cube="1"]', { duration: 2, x: 300 });

gsap.to('.cube[data-cube="2"]', { duration: 2, delay: 1, x: 300 });

gsap.to('.cube[data-cube="3"]', { duration: 2, delay: 1, repeat: 3, x: 300 });

gsap.to('.cube[data-cube="4"]', {
  duration: 2,
  repeat: 3,
  yoyo: true,
  x: 300,
});

gsap.to('.cube[data-cube="5"]', { duration: 2, x: 300, stagger: 0.2 });
gsap.to('.cube[data-cube="6"]', {
  duration: 3,
  x: 600,
  stagger: {
    each: 0.5,
    from: 2,
    repeat: 2,
  },
});

gsap.to('.cube[data-cube="7"]', {
  duration: 2,
  x: 300,
  repeat: 0,
  onComplete: onCompleteHandler,
});
function onCompleteHandler() {
  gsap.to('.cube[data-cube="7"]', { duartion: 1, backgroundColor: '#ff00ff' });
}
