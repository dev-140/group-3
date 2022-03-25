$(document).ready(function(){
    $(window).scroll(function() {
        var height = $(window).scrollTop();
    
        if(height === 0){
            $('.nav-main-container').removeClass('active');
        }else{
            $('.nav-main-container').addClass('active');
        }
    });

    $(window).scroll(function() {
        var height = $(window).scrollTop();
    
        if(height >= 1054) {
            $('.aboutLink').addClass('active');
        }else{
            $('.aboutLink').removeClass('active');
        }
    });
});