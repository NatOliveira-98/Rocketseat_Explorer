const ID_CONTROLLER = document.getElementById('controller');
const ID_SOUND = document.getElementById('sound');

export const btns = {
  btnPlay: ID_CONTROLLER.querySelector('.btn-play'),
  btnPause: ID_CONTROLLER.querySelector('.btn-pause'),
  btnSetTime: ID_CONTROLLER.querySelector('.btn-set'),
  btnStop: ID_CONTROLLER.querySelector('.btn-stop'),

  btnSoundOn: ID_SOUND.querySelector('#sound-on'),
  btnSoundOff: ID_SOUND.querySelector('#sound-off'),
};
