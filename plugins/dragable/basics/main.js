gsap.registerPlugin(Draggable);

Draggable.create('.cube[data-cube="1"]', {
  bounds: '.container[data-index="1"]',
});

Draggable.create('.cube[data-cube="11"]', {
  bounds: '.container[data-index="1"]',
  type: 'rotation',
});

Draggable.create('.cube[data-cube="2"]', {
  type: 'y',
  bounds: '.container[data-index="2"]',
});

Draggable.create('.cube[data-cube="21"]', {
  type: 'x',
  bounds: '.container[data-index="2"]',
});

Draggable.create('.cube[data-cube="22"]', {
  type: 'x,y',
  bounds: '.container[data-index="2"]',
});
