import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const idVideo = document.querySelector('#vimeo-player');
const player = new Player(idVideo);
const timeFromStorage = localStorage.getItem('videoplayer-current-time');
player.on('timeupdate', throttle(onPlayVideo, 1000));
function onPlayVideo({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
if (timeFromStorage) {
  player.setCurrentTime(timeFromStorage);
}