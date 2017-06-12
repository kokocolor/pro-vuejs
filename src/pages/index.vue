<template>
	 
  <div class="con">
        
      
      <div class="sider-left">
      	<h2>全部产品</h2>
      	<template v-for="product in productList">
          
          
          <ul > 
            <p>{{product.title}}</p> 
             <li v-for="item in product.list"><a :href="item.url">{{item.name}}</a>
             	<span class="hot" v-if="item.hot">hot</span>
             </li>
              
          </ul>
      	</template>

          <!-- <ul> 
            <p>手机应用类</p>
             <li>数据统计1</li>
             <li>数据预测1</li>
             <li>流量分析1<span class="hot">hot</span></li>
             <li>广告发布5</li>
          </ul> -->

          <h2>最新消息</h2>
          <ul id="new"> 
             <li v-for="item in getNewsList">{{item.title}} </li>
             
          </ul>
       </div>
       <div class="sider-right">
         
         <slideShow></slideShow>
 
         <div class="sec">
           <ul>
             <li v-for="(item,index) in boardList">
               <img :src="item.src" alt="">
               <div>
                 <h2>{{item.title}}</h2>
                 <p>{{item.description}}</p>
                 <p class="buy">
                 	<router-link :to="{path:'detail/'+item.toKey}">立即购买</router-link>
                 	
                 </p>
               </div>
             </li>
 
           </ul>
         </div>
       </div>
      </div>
 
</template>
<script>
import slideShow from '../components/slideShow'
export default {
	components:{
		slideShow
	},
   
	data () {
	    return {
	        boardList: [
		        {
		          title: '开放产品',
		          description: '开放产品是一款开放产品',
		          src: require('../assets/images/1.png'),
		          toKey: 'd1',
		          saleout: false
		        },
		        {
		          title: '品牌营销',
		          description: '品牌营销帮助你的产品更好地找到定位',
		          src: require('../assets/images/2.png'),
		          toKey: 'd2',
		          saleout: false
		        },
		        {
		          title: '使命必达',
		          description: '使命必达快速迭代永远保持最前端的速度',
		          src: require('../assets/images/3.png'),
		          toKey: 'd3',
		          saleout: true
		        },
		        {
		          title: '勇攀高峰',
		          description: '帮你勇闯高峰，到达事业的顶峰',
		          src: require('../assets/images/4.png'),
		          toKey: 'd4',
		          saleout: false
		        }
	      	],
	      	"getNewsList": [
			    {
			      "id": 1,
			      "title": "新闻条目1新闻条目1新闻条目1新闻条目1",
			      "url": "http://starcraft.com"
			    },
			    {
			      "id": 2,
			      "title": "新闻条目2新闻条目2新闻条目2新闻条目2",
			      "url": "http://warcraft.com"
			    },
			    {
			      "id": 3,
			      "title": "新闻条3新闻条3新闻条3",
			      "url": "http://overwatch.com"
			    },
			    {
			      "id": 4,
			      "title": "新闻条4广告发布",
			      "url": "http://hearstone.com"
			    }
			  ],

	      	productList: {
		        pc: {
		          title: 'PC产品',
		          list: [
		            {
		              name: '数据统计',
		              url: 'http://starcraft.com'
		            },
		            {
		              name: '数据预测',
		              url: 'http://warcraft.com'
		            },
		            {
		              name: '流量分析',
		              url: 'http://overwatch.com',
		              hot: true
		            },
		            {
		              name: '广告发布',
		              url: 'http://hearstone.com'
		            }
		          ]
		        },
		        app: {
		          title: '手机应用类',
		          last: true,
		          list: [
		            {
		              name: '91助手',
		              url: 'http://weixin.com'
		            },
		            {
		              name: '产品助手',
		              url: 'http://twitter.com',
		              hot: true
		            },
		            {
		              name: '智能地图',
		              url: 'http://maps.com'
		            },
		            {
		              name: '团队语音',
		              url: 'http://phone.com'
		            }
		          ]
		        }
		      }
	    }
    }
}
</script>

<style>
#new li{
	width:170px!important;
	display: block;
	line-height: 35px;
	height:35px;
	overflow: hidden;
	text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  padding:0 3px;
   
}
.sider-left h2{
	/*width:100%;
	line-height: 30px;
	border:1px solid #c3c;
	text-align: center!important;*/
}
 </style>
