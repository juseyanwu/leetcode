var isHappy = function(n) {
    let m = new Map()

    function getSumOfSquares(num) {
        let sum = 0
        while(num > 0) {
            let n = num % 10
            sum += n * n  
            num = Math.floor(num/10) 
        }
        return sum
    }
    let x = n
    while(x !== 1) {
        if (m.get(x) > 1) return false
        m.set(x, (m.get(x) ?? 1) + 1)
        x = getSumOfSquares(x)
    }
    return true
};