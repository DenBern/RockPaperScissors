import {tracks} from './data.js';
const audio = document.getElementById('audio');
const btnPlayTrack = document.querySelector('.play-track');
const btnPauseTrack = document.querySelector('.pause-track');
const btnNextTrack = document.querySelector('.next-track');
const btnPrevTrack = document.querySelector('.prev-track');
const btnSpeaker = document.querySelector('.btn-speaker');
const inputVolume = document.querySelector('.volume');
const trackLine = document.querySelector('.track-line');
const author = document.querySelectorAll('.author');
const currentTrack = document.querySelector('h2');
const trackTime = document.querySelector('.track-time');
const currentTrackTime = document.querySelector('.current-time');
const cover = document.querySelector('.cover');
const allTracks = document.querySelector('.tracks');
const trackList = document.querySelector('.track-list');
const toFavorite = document.querySelector('.to-favorite');

let favoritesTrackNumber = [];
let favoritesStorage = JSON.parse(localStorage.getItem('favorites')) || [];

const countTraks = tracks.length;
let isMuted = false;
let isPlay = false;
let isPaused = false;
let pausedTime = 0;
let trackNumber = 0;
let durationTrack = 0;
let seconds = 0;
let minutes = 0;
let currentTime = 0;
let currentMinutes = 0;
let currentSeconds = 0;
let timerId;

window.onload = function () {
  trackNumber = 0;
  renderTrack();
};

audio.load();

audio.addEventListener('loadedmetadata', () => {
  durationTrack = Math.round(audio.duration);
  minutes = Math.trunc(durationTrack / 60);
  seconds = durationTrack % 60;
  trackLine.max = durationTrack;
});

const makeShortlist = () => {
  allTracks.innerHTML = '';
  tracks.forEach(track => {
    allTracks.innerHTML += `<li class="track">${track.track + ' - ' + track.author}</li>`
  });
}

makeShortlist();

const renderTrack = () => {
  author.forEach(item => item.textContent = `${tracks[trackNumber].author}`);
  currentTrack.textContent = `${tracks[trackNumber].track}`;
  trackTime.textContent = `${tracks[trackNumber].time}`;
  currentTrackTime.textContent = `${currentMinutes + ':' + (currentSeconds < 10 ? '0' + currentSeconds : currentSeconds)}`;
  cover.style.backgroundImage = `url(${tracks[trackNumber].cover})`;
}

const changeShape = () => {
  favoritesStorage.some(fav => {
  })
}

changeShape();

const setTrack = (track) => {
  audio.src = `${tracks[track].src}`;
  audio.currentTime = 0;
}

const setVolume = () => audio.volume = inputVolume.value / 100;

setVolume();

const toggleBtn = () => {
  if (isPlay) {
    btnPlayTrack.style.display = 'none';
    btnPauseTrack.style.display = 'block';
  } else {
    btnPlayTrack.style.display = 'block';
    btnPauseTrack.style.display = 'none';
  }
};

const playTrack = () => {
  clearInterval(timerId);
  isPlay = true;
  toggleBtn();

  if (isPaused) {
    clearInterval(timerId)
    isPaused = false;
    audio.currentTime = pausedTime;
  } else {
    isPaused = false;
    setTrack(trackNumber);
  }
  audio.play();
  timerId = setInterval(() => {
    currentTime = Math.round(audio.currentTime);
    currentMinutes = Math.trunc(currentTime / 60);
    currentSeconds = currentTime % 60;
    if (isPlay) {
      trackLine.value = currentTime;
      currentTrackTime.textContent = `${currentMinutes + ':' + (currentSeconds < 10 ? '0' + currentSeconds : currentSeconds)}`;
      if (durationTrack === currentTime) {
        nextTrack();
      }
    }
  }, 100)
};

const pauseTrack = () => {
  isPaused = true;
  isPlay = false;
  pausedTime = Math.round(audio.currentTime);
  audio.pause();
  toggleBtn();
  clearInterval(timerId);
}

const nextTrack = () => {
  isPaused = false;
  trackNumber === countTraks - 1 ? trackNumber = 0 : trackNumber += 1;
  trackLine.value = 0;
  audio.currentTime = 0;
  playTrack();
  renderTrack();
  changeShape();
}

const prevTrack = () => {
  isPaused = false;
  trackNumber === 0 ? trackNumber = countTraks - 1 : trackNumber -= 1;
  trackLine.value = 0;
  audio.currentTime = 0;
  playTrack();
  renderTrack();
  changeShape();
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

const addTofavorite = () => {
  favoritesTrackNumber.push(trackNumber);
  localStorage.setItem('favorites', JSON.stringify(favoritesTrackNumber));
}

toFavorite.addEventListener('click', addTofavorite);
btnPlayTrack.addEventListener('click', playTrack);
btnPauseTrack.addEventListener('click', pauseTrack);
btnNextTrack.addEventListener('click', nextTrack);
btnPrevTrack.addEventListener('click', prevTrack);
btnSpeaker.addEventListener('click', muted);
inputVolume.addEventListener('input', () => changeVolume(inputVolume));
trackLine.addEventListener('input', (e) => changeTrackTime(e));
trackList.addEventListener('click', () => {
    allTracks.classList.toggle('active-list');
    allTracks.classList.contains('active-list')
      ? trackList.innerHTML = 'All tracks &#11014;'
      : trackList.innerHTML = 'All tracks &#11015;';
    }
);
