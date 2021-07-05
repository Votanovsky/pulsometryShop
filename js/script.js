// карусель
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_back.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_go.png"></button>',
        responsive: [{
                breakpoint: 768,
                settings: {
                  dots: false,
                  arrows: false
                }
        }]
      });
  

// переключение табов 
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
 

// кнопка подробнее 
    $('.catalog-item__link').each(function (i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })


      $('.catalog-item__back').each(function (i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });

      // Модальные окна
  
  $('[data-modal=consultation]').on('click' , function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  // $('.button_mini').on('click' , function () {
  //   $('.overlay, #order').fadeIn('slow');
  // });
  
  $('.button_mini').each(function(i){
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtittle').eq(i).text())
      $('.overlay, #order').fadeIn('slow');
    })
  });
    

// валидация форм


  function validateForms(form){
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
            required: true,
            email: true
        }
        },
        messages: {
          name: "Введите имя",
          phone: "Введите номер телефона",
          email: {
            required: "Введите почтовый адрес",
            email: "Неверно введён почтовый адрес"
          }
        }
    });
  };

  validateForms('#consultation-form')
  validateForms('#consultation form')
  validateForms('#order form')

  });


  $(".numberphone").mask('+7(999-999-99-99)', {placeholder: ''});
