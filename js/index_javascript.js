
window.addEventListener('load',function(){

    /* 首頁 */
    const mob_menu_div = document.getElementById('mob_menu_div')
    const content2 = document.querySelector('.content2 article')
    const content3 = document.querySelector('.content3 article')
    const content4 = document.querySelector('.content4 article')
    const content4_h1 = document.querySelector('.content4 h1')
    const content5 = document.querySelector('.content5 article')
    const content6 = document.querySelector('.content6 article')
    const content7 = document.querySelector('.content7 article')


    window.addEventListener('scroll',function(){
        // const body_height = document.body.scrollHeight;
        // mob_menu_div.style.height = `${body_height}px`;
        const content2_top = content2.offsetTop;
        const content3_top = content3.offsetTop;
        const content4_top = content4.offsetTop;
        const content5_top = content5.offsetTop;
        const content6_top = content6.offsetTop;
        const content7_top = content7.offsetTop;
        const now_height = document.documentElement.scrollTop;
        const now_width = document.documentElement.scrollWidth;
        const height = document.documentElement.clientHeight;

        
        if(now_width >= 1024){
            mob_top.style.display = 'none';
        }else{
            mob_top.style.display = 'block';
        }
        if(height <= now_height){
            mob_top.style.transform = `translateX(0%)`
        }else{
            mob_top.style.transform = `translateX(1000%)`
        }

        const control2 = content2_top - height <= now_height-100;
        const control3 = content3_top - height <= now_height-100;
        const control4 = content4_top - height <= now_height-100;
        const control5 = content5_top - height <= now_height-100;
        const control6 = content6_top - height <= now_height-100;
        const control7 = content7_top - height <= now_height-100;

        if(control2 === true){
            content2.classList.add('content_ani')
        }
        if(control3 === true){
            content3.classList.add('content_ani')
        }
        if(control4 === true){
            content4_h1.classList.add('content_ani_h1')
            function c4(){
                content4.classList.add('content_ani')
            }
            setTimeout(() => {
                c4()
            }, 300);
        }
        if(control5 === true){
            content5.classList.add('content_ani')
        }
        if(control6 === true){
            content6.classList.add('content_ani')
        }
        if(control7 === true){
            content7.classList.add('content_ani')
        }

    })


})
