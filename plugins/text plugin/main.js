gsap.registerPlugin(TextPlugin);
gsap.defaults({ repeat: -1, repeatDelay: 2 });

gsap.to('.text[data-text="1"]', {
  text: 'This is animated text paragraph',
  duration: 2,
  ease: 'power1.in',
});

gsap.from('.text[data-text="2"]', {
  text: 'This text goes backwards',
  duration: 2,
  ease: 'power1',
});

gsap.to('.text[data-text="3"]', {
  text: 'This is yoyo tween',
  duration: 3,
  ease: 'none',
  yoyo: true,
  repeatDelay: 0,
});

gsap.fromTo(
  '.text[data-text="4"]',
  { text: 'White', color: 'white' },
  {
    text: 'Green!',
    color: 'green',
    ease: 'none',
    yoyo: true,
    duration: 2,
    repeatDelay: 0,
  }
);
