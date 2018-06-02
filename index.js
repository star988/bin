// import './source/const';
// import './source/scope';
// import './source/proxy';
// import './source/arrow-function';
// import './source/parameter'

{
	let obj = {
		'time':'2018-05-31',
		'name':'simba',
		'_r':12345
	}
	let monitor = new Proxy(obj,{
		get(target,key){
			if(key ==='time'){
				return target[key].replace('2018','2019');
			}else{
				return target[key];
			}
		},
		set(target,key,value){
			if(key ==='name'){
				return Reflect.set(target,key,value);
			}else{
				return Reflet.get(target,key);
			}
		},
		has(target,key){
			if(key==='time'){
				return Reflect.has(target,key);
			}else{
				return false;
			} 
		},
		deleteProperty(target,key){
			if(key.indexOf('_')>-1){
			  	return Reflect.deleteProperty(target, key);
			}else{
				return Reflect.get(target,key);
			}
		},
		ownKeys(target){
			return Reflect.ownKeys(target).filter(item=>item!='time');
		}
	});

	console.info('proxy-get',monitor.time);
	console.info('proxy-set',monitor.name='simba988',monitor);
	console.info('proxy-has','name' in monitor);
	console.info('proxy-has','time' in monitor);
	console.info('proxy-delete',delete monitor['name'],monitor);
	console.info('proxy-delete',delete monitor['_r'],monitor);
	console.info('proxy-keys',Object.keys(monitor))
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