/*number 数值扩展*/
{

	console.log('二进制',0B111110111)
	console.log('八进制',0O767)
}
{
	/*判断是否有限以及是否NaN*/
	console.log('15',Number.isFinite(15));
	console.log('NaN',Number.isFinite(NaN));
	console.log('1/0',Number.isFinite(1/0));
	console.log('NaN',Number.isNaN(NaN));
	console.log('1',Number.isNaN(1));
	console.log('{}',Number.isNaN({}));
}

{
	/*判断是不是个整数*/
	console.log('25',Number.isInteger(25));
	console.log('25.0',Number.isInteger(25.0));
	console.log('25.1',Number.isInteger(25.1));
	console.log('25string',Number.isInteger('25'));
	console.log('NaN',Number.isInteger(NaN));
}

{
	/*判断是不是个安全数字 2**53 -2**53 console.log(Math.pow(2,53))*/
	console.log('maxSafeInteger,minSafeInteger',Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER)

	console.log('10',Number.isSafeInteger(10));
	console.log('a',Number.isSafeInteger('a'));

	
}

{
	/*Math 取整*/
	console.log('4.1',Math.trunc(4.1));
	console.log('4.9',Math.trunc(4.9));

	console.log('4.1',Math.floor(4.1));
	console.log('4.9',Math.floor(4.9));

	console.log('4.1',Math.ceil(4.1));
	console.log('4.9',Math.ceil(4.9));

	console.log('4.1',Math.round(4.1));
	console.log('4.9',Math.round(4.9));
}

{
	/*判断数值是否正数负数*/
	console.log('-5',Math.sign(-5));
	console.log('0',Math.sign(0));
	console.log('5',Math.sign(5));
	console.log('50string',Math.sign('50'));
	console.log('foo',Math.sign('foo'));
}

{
	/*立方根*/

	console.log('-1',Math.cbrt(-1));
	console.log('8',Math.cbrt(8));
}