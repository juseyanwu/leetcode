var longestConsecutive = function(nums) {
    // nums = [100,4,200,1,3,2]
    if (nums.length < 1) return 0
    nums.sort((a, b) => b - a)
    let ans = 1
    let flag = false
    let x = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - nums[i + 1] === 1) {
            flag = true
        }
        else if (nums[i] - nums[i + 1] === 0) continue
        else {
            flag = false
        }
        x = flag ? x + 1 : 1
        ans = Math.max(ans, x)
    }
    return ans
};