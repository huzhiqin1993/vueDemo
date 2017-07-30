<template>
  <div class="margin-to-top">
      <!--1.0 头部导航条-->
     
      <div class="goods-list-box">
      	
        <div class="goods-list" v-for="(item,index) in goodsList" :key="item.id">

        	<mt-switch @change="countTotalPrice" v-model="valueArray[index]"></mt-switch>

        	<img :src="item.thumb_path">
        	<div class="price-and-count">
        		<h5>{{item.title}}</h5>
        		<p>
        			<span>{{item.sell_price}}</span>&nbsp;&nbsp;&nbsp;
        			商品数量{{item.count}}
        		</p>
        	</div>
        	<mt-button @click="deleteGoods(index)" :disabled="!valueArray[index]" class="delete-btn" size="small" type="danger">删除</mt-button>
        </div>
      </div>
      
      <div class="total-price">
      	<h5>总计(不含运费)</h5>
      	<p>已经选择商品<span>{{totalCount}}</span>件,总价<span>{{totalPrice}}</span>元</p>
      	<mt-button class="checked" size="small" type="danger">去结算</mt-button>
      </div>
  </div>
</template>

<style scoped>
  .margin-to-top{
  	padding: 5px 0px;
  }
  .goods-list-box{
   padding: 0px 5px;   
  }
  .goods-list{
    display: flex;
    height: 100px;
    align-items:center;
    border-bottom:1px solid #ccc;

  }
  
  .goods-list img{
   height: 60px;
   width: 66px;
   border: 1px solid #ccc;
   border-radius: 8px;
   padding: 4px;
   margin-left: 8px;
    
  }
  .price-and-count{
  	margin: 0 8px;
  	width: 120px;
  }
  .price-and-count h5{
  	color: #0094ff;
  	width: 120px;
    overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	word-break: break-all;
	text-align: left;
  }
  .price-and-count p{
  	width: 120px;
  	margin-top: 10px;
  }
  .price-and-count span{
  	color: red;
  }
  .delete-btn{
  	width: 66px;
  }
  .total-price{
  	height: 80px;
  	background-color: rgba(92,92,92,0.4);
  	position: relative;
  	padding: 10px ;
  }

  .total-price h5{
  	color: #000;
  	font-size: 16px;
  	margin:10px 0px;

  }
  .total-price span{
  	color: red;
    font-size: 16px;
  }
  .checked{
  	position: absolute;
  	top: 23px;
  	right: 10px;
  }
</style>

<script>
import { getGoodsList,deleteGoodsById} from '../../common/cartTool.js'
import { MessageBox } from 'mint-ui';
import bus from '../../common/commonvue.js'
 export default{

 	data(){
 		return {
 		  goodsList:{},
 		  totalCount:0,
 		  totalPrice:0,
          valueArray:[]
 		}
 	},
 	created(){
       this.getGoodsListData()
 	},
 	methods:{
      getGoodsListData(){
      	const localGoodsList=getGoodsList()
        const localObject={}
        for (var i=0;i<localGoodsList.length;i++){
          var everyItem=localGoodsList[i]
          
          if(localObject[everyItem.goodsList]){
          	localObject[everyItem.goosId]+=everyItem.count
          }else{
          	localObject[everyItem.goodsId]=everyItem.count
          }
        }

        const tempArr=[];
        for(var key in localObject){
          tempArr.push(key)
          this.valueArray.push(true);
        }

        const idsString=tempArr.join(',')

        const url="http://182.254.146.100:8899/api/goods/getshopcarlist/"+idsString
        this.$http.get(url).then(response=>{
        	response.body.message.forEach(item=>{
        		item.count=localObject[item.id]
        	})
        	this.goodsList=response.body.message
        	console.log(this.goodsList)
        	this.countTotalPrice()
        })


      },
        countTotalPrice(){
        	let tempCount=0;
        	let tempPrice=0;
        	//console.log(this.valueArray)
        	this.valueArray.forEach((item,i)=>{
              if(item){
              	//console.log(this.goodsList.length)
              	tempCount+=this.goodsList[i].count
              	tempPrice+=this.goodsList[i].count*this.goodsList[i].sell_price
              }
        	})
        	this.totalCount=tempCount;
        	this.totalPrice=tempPrice;
        },
        deleteGoods(index){

        	MessageBox.confirm('确定删除商品?').then(action => {
                  const changeCount=this.goodsList[index].count
                  bus.$emit("goodsCount",-changeCount);
                  deleteGoodsById(this.goodsList[index].id);

                  this.valueArray.splice(index,1)
                  this.goodsList.splice(index,1)
                  this.countTotalPrice()

                },cancel=>{

                })
        }
 	}
 }



</script>