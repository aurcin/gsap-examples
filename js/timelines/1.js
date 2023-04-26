const timeline1 = gsap.timeline();

timeline1.to('.cube[data-cube="1"]', { duration: 1, x: 300 });
timeline1.to('.cube[data-cube="11"]', { duration: 1, x: 300 });
timeline1.to('.cube[data-cube="12"]', { duration: 1, x: 300 });

const timeline2 = gsap.timeline();
timeline2.set('.cube[data-cube="21"]', { x: 600, y: '-100%' });
timeline2.set('.cube[data-cube="23"]', { x: 600, y: '-100%' });
timeline2.set('.cube[data-cube="25"]', { x: 600, y: '-100%' });
timeline2.to('.cube[data-cube="2"]', {
  duration: 1,
  x: 245,
});
timeline2.to(
  '.cube[data-cube="21"]',
  {
    duration: 1,
    x: 355,
    ease: Bounce.easeOut,
  },
  '-=.5'
);
timeline2.to(
  '.cube[data-cube="22"]',
  {
    duration: 1,
    x: 245,
  },
  '-=.5'
);
timeline2.to(
  '.cube[data-cube="23"]',
  {
    duration: 1,
    x: 355,
    ease: Bounce.easeOut,
  },
  '-=.5'
);

timeline2.to(
  '.cube[data-cube="24"]',
  {
    duration: 1,
    x: 245,
  },
  '-=.5'
);
timeline2.to(
  '.cube[data-cube="25"]',
  {
    duration: 1,
    x: 355,
    ease: Bounce.easeOut,
  },
  '-=.5'
);

timeline2.to('.cube[data-cube="2"], .cube[data-cube="21"]', {
  duration: 1,
  y: '+=90',
});
timeline2.to(
  '.cube[data-cube="24"], .cube[data-cube="25"]',
  {
    duration: 1,
    y: '-=90',
  },
  '-=1'
);
timeline2.to('.container1', {
  rotate: 360,
  duration: 3,
  transformOrigin: '50% 43%',
  repeat: -1,
  ease: Power0.easeNone,
});

const timeline3 = gsap.timeline();
timeline3.addLabel('start');
timeline3.to('.cube[data-cube="3"]', {
  x: 600,
  duration: 2,
});
timeline3.addLabel('end');
timeline3.to(
  '.cube[data-cube="31"]',
  {
    x: 600,
    duration: 2,
  },
  'end'
);
timeline3.to(
  '.cube[data-cube="32"]',
  {
    x: 600,
    duration: 2,
  },
  'end'
);
timeline3.to(
  '.cube[data-cube="33"]',
  {
    x: 600,
    duration: 2,
  },
  'start'
);

const timeline4 = gsap.timeline({ yoyo: true, repeat: -1 });
timeline4.set('.cube[data-cube="41"]', { x: 600, y: '-100%' });
timeline4.set('.cube[data-cube="43"]', { x: 600, y: '-100%' });
timeline4.set('.cube[data-cube="45"]', { x: 600, y: '-100%' });
timeline4.to('.cube[data-cube="4"]', {
  duration: 1,
  x: 245,
});
timeline4.to(
  '.cube[data-cube="41"]',
  {
    duration: 1,
    x: 355,
    ease: Bounce.easeOut,
  },
  '-=.5'
);
timeline4.to(
  '.cube[data-cube="42"]',
  {
    duration: 1,
    x: 245,
  },
  '-=.5'
);
timeline4.to(
  '.cube[data-cube="43"]',
  {
    duration: 1,
    x: 355,
    ease: Bounce.easeOut,
  },
  '-=.5'
);

timeline4.to(
  '.cube[data-cube="44"]',
  {
    duration: 1,
    x: 245,
  },
  '-=.5'
);
timeline4.to(
  '.cube[data-cube="45"]',
  {
    duration: 1,
    x: 355,
    ease: Bounce.easeOut,
  },
  '-=.5'
);

timeline4.to('.cube[data-cube="4"], .cube[data-cube="41"]', {
  duration: 1,
  y: '+=90',
});
timeline4.to(
  '.cube[data-cube="44"], .cube[data-cube="45"]',
  {
    duration: 1,
    y: '-=90',
  },
  '-=1'
);
timeline4.to('.container2', {
  rotate: 360,
  duration: 3,
  transformOrigin: '50% 43%',
  ease: Power0.easeNone,
});

const timeline5 = gsap.timeline({ repeat: -1 });
timeline5.to(
  '.cube[data-cube="5"]',
  {
    duration: 3,
    x: 645,
     ease:'linear'
  },
);
timeline5.addLabel('mid')

timeline5.to(
  '.cube[data-cube="51"]',
  {
    duration: 3,
    x: 645,
     ease:'linear'
  },
  '<+0.5'
);

timeline5.to(
  '.cube[data-cube="52"]',
  {
    duration: 3,
    x: 645,
     ease:'linear'
  },
  '>-0.5'
);

timeline5.to(
  '.cube[data-cube="53"]',
  {
    duration: 3,
    x: 645,
     ease:'linear'
  },
  '>-0.5'
);

timeline5.to(
  '.cube[data-cube="54"]',
  {
    duration: 3,
    x: 645,
     ease:'linear'
  },
  'mid+=0.5'
);

timeline5.to(
  '.cube[data-cube="55"]',
  {
    duration: 3,
    x: 645,
     ease:'linear'
  },
  'mid'
);

const timeline6 = gsap.timeline({ repeat: -1, yoyo:true, repeatDelay:1 });
timeline6.to(  '.cube[data-cube="6"]',{duration:1, scale:.5})
timeline6.to(  '.cube[data-cube="61"]',{duration:1, scale:.5})
timeline6.to(  '.cube[data-cube="62"]',{duration:1, scale:.5})