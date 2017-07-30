<template>
    <div class="margin-to-top">
     <div class="mui-content" style="background-color:#fff">
        <ul class="mui-table-view mui-grid-view">

            <li v-for="item in goodsArray" class="mui-table-view-cell mui-media mui-col-xs-6">
             <div>
             <router-link :to="'/goodsbuy/goodsinfo/'+item.id">
              <img :src="item.img_url">
              <p>{{item.title}}</p>
              
              <p class="around"><span>现价:<b>{{item.sell_price}}</b></span><span>原价:<s>{{item.market_price}}</s></span></p>
              <p class="around"><span>热卖中</span><span>还剩<b>{{item.stock_quantity}}</b>件</span></p>
             </router-link>
             </div>
            </li>
        </ul>    
    </div>
  </div>
</template>

<style scoped>
 .mui-content img{
  width: 80%;
 }
  .mui-content a{
  display: block;
  width: 100%;
  height: 100%;
 }
 .mui-content li div{
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px #666;
  
  
 }
  .mui-content li div p:nth-child(2){

     overflow: hidden;

     display: -webkit-box;

    -webkit-line-clamp: 2;

    -webkit-box-orient: vertical;

    word-break: break-all;
    text-align: left;
 }

  .mui-content li div p{
  margin-top: 5px;
  font-size: 12px;
  color: #000;
 }
 .mui-content li div p b{
   color: red;
 }
  .mui-content li div .around{
   display: flex;
   justify-content:space-between;
   background-color: rgba(0,0,0,.1);
 }
</style>

<script>
   export default{
    data(){
      return {
         goodsArray:[]
      }
    },
    created(){
      this.getGoodsData()
    },
    methods:{
     getGoodsData(){
       var url="http://182.254.146.100:8899/api/getgoods"

       this.$http.get(url).then(response => {
        this.goodsArray=response.body.message;
        console.log(this.goodsArray)
       })

     }
    }

   }

  </script>