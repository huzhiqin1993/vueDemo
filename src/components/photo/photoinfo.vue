<template>
  <div class="margin-to-top">
      <!--1.0 头部导航条-->

    <div class="img-info">
      <h4>{{imageInfo.title}}</h4>
      <p><span> {{imageInfo.add_time|dateFmt("YYYY-MM-DD")}}</span> <span>点击数{{imageInfo.click}}次</span> </p>
      <!--2.0 九宫格布局-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li v-for="(item,index) in imageArray" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" :key="index">
                  <img class="preview-img" height="100" :src="item.src"  @click="$preview.open(index, imageArray)">
                </li>
              
            </ul>
        </div>
      <p v-html="imageInfo.content"></p>
    </div>

    <commit :commitId="this.$route.params.photoId"></commit>
  </div>
</template>

<style scoped>
  
.margin-to-top{
  padding:5px 6px;
}
.img-info h4{
  color: #0094ff;
}
.img-info p span{
 margin-right: 20px;
}
.mui-content img{
  height: 100px;
  width: 100px;
}
</style>

<script>
   import commit from '../commit/commit.vue'
   export default{
    data(){
      return {
         imageInfo:{},
         imageArray:[]
      }
    },
    created() {
        this.getImageInfo();
        this.getImageArray();
    },
    methods: {
       getImageInfo(){
       var url="http://182.254.146.100:8899/api/getimageInfo/"+this.$route.params.photoId
       this.$http.get(url).then(response => {
        this.imageInfo=response.body.message[0];
        //console.log(this.imageInfo)
       })

     },
      getImageArray(){
       var url="http://182.254.146.100:8899/api/getthumimages/"+this.$route.params.photoId
       this.$http.get(url).then(response => {
        this.imageArray=response.body.message;
        //console.log(this.imageArray);
        var imageArray=this.imageArray
        imageArray.forEach(function(value,index){
          imageArray[index].w=600;
          imageArray[index].h=400;
        })
       })

     }

   },
   components:{
   
       commit
   }
     
  }
  </script>