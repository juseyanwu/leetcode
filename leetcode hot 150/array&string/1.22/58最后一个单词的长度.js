var lengthOfLastWord = function(s) {
    let n = s.length - 1
    while(s[n] === ' ') {
        n--
    }
    let x = n
    while(s[n] !== ' ' && n >= 0) {
        n--
    }
    return x - n
};