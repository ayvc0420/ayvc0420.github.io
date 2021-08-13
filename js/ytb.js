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

    $('tbody tr:nth-child(odd)').css({'background-color':'#FFFFF4'})
    $('tbody tr:nth-child(even)').css({'background-color':'#F0FFF0'})


    $('.content_ytb').orzScroll(function(){
        $('.content_ytb').animate();
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
