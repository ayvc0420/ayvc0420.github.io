;(function(Vue){

    let headerData = {
    key:0,
    img:[
        {imgPixivSrc:'https://www.pixiv.net/artworks/90195061', imgSrc:'./images/rushia_header.jpg',alt:'pixiv90195061'},
        {imgPixivSrc:'https://www.pixiv.net/artworks/91479662', imgSrc:'./images/usadapekora_header.jpg',alt:'pixiv91479662'},
        {imgPixivSrc:'https://www.pixiv.net/artworks/88300974', imgSrc:'./images/sakuramiko_header.jpg',alt:'pixiv88300974'},
        {imgPixivSrc:'https://www.pixiv.net/artworks/92148396', imgSrc:'./images/korone_header.jpg',alt:'pixiv92148396'},
    ]}


    new Vue({
        el:'#header',
        data:headerData,
        methods: {
            imgSwitch(index){
                this.key = (index + this.img.length) % this.img.length;
            },
        },
        mounted: function(){
            setInterval(()=>{
                if(this.key < this.img.length -1){
                    this.key +=1;
                }else{
                    this.key = 0;
                }
            },8000)
        },
    })

})(Vue)