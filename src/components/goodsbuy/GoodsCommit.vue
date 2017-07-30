<template>
   <div class="margin-to-top">
     <commit :commitId="this.$route.query.goodsId"></commit>
   </div>
</template>

  <style scoped>
   .margin-to-top{
   	 padding:5px 8px;
   }
  </style>

  <script>
   import commit from '../commit/commit.vue'
   export default{
   components:{
   
       commit
   }
  }

  </script>