<template>
    <div>
      <!--1.0 头部导航条-->
      <ul>
        <li @click="substract">-</li>
        <li ref="goodsCount">{{goodsCount}}</li>
        <li @click="add">+</li>
      </ul>
    </div>
</template>

  <style scoped>
   ul{
     height: 32px;
     margin-top: -8px;
     margin-bottom: 5px;
   }
   ul li{
    height: 30px;
    line-height: 30px;
    list-style: none;
    float: left;
    width: 28px;
    font-size: 18px;
    border: 1px solid #ccc;
    margin-right: 12px;
    text-align: center;
   }
    ul li:nth-child(2){
   width: 40px;
   }
  </style>

  <script>
   export default{
    data(){
      return {
         swipeArray:[],
         goodsCount:1
      }
    },
    created(){
      //this.getSwipeData()
    },
    methods:{
     getSwipeData(){
       var url="http://182.254.146.100:8899/"
       this.$http.get(url).then(response=>{
        this.swipeArray=response.body.message;
        console.log(response)
       })
       
     },
     substract(){
       if(this.goodsCount<=1)
       {
        return;
       }
        this.goodsCount--;
        this.notify()
     },
     add(){
       this.goodsCount++;
       this.notify()
     },
     notify(){
       this.$emit("numberChange",this.goodsCount)
     }
    }
   }

  </script>