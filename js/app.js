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
});