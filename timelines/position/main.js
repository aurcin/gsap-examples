const timeline1 = gsap.timeline({ repeat: -1, repeatDelay: 2 });

timeline1
  .to('.cube[data-cube="10"]', { x: 600, duration: 1 }, 2)
  .to('.cube[data-cube="11"]', { x: 600, duration: 1 })
  .to('.cube[data-cube="12"]', { x: 600, duration: 1 }, 1)
  .to('.cube[data-cube="13"]', { x: 600, duration: 1 });

const timeline2 = gsap.timeline({ repeat: -1, repeatDelay: 2 });

timeline2
  .to('.cube[data-cube="20"]', { x: 600, duration: 1 }, '+=1')
  .to('.cube[data-cube="21"]', { x: 600, duration: 1 }, '-=1')
  .to('.cube[data-cube="22"]', { x: 600, duration: 1 })
  .to('.cube[data-cube="23"]', { x: 600, duration: 1 }, '+=2');

const timeline3 = gsap.timeline({ repeat: -1, repeatDelay: 2 });

timeline3
  .to('.cube[data-cube="30"]', { x: 600, duration: 1 })
  .to('.cube[data-cube="31"]', { x: 600, duration: 1 }, '<-1')
  .to('.cube[data-cube="32"]', { x: 600, duration: 1 }, '>-.5')
  .to('.cube[data-cube="33"]', { x: 600, duration: 1 }, '<1');

const timeline4 = gsap.timeline({ repeat: -1, repeatDelay: 2 });

timeline4
  .add('start')
  .to('.cube[data-cube="40"]', { x: 600, duration: 1 })
  .to('.cube[data-cube="41"]', { x: 600, duration: 1 })
  .to('.cube[data-cube="42"]', { x: 600, duration: 1 }, 'start')
  .to('.cube[data-cube="43"]', { x: 600, duration: 1 }, 'start+=.5');
