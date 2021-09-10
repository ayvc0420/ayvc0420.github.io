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

    $('.go_top img ,#mob_top').click(function(){
        $('html').animate({scrollTop: 0,},1000);
    });

    $('tbody tr:nth-child(odd)').css({'background-color':'#FFFFF4'})
    $('tbody tr:nth-child(even)').css({'background-color':'#F0FFF0'})


    $('.content_ytb').orzScroll(function(){
        $('.content_ytb').animate();
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

    function year(){
        $(function(){
            let now = new Date();
            let newYear = new Date(2021,12,31);
            let ms=newYear.getTime()-now.getTime()+now.getTimezoneOffset()*60*1000;
            let time = new Date(ms);

            $('#year').html(time.getMonth()-1+'個月' + (time.getDate())+'天' + time.getHours()+'小時' + time.getMinutes()+'分' + time.getSeconds()+'秒');
        })
    }

    year();
    setInterval(year,1000);

})
