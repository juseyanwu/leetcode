var longestCommonPrefix = function(strs) {
    let s0 = strs[0]
    for(let i = 0; i < s0.length; i++) {
        for(const s of strs) {
            if(s[i] !== s0[i] || i === s.length) {
                return s0.slice(0,i)
            }
        }
    }
    return s0
}