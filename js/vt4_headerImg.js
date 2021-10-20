;(function(Vue){

    let headerData = {
    key:0,
    img:[
        {imgPixivSrc:'https://www.pixiv.net/artworks/92686622', imgSrc:'./images/92686622_korone_header.jpg',alt:'pixiv92686622'},
        {imgPixivSrc:'https://www.pixiv.net/artworks/92838286', imgSrc:'./images/92838286_korone_header.jpg',alt:'pixiv92838286'},
        {imgPixivSrc:'https://twitter.com/fuka_hire/status/1381973482099990534/photo/1', imgSrc:'./images/1381973482099990534_korone_header.jpg',alt:'twitter1381973482099990534'},
        {imgPixivSrc:'https://www.pixiv.net/artworks/93132546', imgSrc:'./images/93132546_korone_header.jpg',alt:'pixiv93132546'},
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