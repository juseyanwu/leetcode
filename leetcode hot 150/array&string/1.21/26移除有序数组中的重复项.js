var removeDuplicates = function(nums) {
    // [1,1,2]
    let left = 0
    for (let right = 1; right < nums.length; right ++) {
        if (nums[left] !== nums[right]) {
            left ++
            nums[left] = nums[right]
        }
    }
    return left + 1
};



var removeDuplicates = function(nums) {
    //[1,2,2,3,3,4,5,6,6]
    let left = 1
    for (let right = 1; right < nums.length; right++) {
        if (nums[right] !== nums[right-1]) {
            nums[left] = nums[right]
            left++
        }
    }
    return left
}
