const timeline = new gsap.timeline({
  repeat: -1,
  repeatDelay: 2,
});

timeline.to('.cube[data-cube="1"]', {
  keyframes: {
    '15%': { y: 0 },
    '50%': { y: -250, ease: 'power2.out' },
    '85%': { y: 0, ease: 'bounce.out' },
    '100%': { x: 630, ease: 'none' },
  },
  duration: 2,
});
