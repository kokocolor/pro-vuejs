<template>
  <div class="box">
     <div class="header">
      <router-link :to="{path:'/'}">
       <img src="../assets/logo.png" alt="" class="left">
       </router-link>
       <div class="right">
         <ul>
           <li @click="logClick">登录</li>
           <li @click="regClick">注册</li>
           <li @click="aboutClick">关于</li>
         </ul>
       </div>
     </div>

     <div class="content">
     <keep-alive>
       <router-view> </router-view>  
     </keep-alive>
     </div>

     <Dio :is-show="isShowAboutDio" @on-close="closeDio('isShowAboutDio')">
      <div class="dio-conn">
        <p>
          本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局。
        </p>
        
        <span class="close">x</span>
      </div>
        
     </Dio>


     <Dio :is-show="isShowLogDio" @on-close="closeDio('isShowLogDio')">
        <LogForm></LogForm>
     </Dio>

     <Dio :is-show="isShowRegDio" @on-close="closeDio('isShowRegDio')">
        <RegForm></RegForm>
     </Dio>

     <div class="footer">@2017-1 永不言弃LGX！！</div>
    
  </div>
</template>

<script>
import Dio from './base/dio'
import LogForm from './logForm'
import RegForm from './regForm'
export default {
  components:{
    Dio,
    LogForm,
    RegForm
  },
   
  data () {
    return {
      isShowAboutDio:false,
      isShowLogDio:false,
      isShowRegDio:false,
       
    }
  },
  methods:{
    aboutClick(){
      this.isShowAboutDio=true
    },
    logClick(){
      this.isShowLogDio=true
    },

    regClick(){
      this.isShowRegDio=true
    },
    closeDio(attr){
      this[attr]=false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}
body,html{
  width:100%;
  height:100%; 
  background: #ccc;
  
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover{
  color:#0099ff;
}


 

.box{
  width:100%;
  height:auto;
  overflow: hidden;
  border:1px solid #ccc;
  overflow: auto;
  position: relative;
  margin:0 auto;
  border-bottom: 0;
 /* display: flex;
  flex-wrap:wrap;
  flex-direction:column;
  justify-content:space-between;
  -webkit-justify-content:space-between;
  align-items:center;*/

 }
 ul{
 
  list-style: none;
  margin:0;
  padding:0;

}
/*模态框*/
.dio{
  width:100%;
  height:100%;
  position: fixed;
  top:0;
  left:0;
  z-index: 1000;
  background: rgba(0,0,0,0.3);
 /* display: flex;
  justify-content:center;
  -webkit-justify-content:center;
  align-items:center;*/
}
.dio .p-about{
  width:100%;
  height:100%;
  background: #fff;
  line-height: 20px;
  font-size: 12px;

}
.dio .dio-con{
 width:100%;
 height:100%;
 overflow: hidden;
 position: relative;

}
.dio .dio-conn{
  width:50%;
  height:180px;
  background: #fff;
  padding:8px;
  position: fixed;
  top:50%;
  left:50%;
  margin-left:-25%;
  margin-top:-90px;
  z-index: 100;

}
.dio .dio-con p{
  height:25px;
  width:70%;
  margin-top:5px;
  

}
.dio .dio-con p span{
  display:block;
  width:20%;
  height:100%;
  float:left;  
  
}
.dio .dio-con p span.warn{
  font-size: 12px;
  color:#c3c;
  line-height: 25px;
  display: block;
  float: left;
  margin-left:5px;
}
.p-warn{
  font-size: 12px;
  color:#333;
  line-height: 26px;
}
.dio .dio-con p input{
  display: block;
  width:50%;
  height:100%;
  float:left; 
  border:0;
  border:1px solid #ccc;
 
}
.sub{
  width:100px;
  height:30px;
  color:#fff;
  border:0;
  margin-top:15px;
  text-align: center;
  background: #0099ff;
}
.dio .dio-con .close{
  width:30px;
  height:30px;
  display: block;
  line-height: 30px;
  text-align: center;
  position: absolute;
  top:5px;
  right:5px;
  cursor: pointer;
  font-size: 16px;
}





.right li{
   width:33.333%;
   float:left;
   line-height:70px;
   text-align: center;
}
 .header{
  width:100%;
  height:70px;
  position:relative;
 /* top:0;
  left:0;
  z-index: 100;*/
  background:rgba(0,0,0,0.5);
  color:#ccc;
  font-size:14px;
  display: flex;
  justify-content:space-between;
  -webkit-justify-content:space-between;
  align-items:center;
 }
 .left{
  width:50px;
  height:50px;
  display: block;
  margin-top:10px;
  margin-left:35px;

  /*float:left;*/

 }
 .right{
  width:300px;
  height:100%;
  /*border:1px solid #c3c;*/
  margin-right:35px;
  
  /*float:right;*/
  
 }
 .footer{
  width:100%;
  height:60px;
  background: #333;
  color:#fff;
  position:relative;
  display: flex;
  justify-content:center;
  -webkit-justify-content:center;
  align-items:center;
   
  
 }

 .content{
  width:100%;
  height:auto;
  overflow: hidden;
  /*overflow:hidden;*/
  position: relative; 
  background: #f2f2f2; 
 padding-left:1%;
 padding-right:1%;
 padding-top:10px;
 padding-bottom:10px;
  /*background: #c3c;*/
 }
 .content .con{
  width:100%;
  height:800px;
  overflow:hidden;
  /*background: #c3c; */

 }
  .content .con .sider-left{
    width:15%;
    height:800px;
    /*overflow: hidden;*/
    border:1px solid #ccc;
    background: #fff;
    float:left;
  }
  .content .con .sider-right{
    width:80%;
    height:800px;
    overflow: auto!important;
    /*overflow: hidden;*/ 
    float: right;

  }
  /*轮播*/
  .content .sider-right .slide{
    width:100%;
    height:380px;
    /*border:1px solid #c3c;*/
    position: relative;
  }
    .content .sider-right .slide ul.slide-box{
      width:100%;
      height:380px;
      position: relative;

    }
    .content .sider-right .slide ul.slide-box li{
      width:100%;
      height:380px;
      position:absolute;
      top:0;
      left:0;

    }
     .content .sider-right .slide ul.slide-box li img{
      width:100%;
      height:380px;
     }

     .content .sider-right .slide .page{
      width:100%;
      height:50px;
      line-height: 50px;
      position: absolute;
      bottom:0;
      left:0;
      background: rgba(0,0,0,0.5);
      color:#fff;
      display: flex;
      justify-content:space-between;
      -webkit-justify-content:space-between;
      align-items:center;
  
     }
      .content .sider-right .slide .page ul{
        width:100px;
        display: flex;
        justify-content:space-between;
        -webkit-justify-content:space-between;
        align-items:center;
      }
      .content .sider-right .slide .page ul li{
        cursor: pointer;
      }

    .content .sider-right .sec{
    width:100%;
    height:auto;
    overflow: hidden;
    border:1px solid #ccc;
    padding:15px;
  } 
  .content .sider-right .sec ul{
     display: flex;
    justify-content:space-around;
    -webkit-justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
  }
  .content .sider-right .sec ul li{
    float:left;
    width:45%;
    height:150px;
    display: flex;
    background: #fff; 
    justify-content:flex-start;
  -webkit-justify-content:flex-start;
  align-items:center;
  margin-bottom:15px;
  /*margin-right:10px;*/

  }
   .content .sider-right .sec ul li img{
    width:50px;
    height:50px;
    margin-left:20px;
    margin-right:20px;
    
   }
   .content .sider-right .sec ul li .buy{
    width:100px;
    background: green;
    line-height: 30px;
    text-align: center;
    margin-top:10px;
    color:#fff;
    border-radius: 5px;

   }
 .content .sider-left h2{
  width:100%;
  height:35px;
  background: green;
  color:#fff;
  font-size: 16px;
  text-align: center;
  line-height: 35px;
}
.content .sider-left ul{
  width:100%;
  margin-bottom:15px;
  

}
.content .sider-left ul:nth-child(2){
  border-bottom:1px solid #ccc;
}
.content .sider-left ul p{
  width:100%;
  line-height: 30px;
  font-size: 14px;
  text-align: center;
  color:#333;
  font-weight: bold;
  
}
.content .sider-left ul li{
  width:100%;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  color:#666;
  position: relative;
  
}
.content .sider-left ul li .hot{
  color:#fff;
  background: red;
  font-size: 12px;
  position: absolute;
  right:53px; 
  display: inline-block;
}
</style>
