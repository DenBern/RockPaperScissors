import {tracks} from './data.js';
const audio = document.getElementById('audio');
const btnPlayTrack = document.querySelector('.play-track');
const btnPauseTrack = document.querySelector('.pause-track');
const btnNextTrack = document.querySelector('.next-track');
const btnPrevTrack = document.querySelector('.prev-track');

const countTraks = tracks.length;
let isPlay = false;
let track;

window.onload = function() {
  track = 0;
}

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
  isPlay = true;
  toggleBtn();
  setTrack(track);
  audio.play();
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


