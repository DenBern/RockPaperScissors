import {tracks} from './data.js';
const audio = document.getElementById('audio');
const btnPlayTrack = document.querySelector('.play-track');
const btnPauseTrack = document.querySelector('.pause-track');
const btnNextTrack = document.querySelector('.next-track');
const btnPrevTrack = document.querySelector('.prev-track');
const author = document.querySelectorAll('.author');
const currentTrack = document.querySelector('h2');
const trackTime = document.querySelector('.track-time');
const currentTrackTime = document.querySelector('.current-time');
const cover = document.querySelector('.cover');
const lineTime = document.querySelector('.line-time');

const countTraks = tracks.length;
let isPlay = false;
let track;
let durationtTrack = 0;
let seconds = 0;
let minutes = 0;
let currentTime = 0;
let currentMinutes = 0;
let currentSeconds = 0;
let timerId;

window.onload = function () {
  track = 0;
  changeVisual();
}

const changeVisual = () => {
  author.forEach(item => item.textContent = `${tracks[track].author}`);
  currentTrack.textContent = `${tracks[track].track}`;
  trackTime.textContent = `${minutes ? minutes : '0'}:${seconds ? seconds : '00'}`;
  currentTrackTime.textContent = '0:00';
  cover.style.backgroundImage = `url(${tracks[track].cover})`;
  lineTime.style.width = '0';
}

audio.load();

audio.addEventListener('loadedmetadata', () => {
  currentTime = Math.round(audio.currentTime);
  durationtTrack = Math.round(audio.duration);
  minutes = Math.trunc(durationtTrack / 60);
  seconds = durationtTrack % 60;
  changeVisual();
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
  setTrack(track);
  audio.play();
  changeVisual();
  timerId = setInterval(() => {
      currentTime = Math.round(audio.currentTime);
      currentMinutes = Math.trunc(currentTime / 60);
      currentSeconds = currentTime % 60;
    if (isPlay) {
      lineTime.style.width = (currentTime * 100) / durationtTrack + '%';
      currentTrackTime.textContent = `${currentMinutes + ':' + (currentSeconds < 10 ? '0' + currentSeconds : currentSeconds)}`;
      if (durationtTrack === currentTime) {
        nextTrack();
      }
    }
  }, 1000)
}

const pauseTrack = () => {
  isPlay = false;
  toggleBtn();
  audio.pause();
}

const nextTrack = () => {
  track === countTraks - 1 ? track = 0 : track += 1;
  playTrack();
}

const prevTrack = () => {
  track === 0 ? track = countTraks - 1 : track -= 1;
  playTrack();
}

btnPlayTrack.addEventListener('click', playTrack);
btnPauseTrack.addEventListener('click', pauseTrack);
btnNextTrack.addEventListener('click', nextTrack);
btnPrevTrack.addEventListener('click', prevTrack);