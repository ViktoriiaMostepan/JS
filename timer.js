'use strict';

const refs = {
  startButton: document.querySelector('.startButton'),
  stopButton: document.querySelector('.stopButton'),
  pauseButton: document.querySelector('.pauseButton'),
  buttons: document.querySelector('.buttons'),
  hours: document.querySelector('.hours'),
  minutes: document.querySelector('.minutes'),
  seconds: document.querySelector('.seconds'),
};

let startTime = null;
let intervalId = null;
let currentDelta = 0;
let deltaTime = null;

function start(name) {
  if (name === 'start') {
    intervalId = setInterval(getTime, 1000);
    refs.startButton.disabled = true;
    refs.startButton.classList.toggle('disable');
    refs.pauseButton.disabled = false;
    refs.pauseButton.classList.remove('disable');
    refs.stopButton.disabled = false;
    refs.stopButton.classList.remove('disable');
  } else if (name === 'pause') {
    clearInterval(intervalId);
    refs.startButton.disabled = false;
    refs.startButton.classList.toggle('disable');
    refs.pauseButton.disabled = true;
    refs.pauseButton.classList.toggle('disable');
    currentDelta = deltaTime;
    startTime = null;
  } else {
    stop();
    startTime = null;
    clearInterval(intervalId);
    refs.startButton.disabled = false;
    refs.startButton.classList.remove('disable');
    refs.pauseButton.disabled = true;
    refs.pauseButton.classList.add('disable');
    refs.stopButton.disabled = true;
    refs.stopButton.classList.add('disable');
    currentDelta = null;
  }
}

function getTime() {
  if (startTime === null) {
    startTime = new Date();
  }
  deltaTime = Math.floor(new Date() - startTime + 1010 + currentDelta);
  const sec = pad(new Date(deltaTime).getSeconds());
  const min = pad(new Date(deltaTime).getMinutes());
  const hou = pad(new Date(deltaTime).getUTCHours());
  updateTimerValue(sec, min, hou);
  console.log(`${hou}:${min}:${sec}`);
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateTimerValue(sec, min, hou) {
  refs.seconds.textContent = sec;
  refs.minutes.textContent = min;
  refs.hours.textContent = hou;
}

function stop() {
  refs.seconds.textContent = '00';
  refs.minutes.textContent = '00';
  refs.hours.textContent = '00';
}

refs.buttons.addEventListener('click', e => {
  if (e.target.tagName !== 'BUTTON') {
    return;
  }
  start(e.target.name);
});
