const timeline1 = gsap.timeline({ repeat: -1, repeatDelay: 1 });

timeline1.to('.cube[data-cube="1"]', { duration: 1, x: 300 });
timeline1.to('.cube[data-cube="11"]', { duration: 1, x: 300 });
timeline1.to('.cube[data-cube="12"]', { duration: 1, x: 300 });
