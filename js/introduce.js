
window.addEventListener('load',function(){

    // const vtPlayerAll = document.querySelectorAll('.vt_player')

    // console.log(vtPlayerAll)

    window.addEventListener('scroll',function(){
        //確保使用者拉縮畫面導致取頂距離不準確 不重整畫面會顯示異常因此將取頂距離放入scroll監控內 

        const nowHeight = document.documentElement.scrollTop;
        const nowWidth = document.documentElement.scrollWidth;
        const height = document.documentElement.clientHeight;

        // console.log(vtPlayerAll)
        //     vtPlayerAll.forEach(item =>{
        //         const distanceTop = item.offsetTop;
        //         console.log(distanceTop)
        //         const Control = distanceTop - height <= nowHeight-100;
        //         if(Control){
        //             this.vtAni=true;
        //         }else{
        //             this.vtAni=false;
        //         }
        //     }
        // )


        if(nowWidth >= 1024){
            mob_top.style.display = 'none';
        }else{
            mob_top.style.display = 'block';
        }
        if(height <= nowHeight){
            mob_top.style.transform = `translateX(0%)`
        }else{
            mob_top.style.transform = `translateX(1000%)`
        }
    })
    

})
