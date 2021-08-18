$(function(){


    $('.nav-item a').hover(function(){
        $(this).css({'background-color':'rgb(245, 222, 131,0.4)'});
    },function(){
        $(this).css({'background-color':''});
    })

    $('.nav-link').hover(function(){
        $(this).css({'font-size':'1.5rem'});
    },function(){
        $(this).css({'font-size':''});
    })
    
    $('.go_top img').click(function(){
        $('html').animate({scrollTop: 0,},1000);
    });


    $('.content_aidoru').orzScroll(function(){
        $('.content_aidoru').animate();
    })
    

    $('#nav_button').click(function(){
        $('.mob_title').toggle()
    })


})