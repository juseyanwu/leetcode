var maxProfit = function(prices) {
    let ans = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - prices[i-1] > 0) {
            ans = ans + prices - prices[i-1]
        } 
    }
    return ans
};

// 只要后一天的价格比前一天的价格高，我们就算入我们的收益其中
var maxProfit = function(prices) {
    let ans = 0
    for (let i = 1; i < prices.length; i++) {
        if(prices[i] - prices[i-1] > 0) {
            ans = ans + prices[i] - prices[i-1]
        }
    }
    return ans
}
