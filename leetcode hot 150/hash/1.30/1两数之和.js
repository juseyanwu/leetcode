var twoSum = function(nums, target) {
    // nums = [2,7,11,15], target = 9
    let m = new Map()
    for(let i = 0; i < nums.length; i++) {
        if (m.has(target - nums[i])) return [i, m.get(target - nums[i])]
        m.set(nums[i], i)
    }
}