
window.addEventListener('load',function(){

    const vt_player_all = document.querySelectorAll('.vt_player')
    // const vt_player_alla = Array.from(document.querySelectorAll('.vt_player'))

    window.addEventListener('scroll',function(){
        //確保使用者拉縮畫面導致取頂距離不準確 不重整畫面顯示異常因此將取頂放入scroll監控內 

        const now_height = document.documentElement.scrollTop;
        const now_width = document.documentElement.scrollWidth;
        const height = document.documentElement.clientHeight;

        vt_player_all.forEach(item => {
            const vtPlayerTop = item.offsetTop;
            const vtControl = vtPlayerTop - height <= now_height-100;
            if(vtControl === true){
                item.classList.add('vt_player_ani')
            }else{
                item.classList.remove('vt_player_ani')
            }
            }
        )


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
    })


})
