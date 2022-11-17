$(document).ready(function(){
    let hamburger = document.querySelector('.hamburger'),
        close =     document.querySelector('.menu__close'),
        menu =      document.querySelector('.menu');
        window =    document.querySelector('.menu__overlay');
        linkClose = document.querySelectorAll('.menu__link')
        counter =   document.querySelectorAll('.checkpoint__percentage');
        line =      document.querySelectorAll('.checkpoint__line-main .checkpoint__line-second');
        thanks =    document.querySelector('.contacts__thx');
        userForm =  document.querySelector('.contacts__form');
        userName =  document.getElementById('name');
        userEmail = document.getElementById('email'); 
        userText =  document.getElementById('text');
        userPolicy =document.getElementById('privacy');
        buttonSend =document.querySelector('.contacts__btn');

    hamburger.addEventListener("click", () => {
        menu.classList.toggle('active');
    });
    close.addEventListener("click", () => {
        menu.classList.toggle('active');
    });
    linkClose.forEach((item, i) => {
        linkClose[i].addEventListener("click", () => {
            menu.classList.remove('active');
        });
    });
    counter.forEach((item, i) => {
        line[i].style.width = item.innerHTML;
    });


    function validateForm(form) {
        $(form).validate({
          rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true,
                minlength: 3
            },
            privacy: {
                required: true
            },
            text: {
                required: true
            }
          },
          messages: {
            name: {
              required: "Введите свое имя",
              minlength: jQuery.validator.format("Минимальное кол-во символов: {0}")
            },
            email: {
              required: "Введите свой Email адрес",
              email: "Введите корректный Email адрес",
              minlength: jQuery.validator.format("Минимальное кол-во символов: {0}")
            },
            privacy: {
                required: "Подтвердите согласие с политикой конфиденциальности"
            },
            text: {
                required: "Введите сообщение",
            }
          }
        });
      };
  
      validateForm('#contacts__form');

      $('form').submit(function(e) {
        checkValid = $('form').valid();
        e.preventDefault();
        if (checkValid) {
          $.ajax({
            type: "POST",
            url: "../mailer/mail.php",
            data: $(this).serialize()
          }).done(function() {
            userForm.classList.add('succses');
            thanks.classList.add('active');
          });
          return false;
        } else {
          return false;
        }
      })

})