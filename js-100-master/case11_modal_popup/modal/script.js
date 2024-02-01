; (function () {
  'use strict';

  // util

  const get = (target) => document.querySelector(target);

  // constants

  const $modalButton = get('.modal_open_button');
  const $body = get('body');
  const $modal = get('.modal');

  // modal open

  const setModalOpenEvent = () => {
    $modalButton.addEventListener('click', () => {
      $body.classList.add('scroll_lock');
      $modal.classList.add('show');
    });
  }

  // modal close

  const setModalCloseEvent = () => {
    document.addEventListener('click', (e) => {
      if (!get('.modal.show')) return;

      if (e.target.classList.contains('confirm')) {
        modalConfirmed();
      } else if (e.target.classList.contains('cancel')) {
        modalCanceled();
      } else if (e.target !== $modal) {
        return;
      }

      $body.classList.remove('scroll_lock');
      $modal.classList.remove('show');
    });
  }

  // modal confirmed/canceled action

  const modalConfirmed = () => {
    console.log('confirmed!');
  }

  const modalCanceled = () => {
    console.log('canceled...');
  }

  // init

  const init = () => {
    setModalOpenEvent();
    setModalCloseEvent();
  }

  init();

})();