gsap.defaults({ repeat: -1, repeatDelay: 2 });

const text = new SplitType('.text[data-text="1"]', { types: 'chars' });
gsap.from(text.chars, { opacity: 0, y: 20, ease: 'back(5)', stagger: 0.05 });

const text2 = new SplitType('.text[data-text="2"]', { types: 'words' });
gsap.from(text2.words, {
  opacity: 0,
  rotation: -90,
  ease: 'back',
  stagger: 0.2,
});
