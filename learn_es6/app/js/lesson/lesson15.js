{
    // TODO:Generator基本定义

    function* generator() {
        // FIXME:执行函数都会执行的部分
        console.log('content');
        yield 'a';
        yield 'b';
        return 'c';
    }
    let hw = generator();
    console.log(hw.next())
    console.log(hw.next())
    console.log(hw.next())
    console.log(hw.next())

    let arr = ['hello', 'world'];
    let iterator = arr[Symbol.iterator]();

    console.info(iterator.next());
    console.info(iterator.next());
    console.info(iterator.next());



}

{
    // TODO:用Generator简写Symbol.iterator
    let obj1 = {
        name: 'simba',
        age: 36,
        [Symbol.iterator]() {
            let self = this;
            let index = 0;
            let arr = Reflect.ownKeys(self);
            let len = arr.length;
            return {
                next() {
                    if (index < len) {
                        return {
                            value: arr[index++],
                            done: false
                        }
                    } else {
                        return {
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }
        }
    }
    for (let value of obj1) {
        console.log('自定义iterator', value);
    }
    let obj2 = {
        name: 'simba',
        age: 30,
        [Symbol.iterator]: function* () {
            yield 'simba';
            yield 30;
        }
    }
    for (let value of obj2) {
        console.log('使用generator替代', value);
    }
}

{
    // TODO:generator 语法糖 async

    // async function fn() {
    //     await 'simba';
    //     await 30;
    // }

    // let asyncFn = fn();

    // console.info(asyncFn.next())
    // console.info(asyncFn.next())
    // console.info(asyncFn.next())
}

{
    // TODO:generator在业务中的运用，用于状态机，抽奖次数，长轮询

    function* status() {
        while (1) {
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let statu = status();

    console.log(statu.next())
    console.log(statu.next())
    console.log(statu.next())
    console.log(statu.next())
    console.log(statu.next())

    let draw = function (count) {
        // TODO: 这里可以写业务逻辑
        console.log(`剩余${count}次`)
    }

    let residue = function* (count) {
        while (count > 0) {
            count--;
            yield draw(count)
        }
    }

    let chouInit = function (count) {
        let btn = document.createElement('button');
        btn.textContent = '点击抽奖';
        document.body.appendChild(btn);
        let start = residue(count);
        btn.addEventListener('click', function () {
            start.next()
        })
    }

    chouInit(5);

    let ajax = function* () {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve({
                    code: 0
                })
            }, 200);
        })
    }

    let pull = function () {
        let generator = ajax();
        generator.next().value.then(res => {
            if (res.code != 0) {
                console.log('没有得到想要的返回值，再次请求')
                setTimeout(() => {
                    pull();
                }, 1000);
            } else {
                console.log('获取数据成功')
            }
        })
    }
    pull();
}