document.addEventListener('DOMContentLoaded', function() {
  const modalBtns = document.querySelectorAll('.section-gallery__card');
  const modalOverlay = document.querySelector('.modals-overlay');
  const modals = document.querySelectorAll('.modal');
  const modalCover = document.querySelector('.modals');
  const closeButton = document.querySelectorAll('.modal__close-btn');
  const body = document.querySelector('body');
  const formBtm = document.querySelector('.section-contacts__form-button');

  modalBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');

      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });

      if (path) {
        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modals-overlay--visible');
        body.classList.add('body--hidden');
      };
    });
  });

  modalCover.addEventListener('click', (e) => {
    if (e.target == modalCover) {
      modalOverlay.classList.remove('modals-overlay--visible');
      body.classList.remove('body--hidden');
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });
    };
  });

  closeButton.forEach((el) => {
    el.addEventListener('click', (e) => {
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });
      body.classList.remove('body--hidden');
      modalOverlay.classList.remove('modals-overlay--visible');
    });
  });
})
