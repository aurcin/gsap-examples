const btnPlay = document.querySelector('#btn-play');
const btnPause = document.querySelector('#btn-pause');
const btnReverse = document.querySelector('#btn-reverse');
const btnKill = document.querySelector('#btn-kill');

const timeline_1 = gsap.timeline({
  yoyo: true,
  repeat: -1,
  repeatDelay: 0.5,
  onComplete: onTimelineComplete,
  onStart: onTimelineStart,
  onUpdate: onTimelineUpdate,
  onRepeat: onTimelineRepeat,
  onReverseComplete: onTimelineReverseComplete,
});
timeline_1.to('.cube[data-cube="1"]', { x: 650, duration: 3 });
timeline_1.to('.cube[data-cube="11"]', { x: 650, duration: 3 });
timeline_1.to('.cube[data-cube="12"]', { x: 650, duration: 3 });

btnPlay.addEventListener('click', playTimeline);
btnPause.addEventListener('click', pauseTimeline);
btnReverse.addEventListener('click', reverseTimeline);
btnKill.addEventListener('click', killTimeline);

function playTimeline() {
  timeline_1.resume();
}

function pauseTimeline() {
  timeline_1.pause();
}

function reverseTimeline() {
  timeline_1.reverse();
}

function killTimeline() {
  timeline_1.kill();
}

function onTimelineComplete() {
  console.log('Completed');
}

function onTimelineStart() {
  console.log('Started');
}

function onTimelineUpdate() {
  console.log('Updated');
}

function onTimelineRepeat() {
  console.log('Repeated');
}

function onTimelineReverseComplete() {
  console.log('Reverse Completed');
}
