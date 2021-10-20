;(function(Vue){

    let headerData = {
    key:0,
    img:[
        {imgPixivSrc:'https://www.pixiv.net/artworks/87000012', imgSrc:'./images/87000012_pekora_header.jpg',alt:'pixiv87000012'},
        {imgPixivSrc:'https://www.pixiv.net/artworks/78720872', imgSrc:'./images/78720872_pekora_header.jpg',alt:'pixiv78720872'},
        {imgPixivSrc:'https://www.pixiv.net/artworks/84438656', imgSrc:'./images/84438656_pekora_header.jpg',alt:'pixiv84438656'},
        {imgPixivSrc:'https://www.pixiv.net/artworks/86614544', imgSrc:'./images/86614544_pekora_header.jpg',alt:'pixiv84438656'},
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
            },30000)
        },
    })

})(Vue)