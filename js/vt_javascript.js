window.addEventListener('load',function(){
    
    $('[data-fancybox="vt_c3"]').fancybox({
        loop : true
    })

    
    /* vt */
    const vt_content1 = document.getElementById('c1_1')
    const vt_content2 = document.getElementById('c2_1')
    const vt_content2_h1 = document.querySelector('.vt_content2 h1')
    const vt_content3_c1 = document.getElementById('c3_1')
    const vt_content3_c2 = document.getElementById('c3_2')
    const vt_content3_c3 = document.getElementById('c3_3')
    const vt_content3_h1 = document.querySelector('.vt_content3 h1')
    const vt_video_div = document.getElementById('vt_video_div')
    const vt_audio_div = document.getElementById('vt_audio_div')

    
    
    window.addEventListener('scroll',function(){

        const vt_content1_top = vt_content1.offsetTop;
        const vt_content2_top = vt_content2.offsetTop;
        const vt_content3_c1_top = vt_content3_c1.offsetTop;
        const vt_content3_c2_top = vt_content3_c2.offsetTop;
        const vt_content3_c3_top = vt_content3_c3.offsetTop;
        const vt_video_div_top = vt_video_div.offsetTop;
        const vt_audio_div_top = vt_audio_div.offsetTop;

        
        const body_height = document.body.scrollHeight;
        mob_menu_div.style.height = `${body_height}px`;
    
    
        const now_height = document.documentElement.scrollTop;
        const now_width = document.documentElement.scrollWidth;
        const height = document.documentElement.clientHeight;
        
        const vt_control_video_div = vt_video_div_top - height <= now_height-100;
        const vt_control_audio_div = vt_audio_div_top - height <= now_height-100;

        
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
    
        const vt_control1 = vt_content1_top - height <= now_height-100;
        const vt_control2 = vt_content2_top - height <= now_height-100;
        const vt_control3_c1 = vt_content3_c1_top - height <= now_height-30;
        const vt_control3_c2 = vt_content3_c2_top - height <= now_height-30;
        const vt_control3_c3 = vt_content3_c3_top - height <= now_height-30;
    
        if(vt_control_video_div === true){
            vt_video_div.classList.add('vt_content_ani')
        }
        if(vt_control_audio_div === true){
            vt_audio_div.classList.add('vt_content_ani')
        }
        if(vt_control1 === true){
            vt_content1.classList.add('vt_content_ani')
        }
        if(vt_control2 === true){
            vt_content2_h1.classList.add('vt_content_ani')
            function c2(){
                vt_content2.classList.add('vt_content_ani')
            }
            setTimeout(() => {
                c2()
            }, 300);
        }
        if(vt_control3_c1 === true){
            vt_content3_h1.classList.add('vt_content_ani_h1')
            function c3(){
                vt_content3_c1.classList.add('vt_content_ani')
            }
            setTimeout(() => {
                c3()
            }, 400);
        }
        if(vt_control3_c2 === true){
            setTimeout(() => {
                vt_content3_c2.classList.add('vt_content_ani')
            }, 500);
        }
        if(vt_control3_c3 === true){
            setTimeout(() => {
                vt_content3_c3.classList.add('vt_content_ani')
            }, 600);
        }
    })
})
