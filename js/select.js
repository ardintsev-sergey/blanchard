document.addEventListener('DOMContentLoaded', function() {
  // Списки из хедера
  let selects = document.querySelectorAll('.header__menu-btn');
  let dropdowns = document.querySelectorAll('.header__menu-list');

  selects.forEach(el => {
    el.addEventListener('click', (e) => {
      dropdowns.forEach(el => {
        el.classList.remove('header__menu-list--active')
      });
      e.currentTarget.closest('li').querySelector('.header__menu-list').classList.add('header__menu-list--active');
      selects.forEach(el => {
        el.classList.remove('header__menu-btn--active')
      });
      e.currentTarget.classList.add('header__menu-btn--active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('header__menu-btn') && !e.target.classList.contains('simplebar-content')) {
      dropdowns.forEach(el => {
        el.classList.remove('header__menu-list--active')
      });
      selects.forEach(el => {
        el.classList.remove('header__menu-btn--active')
      });
    };
  });

   // Селект из секции Галерея
  const element = document.querySelector('#gallery-select');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
  });

  // Список из секции издания
  let checks = document.querySelectorAll('.section-editions__check-item');
  let checkBtn = document.querySelector('.section-editions__check-heading');
  let checkCloseBtns = document.querySelectorAll('.section-editions__close-btn');
  let checkInputs = document.querySelectorAll('.check');

  checkBtn.addEventListener('click', () => {
    checks.forEach(el => {
      el.classList.toggle('check-visible');
    });
    checkBtn.classList.toggle('check-btn--active');
  });

  checkInputs.forEach(el => {
    el.addEventListener('change', (e) => {
      if (!e.currentTarget.hasAttribute('checked')) {
      e.currentTarget.classList.toggle('check--active');
      e.currentTarget.closest('label').classList.toggle('check--active');
      } else {
        e.currentTarget.removeAttribute('checked');
        e.currentTarget.classList.remove('check--active');
        e.currentTarget.closest('label').classList.remove('check--active');
      };
    });
  });
})
