// 盛水最多的容器
var maxArea = function(height) {
    let left = 0; let right = height.length - 1; let ans = 0
    while(left < right) {
    let cur = (right - left) * Math.min(height[left], height[right])
    ans = Math.max(ans, cur)
        if(height[left] < height[right]) {
            left++
        }
        else right--
    }
    return ans
}