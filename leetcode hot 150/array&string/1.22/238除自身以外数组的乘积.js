var productExceptSelf = function(nums) {
    let suf = new Array(nums.length)
    suf[nums.length - 1] = 1
    for(let i = nums.length - 2; i >= 0; i--) {
        suf[i] = suf[i + 1] * nums[i + 1]
    }
    let pre = 1
    for(let k = 0; k < nums.length; k++) {
        suf[k] = suf[k] * pre
        pre = pre * nums[k]
    }
    return suf
};

console.log(productExceptSelf([1,2,3,4]));


// suf 是 第 i 个数字的右边的所有乘积， pre是左边的
// 输入: nums = [1,2,3,4]
// 输出: [24,12,8,6]