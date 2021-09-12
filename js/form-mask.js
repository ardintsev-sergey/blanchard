document.addEventListener('DOMContentLoaded', function() {
  let selector = document.querySelectorAll('input[type="tel"]');
  let im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  let validateForms = function(selector, rules, succesModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,

      submitHandler: function(form) {
        let formData = new FormData(form);

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              const formBtm = document.querySelector('.section-contacts__form-button');
              const modalOverlay = document.querySelector('.modals-overlay');
              const modals = document.querySelectorAll('.modal');
              const body = document.querySelector('body');

              modals.forEach((el) => {
                el.classList.remove('modal--visible');
              });

              document.querySelector('.modal--form').classList.add('modal--visible');

              modalOverlay.classList.add('modals-overlay--visible');
              body.classList.add('body--hidden');
            };
          };
        };

        xhr.open('POST', '../php/mail.php', true);
        xhr.send(formData);

        form.reset();
      },

      messages: {
        name: 'Напишите как к Вам обращаться',
        tel: 'Введите Ваш номер телефона',
      },
    });
  };

  validateForms('.section-contacts__form', {name: {required: true}, tel: {required: true}}, '.thanks-popup', 'send goal');
})
