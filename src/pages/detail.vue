<template>
	<div class="detail">
		<div class="d-left">
			<ul class="img">

				<li><img :src="productionIcon" alt=""></li>
				 
			</ul>
			<ul class="list">
 				 
				<router-link v-for="item in products" :to="{path:item.path}" tag="li" active-class="active">{{item.name}}</router-link>
 			 
 				 
			</ul>
		</div>
		<div class="d-right">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
	
</template>
<script>
	
	export default{
		data(){
			return{
				 products: [
			        {
			          name: '数据统计',
			          path: 'd1',
			          icon: require('../assets/images/1.png'),
			          active: false
			        },
			        {
			          name: '数据预测',
			          path: 'd2',
			          active: false
			        },
			        {
			          name: '流量分析',
			          path: 'd3',
			          active: false
			        },
			        {
			          name: '广告发布',
			          path: 'd4',
			          active: false
			        }
			      ],
			      imgMap: {
			        '/detail/d1': require("../assets/images/1.png"),
			        '/detail/d2': require("../assets/images/2.png"),
			        '/detail/d3': require("../assets/images/3.png"),
			        '/detail/d4': require("../assets/images/4.png")
			      },

			}
		},
		computed:{
			productionIcon(){
				return this.imgMap[this.$route.path]
			}
		}

	}
</script>
<style>
	.detail{
		width:100%;
	    height:800px;
	    border:1px solid #c3c;
		overflow:hidden;
	}
	.d-left{
		width:15%;
		height:700px;
		overflow: hidden;
		float:left;
		background: #fff;
	}
	.d-right{
		width:83%;
		height:800px;
		overflow:auto;
		padding:10px;
		float:right;
		background: #fff;
	}
	.d-left .img{
		width:90px;
		height:90px;
		margin:0 auto;
		position: relative;
  
	}
	.d-left .list li{
		line-height: 25px;
		font-size: 14px;
		color:#666;
		text-align: center;
		cursor: pointer;
  
	}
	.active{
		color:#0099ff!important;
	}
	.d-left .img li{
		width:90px;
		height:90px;
		padding:10px;
		position: absolute;
		top:0;
		left:0;
	}
	.d-left .img li img{
		width:70px;
		height:70px;

	}
</style>