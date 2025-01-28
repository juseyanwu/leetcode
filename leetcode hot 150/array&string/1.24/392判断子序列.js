var isSubsequence = function(s, t) {
    // s = "abc", t = "ahbgdc"
    let left = 0
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[left]) {
            left++
        }
    }
    if (left === s.length) {
        return true
    }
    else return false
};

// 利用指针