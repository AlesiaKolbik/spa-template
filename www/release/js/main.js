


                             //main menu
$(function() {
    $('.burger-trigger').click(function () {
        if($('.menu').hasClass('subnav_opened')){
            $('.menu').removeClass('subnav_opened');
        }
        else{
            $('.menu').toggleClass('nav_opened');
        }
    });

                /*по клику по бургеру если меню имеет класс
                "субменю" то убрать его, если нет то работает
                как переключатель главного меню, добавляет и
                убирает класс "меню-открыто"*/
     $('.button-into-nav').click(function () {
        $('.menu').toggleClass('nav_opened').toggleClass('subnav_opened');
    });

                /* по клику по "кнопке-стрелке" внутри главного меню,
                 главное закрывается, субменю открывается и стрелка
                 переходит влево*/
    $(document).mouseup(function (e) {
       var container = $('.menu');
       if (container.has(e.target).length === 0){
        container.removeClass('nav_opened');
        container.removeClass('subnav_opened');
    }
    });

    //закрывает меню если нажать вне области этого меню

    $('#button-comment').click(function () {
       if ( $('#button-comment').hasClass('fa-comment-alt')) {
          $('#button-comment').removeClass('fa-comment-alt').addClass('fa-times-circle');
          $('.comment-content').addClass('visible');
       }
       else {
          $('#button-comment').removeClass('fa-times-circle').addClass('fa-comment-alt');
          $('.comment-content').removeClass('visible');
    }
    });
      /* открывает и закрывает окно с
      комментом на странице каталог и
       меняет значок с коммент на крестик*/


    $('.shopping-bag').click(function () {
       $('.form-wrapper').removeClass('hidden');
     });
                 //открывает форму для заказа

    $('.form-oder').submit(function (e) {
        e.preventDefault();
        $('.form-oder').addClass('hidden');
        $('.form-sent').removeClass('hidden');
    });
    $('.button-form').click(function () {
        $('.form-wrapper').addClass('hidden');
        $('.form-oder').removeClass('hidden');
        $('.form-sent').addClass('hidden');
    });

    $('.button-form-close').click(function () {
        $('.form-wrapper').addClass('hidden');
    });
           //заказ

    $('.button-in-goods').click(function () {
        $('.form-wrapper').removeClass('hidden');
    });
      // форма в товарах


    $('.img').click(function () {    //кнопки в слайдере
        if ($(window).width() >= '767'){
            $('.fullpage').removeClass('hidden');
            $('.button-close-fullpage').addClass('visible');

        }

     });

     $('.button-close-fullpage').click(function () { //закрывает слайдер fullpage кликом на крестик
         $('.fullpage').addClass('hidden');
         $('.button-close-fullpage').removeClass('visible')

     });
});

