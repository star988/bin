/*proxy reflect 代理与反射*/

{
  let obj = {
    time: '2018-5-31',
    name: 'simba',
    _r: '123'
  }

  let monitor = new Proxy(obj, {
    // 拦截获取数据
    get(target, key) {
      if (key === 'time') {
        return target[key].replace('2018', '2019');
      } else {
        return Reflect.get(target, key);
      }
    },
    // 拦截设置数据
    set(target, key, value) {
      if (key === 'name') {
        return Reflect.set(target, key, value);
      } else {
        return Reflect.get(target, key);
      }
    },
    // 拦截 in 判断对象是否存在该属性
    has(target, key) {
      if (key === 'name') {
        return true
      } else {
        return false
      }
    },

    deleteProperty(target, key) {
      if (key.indexOf('_') > -1) {
        delete target[key];
        return true
      } else {
        return Reflect.get(target, key)
      }
    },
    ownKeys(target) {
      return Object.keys(target).filter(item => item != 'time')
    }
    //拦截 Object.keys() Object.getOwnPropertySymbols() object.getOwnPropertyNames()
  });

  console.info('proxy', monitor)

  console.info('proxy-get', monitor.time, obj)

  console.info('proxy-set', monitor.name = '1123', obj)

  console.info('proxy-in', 'time' in monitor)

  console.info('proxy-in', 'name' in monitor)

  console.info('proxy-delete', delete monitor['name'], obj)

  console.info('proxy-delete', delete monitor['_r'], obj)

  console.log('proxy-keys', Object.keys(monitor))


}