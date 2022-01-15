;(function(){
  new Vue({
    el: '#main',
    data: {
      vtuberData: [],
      area: ['全部', '日本', '台灣', '印尼', 'EN'],
      areaOption: '全部',
      vtNumber: 0,
    },
    methods: {
      async fetchVtuber() {
        this.vtuberData = [];
        let data;
        const url = '../data/vtuber.json';
        try {
          data = await fetch(url);
        } catch {
          alert('資料獲取失敗，請稍後再試。');
        }
        data.json().then((res) => {
          this.vtNumber = res.vtuber.length;
          res.vtuber.forEach((item) => {
              this.vtuberData.push(item);
          });
        });
      },
      vtAnimation() {
        const nowHeight = document.documentElement.scrollTop;
        const height = document.documentElement.clientHeight;
        this.$refs.vtuberContent.forEach((item) => {
          const itemTop = item.offsetTop;
          const control = itemTop - height <= nowHeight - 70;
          control
            ? item.classList.add('vt_player_ani')
            : item.classList.remove('vt_player_ani');
        });
      },
      vtN() {
        this.$nextTick(function () {
          let n = 0;
          this.$refs.vtuberContent.forEach((item) => {
            if (window.getComputedStyle(item, null).display === 'flex') {
              n++;
            }
          });
          this.vtNumber = n;
          this.vtAnimation();
        });
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
    mounted() {
      this.fetchVtuber();
      window.addEventListener('scroll', this.vtAnimation);
      // window.addEventListener('scroll',this.debounce(this.vtAnimation))
      document
        .getElementById('areaChange')
        .addEventListener('change', this.vtN);
    },
  });
})()
