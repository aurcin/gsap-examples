gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = gsap.utils.toArray('.section');
const scrollContainer = document.querySelector('#pages');

const scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '#pages',
    pin: true,
    start: 'top top',
    scrub: 1,
    end: () => `+=${scrollContainer.scrollWidth - innerWidth}`,
  },
});

const links = document.querySelectorAll('.link');
for (let link of links) {
  link.addEventListener('click', onLinkClick);
}

function onLinkClick(e) {
  e.preventDefault();

  const target = document.querySelector(e.target.getAttribute('href'));
  const index = target.dataset.index;

  gsap.to(window, {
    scrollTo: {
      y: index * innerWidth,
      autoKill: false,
    },
    duration: 1,
  });
}
