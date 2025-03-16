var twoSum = function(nums, target) {
    let map = {}
    for(let i = 0; i < nums.length; i++) {
        let cur = nums[i]
        let targetNum = target - cur
        let targetIndex = map[targetNum]
        if (targetIndex !== undefined) {
            return [i, targetIndex]
        }
        else map[cur] = i
    }
};