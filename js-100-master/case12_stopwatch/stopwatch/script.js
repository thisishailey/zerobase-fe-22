; (function () {
  'use strict';

  // util

  const get = (target) => document.querySelector(target);

  // constants

  const $timer = get('.timer');
  const $startButton = get('.timer_button.start');
  const $stopButton = get('.timer_button.stop');
  const $resetButton = get('.timer_button.reset');

  // stopwatch class

  class Stopwatch {
    constructor(element) {
      this.$timer = element;
      this.interval = null;
      this.defaultTime = '00:00.00';
      this.startTime = 0;
      this.elapsedTime = 0;
    }

    start() {
      this.stop();
      this.startTime = Date.now() - this.elapsedTime;
      this.interval = setInterval(this.startTimer.bind(this), 10);
    }

    startTimer() {
      this.elapsedTime = Date.now() - this.startTime;
      const time = this.formatTime(this.elapsedTime);
      this.printTime(time);
    }

    stop() {
      clearInterval(this.interval);
    }

    reset() {
      this.stop();
      this.interval = null;
      this.defaultTime = '00:00.00';
      this.startTime = 0;
      this.elapsedTime = 0;
      this.printTime(this.defaultTime);
    }

    formatTime(time) {
      const date = new Date(time);
      const min = String(date.getUTCMinutes()).padStart(2, '0');
      const sec = String(date.getUTCSeconds()).padStart(2, '0');
      const ms = String(date.getUTCMilliseconds()).slice(0, 2).padStart(2, '0');
      return `${min}:${sec}.${ms}`;
    }

    printTime(time) {
      this.$timer.innerHTML = time;
    }
  }

  // button click event

  const setTimerButtonEvents = (stopwatch) => {
    $startButton.addEventListener('click', () => {
      stopwatch.start();
    });

    $stopButton.addEventListener('click', () => {
      stopwatch.stop();
    });

    $resetButton.addEventListener('click', () => {
      stopwatch.reset();
    });
  }

  // init

  const init = () => {
    const stopwatch = new Stopwatch($timer);
    setTimerButtonEvents(stopwatch);
  }

  init();

})();