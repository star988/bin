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

{
	/*输入验证应用场景*/

	function validator(target,validator){
		return new Proxy(target,{
			_validator:validator,
			set(target,key,value,proxy){
				if(target.hasOwnProperty(key)){
					let va = this._validator[key];
					if(va&&va(value)){
						return Reflect.set(target,key,value,proxy);
					}else{
						throw Error(`${value}不满足条件`)
					}
				}else{
					throw Error(`${key}不存在`)
				}
			}
		})
	}
	const personValidator = {
		name(value){
			return typeof value ==='string';
		},
		age(value){
			return typeof value ==='number'&&value>18;
		}
	}



	class Person{
		constructor(map){
			for(let [key,value] of map.entries()){
				if(personValidator.hasOwnProperty(key)){
					let va = personValidator[key];
					if(!!va(value)){
						this[key] = value;
					}else{
						console.log(`${key}不满足验证条件`)
					}
				}else{
					this[key] = value;
				}
			}
			return validator(this,personValidator);
		}
	}

	let map  = new Map();
	map.set('name','simba');
	map.set('age',20);

	const person = new Person(map);

	console.log(person)

	console.info(Reflect.set(person,'age',40),person);
}