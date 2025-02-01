var wordPattern = function(pattern, s) {
    let P = new Map()
    let S = new Map()
    // pattern = "abba", s = "dog cat cat dog"
    let sArray = s.split(' ')
    for(let i = 0; i < s.length; i++) {
        if (P.get(pattern[i]) !== S.get(sArray[i])) return false
        P.set(pattern[i], i)
        S.set(sArray[i], i)
    }
    return true
};