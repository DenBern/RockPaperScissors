import {tracks} from './data.js';
const audio = document.getElementById('audio');
const btnPlayTrack = document.querySelector('.play-track');
const btnPauseTrack = document.querySelector('.pause-track');
const btnNextTrack = document.querySelector('.next-track');
const btnPrevTrack = document.querySelector('.prev-track');
const btnSpeaker = document.querySelector('.btn-speaker');
const inputVolume = document.querySelector('.volume');
const author = document.querySelectorAll('.author');
const currentTrack = document.querySelector('h2');
const trackTime = document.querySelector('.track-time');
const currentTrackTime = document.querySelector('.current-time');
const cover = document.querySelector('.cover');
const trackLine = document.querySelector('.track-line');

const countTraks = tracks.length;
let isMuted = false;
let isPlay = false;
let isPaused = false;
let pausedTime = 0;
let track;
let durationTrack = 0;
let seconds = 0;
let minutes = 0;
let currentTime = 0;
let currentMinutes = 0;
let currentSeconds = 0;
let timerId;

window.onload = function () {
  track = 0;
  renderTrack();
}

const renderTrack = () => {
  author.forEach(item => item.textContent = `${tracks[track].author}`);
  currentTrack.textContent = `${tracks[track].track}`;
  trackTime.textContent = `${minutes ? minutes : '0'}:${seconds ? seconds : '00'}`;
  currentTrackTime.textContent = '0:00';
  cover.style.backgroundImage = `url(${tracks[track].cover})`;
}

audio.load();

const setVolume = () => audio.volume = inputVolume.value / 100;

setVolume();

audio.addEventListener('loadedmetadata', () => {
  durationTrack = Math.round(audio.duration);
  minutes = Math.trunc(durationTrack / 60);
  seconds = durationTrack % 60;
  trackLine.max = durationTrack;
  renderTrack();
});

const toggleBtn = () => {
  if (isPlay) {
    btnPlayTrack.style.display = 'none';
    btnPauseTrack.style.display = 'block';
  } else {
    btnPlayTrack.style.display = 'block';
    btnPauseTrack.style.display = 'none';
  }
}

const setTrack = (track) => {
  audio.src = `${tracks[track].src}`;
  audio.currentTime = 0;
}

const playTrack = () => {
  clearInterval(timerId);
  isPlay = true;
  toggleBtn();

  if (isPaused) {
    audio.currentTime = pausedTime;
    isPaused = false;
  } else {
    setTrack(track);
  }

  audio.play();
  renderTrack();
  timerId = setInterval(() => {
    if (isPaused) {
      pauseTrack();
      clearInterval(timerId);
    }
    isPaused = false;
    currentTime = Math.round(audio.currentTime);
    currentMinutes = Math.trunc(currentTime / 60);
    currentSeconds = currentTime % 60;
    if (isPlay && !isPaused) {
      trackLine.value = currentTime;
      currentTrackTime.textContent = `${currentMinutes + ':' + (currentSeconds < 10 ? '0' + currentSeconds : currentSeconds)}`;
      if (durationTrack === currentTime) {
        nextTrack();
      }
    }
  }, 1000)
}

const pauseTrack = () => {
  isPaused= true;
  isPlay = false;
  pausedTime = Math.round(audio.currentTime);
  toggleBtn();
  audio.pause();
}

const nextTrack = () => {
  track === countTraks - 1 ? track = 0 : track += 1;
  playTrack();
  trackLine.value = 0;
}

const prevTrack = () => {
  track === 0 ? track = countTraks - 1 : track -= 1;
  playTrack();
  trackLine.value = 0;
}

const muted = () => {
  if (isMuted) {
    audio.volume = 0.5;
    isMuted = false;
    btnSpeaker.style.background = 'url(./assets/svg/speaker_on.svg)';
    inputVolume.value = 50;
  } else {
    isMuted = true;
    btnSpeaker.style.background = 'url(./assets/svg/speaker_off.svg)';
    audio.volume = 0;
    inputVolume.value = 0;
  }
}

const changeVolume = (vol) => {
  let volume = vol.value / 100;
  audio.volume = volume;
  if (volume === 0) {
    isMuted = true;
    btnSpeaker.style.background = 'url(./assets/svg/speaker_off.svg)';
    volume = 0;
  } else {
    isMuted = false;
    btnSpeaker.style.background = 'url(./assets/svg/speaker_on.svg)';
    volume = 0.5;
  }
}

const changeTrackTime = (e) => audio.currentTime = e.target.value;


btnPlayTrack.addEventListener('click', playTrack);
btnPauseTrack.addEventListener('click', pauseTrack);
btnNextTrack.addEventListener('click', nextTrack);
btnPrevTrack.addEventListener('click', prevTrack);
btnSpeaker.addEventListener('click', muted);
inputVolume.addEventListener('input', () => changeVolume(inputVolume));
trackLine.addEventListener('input', (e) => changeTrackTime(e));
