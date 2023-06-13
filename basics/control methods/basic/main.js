const btnPlay = document.querySelector('#btn-play');
const btnPause = document.querySelector('#btn-pause');
const btnReverse = document.querySelector('#btn-reverse');
const btnSeek = document.querySelector('#btn-seek');
const btnProgress = document.querySelector('#btn-progress');
const btnTimescaleHalf = document.querySelector('#btn-timescale-half');
const btnTimesclaeTwice = document.querySelector('#btn-timescale-twice');
const btnKill = document.querySelector('#btn-kill');

const timeline_1 = gsap.timeline({ yoyo: true, repeat: -1, repeatDelay: 0.5 });
timeline_1.to('.cube[data-cube="1"]', { x: 650, duration: 1 });
timeline_1.to('.cube[data-cube="11"]', { x: 650, duration: 1 });
timeline_1.to('.cube[data-cube="12"]', { x: 650, duration: 1 });

btnPlay.addEventListener('click', playTimeline);
btnPause.addEventListener('click', pauseTimeline);
btnReverse.addEventListener('click', reverseTimeline);
btnSeek.addEventListener('click', seekTimeline(0.5));
btnProgress.addEventListener('click', progressTimeline(0.5));
btnTimescaleHalf.addEventListener('click', timescaleTimeline(0.5));
btnTimesclaeTwice.addEventListener('click', timescaleTimeline(2));
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

function seekTimeline(num) {
  return function () {
    timeline_1.seek(num);
  };
}

function progressTimeline(num) {
  return function () {
    timeline_1.progress(num);
  };
}

function timescaleTimeline(num) {
  return function () {
    timeline_1.timeScale(num);
  };
}

function killTimeline() {
  timeline_1.kill();
}
