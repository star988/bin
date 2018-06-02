/*RegExp es5*/

{
	// var regexp1 = new RegExp(/[a-z]/i);

	// var regexp2 = new RegExp(/[0-9]/,'i');

	// var regexp3 = /[a-z]/i;

	// var str2 = str.replace(/[a-z]{0,3}/,'123');


	// RegExp method
	console.log('result1',/hello/g.toString());
	console.log('result2',/[a-z]|[A-Z]/g.test('1A'));
	console.log('result3',/hello/g.exec('hello world'));
	console.log('result4',/hello/g.exec('hello world'));

	//string method

	console.log('result5','abcdefg'.replace(/[a-z]{0,3}/,'12'))

	console.log('result6','The rain in SPAIN stays mainly in the plain'.match(/ain/g))

	console.log ('result6','asd-do'.split('-'))


	// RegExp  property;

	console.log('result7',new RegExp(/[\d]/i).ignoreCase)
	console.log('result7',new RegExp(/[\d]/g).global)


}