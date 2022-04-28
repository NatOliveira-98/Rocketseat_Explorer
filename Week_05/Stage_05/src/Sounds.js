import Utils from './Utils.js';
import { btns } from './btns-selection.js';

export default class Sounds {
  constructor() {
    this.buttonPressed = new Audio(
      'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true',
    );
    this.timeEnded = new Audio(
      'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true',
    );
    this.bgAudio = new Audio(
      'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true',
    );

    this.bgAudio.loop = true;
  }

  buttonPressedFunc() {
    this.buttonPressed.play();
  }

  timeEndedFunc() {
    this.timeEnded.play();
  }

  bgSoundOn() {
    Utils.addHiddenClass(btns.btnSoundOn);
    Utils.removeHiddenClass(btns.btnSoundOff);
    this.bgAudio.play();
  }

  bgSoundOff() {
    Utils.removeHiddenClass(btns.btnSoundOn);
    Utils.addHiddenClass(btns.btnSoundOff);
    this.bgAudio.pause();
  }
}
