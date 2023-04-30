gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: '.cube[data-cube="1"]',
  start: 'top center',
  end: 'bottom center',
  onEnter: () => console.log('entered'),
  onLeave: () => console.log('leaved'),
  onEnterBack: () => console.log('entered back'),
  onLeaveBack: () => console.log('leaved back'),
});

ScrollTrigger.create({
  trigger: '.cube[data-cube="11"]',
  start: 'top center',
  end: 'bottom center',
  onUpdate: (self) => console.log('updating', self.progress),
});

ScrollTrigger.create({
  trigger: '.cube[data-cube="12"]',
  start: 'top center',
  end: 'bottom center',
  onToggle: (self) => console.log('toggled', self.isActive),
});

ScrollTrigger.create({
  trigger: '.cube[data-cube="13"]',
  start: 'top center',
  end: 'bottom center',
  toggleClass: 'active',
  markers: true,
});
