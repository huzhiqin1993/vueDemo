<template>
    <div>
      <!--1.0 头部导航条-->
      <mt-swipe :auto="lunbo_time">
        <mt-swipe-item ><img src="../../statics/images/slide1.png"></mt-swipe-item>
        <mt-swipe-item ><img src="../../statics/images/slide2.png"></mt-swipe-item>
        <mt-swipe-item ><img src="../../statics/images/slide3.png"></mt-swipe-item>
        <mt-swipe-item ><img src="../../statics/images/slide4.png"></mt-swipe-item>
        
      </mt-swipe>
  </div>
</template>

  <style scoped>

    img {
        height: 160px;
        width: 100%
    }
    .mint-swipe {
        height: 160px;
        width: 100%;
        z-index: 10;
    }
  </style>

  <script>
   export default{
    data(){
      return {
         //swipeArray:[]
      }
    },
    created(){
      //this.getSwipeData()
    },
    methods:{
     // getSwipeData(){
     //   var url="http://182.254.146.99:8899/"+this.lunbo_url
     //   this.$http.get(url).then(response=>{
     //    this.swipeArray=response.body.message;
     //    console.log(response)
     //   })

     // }
    },
    //props:['lunbo_url']
    props: {
    // 只检测类型
    //lunbo_url: String,
    // 检测类型 + 其他验证
    lunbo_time: {
      type: Number,
      required: true,
      validator: function (value) {
        return value >= 1000
       }
     }
    }
   }

  </script>