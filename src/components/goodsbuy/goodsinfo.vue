<template>
    <div class="margin-to-top">
      <div class="swiper-box">
       <swiper class="swiper" :lunbo_time="time" :lunbo_url="'api/getthumimages/'+this.$route.params.goodsId"></swiper>
      </div>
      <div class="goods-info">
        <h4>{{goodsInfo.title}}</h4>
        <p><span>市场价:¥<s>{{goodsInfo.market_price}}</s></span>&nbsp;&nbsp;&nbsp;<span>销售价:¥<b>{{goodsInfo.sell_price}}</b></span></p>
        <counter @numberChange="getCount"></counter>
        <mt-button size="small" type="primary">立即购买</mt-button>
        <mt-button size="small" @click="addToCart" type="danger">加入购物车</mt-button>
      </div>
    <div class="goods-params">
      <h5>商品参数</h5>
      <ul>
        <li>商品货号:{{goodsInfo.goods_no}}</li>
        <li>库存情况:{{goodsInfo.stock_quantity}}</li>
        <li>上架时间:{{goodsInfo.add_time|dateFmt}}</li>
      </ul>
    </div>
    <div class="goods-commit">
      <mt-button class="describ" size="large" @click="goDescrib" type="danger" plain>图文介绍</mt-button>
      <mt-button class="goods-commit" size="large" @click="goGoodsCommit" type="primary" plain>商品评论</mt-button>
    </div>
  </div>
</template>

<style scoped>
 .margin-to-top{
  padding:5px 12px;
 }
 .swiper-box{
  
 }
 .swiper{
  width: 99%;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 0 auto;
  overflow: hidden;
 }
 .goods-info h4{
  color: #0094ff;
  font-size: 16px;
  border-bottom: 1px solid #cce;
  padding-bottom: 4px;
 }
  .goods-info b{
  color: red;
 }
 .goods-info,.goods-params{
  padding: 3px 6px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-top: 10px;
 }
 .goods-params  ul li{
  list-style: none;
  font-size: 14px;
 }
 .goods-params h5{
  padding-bottom: 4px;
  border-bottom: 1px solid #cce;
 }
 .describ ,.goods-commit{
  margin-top: 10px;
 }
</style>

<script>
  import swiper from '../commit/swiper.vue'
  import counter from '../commit/goodscount.vue'
  import bus from "../../common/commonvue.js"
  import {Toast} from 'mint-ui'
  import {addGoods} from '../../common/cartTool.js'
   export default{
    data(){
      return {
         goodsInfo:{},
         myCount:1,
         time:3000
      }
    },
    created(){
      this.getGoodsInfo()
    },
    methods:{
     getGoodsInfo(){
       var url="http://182.254.146.100:8899/api/goods/getinfo/"+this.$route.params.goodsId

       this.$http.get(url).then(response => {
        this.goodsInfo=response.body.message[0];
        console.log(this.goodsInfo)
       })

     },
     goDescrib(){
      this.$router.push({ name: 'goodsDescrib', params: { goodsId: this.$route.params.goodsId }})
     },
     goGoodsCommit(){
      this.$router.push({ path: '/goodsbuy/GoodsCommit', query: { goodsId: this.$route.params.goodsId }})
     },
     getCount(count){
       //console.log("parent"+count);
       this.myCount=count;
     },
     addToCart(){
       //console.log(this.myCount);
       bus.$emit("goodsCount",this.myCount);

       
       const goods={
         goodsId:this.$route.params.goodsId,
         count:this.myCount
       }
       addGoods(goods)
       Toast({
        message:"添加成功",
        position:"middle",
        duration:2000
       })
     }
    },
    components:{
        swiper,
        counter
    }

   }

  </script>