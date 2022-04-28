import Utils from './Utils.js';
import Sounds from './Sounds.js';
import { btns } from './btns-selection.js';

const sounds = new Sounds();

export default class Timer {
  constructor() {
    this.timeContainer = document.getElementById('time');
    this.minutesElement = document.getElementById('timer-minutes');
    this.secondsElement = document.getElementById('timer-seconds');

    this.minutes = Number(this.minutesElement.innerText);
    this.seconds = Number(this.secondsElement.innerText);
    this.countdown;
  }

  play() {
    Utils.addHiddenClass(btns.btnPlay);
    Utils.removeHiddenClass(btns.btnPause);
    Utils.addHiddenClass(btns.btnSetTime);
    Utils.removeHiddenClass(btns.btnStop);

    this.startCounter();
    sounds.buttonPressedFunc();
  }

  pause() {
    Utils.removeHiddenClass(btns.btnPlay);
    Utils.addHiddenClass(btns.btnPause);

    this.pauseCounter();
    sounds.buttonPressedFunc();
  }

  stop() {
    Utils.removeHiddenClass(btns.btnPlay);
    Utils.addHiddenClass(btns.btnPause);
    Utils.removeHiddenClass(btns.btnSetTime);
    Utils.addHiddenClass(btns.btnStop);

    this.pauseCounter();
    this.resetCounter();
  }

  setTime() {
    this.minutes = Number(prompt('How many minutes?'));

    if (!this.minutes) {
      this.resetMinutesToDefault();
      return;
    }

    this.formatMinutes();
  }

  startCounter() {
    this.countdown = setInterval(() => {
      const isFinished = this.minutes === 0 && this.seconds < 1;
      if (isFinished) {
        // to pause and reset
        this.stop();
        return;
      }

      if (this.seconds <= 0) {
        // countdown
        this.seconds = 60;
        this.minutes--;

        // change display text
        this.formatMinutes();
      }

      // countdown
      this.seconds--;

      // change display text
      this.formatSeconds();
    }, 1000);
  }

  pauseCounter() {
    clearInterval(this.countdown);
  }

  resetCounter() {
    this.resetMinutesToDefault();
    this.resetSecondsToDefault();
    sounds.timeEndedFunc();
  }

  resetMinutesToDefault() {
    this.minutes = 25;
    this.minutesElement.innerText = this.minutes;
  }

  resetSecondsToDefault() {
    this.seconds = 0;
    this.secondsElement.innerText = this.seconds + '0';
  }

  formatMinutes() {
    this.minutesElement.innerText =
      this.minutes < 10 ? `0${this.minutes}` : this.minutes;
  }

  formatSeconds() {
    this.secondsElement.innerText =
      this.seconds < 10 ? `0${this.seconds}` : this.seconds;
  }
}
