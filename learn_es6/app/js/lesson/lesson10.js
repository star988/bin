/*Set Map WeakSet WeakMap 数据结构*/
/*建议在考虑数据存储时优先考虑map，在需要去重时考虑set，用此替代object array存储*/

{
  let list = new Set();

  list.add(1)
  list.add(2)
  console.log('Set', list);

  console.log('size', list.size)

}

{
  //可以去掉基础数据类型相同的值，因为对象是内存地址的引用
  let list = new Set([function () {}, function () {}, 3, 4, 5, 1, '2']);

  console.log('Set', list);

  let arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];

  let list = arr.filter((item, index, self) => {
    return self.indexOf(item) === index

  })

  let set = new Set(arr);

  console.log(set);

  console.info(list);
}

{
  let list = new Set(['add', 'delete', 'has', 'clean']);

  console.log('Set.has', list.has('add'));
  console.log('Set.delete', list.delete('delete'), list);
  console.log('Set.clear', list.clear(), list);
}

{
  let list = new Set(['add', 'delete', 'has', 'clean']);

  list.forEach(item => {
    console.log('forEach', item);
  })

  for (let key of list.keys()) {
    console.log('for of keys', key);
  }

  for (let value of list.values()) {
    console.log('for of value', value);
  }

  for (let [key, value] of list.entries()) {
    console.log('entries', key, value);
  }
}

{
  /*WeakSet 只能接收对象值  浏览器回收机制不友好 */
  /*没有size属性也没有clear方法，也不可以遍历*/

  let arg = new WeakSet([{
    a: 10
  }]);

  console.log('WeakSet', arg);

  let arg2 = new WeakSet();

  let parameter = function () {};

  arg2.add(parameter)

  console.log(arg2);
  console.log('weakset.delete', arg2.has(parameter), arg)
  console.log('weakset.delete', arg2.delete(parameter), arg)
}

{
  /*Map 可以用任意类型的值做为key*/
  let map = new Map([
    [{
      a: 1
    }, 123],
    [
      ['arr'], 456
    ]
  ]);

  console.log('map', map);
} {
  let map = new Map();

  map.set(['arr'], 123);


  console.log('map', map);
} {
  let map = new Map([
    [{
      a: 1
    }, 123],
    [
      ['arr'], 456
    ]
  ]);

  map.forEach(item => {
    console.log('map forEach', item, map[item]);
  })

  for (let key in map) {
    console.log('map in', key);
  }

  for (let key of map.keys()) {
    console.log(key);
  }
  for (let value of map.values()) {
    console.log(value);
  }
  for (let [key, value] of map.entries()) {
    console.log('entries', key, value);
  }
}

{
  /*WeakMap 只能接收对象值  浏览器回收机制不友好 */
  /*没有size属性也没有clear方法，也不可以遍历*/

  let arg = new WeakMap();

  arg.set(['arr'], 123);

  console.log('WeakMap', arg);

}

{
  /*map set array 增删改查对比*/
  // 增

  let map = new Map();
  let set = new Set();
  let array = [];
  let item = {
    't': 1
  }
  map.set('t', 1);
  set.add(item);
  array.push(item);

  console.info('map-set-array', map, set, array);

  //查
  let map_exist = map.has('t');
  let set_exist = set.has({
    t: 1
  });
  let array_exist = array.find(item => item.t);

  console.info('map-set-array-find', map_exist, set_exist, array_exist);

  //改

  map.set('t', 2);
  set.forEach(item => item.t ? item.t = 2 : '');
  array.forEach(item => item.t ? item.t = 2 : '');

  console.info('map-set-array-modify', map, set, array);

  //删

  map.delete('t');
  set.delete(item);
  let index = array.findIndex(item => item.t);
  array.splice(index, 1)


  console.info('map-set-array-empty', map, set, array)
}

{
  /*map set object 增删改查对比*/

  let item = {
    't': 1
  };
  let map = new Map();
  let set = new Set();
  let obj = {};

  //增
  map.set('t', 1);
  set.add(item);
  obj['t'] = 1;

  console.info('map-set-object', map, set, obj);

  //查

  let map_exist = map.has('t');
  let set_exist = set.has(item);
  let obj_exist = 't' in obj;

  console.info('map-set-object-exist', map_exist, set_exist, obj_exist);

  //改

  map.set('t', 2);
  item['t'] = 2;
  obj['t'] = 2;

  console.info('map-set-object-modify', map, set, obj);

  //删
  map.delete('t');
  // set.delete(item)
  set.forEach(item => item.t ? set.delete(item) : '')
  delete obj['t'];

  console.info('map-set-object-empty', map, set, obj);

}