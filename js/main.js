/*
    01. preloader
    02. Isotope Initialize
    03. Smooth Scroll Initialize
    04. menu Controlling
    05. sticky header
    06. magnific Popup Initialize
    07. wow Initialize
    08. Counter Initialize
*/
 
(function ($) {
    "use strict";

    $(window).on('load', function(){
        // 01. preloader
        $('.preloader').fadeOut('slow');

        //02. Isotope Initialize
        function isotopeInit() {
            $('.portfolio-items').isotope({
                itemSelector: '.item',
                masonry: {
                    columnWidth: '.item'
                }
            });
            $('.portfolio-menu ul li').on('click', function () {
                $('.portfolio-menu ul li').removeClass('sel-item');
                $(this).addClass('sel-item');
                var selector = $(this).attr('data-filter');
                $('.portfolio-items').isotope({
                    filter: selector
                });
                return false;
            });
        }
        isotopeInit();
    });

    $(document).ready(function () {

        //03. Smooth Scroll Initialize
        function smoothScroolInit() {
            $('a').smoothScroll({
                speed: 1000
            });
        }
        smoothScroolInit();

        //04. menu Controlling
        function menuControll() {
            $('.nav-toggler, .menu_link').on('click', function () {
                $('#menu').toggleClass('open');
                $('.nav-toggler').toggleClass('on');
            });
            $('.dropdown_toggler').on('click', function() {
                $(this).siblings().toggleClass('d-block');
            });
        }
        menuControll();

        //05. sticky header
        function sticky_header(){
            $(window).on('scroll', function() {
                if (!$('#menu').hasClass('open')) {
                    if ($(window).scrollTop() > 70) {
                        $('header').addClass('fixed_header');
                    } else {
                        $('header').removeClass('fixed_header');
                    }
                }else{
                    $('header').addClass('fixed_header');
                }
            });
        }
        sticky_header();

        //06. magnific Popup Initialize
        function magnificPopupInit() {
            $('.icon').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }
        magnificPopupInit();

        //07. wow Initialize
        function wowInit(){
            new WOW().init();
        }
        wowInit();

        //08. Counter Initialize
        function counterInit(){
            $('.counter-number').counterUp({
                delay: 10,
                time: 1000
            });
        }
        counterInit();
    });

})(jQuery);