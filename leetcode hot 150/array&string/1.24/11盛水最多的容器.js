var maxArea = function(height) {
    // [1,8,6,2,5,4,8,3,7]
    let left = 0
    let right = height.length - 1
    let ans = 0
    while (left < right) {
        let lmax = height[left]
        let rmax = height[right]
        let x = Math.min(lmax, rmax) * (right - left)
        ans = Math.max(ans, x)
        lmax > rmax ? right-- : left++
    }
    return ans
}

// 维护一个最大的答案 ans，如果左边比较矮就移动左边指针，反之右边
