/*
* @Author: Administrator
* @Date:   2017-07-11 10:08:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-16 13:13:35
*/

import Vue from 'vue'
import Mint from 'mint-ui'

import App from "./App.vue"
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import moment from 'moment'
import VuePreview from 'vue-preview'
			

Vue.use(VuePreview)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Mint)
import 'mint-ui/lib/style.css'

import './statics/mui/css/mui.min.css'
import './statics/css/cite.css'

import home from './components/home/home.vue'
import cart from './components/cart/cart.vue'
import cartgroy from './components/cartgroy/cartgroy.vue'
import mine from './components/mine/mine.vue'
import newsdetail from './components/news/newsdetail/newsdetail.vue'
import photo from './components/photo/photo.vue'
import photoinfo from './components/photo/photoinfo.vue'

import singerinfo from './components/cartgroy/singerinfo.vue'
import news from './components/news/news.vue'
import goodsbuy from './components/goodsbuy/goodsbuy.vue'
import goodsinfo from './components/goodsbuy/goodsinfo.vue'
import GoodsCommit from './components/goodsbuy/GoodsCommit.vue'
import goodsDescrib from './components/goodsbuy/goodsDescrib.vue'

const router =new VueRouter({
	routes:[
       {path:'/',redirect:'/home'},
       {path:'/home',component:home},
       {path:'/cart',component:cart},
       {path:'/cartgroy',component:cartgroy},
       {path:'/mine',component:mine},
       {path:'/news',component:news},
       {path:'/photo',component:photo},
       {path:'/goodsbuy',component:goodsbuy},
       {path:'/cartgroy/singerinfo/:ting_uid',component:singerinfo},
       {path:'/photo/photoinfo/:photoId',component:photoinfo},
       {path:'/goodsbuy/goodsinfo/:goodsId',component:goodsinfo},
       {path:'/news/newsdetail/:newsId',component:newsdetail},
       {path:'/goodsbuy/GoodsCommit',component:GoodsCommit},
       {name:'goodsDescrib',path:'/goodsbuy/goodsDescrib',component:goodsDescrib}
       
	]
})

Vue.filter('dateFmt',(input,formatString)=>{
		    const lastFormatString = formatString || "YYYY-MM-DD HH:mm"
		
		    //moment中接的,要格式化的原始数据,如果不传，就格式化当前时间
		    //format格式化成什么样子,如果不传，就是原始的样子
		    return moment(input).format(lastFormatString)
		})

new Vue({
   
	el:"#app",
	router,
	render:function(createElement){
		return createElement(App)
	}
})
