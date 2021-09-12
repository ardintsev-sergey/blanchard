document.addEventListener('DOMContentLoaded', function() {
  const searchBtnMobile = document.querySelector('.header__search-btn');
  const searchInput = document.querySelector('.header__search-input');
  const searchForm = document.querySelector('.header__search');
  const headerLogo = document.querySelector('.header__logo');
  const burger = document.getElementById('burger');
  const searchCloseBtn = document.querySelector('.header__search-close-btn');

  searchBtnMobile.addEventListener('click', function() {
    searchInput.classList.toggle('header__search--active');
    headerLogo.classList.toggle('header__logo--disabled');
    burger.classList.toggle('header__burger--disabled');
    searchCloseBtn.classList.toggle('header__search-close-btn--visible');
    document.querySelector('.header__search-btn').classList.toggle('header__search-btn--active');
    searchForm.classList.toggle('header__form--active');
  });

  searchCloseBtn.addEventListener('click', function() {
    searchInput.classList.remove('header__search--active');
    headerLogo.classList.remove('header__logo--disabled');
    burger.classList.remove('header__burger--disabled');
    searchCloseBtn.classList.remove('header__search-close-btn--visible');
    document.querySelector('.header__search-btn').classList.remove('header__search-btn--active');
    searchForm.classList.remove('header__form--active');
  });

  const events = document.querySelectorAll('.section-events__item');
  document.querySelector('.section-events__btn').addEventListener('click', function() {
    events.forEach((e) => {
      e.style.display='flex';
    })
    document.querySelector('.section-events__btn').style.display='none';
  });
})
