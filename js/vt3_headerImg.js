;(function(Vue){

    let headerData = {
    key:0,
    img:[
        {imgPixivSrc:'https://www.pixiv.net/artworks/81489548', imgSrc:'./images/81489548_rushia_header.jpg',alt:'pixiv81489548'},
        {imgPixivSrc:'https://www.pixiv.net/artworks/81489548', imgSrc:'./images/81489548_rushia_header_1.jpg',alt:'pixiv81489548'},
        {imgPixivSrc:'https://www.pixiv.net/artworks/85978281', imgSrc:'./images/85978281_rushia_header.jpg',alt:'pixiv85978281'},
        {imgPixivSrc:'https://www.pixiv.net/artworks/89695133', imgSrc:'./images/89695133_rushia_header.jpg',alt:'pixiv85978281'},
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