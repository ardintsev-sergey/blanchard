document.addEventListener('DOMContentLoaded', function() {
  const swiperHero = new Swiper('.section-hero__slider-container', {
    // Optional parameters
    effect: 'fade',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 4000,
    },
  });

  const swiperGallery = new Swiper('.section-gallery__slider-container', {
    // Optional parameters
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerGroup: 6,
    spaceBetween: 50,
    effect: 'slide',

    // If we need pagination
    pagination: {
      el: '.section-gallery__pag',
      type: 'fraction',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.section-gallery__button-next',
      prevEl: '.section-gallery__button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
      },

      576: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },

      1200: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },

    // autoHeight: true,

    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disabledOnInteraction: false,
    },
  });

  const sliderEditions = document.querySelector('.section-editions__slider-container');
  let swiperEditions;

  function desktopSliderEditions() {
    if (window.innerWidth <= 576 && sliderEditions.dataset.mobile == 'false') {

      if (sliderEditions.classList.contains('swiper-container-initialized')) {
        swiperEditions.destroy();
      };

      let editionItems = document.querySelectorAll('.section-editions__item');
          // console.log(editionItems);
          editionItems.forEach(el => {
            el.style.width = '44.8%';
            el.classList.remove('swiper-slide-duplicate-active');
            el.classList.remove('swiper-slide-duplicate-next');
            el.classList.remove('swiper-slide-next');
            el.classList.remove('swiper-slide-active');
            el.classList.remove('swiper-slide-prev');
         });
      sliderEditions.dataset.mobile = 'true';
    };

    if (window.innerWidth > 576 ) {
      sliderEditions.dataset.mobile == 'false';
      swiperEditions = new Swiper(sliderEditions, {
        // Optional parameters
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        // loop: true,

        // If we need pagination
        pagination: {
          el: '.section-editions__pag',
          type: 'fraction',
        },
        // Navigation arrows
        navigation: {
          nextEl: '.section-editions__button-next',
          prevEl: '.section-editions__button-prev',
        },

        breakpoints: {
          320: {
            spaceBetween: 30,
          },

          560: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
          },

          992: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
          },

          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
          },
        },
      });
    };
  };

  desktopSliderEditions();

  const swiperProjects = new Swiper('.section-projects__slider-container', {
    // Optional parameters
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.section-projects__button-next',
      prevEl: '.section-projects__button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        // slidesPerColumn: 1,
        slidesPerGroup: 1,
      },

      560: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },

      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },


    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disabledOnInteraction: false,
    },
  });

  const sliderEvents = document.querySelector('.section-events__slider-container');

  let swiperEvents;

  function mobileSliderEvents() {
    if (window.innerWidth <= 576 && sliderEvents.dataset.mobile == 'false') {
      swiperEvents = new Swiper(sliderEvents, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loop: true,
        slideClass: 'section-events__item',

        pagination: {
          el: '.section-events__pag',
          type: 'bullets',
          clickable: true,
        },

        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disabledOnInteraction: false,
        },
      });

      sliderEvents.dataset.mobile = 'true';
    };

    if (window.innerWidth > 576) {
      sliderEvents.dataset.mobile = 'false';

      if (sliderEvents.classList.contains('swiper-container-initialized')) {
        swiperEvents.destroy();
      };
    };
  };

  mobileSliderEvents();

  window.addEventListener('resize', () => {
    desktopSliderEditions();
    mobileSliderEvents();
  });
})
