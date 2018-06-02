/*Symbol 新增数据类型*/
{
	/*申明*/
	let a = Symbol();
	let b = Symbol();

	console.log(a === b);

	let a1 = Symbol.for('a1');
	let b1 = Symbol.for('a1');

	console.log(a1 === b1);
}

{
	/*给对象做属性*/
	let a = Symbol.for('abc');
	let obj = {
		[a]:'abc',
		abc:'indad',
		c:'complate'
	}
	console.log(obj);

	for(let [key,value] of Object.entries(obj)){
		console.log(key,value);
	}

	Object.getOwnPropertySymbols(obj).forEach((item)=>{
		console.log('getOwnPropertySymbols',item,obj[item]);
	})

	Reflect.ownKeys(obj).forEach((item)=>{
		console.log('ownKeys',item,obj[item]);
	})
	console.log(111);
}
