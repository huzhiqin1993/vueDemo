<template>
  <div class="margin-to-top">
      <!--1.0 头部导航条-->

    <div class="photo-menu">

      <ul>
        <li @click="getimgData(0)">全部</li>
        <li @click="getimgData(item.id)" v-for="(item,index) in imgTitle" :key="index">{{item.title}}</li>
      </ul>
    </div>
     <div class="photo-list">

      <ul>
       
        <li v-for="(item,index) in imgData" :key="index">
          <router-link :to="'/photo/photoinfo/'+item.id">
          <img :src="item.img_url">
          <p><b>{{item.title}}</b><br>{{item.zhaiyao}}</p>
         </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .photo-menu li{
   float: left;
   list-style: none;
   padding:0 5px;
   color: #0094ff;
  }
  .photo-menu {
    overflow-x:auto;
    height: 40px;
    font-weight: bold;
    font-size: 14px;
    padding-top: 3px;
  }
  .photo-menu ul{
   width: 1000px;
  
  }
  .photo-list{
  padding:0 3px;
  position: absolute;
  top:64px;
  left: 0px;
  width: 100%;
  background-color: #fff;
  }

  .photo-list li{
  position: relative;
  width: 100%;
  }
  .photo-list li a{
  display: block;
  width: 100%;
  height: 100%;
  }
  .photo-list img{
  width: 100%
  
  }
  .photo-list p{
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,.3);
  color: #fff;
  padding:0 3px;
  
  }
  .photo-list p b{
  font-size: 14px;
  
  }
</style>

<script>

   export default{
    data(){
      return {
         imgTitle:[],
         imgData:[]
      }
    },
    created() {
        this.getimgTitle();
        this.getimgData(0);
    },
    methods: {
       getimgTitle(){
       var url="http://182.254.146.100:8899/api/getimgcategory"
       this.$http.get(url).then(response => {
        this.imgTitle=response.body.message;
        console.log(this.imgTitle)
       })

     },
      getimgData(categroyId){
       var url="http://182.254.146.100:8899/api/getimages/"+categroyId
       this.$http.get(url).then(response => {
        this.imgData=response.body.message;
        console.log(this.imgData)
       })

     }

     
   }
     
  }
  </script>