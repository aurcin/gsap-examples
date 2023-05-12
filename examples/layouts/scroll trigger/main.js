gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const cards = gsap.utils.toArray('.card');
const totalCards = cards.length;

cards.forEach((card, index) => {
  gsap.set(card, {
    position: 'absolute',
    y: index * -10,
  });
});

gsap.to('.card', {
  yPercent: -180,
  stagger: 0.5,
  scrollTrigger: {
    trigger: '.content',
    markers: true,
    start: 'top 90%',
    end: '+=1000',
    scrub: true,
    pin: true,
  },
});
