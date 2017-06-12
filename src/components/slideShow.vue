<template>
<div class="slide">
           <ul class="slide-box">
             <router-link tag="li" v-if="isShow"  :to="item.href" v-for="item in slides"><img :src="slides[nowIndex].src" alt="">
             </router-link>
              
           </ul>

            
           <div class="page">
            <p style="margin-left:15px;" >{{slides[nowIndex].title}}</p>
            <ul style="margin-right:15px;">
               <li v-for="(pro,index) in slides" @click="goto(index)">{{index+1}}</li>
               
             </ul>
           </div>
          
         </div>

</template>
<script>
	export default({
		data(){
			return{
				nowIndex:0,
        isShow:true,
        slides: [
          {
            src: require('../assets/slideShow/pic1.jpg'),
            title: 'xxx1',
            href: 'detail/d1'
          },
          {
            src: require('../assets/slideShow/pic2.jpg'),
            title: 'xxx2',
            href: 'detail/d2'
          },
          {
            src: require('../assets/slideShow/pic3.jpg'),
            title: 'xxx3',
            href: 'http://xxx.xxx.com'
          },
          {
            src: require('../assets/slideShow/pic4.jpg'),
            title: 'xxx4',
            href: 'detail/d3'
          }
        ]
			}
		},
    methods:{
      goto (index) {
        this.isShow = false
        setTimeout(() => {
          this.isShow = true
          this.nowIndex = index
        }, 10)
      },
      //自动轮播函数
       


    }
	})
</script>