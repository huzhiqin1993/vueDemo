<template>
    <div class="margin-to-top">
      <!--1.0 头部导航条-->
    <div class="mui-table-view-containter">
    <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in newsArray" :key="item.id">
        <router-link :to="'/news/newsdetail/'+item.id">
            <img class="mui-media-object mui-pull-left" :src="item.img_url" height="128" width="130">
            <div class="mui-media-body">
                <p class="song-name">{{item.title}}</p>
                <p class='mui-ellipsis'><span>{{item.add_time|dateFmt}}</span><span class="rightspan">点击数<b> {{item.click}} </b>次</span></p>
         
            </div>
        </router-link>
    </li>
  </ul>
  </div>
  </div>
</template>

<style scoped>

   .mui-table-view-containter
   {
   	margin-bottom: 45px;
   }
   .mui-table-view .mui-media-object {
    line-height: 50px;
    max-width: 65px;
    height: 50px;
   }
   .mui-table-view .mui-media-body .song-name {
    font-size: 14px;
    color: #999;
    white-space:nowrap;    
	overflow:hidden;	
	text-overflow: ellipsis; 

    margin-bottom: 10px;
   }
   .mui-table-view .mui-media-body .mui-ellipsis {
    font-size: 12px;
    color: #26a2ff;
   }
   .mui-table-view .mui-media-body .mui-ellipsis .rightspan{
   	float: right;
   }
</style>

<script>
   export default{
    data(){
      return {
         newsArray:[]
      }
    },
    created(){
      this.getNewsData()
    },
    methods:{
     getNewsData(){
       var url="http://182.254.146.100:8899/api/getnewslist"

       this.$http.get(url).then(response => {
        this.newsArray=response.body.message;
        console.log(response)
       })

     }
    }

   }

  </script>