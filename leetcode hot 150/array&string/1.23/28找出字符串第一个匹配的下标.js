var strStr = function(haystack, needle) {
    const n = haystack.length , m = needle.length
    for (let i = 0; i + m <= n; i++) {
        let flag = true
        for (let j = 0; j < m; j++) {
            if (haystack[i+j] !== needle[j]) {
                flag = false
                break;
            }
        }
        if(flag) return i
    }
    return -1
};

// 暴力搜索，在 haystack 里面 让每一个长度为 needle 的字符串 去比较