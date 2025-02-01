var canConstruct = function(ransomNote, magazine) {
    let m = new Map()
    for(let s of magazine) {
        m.set(s, (m.get(s) ?? 0) + 1)
    }
    for(let c of ransomNote) {
        if(!m.get(c)) return false
        m.set(c, m.get(c) - 1)
    }
    return true
}