var minSubArrayLen = function(target, nums) {
    // [1,2,3,4,5] 11
    let window = 1
    while(window <= nums.length) {
        for(let i = 0; i + window <= nums.length; i++) {
            let x = nums.slice(i,i + window)
            let sum = x.reduce((a,b) => a + b)
            if (sum >= target) return window
        }
        window ++
    }
    return 0
};
// 超时了


var minSubArrayLen = function(target, nums) {
    // 长度计算一次
    const len = nums.length;
    let l = r = sum = 0,
        res = len + 1; // 子数组最大不会超过自身
    while(r < len) {
        sum += nums[r++];
        // 窗口滑动
        while(sum >= target) {
            // r始终为开区间 [l, r)
            res = res < r - l ? res : r - l; // 维护 res 为最小值
            sum-=nums[l++];
        }
    }
    return res > len ? 0 : res;
};

// 先让右指针去往后遍历，找到 sum >= target 然后尽量去缩短 左指针的位置



var minSubArrayLen = function(target, nums) {
    let left = 0
    let right = 0
    let sum = 0
    let len = nums.length
    let ans = len + 1
    while(right < len) {
        sum += nums[right]
        right++
        while(sum >= target) {
            ans = Math.min(ans, right - left)
            sum -= nums[left]
            left++
        }
    }
    return ans <= len ? ans : 0
}