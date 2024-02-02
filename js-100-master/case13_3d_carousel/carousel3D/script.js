; (function () {
  'use strict';

  // util

  const get = (target) => document.querySelector(target);

  // constants

  const $carousel = get('.carousel');
  const $prevButton = get('.prev_button');
  const $nextButton = get('.next_button');

  // carousel class

  class Carousel {
    constructor(element) {
      this.element = element;
      this.cellList = element.querySelectorAll('.carousel_cell');
      this.width = element.parentNode.offsetWidth;
      this.cellCount = this.cellList.length;
      this.current = 0;
      this.yAngle = 360 / this.cellCount;
      this.zAxis = Math.round((this.width / 2) / (Math.tan(Math.PI / this.cellCount)));
    }

    setCarousel() {
      this.cellList.forEach((e, i) => {
        e.style.transform = `rotateY(${this.yAngle * i}deg) translateZ(${this.zAxis}px)`;
      })
    }

    setRotateCarouselEvent(prev, next) {
      prev.addEventListener('click', () => {
        this.current--;
        this.rotateCarousel();
      });

      next.addEventListener('click', () => {
        this.current++;
        this.rotateCarousel();
      });
    }

    rotateCarousel() {
      this.element.style.transform = `translateZ(${this.zAxis * -1}px) rotateY(${this.yAngle * this.current * -1}deg)`;
    }
  }

  // init

  const init = () => {
    const carousel = new Carousel($carousel);
    carousel.setCarousel();
    carousel.setRotateCarouselEvent($prevButton, $nextButton);
  }

  init();

})();