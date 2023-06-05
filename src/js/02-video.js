import Player from '@vimeo/player';
const idVideo = document.querySelector('#vimeo-player');
const player = new Player(idVideo);
const timeFromStorage = localStorage.getItem('videoplayer-current-time');
player.on('timeupdate', onPlayVideo);
function onPlayVideo({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
if (timeFromStorage) {
  player.setCurrentTime(timeFromStorage);
}