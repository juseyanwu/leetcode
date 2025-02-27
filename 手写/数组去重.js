function unique (arr) {
    let res = []

    for(let i = 0; i < arr.length; i++) {
        let flag = false
        for(let j = 0; j < res.length; j++) {
            if (equals(arr[i], res[j])) {
                flag = true
                break
            }
        }
        if (!flag) {
            res.push(arr[i])
        }
    }

    return res
}

function equals (a, b) {
    if ((typeof a === 'object' && a !== null) && (typeof b === 'object' && b !== null)) {
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false
        }
        for(let key in a) {
            if(key in b) {
                if(!equals(a[key], b[key])) { // 防止有嵌套的对象
                    return false
                }
            }
            else {
                return false
            }
        }
        return true
    } else {
        return a === b
    }
}

let arr = [{a:'1',b:{s:'1'}}, {a:'1',b:{s:'1'}},'a','a']

console.log(unique(arr));
