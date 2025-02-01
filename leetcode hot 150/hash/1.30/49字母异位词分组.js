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