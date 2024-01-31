; (function () {
    'use strict';

    // util

    const get = (target) => {
        return document.querySelector(target);
    }

    // constants

    const $progressBar = get('.progress-bar');
    let timerId = undefined;

    // scroll event

    const onScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const currentPosition = document.documentElement.scrollTop;
        const progress = Math.floor((currentPosition / totalHeight) * 100) + '%';
        $progressBar.style.width = progress;
    }

    // throttle

    const throttle = (callbackFn, delay) => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callbackFn();
            timerId = undefined;
        }, delay);
    }

    // init

    const init = () => {
        window.addEventListener('scroll', () => throttle(onScroll, 100));
    }

    init();

})();
