// 字母异位分组

var groupAnagrams = function(strs) {
    // strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
    let m = new Map()
    for(let s of strs) {
        let array = Array.from(s)
        array.sort()
        let key = array.toString()
        let group = m.get(key) ?? []
        group.push(s)
        m.set(key, group)
    }
    return Array.from(m.values())
};
// 1. 使用哈希表
// 2. 遍历字符串数组
// 3. 将每个字符转换为数组并且sort
// 4. key设置为这个数组的string值
// 5. 去表里面找
// 6. push
// 7. 结果是 表的 vlues() 但记得 Array.from将 可迭代对象转为数组