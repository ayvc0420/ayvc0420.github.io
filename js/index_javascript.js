
window.addEventListener('load',function(){

    /* 首頁 */

    const content4_h1 = document.querySelector('.content4 h1')

    let contentArticle = Array.from(document.querySelectorAll('.content article'))
    contentArticle.splice(0,1)

    // console.log(contentArticle.splice(0,1))
    window.addEventListener('scroll',function(){

        const c4H1Top = content4_h1.offsetTop
        const now_height = document.documentElement.scrollTop;
        const now_width = document.documentElement.scrollWidth;
        const height = document.documentElement.clientHeight;
        contentArticle.forEach(item=>{
            const top = item.offsetTop
            const control = top - height <= now_height - parseInt(window.getComputedStyle(item,null).height,10)/4
            control ? item.classList.add('content_ani') : ''
        })
        
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


        const controlC4H1 = c4H1Top - height <= now_height-100
        controlC4H1 ? content4_h1.classList.add('content_ani_h1') : ''

    })


})
