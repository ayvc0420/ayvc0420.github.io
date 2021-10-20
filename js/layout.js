const mob_menu_div = document.getElementById('mob_menu_div')
// const mob_menu = document.querySelector('.mob_menu')
const mob_top = document.getElementById('mob_top')

//svg切換
const svg1 = document.getElementById('svg1')
const svg2 = document.getElementById('svg2')
const mob_menu_control = document.getElementById('mob_menu_control')
mob_menu_control.addEventListener('click',function(){
    const svg1_view = window.getComputedStyle(svg1,null).opacity
    // const svg2_view = window.getComputedStyle(svg2,null).opacity
    if(svg1_view === '1'){
        svg1.style.opacity = 0;
        svg2.style.opacity = 1;
        mob_menu_div.style.transform = 'translateX(0%)'
    }
    if(svg1_view === '0'){
        svg1.style.opacity = 1;
        svg2.style.opacity = 0;
        mob_menu_div.style.transform = 'translateX(-100%)'
    }
})

//top_btn按鈕效果
$('.go_top img,#mob_top').on("click",function(){
    $('html').animate({scrollTop: 0,},1000);
})

//mob的menu3開關
document.querySelector('.menu3_control').addEventListener('click',function(){
    const menu3 = document.querySelector('.menu3');
    const menu3_display = window.getComputedStyle(menu3,null).display;
    if(menu3_display === 'none'){
        menu3.style.display = 'block';
    }else{
        menu3.style.display = 'none';
    }
})