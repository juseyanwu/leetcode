var maxProfit = function(prices) {
    // [7,1,5,3,6,4]
    let ans = 0
    let minPrice = prices[0]
    for (let p of prices) {
        ans = Math.max(ans, p - minPrice)
        minPrice = Math.min(p, minPrice)
    }
    return ans
};

// 注意 minPrice是 p 左侧 最小的价格
// 维护一个 第n天减去n天之前的价格最小值就是 ans 答案

var maxProfit = function(prices) {
    let ans = 0
    let minPrice = prices[0]
    for (let p of prices) {
        ans = Math.max(ans,p-minPrice)
        minPrice = Math.min(p,minPrice)
    }
    return ans
}