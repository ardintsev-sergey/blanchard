document.addEventListener('DOMContentLoaded', function() {
  let countryTabs = document.querySelectorAll('.tabs__btn');
  let countryTabContent = document.querySelectorAll('.tab-content');

  let artistTabs = document.querySelectorAll('.tabs-content__btn');
  let artistTabContent = document.querySelectorAll('.tab-content__item-left');

  let tabs = document.querySelectorAll('.tabs__item');

  countryTabs.forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', () => changeCountryTab(event.currentTarget.dataset.path))
  });

  function changeCountryTab(path) {
    countryTabContent.forEach(function(tabContent) {
      tabContent.classList.remove('tab-content--active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-content--active');


    document.querySelector('.tab-content--active').querySelectorAll('.tab-content__item-left').forEach(el => {
      el.classList.remove('tab-content__item-left--active');
    });
    document.querySelector('.tab-content--active').querySelector('.tab-content__item-left').classList.add('tab-content__item-left--active');

    countryTabs.forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', () => {
        document.querySelector('.tab-content--active').querySelectorAll('.tabs-content__btn').forEach(el => {
          el.classList.remove('tab-content__item-link--active');
        });
        document.querySelector('.tab-content--active').querySelector('.tabs-content__btn').classList.add('tab-content__item-link--active');
      });
    });
  };

  changeCountryTab('italy');

  // плавный переезд по нажатию на артиста
  artistTabs.forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', () => {
      changeArtistTab(event.currentTarget.dataset.path);
      if (window.innerWidth < 992) {
        let gotoArtist = document.querySelector('.tab-content__item-left--active');
        let gotoArtistValue = gotoArtist.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight - 50;
        window.scrollTo({
          top: gotoArtistValue,
          behavior: 'smooth',
        });
      };
    });
  });

  function changeArtistTab(path) {
    artistTabContent.forEach(function(tabContent) {
      tabContent.classList.remove('tab-content__item-left--active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-content__item-left--active');
    document.querySelector(`[data-path="${path}"]`).classList.add('tab-content__item-link--active');
  };

  let artist = 'Ghirlandaio';

  changeArtistTab(artist);

  tabs.forEach(el => {
    el.addEventListener('click', (e) => {
      tabs.forEach(el => {
        el.classList.remove('tabs__item--active')
      });
      e.currentTarget.classList.add('tabs__item--active');
    });
  });

  artistTabs.forEach(el => {
    el.addEventListener('click', (e) => {
      artistTabs.forEach(el => {
        el.classList.remove('tab-content__item-link--active')
      });
      e.currentTarget.classList.add('tab-content__item-link--active');
    });
  });
})
