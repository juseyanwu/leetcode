var removeElement = function(nums, val) {
    let left = 0
    for (let right = 0; right < nums.length; right ++) {
        if(nums[right] !== val) {
            nums[left] = nums[right]
            left ++
        }
    }
    return left // 因为在最后一次 left + 1 了 虽然一开始 let left = 0 但是最后删除完的元素数量就是left
};





var removeElement = function(nums, val) {
    let slow = 0
    for (let fast = 0; fast < nums.length; fast++) {
        if(nums[fast] !== val) {
            nums[slow] = nums[fast]
            slow++
        }
    }
    return slow
}
