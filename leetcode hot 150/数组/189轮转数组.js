// 轮转数组就是  先翻转整个数组，然后  翻转前 k%n 个 然后 翻转后 k%n个
var rotate = function(nums, k) {
    let n = nums.length
    let revert = function(i , j) {
        while(i < j) {
            let  temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
            j--
        }
    }
    k = k%n
    revert(0,n-1)
    revert(0,k-1)
    revert(k,n-1)
};