 
window.addEventListener('load',function(){
    
    $('[data-fancybox="vt_c1"]').fancybox({
        loop : true
    })
    $('[data-fancybox="vt_c3"]').fancybox({
        loop : true
    })


    /* vt */
    const vt_content1 = document.getElementById('c1_1')
    const vt_content2 = document.getElementById('c2_1')
    const vt_content2_h1 = document.getElementById('c2_h1')
    const vt_content3_c1 = document.getElementById('c3_1')
    const vt_content3_c2 = document.getElementById('c3_2')
    const vt_content3_c3 = document.getElementById('c3_3')
    const vt_content3_h1 = document.getElementById('c3_h1')
    const vt_video_div = document.getElementById('vt_video_div')
    const vt_audio_title = document.getElementById('vt_audio_title')
    /* 最底頭像圖貼 */
    const rushia_audio_clock = document.getElementById('rushia_audio_clock')

    
    
    
    
    
    
    window.addEventListener('scroll',function(){
        
        const vt_content1_top =vt_content1.offsetTop;
        const vt_content2_top = vt_content2.offsetTop;
        const vt_content3_c1_top = vt_content3_c1.offsetTop;
        const vt_content3_c2_top = vt_content3_c2.offsetTop;
        const vt_content3_c3_top = vt_content3_c3.offsetTop;
        const vt_video_div_top = vt_video_div.offsetTop;
        const vt_audio_title_top = vt_audio_title.offsetTop;
        const rushia_audio_clock_top = rushia_audio_clock.offsetTop;
        const body_height = document.body.scrollHeight;
        const mob_menu_div = document.getElementById('mob_menu_div')
        mob_menu_div.style.height = `${body_height}px`; 


        // console.log('top2',content2_top)
        // console.log('top3',content3_top)
        const now_height = document.documentElement.scrollTop;
        // console.log('目前網頁高度',now_height)
        const now_width = document.documentElement.scrollWidth;
        // console.log('目前網頁寬度',now_width)
        const height = document.documentElement.clientHeight;
        // console.log('目前網頁可視高度',height)

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

        //元素-可視高度比較現在捲軸高度 -100變難觸發
        const vt_control1 = vt_content1_top - height <= now_height-100;
        const vt_control2 = vt_content2_top - height <= now_height-100;
        const vt_control3_c1 = vt_content3_c1_top - height <= now_height-30;
        const vt_control3_c2 = vt_content3_c2_top - height <= now_height-30;
        const vt_control3_c3 = vt_content3_c3_top - height <= now_height-30;
        const vt_control_video_div = vt_video_div_top - height <= now_height-100;
        const vt_control_vt_audio_title = vt_audio_title_top - height <= now_height-100;
        const vt_control_rushia_audio_clock = rushia_audio_clock_top - height <= now_height-150;

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
        if(vt_control_video_div === true){
            vt_video_div.classList.add('vt_content_ani')
        }
        if(vt_control_vt_audio_title === true){
            vt_audio_title.classList.add('content_ani')
        }
        if(vt_control_rushia_audio_clock === true){
            rushia_audio_clock.classList.add('content_ani')
        }
        
    })
    const rushiaVolumeNumber = document.getElementById('rushiaVolumeNumber')
    const rushiaReciprocal = this.document.getElementById('rushiaReciprocal')
    rushiaReciprocal.addEventListener('click',rushiaClock)
    const rushiaVolume = document.getElementById('rushiaVolume')
    const rushiaSecond = document.getElementById('rushiaSecond')
    rushiaVolumeNumber.textContent = rushiaVolume.value
    rushiaVolume.addEventListener('change',function(){
        rushiaVolumeNumber.textContent = rushiaVolume.value
    })
    rushiaVolume.addEventListener('mousemove',function(){
        rushiaVolumeNumber.textContent = rushiaVolume.value
    })

    rushiaVolume.addEventListener('keypress',function(e){
        if(e.key === 'Enter'){
            rushiaClock()
        }
    })
    rushiaSecond.addEventListener('keypress',function(e){
        if(e.key === 'Enter'){
            rushiaClock()
        }
    })
    const rushia1 = document.getElementById('rushia1')
    const rushia2 = document.getElementById('rushia2')
    function rushiaClock(){
        const n1 = parseFloat(rushiaVolume.value,10)
        let t = rushiaVolume.value <= 1 && rushiaVolume.value != '0' && rushiaVolume.value >= 0
        let n2 = parseInt(rushiaSecond.value,10)
        if(isNaN(n1) || !t){
            rushia1.classList.add('rushia_err')
        }else{
            rushia1.classList.remove('rushia_err')
        }
        if(isNaN(n2)){
            rushia2.classList.add('rushia_err')
        }else{
            rushia2.classList.remove('rushia_err')
        }
        let rushiaStop = document.createElement('button');
        let rushiaReciprocalLoop;
        const rushia_reciprocal = document.querySelector('.rushia_reciprocal');
        if(!isNaN(n1) && !isNaN(n2) && t){
            const music = document.getElementById('music')
            const rushia_btn = document.getElementById('rushia_btn')
            rushiaVolume.value = 1.0;
            rushiaSecond.value = '';
            rushiaVolumeNumber.textContent = rushiaVolume.value;
            rushiaReciprocal.style.display = 'none';
            rushiaStop.textContent = '我後悔了';
            rushia_btn.appendChild(rushiaStop);
            let e = function(){
                rushia_reciprocal.textContent = n2
                n2--
                if(n2 === -2 || n2 <= -2){
                    document.querySelector('#rushia_audio_clock>h2').style.color = 'red'
                    clearInterval(rushiaReciprocalLoop)
                    rushia_reciprocal.textContent = '時間到了!!!'
                    rushia_reciprocal.classList.add('rushia_reciprocal_stop')
                    rushiaStop.textContent = '停止!!我起來了'
                    rushia_btn.appendChild(rushiaStop)
                    music.volume = n1
                    music.play()
                }
                return e;
            }
            rushiaReciprocalLoop = setInterval(e(),1000);
        }
        rushiaStop.addEventListener('click',function(){
            music.pause()
            music.currentTime = 0
            document.querySelector('#rushia_audio_clock>h2').style.color = 'black'
            clearInterval(rushiaReciprocalLoop)
            rushia_reciprocal.textContent = ''
            rushia_reciprocal.classList.remove('rushia_reciprocal_stop')
            rushiaReciprocal.style.display = 'block'
            rushiaStop.style.display = 'none'
            n2 = -1
        })
    }

})