<template>
  <div>
      <!--1.0 头部导航条-->
     <mt-header fixed title="vueDemo" class="headerBar">vueDemo</mt-header>
     <div v-show="isShowBack" @click="goBack" class="back-btn">&lt;返回</div>
      <!--2.0 中间内容-->
    <router-view></router-view>
      <!--3.0 底部的TabBar-->
    <mt-tabbar fixed :class="isShowBack?'tabBar tabBar-hide':'tabBar'">
      <router-link to="/home">
		  <mt-tab-item >
		    <img  src="http://img06.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
		  </mt-tab-item>
	  </router-link>
	  <router-link to="/cartgroy">
		  <mt-tab-item>
		    <img  src="http://img08.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
		  </mt-tab-item>
	  </router-link>
	  <router-link to="/cart">
		  <mt-tab-item class="cart">
        <span id="cartNumber">{{count}}</span>
		    <img  src="http://img09.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
		  </mt-tab-item>
	  </router-link>
	  <router-link to="/mine">
		  <mt-tab-item>
		    <img  src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
		  </mt-tab-item>
	  </router-link>
	</mt-tabbar>
  </div>


</template>

<style scoped> 
  .headerBar{
    z-index: 15
  }
	.tabBar{
      display: flex;
      justify-content:space-around;
	}
  .tabBar img{
  	height: 35px;
  	width: 42px;
  }
  .back-btn{
  	width: 60px;
  	position: fixed;
  	left: 0;
  	top:0;
  	text-align: center;
  	line-height: 40px;
  	z-index: 20;
  	font-size: 14px;
    color: #fff;
  }
  .tabBar-hide{
    	display: none;
    }
    .cart{
      position: relative;
    }
    #cartNumber{
      background-color: red;
      line-height: 1.2;
      padding:3px 4px;
      height: 20px;
      width: 20px;
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top:0;
      right: 0;
      text-align: center;
    }
</style>

<script>
import bus from './common/commonvue.js'
import $  from "jquery"
import {getGoodsListCount} from './common/cartTool.js'

// bus.$on("goodsCount",(goodsCount)=>{
//   console.log(goodsCount)
  

//   var oldVal=$('#cartNumber').text();
//   var lastVal=parseInt(oldVal)+goodsCount;
//   $('#cartNumber').text(lastVal)
// })

  export default{
    data(){
      return {
        isShowBack : false,
        count:0
      }
    },
    created(){
      this.toggleBackBtn(this.$route.path)

      bus.$on("goodsCount",(goodsCount)=>{
        
        this.count+=goodsCount;

      })
      this.getLocalTotalCount()
    },
    methods:{
      goBack(){
        //路由返回
        this.$router.go(-1)
      },
      //显示还是隐藏返回按钮
      toggleBackBtn(path){
          if(path=='/home'){
              this.isShowBack = false //隐藏返回按钮
          }else{
              this.isShowBack = true //显示隐藏按钮
          }
      },
      getLocalTotalCount(){
        this.count=getGoodsListCount()
      }
    },
    watch:{
      //监控路由的更改
      '$route':function(newValue,oldVal){
          this.toggleBackBtn(newValue.path)
      }
    }
  }
</script>
