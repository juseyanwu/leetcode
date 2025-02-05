var summaryRanges = function(nums) {
    // 输入：nums = [0,1,2,4,5,7]
    // 输出：["0->2","4->5","7"]
    let res = []
    let i = 0
    while(i < nums.length) {
        let low = i
        i++
        while(nums[i] === nums[i - 1] + 1) {
            i++
        }
        let high = i - 1
        let tem = ''
        if (high > low) {
            tem = nums[low] + '->' + nums[high]
        }
        else{
            tem = nums[low] + ''
        }
        res.push(tem)
    }
    return res
};