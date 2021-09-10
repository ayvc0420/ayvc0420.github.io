
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
    // var html_width = $(window).innerWidth(); //取得寬
    // console.log(html_width)
    // var html_height = $(window).height();    //取得高 
    // console.log(html_height)
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

    $(function(){

        $('.content_02').orzScroll(function(){
            $('.content_02').animate(),3000;
        })
        $('.content_03').orzScroll(function(){
            $('.content_03').animate();
        })  
        $('.content_04').orzScroll(function(){
            $('.content_04').animate();
        })  

        
    })

    $('#nav_button').click(function(){
        $('.mob_title').toggle()
    })

    // $(window).scroll(function(){
    //     let html_high = $(this).scrollTop();
    //     console.log(html_high)
    //     // $('.content_1_css').orzScroll(function(){
    //     //     $('.content_1_css').css({'animation-name': 'fadeIn','animation-duration':'2000ms'}).css({'opacity':'1'})
    //     // })
    // })


})

