/*Object 扩展*/

{
	/*简洁表示法*/
	let o = '1';
	let k = '2';

	let es5={
		o:o,
		k:k
	}	

	let es6 = {
		o,
		k
	}
	console.log('简洁表示法',es5,es6);

	let es5_method={
		hello:function(){
			console.log('es5_method');
		}
	}

	let es6_method={
		hello(){
			console.log('es6_method');
		}
	}

	es5_method.hello();
	es6_method.hello();
}

{
	/*属性表达式*/

	let a = 'b';

	let es5 ={
		a:'b',
		b:'c'
	}

	let es6 = {
		[a]:'c'
	}

	console.log('属性表达式',es5,es6);
}

{
	/*新增aip  is方法  相当于===*/

	console.log('is 比较基础类型',Object.is('abc','abc'),'abc'==='abc');
	console.log('is 引用类型',Object.is([],[]),[]===[]);
}

{
	/*拷贝 assign 是浅拷贝，拷贝引用地址， 并且不能拷贝继承的属性方法以及不可枚举的内容*/

	console.log('拷贝',Object.assign({a:'a'},{b:'b'}))
}

{
	/*对象便利*/
	let test = {a:'111',b:'ds'}
	for(let [key,value] of Object.entries(test)){
		console.log(key,value);
	}

	let arr = ['add',function(){},undefined];

	for(let [index,value] of arr.entries()){
		console.log(index,value);
	}
}

{
	/*扩展运算符*/

	// console.log({a,b,...obj} = {c:'asd',b:'asd',a:1,d:112,e:function(){}})
	console.log(111);
}