; (function () {
    'use strict';

    // util

    const get = function (target) {
        return document.querySelector(target);
    }

    // constants & variables

    const SOUNDS_ROOT = './assets/sounds/';
    const keyList = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
    const $keyContainer = get('.keys');

    // events

    const setClickSoundEvent = (container) => {
        container.addEventListener('click', (e) => {
            if (!e.target.classList.contains('key')) return;

            const sound = e.target.querySelector('.sound').innerText;
            const audio = new Audio(SOUNDS_ROOT + sound + '.wav');
            audio.play();

            setPlayingEffect(e.target, true);
            setTimeout(() => {
                setPlayingEffect(e.target, false);
            }, 200);
        });
    }

    const setKeySoundEvent = () => {
        document.addEventListener('keydown', (e) => {
            if (!keyList.includes(e.key)) return;

            const keyButton = get(`.${e.key}`);
            keyButton.click();
        });
    }

    const setPlayingEffect = (element, isPlaying) => {
        isPlaying ? element.classList.add('playing') : element.classList.remove('playing');
    }

    // init

    const init = () => {
        setClickSoundEvent($keyContainer);
        setKeySoundEvent();
    }

    init();

})();