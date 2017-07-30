<template>
    <div class="margin-to-top">
      <!--1.0 头部导航条-->
      <h4 >{{newsDetail.title}}</h4>
      <p><span>时间：{{newsDetail.add_time|dateFmt}}</span><span class="news-cartgroy">分类：民生经济</span> </p>
      <p v-html="newsDetail.content"></p>
      <commit :commitId="this.$route.params.newsId"></commit>
  </div>
</template>

<style scoped>
 .margin-to-top{
  padding:5px 10px;
 }
 .margin-to-top h4{
  color:#666; 
 }
 .margin-to-top p{
  color:#26a2ff; 
  margin-top: 10px;
 }
 .margin-to-top p .news-cartgroy{
  float: right;
 }

</style>

<script>
   import commit from '../../commit/commit.vue'
   export default{
    data(){
      return {
         newsDetail:{}
      }
    },
    created(){
      this.getNewsDetailData()
    },
    methods:{
     getNewsDetailData(){
       var url="http://182.254.146.100:8899/api/getnew/"+this.$route.params.newsId
       
       this.$http.get(url).then(response => {
        this.newsDetail=response.body.message[0];
        console.log(this.newsDetail)
       })

     }
    },
   components:{
   
       commit
   }
   }

  </script>