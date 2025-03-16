// 无重复字符的最长子串
var lengthOfLongestSubstring = function(s) {
    // 哈希表 移动窗口
    // "pwwkew"
    let ans = 0
    let left = 0
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
      let c = s[i]
      map.set(c, (map.get(c) ?? 0) + 1)
      while(map.get(c) > 1) { // 如果存在相同的字母，移除端口左端字母
          map.set(s[left], map.get(s[left]) - 1)
          left++ // 缩小窗口
      }
      ans = Math.max(ans, i - left + 1)
    }
    return ans
  };