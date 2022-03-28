$(document).ready(function(){
    $(window).scroll(function() {
        var height = $(window).scrollTop();
    
        if(height === 0){
            $('.nav-main-container').removeClass('active');
        }else{
            $('.nav-main-container').addClass('active');
        }
    });

    // $(window).scroll(function() {
    //     var height = $(window).scrollTop();
    //     var aboutLinkTop = $('.aboutLink').offset().top;
    
    //     if(height >= 1186) {
    //         $('.aboutLink').addClass('active');
    //     }else{
    //         $('.aboutLink').removeClass('active');
    //     }
        
    //     console.log(aboutLinkTop);
       
    // });

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

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
    setInterval(function () {
        var beepOne = $('#beep')[0];
        $('.play-bg-music').on('click' , (e)=> {
            beepOne.play(); 
            beepOne.volume = 0.5;
            $('.play-bg-music').addClass('mute');
            $('.mute').removeClass('play-bg-music');
        });

        $('.mute').on('click' , (e)=> {
            beepOne.volume = 0.5;
            beepOne.pause(); // Stop playing
            beepOne.currentTime = 0; // Reset time
            $('.mute').addClass('play-bg-music');
            $('.play-bg-music').removeClass('mute');
        });
    
    },);
    $(document).on('scroll', function() {
        if ($(this).scrollTop() >= $('#theTarget').position().top) {
          console.log('I have been reached');
        }
    })

    $('.contact-btn').on('click', (e)=> {
        $('.contact-pop-up-modal-main-container').addClass('active');
        $('.contact-pop-up-modal-main-container').removeClass('oppacity');
        setTimeout(() => { 
            $('.contact-pop-up-modal-container').addClass('active');
        }, 1);
        $('body').css('overflow', 'hidden');
    });

    $('.contact-close-btn , .submit-btn').on('click', (e)=> {
        setTimeout(() => { 
            $('.contact-pop-up-modal-main-container').removeClass('active');
        }, 100);
        $('.contact-pop-up-modal-main-container').addClass('oppacity');
        $('.contact-pop-up-modal-container').removeClass('active');
        $('body').css('overflow', 'visible');
    });
});