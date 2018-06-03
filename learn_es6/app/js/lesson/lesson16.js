{
    // TODO: Decorator 修饰器基本用法

    let readonly = (target, name, descriptor) => {
        console.log(target);
        console.log(name);
        console.log(descriptor);
        descriptor.whitable = false;
        return descriptor;
    }

    class Parent {
        @readonly
        time() {
            return '2018-06-03';
        }
    }

    let child = new Parent();
    console.log(child.time());
}

{
    let decorator = (target, name, descriptor) => {
        console.log(target);
        console.log(name);
        console.log(descriptor);
        target.myname = 'simba';
    }

    @decorator
    class My {
        time() {
            return '2018-06-19'
        }
    }
    My.type = 'type'
    console.log('修饰符', My.myname)
    console.log('修饰符', My.type)
}

{
    // FIXME: 业务中对日志中的埋点统计

    let log = (type) => {
        return (target, name, descriptor) => {
            let method = descriptor.value;
            descriptor.value = (...arg) => {
                method.apply(target, arg)
                console.log(`log ${name}`);
            }
        }
    }

    class Log {
        @log('show')
        show(name = "simba", age = 30) {
            console.log(`this is show ${name},${age}`);
        }
        @log('click')
        click() {
            console.log('this is click');
        }

    }

    let ad = new Log();
    ad.show();
    ad.click();

}