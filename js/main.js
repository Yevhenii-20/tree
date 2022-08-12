$(document).ready(function() {
    /*$(".custom-select").each(function() {
        var classes = $(this).attr("class"),
            id      = $(this).attr("id"),
            name    = $(this).attr("name");
        var template =  '<div class="' + classes + '">';
            template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
            template += '<div class="custom-options">';
            $(this).find("option").each(function() {
                template += '<span class="custom-option' + '"data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
            });
        template += '</div></div>';
    
        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function() {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function() {
        $(this).parents(".custom-options").removeClass("option-hover");
        });
    $(".custom-select-trigger").on("click", function() {
        $('html').one('click',function() {
            $(".custom-select").removeClass("opened");
        });
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
    });
    $(".custom-option").on("click", function() {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });*/

    $('.slider').slick({
        infinite: true,
    });

    $('.slider-cm').slick({
        infinite: true,
    });

    $('.open-modal-opt').on('click', function(e) {
        e.preventDefault();
        $('.modal-opt').toggleClass('is-visible');
    });

    $('.open-modal-individ').on('click', function(e) {
        e.preventDefault();
        $('.modal-individ').toggleClass('is-visible');
    });

    $('.open-modal-call').on('click', function(e) {
        e.preventDefault();
        $('.modal-call').toggleClass('is-visible');
    });

    $(".listveniye-block, .plodovie-block, .krypnomeri-block, .tyi-block, .kystarniki-block").hide();

    $('.sl-miksborder, .sl-cvetniki, .sl-alpinarii, .sl-zhivaya').hide();

    $('.xv').on('click', function(e) {
        $('.xvoya').addClass('active');
        $(".listveniye, .plodoviye, .krypnomeri, .tyi, .kystarniki").removeClass('active')
        $('.xvoya-block').show();
        $(".listveniye-block, .plodovie-block, .krypnomeri-block, .tyi-block, .kystarniki-block").hide();
    });

    $('.ls').on('click', function(e) {
        $('.listveniye').addClass('active');
        $('.listveniye-block').show();

        $(".xvoya, .plodoviye, .krypnomeri, .tyi, .kystarniki").removeClass('active')
        $(".xvoya-block, .plodovie-block, .krypnomeri-block, .tyi-block, .kystarniki-block").hide();
    });

    $('.pl').on('click', function(e) {
        $('.plodoviye').addClass('active');
        $('.plodovie-block').show();

        $(".listveniye, .xvoya,  .krypnomeri, .tyi, .kystarniki").removeClass('active')
        $(".listveniye-block, .xvoya-block, .krypnomeri-block, .tyi-block, .kystarniki-block").hide();
    });

    $('.kr').on('click', function(e) {
        $('.krypnomeri').addClass('active');
        $('.krypnomeri-block').show();

        $(".listveniye, .xvoya, .plodoviye,  .tyi, .kystarniki").removeClass('active')
        $(".listveniye-block, .xvoya-block, .plodovie-block, .tyi-block, .kystarniki-block").hide();
    });

    $('.ty').on('click', function(e) {
        $('.tyi').addClass('active');
        $('.tyi-block').show();

        $(".listveniye, .xvoya, .plodoviye, .krypnomeri, .kystarniki").removeClass('active')
        $(".listveniye-block, .xvoya-block, .plodovie-block, .krypnomeri-block, .kystarniki-block").hide();
    });

    $('.ky').on('click', function(e) {
        $('.kystarniki').addClass('active');
        $('.kystarniki-block').show();

        $(".listveniye, .xvoya, .plodoviye, .krypnomeri, .tyi").removeClass('active')
        $(".listveniye-block, .xvoya-block, .plodovie-block, .tyi-block, .krypnomeri-block").hide();
    });

    $('.tree-button-block').on('click', function(e) {
        $('.tree-button-block').removeClass('active')
        $(this).toggleClass('active');

        if ($('.xvoya').hasClass('active')) {
            $('.xvoya').addClass('active');
            $('.xvoya-block').show();
            $(".listveniye-block, .plodovie-block, .krypnomeri-block, .tyi-block, .kystarniki-block").hide();
        }
    
        if ($('.listveniye').hasClass('active')) {
            $('.listveniye').addClass('active');
            $('.listveniye-block').show();
            $(".plodovie-block, .krypnomeri-block, .tyi-block, .kystarniki-block, .xvoya-block").hide();
        }

        if ($('.plodoviye').hasClass('active')) {
            $('.plodoviye').addClass('active');
            $('.plodovie-block').show();
            $(".listveniye-block, .krypnomeri-block, .tyi-block, .kystarniki-block, .xvoya-block").hide();

        }
        
        if ($('.krypnomeri').hasClass('active')) {
            $('.krypnomeri').addClass('active');
            $('.krypnomeri-block').show();
            $(".listveniye-block, .plodovie-block, .tyi-block, .kystarniki-block, .xvoya-block").hide();
        }

        if ($('.tyi').hasClass('active')) {
            $('.tyi').addClass('active');
            $('.tyi-block').show();
            $(".listveniye-block, .plodovie-block, .krypnomeri-block, .kystarniki-block, .xvoya-block").hide();
        }

        if ($('.kystarniki').hasClass('active')) {
            $('.kystarniki').addClass('active');
            $('.kystarniki-block').show();
            $(".listveniye-block, .plodovie-block, .krypnomeri-block, .tyi-block,  .xvoya-block").hide();
        }
    });

    $('.button-change-design').on('click', function(e) {
        $('.button-change-design').removeClass('active');
        $(this).toggleClass('active');

        if ($('.rk').hasClass('active')) {
            $('.rk').addClass('active');
            $('.sl-rokarii').show();
            $('.sl-miksborder, .sl-cvetniki, .sl-alpinarii, .sl-zhivaya').css('display' , 'none');
            $(".mk, .cv, .al, .zi").removeClass('active');
        }
    
        if ($('.mk').hasClass('active')) {
            $('.mk').addClass('active');
            $('.sl-miksborder').show();
            $('.sl-rokarii, .sl-cvetniki, .sl-alpinarii, .sl-zhivaya').hide();
            $(".rk, .cv, .al, .zi").removeClass('active');
        }

        if ($('.cv').hasClass('active')) {
            $('.cv').addClass('active');
            $('.sl-cvetniki').show();
            $('.sl-rokarii, .sl-miksborder, .sl-alpinarii, .sl-zhivaya').hide();
            $(".rk, .mk, .al, .zi").removeClass('active');
        }

        if ($('.al').hasClass('active')) {
            $('.al').addClass('active');
            $('.sl-alpinarii').show();
            $('.sl-rokarii, .sl-miksborder, .sl-cvetniki, .sl-zhivaya').hide();
            $(".rk, .mk, .cv, .zi").removeClass('active');
        }

        if ($('.zi').hasClass('active')) {
            $('.zi').addClass('active');
            $('.sl-zhivaya').show();
            $('.sl-rokarii, .sl-miksborder, .sl-cvetniki, .sl-alpinarii').hide();
            $(".rk, .mk, .cv, .al").removeClass('active');
        }
    });

    $(".etap-2, .etap-3, .etap-4").hide();

    $('.etap-block').on('click', function(e) {
        $('.etap-block').removeClass('active');
        $(this).toggleClass('active');

        if ($('.et-1').hasClass('active')) {
            $('.et-1').addClass('active');
            $('.etap-1').show();
            $(".etap-2, .etap-3, .etap-4").hide();
            $(".etap-2, .etap-3, .etap-4").removeClass('active');
        }

        if ($('.et-2').hasClass('active')) {
            $('.et-2').addClass('active');
            $('.etap-2').show();
            $(".etap-1, .etap-3, .etap-4").hide();
            $(".etap-1, .etap-3, .etap-4").removeClass('active');
        }

        if ($('.et-3').hasClass('active')) {
            $('.et-3').addClass('active');
            $('.etap-3').show();
            $(".etap-1, .etap-2, .etap-4").hide();
            $(".etap-1, .etap-2, .etap-4").removeClass('active');
        }

        if ($('.et-4').hasClass('active')) {
            $('.et-4').addClass('active');
            $('.etap-4').show();
            $(".etap-1, .etap-2, .etap-3").hide();
            $(".etap-1, .etap-2, .etap-3").removeClass('active');
        }
    
    });


    $('.cm-block').on('click', function(e) {
        $('.cm-block').removeClass('active')
        $(this).toggleClass('active');
    });

    $('.flowing-scroll').on( 'click', function(){ 
        var el = $(this);
        var dest = el.attr('href'); // получаем направление
        if(dest !== undefined && dest !== '') { // проверяем существование
            $('html').animate({ 
                scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
            }, 1000 // скорость прокрутки
            );
        }
        return false;
    });




    $('[data-fancybox]').fancybox({
        // Options will go here
        buttons : [
          'close'
        ],
        wheel : false,
        transitionEffect: "slide",
         // thumbs          : false,
        // hash            : false,
        loop            : true,
        // keyboard        : true,
        toolbar         : false,
        // animationEffect : false,
        // arrows          : true,
        clickContent    : false
      });

});