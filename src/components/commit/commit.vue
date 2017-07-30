<template>
    <div >
      <!--1.0 头部导航条-->

    <div class="up-commit">
    	
      <h4>发表评论</h4>

      <textarea rows="5" placeholder="请输入评论内容" v-model="commitContent"></textarea>

      <mt-button @click="putCommitData"  size="large" type="primary">提交评论</mt-button>
    </div>
     
    <div class="commit-list">
      <h5>评论列表</h5>
    	<ul>
    		
    		<li v-for="item in commitData">
    			<p>{{item.content}}</p>
    			<p class="commit-info"><span>{{item.user_name}}</span><span class="commit-date">{{item.add_time|dateFmt}}</span></p>
    		</li>
    	</ul>
     
    </div>
    <mt-button size="large" @click="moreCommitData" type="danger" plain>加载更多</mt-button>
  </div>
</template>

<style scoped>
 .up-commit{
 	margin-top: 5px;
 }
  .up-commit textarea{
 	font-size: 13px;
 }

  .up-commit h4{

  	color: #666;
 	margin-bottom: 10px;
 }
 .commit-list h5{
  	color: #333;
 	font-size: 16px;
 	margin-top: 10px;
 	font-weight: 700;
 	margin-bottom: 5px;
 	border-bottom: 1px solid #ccc;
 	padding-bottom: 5px;
 }
 .commit-list p{
  margin:0;
  color: #333;
 }
  .commit-list ul li{
  	margin-bottom: 5px;
  	border-bottom: 1px solid #ccc;
 }
  .commit-list {
  margin-bottom: 15px;
 }
 .commit-list .commit-date{
  	float: right;
 }
  .commit-list .commit-info{
    color: #666;
  	margin-top: 8px;
 }

</style>

<script>
import { Toast } from 'mint-ui'

   export default{
    data(){
      return {
         commitData:[],
         commitContent:"",
         pageindex:1
      }
    },
    created() {
        console.log(this.commitContent)
        this.getCommitData();
    },
    methods: {
       getCommitData(){
       var url="http://182.254.146.100:8899/api/getcomments/"+this.commitId+"?pageindex=1"
       this.$http.get(url).then(response => {
        this.commitData=response.body.message;
        //console.log(this.commitData)
       })

     },
       moreCommitData(){

       	if(this.commitData.length%10!=0){
       		Toast({
			  message: '没有更多评论了！',
			  position: 'middle',
			  duration: 2000
			});
     		return;
       	}
       this.pageindex++;
       var url="http://182.254.146.100:8899/api/getcomments/"+this.commitId+"?pageindex="+this.pageindex
       this.$http.get(url).then(response => {
        
        this.commitData=this.commitData.concat(response.body.message)
        console.log(this.commitData)
       })

     },

     putCommitData(){
     	if(this.commitContent==""){
     		Toast({
			  message: '评论内容不能为空',
			  position: 'middle',
			  duration: 2000
			});
     		return;
     	}
       var url="http://182.254.146.100:8899/api/postcomment/"+this.commitId
       this.$http.post(url,{content:this.commitContent},{emulateJSON:true}).then(response => {
      
        console.log(response.body)
        var obj={
        	user_name:"匿名用户",
        	add_time:new Date(),
        	content:this.commitContent
        }
        this.commitData.unshift(obj);
        this.commitData.pop();
        this.commitContent="";
        // this.getCommitData();
        // this.pageindex=1;
       })

     }
     
    },
    props:['commitId'] 
 
   }

  </script>