
window.addEventListener('load',function(){

    window.addEventListener('scroll',function(){
        //確保使用者拉縮畫面不重整導致元素顯示異常因此將取頂距離放入scroll監控內 

        const nowHeight = document.documentElement.scrollTop;
        const nowWidth = document.documentElement.scrollWidth;
        const height = document.documentElement.clientHeight;


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
