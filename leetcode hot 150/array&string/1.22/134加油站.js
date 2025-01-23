var canCompleteCircuit = function(gas, cost) {
    let s = 0 // 油量  假设油量可以为负数
    let minS = 0 // 最小油量
    let ans = 0
    for(let i = 0; i < gas.length; i++) {
        s = s + gas[i] - cost[i]
        if (s < minS) {
            minS = s
            ans = i + 1
        }
    }
    return s < 0 ? -1 : ans
};