import Timer from './Timer.js';
import Sounds from './Sounds.js';
import { btns } from './btns-selection.js';

const timer = new Timer();
const sounds = new Sounds();

btns.btnPlay.addEventListener('click', () => timer.play());
btns.btnPause.addEventListener('click', () => timer.pause());
btns.btnStop.addEventListener('click', () => timer.stop());
btns.btnSetTime.addEventListener('click', () => timer.setTime());

btns.btnSoundOn.addEventListener('click', () => sounds.bgSoundOn());
btns.btnSoundOff.addEventListener('click', () => sounds.bgSoundOff());
