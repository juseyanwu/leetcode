var isAnagram = function(s, t) {
    let T = new Map()
    for(let c of t) {
        T.set(c, (T.get(c) ?? 0) + 1)
    }
    for(let string of s) {
        T.set(string, T.get(string) - 1)
    }
    for (let [key, value] of T) {
        if(value !== 0) return false
    }
    return true
};