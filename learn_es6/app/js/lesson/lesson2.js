/*数组和对象解构赋值*/
{
  let a, b, reset;

  [a, b] = [1, 2];

  console.log(a, b);
}

{
  let a, b, reset;

  [a, ...b] = [1, 2, 3, 4, 5];

  console.log(a, b);
}

{
  let a, b, c, reset;

  [a, b, c = 3] = [1, 2];

  // [a,b,c] = [1,2];

  console.log(a, b, c);
}

{
  function f() {
    return [1, 2];
  }
  let a, b;
  [a, b] = f();
  console.log(a, b);
}

{
  function f() {
    return [1, 2, 3, 4, 5];
  }

  let a, b;
  [a, , , b] = f();

  console.log(a, b);
}

{
  function f() {
    return [1, 2, 3, 4, 5];
  }
  let a, b;
  [a, , ...b] = f();

  console.log(a, b);
}

{
  let o = {
    q: 42,
    p: true
  };
  let {
    q,
    p
  } = o;
  console.log(q, p);
}

{
  let {
    q = 32, p = 88
  } = {
    q: 10
  };

  console.log(q, p);
}

{
  let mateData = {
    title: 'firstTitle',
    test: [{
      title: 'test',
      desc: 'description'
    }]
  }

  let {
    title: esTitle,
    test: [{
      title: cnTitle
    }]
  } = mateData;

  console.log(esTitle, cnTitle);

  // let {title='default1',test=[{title:'default2'}]} = mateData;

  // console.log(title,test);
}