var containsNearbyDuplicate = function(nums, k) {
    let M = new Map()
    for(let i = 0; i < nums.length; i++) {
        if (M.has(nums[i])) {
            if (i - M.get(nums[i]) <= k) return true
        }
        M.set(nums[i], i)
    }
    return false
};