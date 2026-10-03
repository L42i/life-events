const PLAYHEAD = document.getElementById('playhead');
const PERCENT = document.getElementById('percent');

let startTime = null;
const duration = 300;
let stopTime = false;

let progress = 0;

export const getProgress = () => progress;

const animate = timestamp => {
  if (startTime === null) {
    startTime = timestamp;
  }
  const elapsed = timestamp - startTime;
  progress = Math.min(elapsed / (1000 * duration), 1);
  PLAYHEAD.style.width = `${ progress * 100 }%`;

  // NOTE: very jank but works
  // const hours = Math.floor(progress * 24) % 24;
  // const minutes = Math.floor((progress * 24 - hours) * 60) % 60;
  // PERCENT.textContent = `${ hours === 0 ? 12 : hours > 12 ? hours - 12 : hours }:${ minutes.toString().padStart(2, '0') } ${ hours < 12 ? 'AM' : 'PM' }`;
  PERCENT.textContent = `${ (progress * 100).toFixed(1) }%`;

  if (progress < 1 && !stopTime) {
    requestAnimationFrame(animate);
  }
};

export const start = () => {
  stop();
  stopTime = false;
  requestAnimationFrame(animate);
};

export const pause = () => {
  stopTime = true;
};

export const stop = () => {
  stopTime = true;
  startTime = null;
  progress = 0;
  PLAYHEAD.style.width = '0%';
  // PERCENT.textContent = '12:00 AM';
  PERCENT.textContent = '0.0%';
};
