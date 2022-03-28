$(document).ready(function(){
    $(window).scroll(function() {
        var height = $(window).scrollTop();
    
        if(height === 0){
            $('.nav-main-container').removeClass('active');
        }else{
            $('.nav-main-container').addClass('active');
        }
    });

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