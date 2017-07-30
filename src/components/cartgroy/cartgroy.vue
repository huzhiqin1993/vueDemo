<template>
    <div class="margin-to-top">
      <!--1.0 头部导航条-->
    <div class="mui-table-view-containter">
    <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="(item,i) in songArray" :key="i">
        <router-link :to="'/cartgroy/singerinfo/'+item.ting_uid">
            <img class="mui-media-object mui-pull-left" :src="item.pic_small" height="128" width="130">
            <div class="mui-media-body">
                <p class="song-name">{{item.title}}</p>
                <p class='mui-ellipsis'>{{item.author}}</p>
                <p class='mui-ellipsis'>{{item.versions}}&nbsp;&nbsp;{{item.info}}</p>
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
    line-height: 60px;
    max-width: 55px;
    height: 60px;
   }
   .mui-table-view .mui-media-body .song-name {
    font-size: 14px;
    color: #333;
    white-space:nowrap;    
	overflow:hidden;	
	text-overflow: ellipsis; 

   /*  margin-bottom: 15px; */
   }
   .mui-table-view .mui-media-body .mui-ellipsis {
    font-size: 12px;
   
   }
</style>

<script>
   export default{
    data(){
      return {
         songArray:[]
      }
    },
    created(){
      this.getSwipeData()
    },
    methods:{
     getSwipeData(){
       var url="http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=30&offset=0"

       this.$http.jsonp(url, {}).then(response => {
        this.songArray=response.body.song_list;
        console.log(response)
       })

     }
    }

   }

  </script>