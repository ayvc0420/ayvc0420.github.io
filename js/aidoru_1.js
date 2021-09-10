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
    
    $('.go_top img,#mob_top').click(function(){
        $('html').animate({scrollTop: 0,},1000);
    });


    $('.content_aidoru').orzScroll(function(){
        $('.content_aidoru').animate();
    })
    

    $('#nav_button').click(function(){
        $('.mob_title').toggle()
    })

    $(window).scroll(function(){
        let html_width = $(window).innerWidth()
        if(html_width <= 1024){
            const html_high = $(this).scrollTop();
            if(html_high >= 400){
                $('#mob_top').css({'display':'block'})
                $('#mob_top').addClass('mob_btn_anim');
            }else{
                $('#mob_top').css({'display':'none'})
            }
        }else{
            $('#mob_top').css({'display':'none'})
        }
    })

})