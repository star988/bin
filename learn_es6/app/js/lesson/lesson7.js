/*function 扩展*/

{
  /*function paramater default*/

  function test(x, y = 'world') {
    console.log('默认值', x, y);
  }

  test('hello');

  function test1(x, y = 'world', c) {
    console.log(x, y, c);
  }

  test1('hello', 'kill')
}

{
  /*function 作用域*/
  let x = 'test';

  function test(x, y = x) {
    console.log('作用域', x, y);
  }
  test('hello');

  let x2 = 'test';

  function test1(x2, y = x2) {
    console.log('作用域', x2, y);
  }
  test1();

  let a = 'test';

  function test2(x3, y = x3 || a) {
    console.log('作用域', x3, y);
  }
  test2();
}

{
  /*function 将传参转成数组*/

  function test(...arg) {
    for (let v of arg) {
      console.log('rest', v);
    }
  }

  test(1, 2, 3, 4, 'a');

  function test1(arg1, arg2, arg3, arg4, arg5) {
    for (var i = 0; i < arguments.length; i++) {
      console.log(arguments[i])
    }
  }
  test1(1, 2, 3, 4, 'a');
} {
  /*扩展运算付 ...*/


  console.log('...', 'a', ...['a', 'c'], ...[1, 2, 3, 4]);


}

{
  /*=> 函数  主要this的指向问题*/

  let method = v => v * 2;

  let method2 = () => 5;

  console.log('=>', method(3));

  console.log('=>', method2());
}

{
  /*函数的伪调用，可提升性能*/

  function test(x) {
    console.log('test', x);
  }

  function fx(x) {
    return test(x);
  }

  fx(123);
}