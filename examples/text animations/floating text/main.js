const mainTimeline = gsap.timeline({ repeat: -1 });

const text = new SplitType('#persons', { types: 'words' });
text.words.forEach((word, index) => {
  gsap.set(word, { display: 'none' });

  const timeline = animateWord(word);

  mainTimeline.add(timeline, index * 1.5);
});

function animateWord(word) {
  const timeline = gsap.timeline();
  timeline.set(word, { display: 'inline-block' });
  timeline.from(word, { yPercent: 100, duration: 0.5, opacity: 0 });
  timeline.to(word, { yPercent: -100, duration: 0.5, opacity: 0 }, '<=1');
  timeline.set(word, { display: 'none' });

  return timeline;
}
