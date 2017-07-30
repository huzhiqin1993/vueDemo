<template>
    <div class="margin-to-top">
      <!--1.0 头部导航条-->

      <swiper  :lunbo_time="time"></swiper>

       <!--2.0 九宫格布局-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻咨询</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo">
                        <span class="mui-icon mui-icon-email">
                            <span class="mui-badge">5</span>
                        </span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goodsbuy">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">视频专区</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </a>
                </li>
            </ul>
        </div>
  </div>
</template>

  <style scoped>

    /*2.0 九宫格样式*/
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border-right: none;
        border-bottom: none;
    }

    .mui-icon-home::before,
    .mui-icon-email::before,
    .mui-icon-chatbubble::before,
    .mui-icon-location::before,
    .mui-icon-search::before,
    .mui-icon-phone::before{
        content:''
    }

    /** 设置我们背景图片的宽度与高度 */
    .mui-icon{
        width: 50px;
        height: 50px;
    }

    .mui-icon.mui-icon-home{
        background-image: url('../../statics/images/menu3.png');
        background-repeat: round;
    }

    .mui-icon.mui-icon-email{
        background-image: url('../../statics/images/menu4.png');
        background-repeat: round;
    }

    .mui-icon.mui-icon-chatbubble{
        background-image: url('../../statics/images/menu5.png');
        background-repeat: round;
    }

    .mui-icon.mui-icon-location{
        background-image: url('../../statics/images/menu6.png');
        background-repeat: round;
    }

    .mui-icon.mui-icon-search{
        background-image: url('../../statics/images/menu9.png');
        background-repeat: round;
    }

    .mui-icon.mui-icon-phone{
        background-image: url('../../statics/images/menu10.png');
        background-repeat: round;
    }
    .mui-content>.mui-table-view:first-child {
       margin-top: 0;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    padding: 0px 15px;
    }
  </style>

  <script>
  import swiper from '../commit/swiper.vue'
   export default{
    data(){
      return {
        time:3000
      }
    },
    created(){
    },
    methods:{
    
    },
    components:{
        swiper
    }
   }

  </script>