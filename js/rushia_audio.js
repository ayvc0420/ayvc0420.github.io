
;(function(){

    // 迴圈製作參考introduce.js
    const audio1 = document.getElementById('audio1')
    const audio2 = document.getElementById('audio2')
    const audio3 = document.getElementById('audio3')
    const audio4 = document.getElementById('audio4')
    const audio5 = document.getElementById('audio5')
    const audio6 = document.getElementById('audio6')
    const audio7 = document.getElementById('audio7')
    const audio8 = document.getElementById('audio8')
    const audio9 = document.getElementById('audio9')
    const audio10 = document.getElementById('audio10')
    
    
    window.addEventListener('scroll',function(){
        const audio1_top = audio1.offsetTop;
        const audio2_top = audio2.offsetTop;
        const audio3_top = audio3.offsetTop;
        const audio4_top = audio4.offsetTop;
        const audio5_top = audio5.offsetTop;
        const audio6_top = audio6.offsetTop;
        const audio7_top = audio7.offsetTop;
        const audio8_top = audio8.offsetTop;
        const audio9_top = audio9.offsetTop;
        const audio10_top = audio10.offsetTop;
    
        const now_height = document.documentElement.scrollTop;
        const height = document.documentElement.clientHeight;
    
        const vt_control_audio1 = audio1_top - height <= now_height-100;
        const vt_control_audio2 = audio2_top - height <= now_height-100;
        const vt_control_audio3 = audio3_top - height <= now_height-100;
        const vt_control_audio4 = audio4_top - height <= now_height-100;
        const vt_control_audio5 = audio5_top - height <= now_height-100;
        const vt_control_audio6 = audio6_top - height <= now_height-100;
        const vt_control_audio7 = audio7_top - height <= now_height-100;
        const vt_control_audio8 = audio8_top - height <= now_height-100;
        const vt_control_audio9 = audio9_top - height <= now_height-100;
        const vt_control_audio10 = audio10_top - height <= now_height-100;
    
    
    
        if(vt_control_audio1 === true){
            setTimeout(() => {
                audio1.classList.add('vt_content_ani')
            }, 100);
        }
        if(vt_control_audio2 === true){
            setTimeout(() => {
                audio2.classList.add('vt_content_ani')
            }, 150);
        }
        if(vt_control_audio3 === true){
            setTimeout(() => {
                audio3.classList.add('vt_content_ani')
            }, 200);
        }
        if(vt_control_audio4 === true){
            setTimeout(() => {
                audio4.classList.add('vt_content_ani')
            }, 250);
        }
        if(vt_control_audio5 === true){
            setTimeout(() => {
                audio5.classList.add('vt_content_ani')
            }, 300);
        }
        if(vt_control_audio6 === true){
            setTimeout(() => {
                audio6.classList.add('vt_content_ani')
            }, 350);
        }
        if(vt_control_audio7 === true){
            setTimeout(() => {
                audio7.classList.add('vt_content_ani')
            }, 400);
        }
        if(vt_control_audio8 === true){
            setTimeout(() => {
                audio8.classList.add('vt_content_ani')
            }, 450);
        }
        if(vt_control_audio9 === true){
            setTimeout(() => {
                audio9.classList.add('vt_content_ani')
            }, 500);
        }
        if(vt_control_audio10 === true){
            setTimeout(() => {
                audio10.classList.add('vt_content_ani')
            }, 550);
        }
    
    })
})()