var isIsomorphic = function(s, t) {
    // s = "paper", t = "title"
    let S = new Map()
    let T = new Map()
    for(let i = 0; i < s.length; i++) {
        if(S.get(s[i]) !== T.get(t[i])) return false
        S.set(s[i], i)
        T.set(t[i], i)
    }
    return true
};

// 索引来确定唯一