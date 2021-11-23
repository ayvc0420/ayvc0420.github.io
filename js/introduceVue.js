

window.addEventListener('load',async function(){
    
    let v = new Vue({
        el:'#main',
        data:{
            vtuberData:[],
            area:['全部','日本','台灣','印尼','EN'],
            areaOption:'全部',
            vtNumber:63,
        },
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
                const vtPlayerAll = document.querySelectorAll('.vt_player')
                //確保使用者拉縮畫面導致取頂距離不準確 不重整畫面會顯示異常因此將取頂放入scroll監控內 
                const nowHeight = document.documentElement.scrollTop;
                const height = document.documentElement.clientHeight;
                vtPlayerAll.forEach(item =>{
                    const distanceTop = item.offsetTop;
                    const Control = distanceTop - height <= nowHeight-50;
                    if(Control){
                        item.classList.add('vt_player_ani');
                    }else{
                        item.classList.remove('vt_player_ani');
                    }
                })
            },
            vtN(){
                // X 弄了我一小時才想到這方法
                setTimeout(() => {                    
                    const vtPlayerAll = document.querySelectorAll('.vt_player')
                    let n=0;
                    vtPlayerAll.forEach(item =>{
                        if(window.getComputedStyle(item,null).display === 'flex'){
                            n+=1;
                        }
                    })
                    this.vtNumber = n;
                }, 5);
            },
            
        },
        async mounted(){
            await this.fetchVtuber()
            await window.addEventListener('scroll',this.vtAnimation)
            await document.getElementById('areaChange').addEventListener('change',this.vtN)
            
        }
    })

    
})