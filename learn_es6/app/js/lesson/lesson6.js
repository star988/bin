/*array 扩展*/
{
	console.log('arr',Array.of(3,4,5,6,7,8))
	console.log('empty',Array.of())
	console.log('all',Array.of(function(){},{},'123'))

	console.log('all2',[function(){},{},'aa',112])
}

{
	/*array from method*/

	let p = document.querySelectorAll('p');

	Array.from(p).forEach((item)=>{
		console.log(item.textContent)
	})

	console.log(Array.from([1,3,5],(item)=>{return item*2}));

}

{
	/*array fill method*/

	
	console.log('fill-7',['a','b','c',1,2,3,4].fill(7));
	console.log('fill-pos',['a','b','c',1,2,3,4].fill(7,1,3))
}

{
	/*array for of*/
	for(let value of ['hello','seattle','anvenu'].values()){
		console.log(value);
	}
	for(let index of ['hello','seattle','anvenu'].keys()){
		console.log(index);
	}

	for(let [index,value] of ['friendly','the other way','draw'].entries()){
		console.log('key+value',index,value);
	}

	console.log('entries',['what','is','city'].entries());
	console.log(['hello','seattle','anvenu'].values());
}

{
	console.log('copyWithin',[1,2,3,4,5,6,7].copyWithin(0,3,6));
}

{
	/*array find findIndex method*/

	console.log('find',[1,2,3,4,5,6,7].find(item=>{return item>3}))

	console.log('find',[1,2,3,4,5,6,7].findIndex(item=>{return item>3}))
}

{
	/*array includes method*/
	
	console.log('includes',[1,2,3,4,NaN,undefined].includes(undefined))
	console.log('includes',[1,2,3,4,NaN,undefined].includes(NaN))
}