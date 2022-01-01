

window.addEventListener('load',async function(){
    

    let v = new Vue({
        el:'#main',
        data:{
            vtuberData:[],
            area:['全部','日本','台灣','印尼','EN'],
            areaOption:'全部',
            vtNumber:0,
        },
        // 這邊先不做 用v-show處理顯示
        // computed:{
        //     vtuberData0(){
        //         let obj = []
        //         this.vtuberData.forEach(item =>{
        //             if(this.areaOption === '全部'){
        //                 obj.push(item)
        //             }else if(item.area === this.areaOption){
        //                 obj.push(item) 
        //             }
        //         })
        //         console.log(obj)
        //         return obj
        //     }
        // },
        methods: {
            async fetchVtuber(){
                this.vtuberData = [];
                let data;
                const url = '../data/vtuber.json'
                try{
                    data = await fetch(url)
                }catch{
                    alert('資料獲取失敗，請稍後再試。')
                }
                data.json().then((res)=>{
                    this.vtNumber = res.vtuber.length
                    res.vtuber.forEach(item=>{
                        if(this.areaOption === this.area[0]){
                            this.vtuberData.push(item)
                        }
                        if(item.area === this.areaOption){
                            this.vtuberData.push(item)
                        }
                    })
                })
            },
            vtAnimation(){
                //確保使用者拉縮畫面導致取頂距離不準確 不重整畫面會顯示異常因此將取頂放入scroll監控內 
                const nowHeight = document.documentElement.scrollTop;
                const height = document.documentElement.clientHeight;
                this.$refs.vtuberContent.forEach(item =>{
                    const distanceTop = item.offsetTop;
                    const control = distanceTop - height <= nowHeight-70;
                    control ? item.classList.add('vt_player_ani') : item.classList.remove('vt_player_ani')
                })
            },
            vtN(){
                this.$nextTick(function(){
                    let n=0;
                    this.$refs.vtuberContent.forEach(item =>{
                        if(window.getComputedStyle(item,null).display === 'flex'){
                            n++;
                        }
                    })
                    this.vtNumber = n;
                    this.vtAnimation() 
                })
            },
            // debounce(func, wait = 6, immediate = true) {
            //     var timeout;
            //     return function() {
            //         var context = this, args = arguments;
            //         var later = function() {
            //             timeout = null;
            //             if (!immediate) func.apply(context, args);
            //         };
            //         var callNow = immediate && !timeout;
            //         clearTimeout(timeout);
            //         timeout = setTimeout(later, wait);
            //         if (callNow) func.apply(context, args);
            //     };
            // }

        },
        mounted(){
            this.fetchVtuber()
            window.addEventListener('scroll',this.vtAnimation)
            // window.addEventListener('scroll',this.debounce(this.vtAnimation))
            document.getElementById('areaChange').addEventListener('change',this.vtN)
        }
    })

})