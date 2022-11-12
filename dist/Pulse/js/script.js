$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="31.000000px" height="50.000000px" viewBox="0 0 31.000000 50.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#C70101" stroke="none"><path d="M120 375 l-125 -125 125 -125 c69 -69 130 -125 136 -125 13 0 54 42 54 55 0 5 -42 51 -92 102 l-93 93 93 93 c50 51 92 97 92 103 0 13 -43 54 -56 54 -5 0 -65 -56 -134 -125z"/></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000px" height="50.000000px" viewBox="0 0 30.000000 50.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#C70101" stroke="none"><path d="M22 477 c-12 -13 -22 -27 -22 -32 0 -5 42 -51 92 -102 l93 -93 -93 -93 c-50 -51 -92 -97 -92 -103 0 -13 43 -54 56 -54 15 0 244 235 244 250 0 16 -229 250 -245 250 -6 0 -21 -10 -33 -23z"/></g></svg></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false,
              }
            },
          ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
    };

    toggleSlide('.catalog-item__link')
    toggleSlide('.catalog-item__back')

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn();
    })
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #succsess, #order').fadeOut('slow');
    })
    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
        $('.overlay, #order').fadeIn();
      })
    });


    function validateForm(form) {
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: {
            required: true,
            minlength: 11
          },
          email: {
            required: true,
            email: true,
            minlength: 3
          }
        },
        messages: {
          name: {
            required: "Введите свое имя",
            minlength: jQuery.validator.format("Минимальное кол-во символов: {0}")
          },
          phone: {
            required: "Введите номер телефона",
            minlength: jQuery.validator.format("Минимальное кол-во символов: {0}")
          },
          email: {
            required: "Введите свой Email адрес",
            email: "Введите корректный Email адрес",
            minlength: jQuery.validator.format("Минимальное кол-во символов: {0}")
          }
        }
      });
    }

    validateForm('#consultation-form');
    validateForm('#consultation form');
    validateForm('#order form');

    $('input[name=phone]').mask("+7(999) 999-99-99");

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "../mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #success').fadeIn('slow');

        $('form').trigger('reset');
      });
      return false;
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });

    $("a[href=#up]").click(function() {
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

    new WOW().init();
});