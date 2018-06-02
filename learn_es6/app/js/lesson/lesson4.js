/*字符串拓展*/

{
	let name,age,m;
	[name,age] = ['simba',30];

	m = `my name is ${name},my age is ${age}`;
	console.log(m);
}

{
	let obj ={
		title:'list',
		data:[{
			title:'item'
		}]
	}
	let {title:firstTitle,data:[{title:item}]} = obj;
	console.log(abc`i am ${firstTitle}.${item}`) ;

	function abc(s,$1,$2){
		console.log(s,$1,$2);

		return s+$1+$2;
	}

}

{
	let str = '\u{20bb7}abc';
	for(var s =0;s<str.length;s++){
		console.log('es5 traversal',str[s]);
	}
	for(let s of str){
		console.log('es6 traversal',s);
	}
}

{
	let str = 'string';

	console.log('includes',str.includes('s'));

	console.log('start',str.startsWith('str'))

	console.log('end',str.endsWith('ng'))
}

{
	let str = 'abc';

	console.log('repeat',str.repeat(10));
}

{
	console.log('padStart','1'.padStart(2,0)); //可以用于日期补白
	console.log('padEnd','1'.padEnd(2,0)); //可以用于日期补白
}

{
	console.log('raw',String.raw`ha\n${1+2}`);
	console.log(`ha\n${1+2}`);
}