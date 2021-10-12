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

//輪播圖
const control_header_img1 = document.getElementById('control_header_img1')
const control_header_img2 = document.getElementById('control_header_img2')
const control_header_img3 = document.getElementById('control_header_img3')
const control_header_img4 = document.getElementById('control_header_img4')
const header_div1 = document.querySelector('.img1')
const header_div2 = document.querySelector('.img2')
const header_div3 = document.querySelector('.img3')
const header_div4 = document.querySelector('.img4')
//輪播圖切換固定順序圖片
function header1(){
    control_header_img1.checked = true
}
function header2(){
    control_header_img2.checked = true
}
function header3(){
    control_header_img3.checked = true
}
function header4(){
    control_header_img4.checked = true
}

setTimeout(() => {
    header2()
}, 4000);
setTimeout(() => {
    header3()
}, 8000);
setTimeout(() => {
    header4()
}, 12000);
setInterval(() => {
    setTimeout(() => {
        header1()
    }, 0);
    setTimeout(() => {
        header2()
    }, 4000);
    setTimeout(() => {
        header3()
    }, 8000);
    setTimeout(() => {
        header4()
    }, 12000);
}, 16000);


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