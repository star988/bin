{
	/*es5 es6中class类定义以及静态属性和方法*/

	//ES5

	function Es5(name){
		this.name = name||'hello world';

	}
	Es5.type = 'type'; //es5中静态属性
	Es5.fn = function(){return 'fn'}; //静态方法
	var es5 = new Es5();

	console.log('es5实例以及调用静态属性和方法',es5,es5.constructor.type,es5.constructor.fn());


	//ES6

	class Es6{
		constructor(name='hello world'){
			this.name = name;
		}

		static fn(){  //es6中静态方法
			return 'fn';
		}
	}

	Es6.type = 'type';

	let es6 = new Es6(); //es6中静态属性

	console.info('es6实例以及调用静态属性和方法',es6,es6.constructor.type,es6.constructor.fn());

	// console.log(parent.type);
}

{
	// Es5中的继承
	function Parent(name){
		this.name=name;
	}

	Parent.prototype.fn = function(){
		return 'fn';
	}

	function Child(name){
		Parent.call(this,name)
	}

	
	// Child.prototype = Parent.prototype; //constructor

	// Child.prototype = new Parent();

	// Child.prototype.constructor = Child;

	// var parent = new Parent('parent');

	// var child = new Child('child') 

	Child.prototype = Object.create(Parent.prototype);

	Child.prototype.constructor = Child;

	let child = new Child('simba');

	console.log(child,child.fn());

	console.log(child.constructor === Parent)

}

{
	//ES6中的继承

	class Parent{
		constructor(name="simba"){
			this.name =name;
		}
	}

	class Child extends Parent{
		constructor(name){
			super(name);
			this.type = 'type';
		}
	}

	let child = new Child('simba');

	console.log('es6继承',child)
}

{
	//getter setter method  拦截取值和设值操作

	class Parent{
		constructor(name="simba"){
			this.name = name;
		}

		get getname(){
			return this.name;
		}
		set getname(name){
			this.name = name;
		}
	}

	let parent = new Parent();
	parent.getname;
	console.info('getter',parent)

	parent.getname='simba988'
	console.info('setter',parent)
}
