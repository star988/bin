 import gulp from ''
 class Parent {
     constructor(name = "hello world") {
         this.name = name;
     }
     set hello() {

     }

 }
 class Child extends Parent {
     constructor(name) {
         super(name);
         this.type = "type"
     }
 }

 let child = new Parent();

 let va = 'sinmba';

 let tell = function* () {
     yield 'a';
 }

 new Array().filter(item => {
     console.log()
 })
 Object.create()