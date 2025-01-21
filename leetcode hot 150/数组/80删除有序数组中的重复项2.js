var removeDuplicates = function(nums) {
    // [1,1,2]
    if (nums.length <= 2) {
        return nums.length
    }
    let slow = 2 ,fast = 2
    while (fast < nums.length) {
        if (nums[slow-2] !== nums[fast]) {
            nums[slow] = nums[fast]
            slow ++
        }
        fast ++
    }
    return slow
};
