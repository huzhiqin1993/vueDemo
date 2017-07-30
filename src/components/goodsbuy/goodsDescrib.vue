<template>
   <div class="margin-to-top">

   	 <h4>{{picAndText.title}}</h4>
     <p v-html="picAndText.content"></p>
   </div>
</template>

  <style scoped>
  .margin-to-top{
  	padding:5px 8px;
  }

 .margin-to-top h4{
  	color: #0094ff;
  	margin-bottom: 10px;
  	font-size: 16px;
  }

  </style>

  <script>
   export default{
    data(){
      return {
         picAndText:{},
         goodId:0
      }
    },
    created(){
      console.log(this.$route);
      this.getpicAndTextInfo()
    },
    beforeDestroy(){
      params: { goodsId: this.$route.params.goodsId }
    },
    methods:{
     getpicAndTextInfo(){
     	
       var url="http://182.254.146.100:8899/api/goods/getdesc/"+this.$route.params.goodsId
       this.$http.get(url).then(response=>{
        this.picAndText=response.body.message[0];
       
        console.log(this.picAndText)
       })

     }
    }
  }
  </script>