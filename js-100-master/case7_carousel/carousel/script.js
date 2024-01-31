; (function () {
    'use strict';

    // carousel class

    class Carousel {
        constructor(caruoselElement) {
            this.caruoselElement = caruoselElement;
            this.items = this.caruoselElement.querySelectorAll('.carousel_item');
            this.lastIndex = this.items.length - 1;
            this.current = 0;
            this.onMove = false;
        }

        disableSlide() {
            this.onMove = true;
            setTimeout(() => {
                this.onMove = false;
            }, 800);
        }

        setCarousel() {
            this.disableSlide();

            let prev = this.current - 1;
            let next = this.current + 1;

            if (this.current === 0) {
                prev = this.lastIndex;
            } else if (this.current === this.lastIndex) {
                next = 0;
            }

            this.caruoselElement.querySelector('.active')?.classList.remove('active');
            this.caruoselElement.querySelector('.prev')?.classList.remove('prev');
            this.caruoselElement.querySelector('.next')?.classList.remove('next');

            this.items[this.current].classList.add('active');
            this.items[prev].classList.add('prev');
            this.items[next].classList.add('next');
        }

        moveToPrev() {
            if (this.onMove) return;

            if (this.current === 0) {
                this.current = this.lastIndex;
            } else {
                this.current--;
            }

            this.setCarousel();
        }

        moveToNext() {
            if (this.onMove) return;

            if (this.current === this.lastIndex) {
                this.current = 0;
            } else {
                this.current++;
            }

            this.setCarousel();
        }

        setEventListeners() {
            this.prevButton = this.caruoselElement.querySelector('.carousel_button--prev');
            this.nextButton = this.caruoselElement.querySelector('.carousel_button--next');

            this.prevButton.addEventListener('click', () => { this.moveToPrev() });
            this.nextButton.addEventListener('click', () => { this.moveToNext() });
        }
    }

    // init

    const init = () => {
        document.addEventListener('DOMContentLoaded', () => {
            const carouselElement = document.querySelector('.carousel');
            const carousel = new Carousel(carouselElement);
            carousel.setCarousel();
            carousel.setEventListeners();
        });
    }

    init();

})();