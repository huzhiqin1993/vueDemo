<template>
  <div class="margin-to-top">
      <!--1.0 头部导航条-->
<div class="singer">
	<img :src="singerDetail.avatar_s180">
  <div class="singer-info">
	<h4>{{singerDetail.name}}</h4>
	<p>生日:{{singerDetail.birth}}</p> <p>地区:{{singerDetail.country}}</p>
	<p>星座:{{singerDetail.constellation}}</p> <p>歌曲数:{{singerDetail.songs_total}}</p>
  </div>
</div>
	<p>歌手简介:{{singerDetail.intro}}</p>

  </div>
</template>

<style scoped>

.margin-to-top{
	padding:12px 8px;
 }
 .singer{
    
 	width: 100%;
 	margin-bottom: 5px;
 	overflow: hidden;
 }
.singer img{

 	width: 50%;
 	float: left;
 }

 .singer .singer-info{

 	width: 50%;
 	float: right;
 	box-sizing:border-box;
 	padding-left: 14px;
 }
 .singer .singer-info p{

   margin-top: 11px;
 }
</style>

<script>
   export default{
    data(){
      return {
         singerDetail:{}
      }
    },
    created(){
      this.getSingerDetailData()
      console.log(this.$route.params.ting_uid)
    },
    methods:{
     getSingerDetailData(){
       var url="http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid="+this.$route.params.ting_uid;  
       this.$http.jsonp(url,{}).then(response => {
        this.singerDetail=response.body;
        console.log(response.body)
       })

     }
    }
 
   }

  </script>