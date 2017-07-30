/*
* @Author: Administrator
* @Date:   2017-07-16 22:03:13
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-19 22:27:07
*/


const key ="goodsList"
export function addGoods(goods){
   
   const goodsList=JSON.parse(localStorage.getItem(key)||'[]')
   
  goodsList.push(goods);
  localStorage.setItem(key,JSON.stringify(goodsList))
}

export function getGoodsList(){

	return JSON.parse(localStorage.getItem(key)||'[]');
}

export function deleteGoodsById(id){
   const goodsList=JSON.parse(localStorage.getItem(key)||'[]')
   for (var i=goodsList.length-1;i>=0;i--){
   	 if(goodsList[i].goodsId==id){
   	 	goodsList.splice(i,1)
   	 }
   }
   localStorage.setItem(key,JSON.stringify(goodsList))
}

export function getGoodsListCount(){

	const goodsList=JSON.parse(localStorage.getItem(key)||'[]')
	let totalCount=0;
	for(var item in goodsList){
		console.log(item+'ok')
		totalCount+=goodsList[item].count
	}
	return totalCount
	// goodsList.forEach(item=>{
	// 	totalCount+=item.count
	// })
}