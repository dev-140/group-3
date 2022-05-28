$(document).ready(function(){
    $(window).scroll(function() {
        var height = $(window).scrollTop();
    
        if(height === 0){
            $('.nav-main-container').removeClass('active');
        }else{
            $('.nav-main-container').addClass('active');
        }
    });

    // $.fn.isInViewport = function() {
    //     var elementTop = $(this).offset().top;
    //     var elementBottom = elementTop + $(this).outerHeight();
    
    //     var viewportTop = $(window).scrollTop();
    //     var viewportBottom = viewportTop + $(window).height();
    
    //     return elementBottom > viewportTop && elementTop < viewportBottom;
    // };

    $(window).on('resize scroll', function() {
        if ($('.mission-main-container').isInViewport()) {
            $('.nav-container ul li a').removeClass('active');
            $('.aboutLink').addClass('active');
            
        } else if ($('.banner-main-container , .item-cards-main-container').isInViewport()) {
            $('.nav-container ul li a').removeClass('active');
            $('.homeLink').addClass('active');

        } else if ($('.team-main-container').isInViewport()) {
            $('.nav-container ul li a').removeClass('active');
            $('.teamLink').addClass('active');

        } else {
            $('.nav-container ul li a').removeClass('active');
        }
    });  
    
    $('.contact-btn, .contact-btn-global').on('click', (e)=> {
        $('.contact-pop-up-modal-main-container').addClass('active');
        $('.contact-pop-up-modal-main-container').removeClass('oppacity');
        setTimeout(() => { 
            $('.contact-pop-up-modal-container').addClass('active');
        }, 1);
        $('body').css('overflow', 'hidden');
    });

    $('.contact-close-btn, .submit-btn').on('click', (e)=> {
        setTimeout(() => { 
            $('.contact-pop-up-modal-main-container').removeClass('active');
        }, 100);
        $('.contact-pop-up-modal-main-container').addClass('oppacity');
        $('.contact-pop-up-modal-container').removeClass('active');
        $('body').css('overflow', 'visible');

        $('.form input, .form textarea').val('');
    });

    $('.menu, .close-nav, .nav-main-container .nav-container ul li').on('click', (e)=> {
        $('.nav-main-container .nav-container ul').toggleClass('active');
    });

    $('body').css('overflow', 'hidden');

    $('.close-cookie').on('click', (e)=> {
        $('.cookie-wrapper').remove();
        $('body').css('overflow', 'visible');
    });
});