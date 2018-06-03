{
    /* Iterator and for of */
    let arr = ['hello', 'world'];
    let map = arr[Symbol.iterator]();
    console.info(map.next());
    console.info(map.next());
    console.info(map.next());
}

{
    let obj = {
        a: [1, 2, 3],
        b: [7, 9, 8],
        [Symbol.iterator]() {
            let self = this;
            let index = 0;
            let arr = self['a'].concat(self['b']);
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
    for (const value of obj) {
        console.log('value', value);
    }
}

{
    let arr = ['123', '987'];
    for (const value of arr) {
        console.log(arr, value)
    }
    let obj = {
        a: 1,
        b: 2
    }
    for (const item of Reflect.ownKeys(obj)) {
        console.log(item)
    }
    for (const [index, value] of Object.entries(obj)) {
        console.log(index, value)
    }
}