window.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('#burger');
  const burgerOpen = document.querySelector('#burger-open');
  const menu = document.querySelector('#menu');
  const body = document.querySelector('body');
  const menuLinks = document.querySelectorAll('.header__nav-link');

  burger.addEventListener('click', function() {
    menu.classList.toggle('menu--is-active');
    body.classList.toggle('body--hidden');
  })

  burgerOpen.addEventListener('click', function() {
    menu.classList.toggle('menu--is-active');
    body.classList.toggle('body--hidden');
  })

  menuLinks.forEach(e => {
    e.addEventListener('click', function() {
      menu.classList.remove('menu--is-active');
      body.classList.remove('body--hidden');
    })
  })

  const headerNav =  document.querySelector('.header__nav');
  const headerEnter = document.querySelector('.header__enter');
  const headerTop = document.querySelector('.header__top-container');
  const search = document.querySelector('.header__search');
  const searchBtn = document.querySelector('.header__search-btn');
  const searchInput = document.querySelector('.header__search-input');
  const headerBottom = document.querySelector('.header__bottom-container');

  let headerEnterSearchInsert = function() {
    if (window.innerWidth <= 1200) {
      headerNav.append(headerEnter);
      headerTop.append(search);
      search.classList.add('header__search--mobile');
      searchBtn.classList.add('header__search-btn--mobile');
      searchInput.classList.add('header__search-input--mobile');
    } else {
      headerTop.append(headerEnter);
      headerBottom.append(search);
      search.classList.remove('header__search--mobile');
      searchBtn.classList.remove('header__search-btn--mobile');
      searchInput.classList.remove('header__search-input--mobile');
    };
  };

  const address = document.querySelector('.section-contacts__place');
  const contactsHeading = document.querySelector('.section-contacts__heading');
  const contctsContent = document.querySelector('.section-contacts__left-content');

  let addressInsert = function() {
    if (window.innerWidth <= 576) {
      contactsHeading.after(address);
    } else {
      contctsContent.prepend(address);
    };
  };

  addressInsert();
  headerEnterSearchInsert();
  window.addEventListener('resize', () => {
    addressInsert();
    headerEnterSearchInsert();
  });
})
