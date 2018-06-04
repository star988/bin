/*let var different and const use*/

function Test() {
  // for (var i = 1; i <3 ; i++) {
  // 	console.log(i)
  // }
  // console.log(i);

  // for(let i = 1; i<3;i++){
  // 	console.log(i);
  // }
  // console.log(i); // i is not defined;

  // let a = 1;
  // let a = 1;  //is not repeat that;
}

// var test = new Test();


function last() {
  // const PI = '3.1415';
  // PI = 8;  // const value is not change

  // const PI;
  // PI = 8; //先申明常量再赋值也是不可以的

  const obj = { //const赋值是基础类型则不能变，如果是引用类型则可以变，因为引用地址的指针没有变；
    a: 1
  }
  obj.a = 2;
  console.log(obj);
}

last();