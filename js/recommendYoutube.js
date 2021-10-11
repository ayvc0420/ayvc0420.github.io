
window.addEventListener('load',function(){

    const now_year = document.getElementById('now_year');
    function year(){
        // let now = new Date();
        // let new_year = new Date(2021,12,31);
        // let end = new_year-now;
        // // let end = new_year.getTime()-now.getTime()+now.getTimezoneOffset()*60*1000;
        // let time = new Date(end);
        // now_year.innerHTML = `${time.getMonth()-1}個月${time.getDate()}天${time.getHours()}小時${time.getMinutes()}分${time.getSeconds()}秒`
        
        let now_time = new Date();
        let new_year = new Date('2022/01/01');
        let difference = new_year - now_time;
        var d=Math.floor(difference/1000/60/60/24);
        var h=Math.floor(difference/1000/60/60%24);
        var m=Math.floor(difference/1000/60%60);
        var s=Math.floor(difference/1000%60);
        now_year.innerHTML = `${d}天${h}小時${m}分${s}秒`

    }
    year()
    setInterval(() => {
        year()
    }, 1000);

    const c1_table = document.getElementById('c1_table')
    const c1_title = document.getElementById('c1_title')
    const c2_title = document.getElementById('c2_title');
    const c2_table = document.getElementById('c2_table');
    const content3_time = document.getElementById('content3_time')

    window.addEventListener('scroll',function(){
        
        const now_height = document.documentElement.scrollTop;
        const now_width = document.documentElement.scrollWidth;
        const height = document.documentElement.clientHeight;
        
        

        //元素離頂
        const c1_title_top = c1_title.offsetTop;
        const c1_table_top = c1_table.offsetTop;
        const c2_title_top = c2_title.offsetTop;
        const c2_table_top = c2_table.offsetTop;
        const content3_time_top = content3_time.offsetTop;

        const yt_control_c1_title = c1_title_top - height <= now_height-100;
        const yt_control_c1_table = c1_table_top - height <= now_height-100;
        const yt_control_c2_title = c2_title_top - height <= now_height-100;
        const yt_control_c2_table = c2_table_top - height <= now_height-100;
        const yt_control_content3_time = content3_time_top - height <= now_height-100;
        



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
        
        if(yt_control_c1_title === true){
            c1_title.classList.add('yt_title_ani')
        }
        // else{
        //     c1_title.classList.remove('yt_title_ani')
        // }
        if(yt_control_c1_table === true){
            setTimeout(() => {
                c1_table.classList.add('yt_content_ani')
            }, 250);
        }
        // else{
        //     c1_table.classList.remove('yt_content_ani')
        // }
        if(yt_control_c2_title === true){
            c2_title.classList.add('yt_content_ani')
        }
        // else{
        //     c2_title.classList.remove('yt_content_ani')
        // }
        if(yt_control_c2_table === true){
            setTimeout(() => {
                c2_table.classList.add('yt_content_ani')
            }, 250);
        }
        // else{
        //     c2_table.classList.remove('yt_content_ani')
        // }
        if(yt_control_content3_time === true){
            content3_time.classList.add('yt_content_ani')
        }
    })
})


