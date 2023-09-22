import {tracks} from './data.js';
const btnPlayTrack = document.querySelector('.play-track');
const btnPauseTrack = document.querySelector('.pause-track');
const btnNextTrack = document.querySelector('.next-track');
const btnPrevTrack = document.querySelector('.prev-track');
const btnSpeaker = document.querySelector('.btn-speaker');
const btnFavoriteList = document.querySelector('.favorite-list');
const btnTrackList = document.querySelector('.track-list');
const inputVolume = document.querySelector('.volume');
const trackLine = document.querySelector('.track-line');
const author = document.querySelectorAll('.author');
const currentTrack = document.querySelector('h2');
const trackTime = document.querySelector('.track-time');
const currentTrackTime = document.querySelector('.current-time');
const cover = document.querySelector('.cover');
const allTracks = document.querySelector('.all-tracks');
const favoriteTracks = document.querySelector('.favorite-tracks');
const toFavorite = document.querySelector('.to-favorite');

let favoritesStorage = JSON.parse(localStorage.getItem('favorites')) || [];

const countTraks = tracks.length;
let isMuted = false;
let isPlay = false;
let isPaused = false;
let trackNumber = 0;
let durationTrack = 0;
let seconds = 0;
let minutes = 0;
let saveTimer = 0;
let currentTime = 0;
let currentMinutes = 0;
let currentSeconds = 0;
let trackTimer;

const audio = new Audio(tracks[trackNumber].src);

window.onload = () => {
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

const changeTrackTime = (e) => {
  saveTimer = e.target.value;
  currentSeconds = saveTimer % 60;
  currentMinutes = Math.trunc(saveTimer / 60)
  currentTrackTime.textContent = `${currentMinutes + ':' + (currentSeconds < 10 ? '0' + currentSeconds : currentSeconds)}`;
}

const makeShortlist = () => {
  allTracks.innerHTML = '';
  tracks.forEach(track => {
    allTracks.innerHTML += `<li class="track">${track.track + ' - ' + track.author}</li>`
  });
}

makeShortlist();

const currentTrackInList = () => {
  allTracks.childNodes.forEach(node => {
    if (node.textContent === (tracks[trackNumber].track + ' - ' + tracks[trackNumber].author)) {
      node.style.color = '#fa4be4';
    } else {
      node.style.color = '#fff';
    }
  })
}

currentTrackInList();

const makeFavoriteTracks = () => {
  if (!favoritesStorage.length) {
    return favoriteTracks.innerHTML = '<li class="track">Not Found</li>';
  }
  favoriteTracks.innerHTML = '';
  tracks.forEach((track, index) => {
    favoritesStorage.forEach(fav => {
      if (fav === index) {
        favoriteTracks.innerHTML += `<li class="track">${track.track + ' - ' + track.author}</li>`;
      }
    })
  });
}

makeFavoriteTracks();


const renderTrack = () => {
  author.forEach(item => item.textContent = `${tracks[trackNumber].author}`);
  currentTrack.textContent = `${tracks[trackNumber].track}`;
  trackTime.textContent = `${tracks[trackNumber].time}`;
  currentTrackTime.textContent = `${currentMinutes + ':' + (currentSeconds < 10 ? '0' + currentSeconds : currentSeconds)}`;
  cover.style.backgroundImage = `url(${tracks[trackNumber].cover})`;
}

const changeShape = () => {
  favoritesStorage = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favoritesStorage.length) {
    toFavorite.style.background = 'url(./assets/svg/shape_to_favorite.svg)';
  }
  favoritesStorage.includes(trackNumber)
    ? toFavorite.style.background = 'url(./assets/svg/shape_favorite.svg)'
    : toFavorite.style.background = 'url(./assets/svg/shape_to_favorite.svg)';
}

changeShape();

const setVolume = () => audio.volume = inputVolume.value / inputVolume.max;

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

const timeRender = () => {
  currentTime = Math.round(audio.currentTime);
  currentMinutes = Math.trunc(currentTime / 60);
  currentSeconds = currentTime % 60;
  currentTrackTime.textContent = `${currentMinutes + ':' + (currentSeconds < 10 ? '0' + currentSeconds : currentSeconds)}`;
  trackLine.value = currentTime;
  if (durationTrack === currentTime) nextTrack();
}

const playTrack = () => {
  clearInterval(trackTime);
  isPlay = true;
  toggleBtn();
  currentTrackInList();
  if (isPaused) {
    isPaused = false;
    audio.currentTime = saveTimer;
    audio.play();
    trackTimer = setInterval(timeRender, 100);
  } else {
    isPaused = false;
    audio.src = `${tracks[trackNumber].src}`;
    audio.currentTime = saveTimer;
    audio.play();
    trackTimer = setInterval(timeRender, 100);
  }
};

const pauseTrack = () => {
  audio.pause();
  saveTimer = audio.currentTime;
  isPaused = true;
  isPlay = false;
  toggleBtn();
  clearInterval(trackTime);
}

const nextTrack = () => {
  saveTimer = 0
  isPaused = false;
  trackNumber === countTraks - 1 ? trackNumber = 0 : trackNumber += 1;
  trackLine.value = trackLine.min;
  audio.currentTime = saveTimer;
  playTrack();
  renderTrack();
  changeShape();
}

const prevTrack = () => {
  saveTimer = 0
  isPaused = false;
  trackNumber === 0 ? trackNumber = countTraks - 1 : trackNumber -= 1;
  trackLine.value = trackLine.min;
  audio.currentTime = saveTimer;
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

const addRemoveToFavorite = () => {
  favoritesStorage = JSON.parse(localStorage.getItem('favorites')) || [];
  if (favoritesStorage.includes(trackNumber)) {
    favoritesStorage = favoritesStorage.filter(fav => fav !== trackNumber);
  } else {
    favoritesStorage.push(trackNumber);
  }
  localStorage.setItem('favorites', JSON.stringify(favoritesStorage));
  changeShape();
  makeFavoriteTracks();
}

const changeBtnList = (btn) => {
  switch (btn.classList[0]) {
    case 'track-list':
      allTracks.classList.toggle('active-list');
      if (allTracks.classList.contains('active-list')) {
        btn.innerHTML = 'All tracks &#11014;'
        btn.style.color = '#f9f9fa52';
      } else {
        btn.innerHTML = 'All tracks &#11015;';
        btn.style.color = '#fff';
      }
      break;
    case 'favorite-list':
      favoriteTracks.classList.toggle('active-list');
      favoriteTracks.classList.contains('active-list')
        ? btn.style.color = '#f9f9fa52'
        : btn.style.color = '#fff';
      break;
  }
}

toFavorite.addEventListener('click', addRemoveToFavorite);
btnPlayTrack.addEventListener('click', playTrack);
btnPauseTrack.addEventListener('click', pauseTrack);
btnNextTrack.addEventListener('click', nextTrack);
btnPrevTrack.addEventListener('click', prevTrack);
btnSpeaker.addEventListener('click', muted);
inputVolume.addEventListener('input', () => changeVolume(inputVolume));
trackLine.addEventListener('click', (e) => audio.currentTime = e.target.value);
trackLine.addEventListener('input', (e) => changeTrackTime(e));
btnTrackList.addEventListener('click', () => changeBtnList(btnTrackList));
btnFavoriteList.addEventListener('click', () => changeBtnList(btnFavoriteList));
