document.addEventListener('DOMContentLoaded', function() {
 type="text/javascript">
      // Функция ymaps.ready() будет вызвана, когда
      // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
      ymaps.ready(init);
      function init(){
          // Создание карты.
          var myMap = new ymaps.Map("map", {
              // Координаты центра карты.
              // Порядок по умолчанию: «широта, долгота».
              // Чтобы не определять координаты центра карты вручную,
              // воспользуйтесь инструментом Определение координат.
              // center: [55.75906199589603,37.641495025436306],
              center: [55.758365222032154,37.61358759400928],

              // Уровень масштабирования. Допустимые значения:
              // от 0 (весь мир) до 19.
              zoom: 13.5
          });
          myPlacemark = new ymaps.Placemark([55.75846306898368,37.601079499999905], {}, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/marker.svg',
              // Размеры метки.
              iconImageSize: [20, 20],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          });
          myMap.geoObjects.add(myPlacemark);
      }
})
