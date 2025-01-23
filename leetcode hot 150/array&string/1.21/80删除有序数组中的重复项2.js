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



var removeDuplicates = function(nums) {
    // [1,2,2,2,2,3,3,3,4,5,6,6,6]
    let n = nums.length
    if (n<=2) {
        return n
    }
    let slow = 2
    let fast = 2
    while(fast < n) {
        if (nums[slow - 2] !== nums[fast]) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
}

// if (nums[slow - 2] !== nums[fast]) {
//     nums[slow] = nums[fast]
//     slow++
// }
