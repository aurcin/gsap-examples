gsap.registerPlugin(MotionPathPlugin);

gsap.to('.cube[data-cube="1"]', {
  duration: 5,
  repeat: -1,
  yoyo: true,
  motionPath:
    'M.36,89.63C80.64,4.35,110.81-4.89,123.49,2.56c23.39,13.72-16.09,82.08,16.33,153.74,31,68.49,113.06,107.78,134,91.16,25.63-20.34-55.36-112.37-16.32-184.36,20.75-38.26,76.78-73.39,121.09-52.38,34.06,16.16,54.15,62.17,44.21,111.57',
});

gsap.to('.cube[data-cube="2"]', {
  duration: 5,
  repeat: -1,
  yoyo: true,
  motionPath: {
    path: 'M.36,89.63C80.64,4.35,110.81-4.89,123.49,2.56c23.39,13.72-16.09,82.08,16.33,153.74,31,68.49,113.06,107.78,134,91.16,25.63-20.34-55.36-112.37-16.32-184.36,20.75-38.26,76.78-73.39,121.09-52.38,34.06,16.16,54.15,62.17,44.21,111.57',
    autoRotate: true,
  },
});

gsap.to('.cube[data-cube="3"]', {
  duration: 5,
  repeat: -1,
  yoyo: true,
  motionPath: {
    path: 'M.36,89.63C80.64,4.35,110.81-4.89,123.49,2.56c23.39,13.72-16.09,82.08,16.33,153.74,31,68.49,113.06,107.78,134,91.16,25.63-20.34-55.36-112.37-16.32-184.36,20.75-38.26,76.78-73.39,121.09-52.38,34.06,16.16,54.15,62.17,44.21,111.57',
    autoRotate: true,
    start: 0.33,
    end: 0.66,
  },
});
