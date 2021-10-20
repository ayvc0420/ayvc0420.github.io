;(function(Vue){

    let headerData = {
    key:0,
    img:[
        {imgPixivSrc:'https://www.pixiv.net/artworks/90697958', imgSrc:'./images/miko_header.jpg',alt:'pixiv90697958'},
        {imgPixivSrc:'https://www.pixiv.net/artworks/89707884', imgSrc:'./images/miko_header_1.jpg',alt:'pixiv89707884'},
        {imgPixivSrc:'https://twitter.com/sakuramiko35/status/1388738206443610117/photo/1', imgSrc:'./images/miko_header_2.jpg',alt:'twitter1388738206443610117'},
        {imgPixivSrc:'https://www.pixiv.net/artworks/86239985', imgSrc:'./images/miko_header_3.jpg',alt:'pixiv86239985'},
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