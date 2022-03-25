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

    $(document).on('scroll', function() {
        if ($(this).scrollTop() >= $('#theTarget').position().top) {
          console.log('I have been reached');
        }
    })
});