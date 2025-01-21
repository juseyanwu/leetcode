var majorityElement = function(nums) {
    let m = new Map()
    for (let i = 0;i < nums.length; i++) {
        if (m.get(nums[i])) {
            m.set(nums[i],m.get(nums[i]) + 1)
        }
        else{
            m.set(nums[i], 1)
        }
    }
    for ( const [key, value] of m) {
        if (value >= (nums.length/2)){
            return key
        }
    }
};

// 减少一个循环
var majorityElement = function(nums) {
    let m = new Map()
    for (let i = 0;i < nums.length; i++) {
        if (m.get(nums[i])) {
            m.set(nums[i],m.get(nums[i]) + 1)
        }
        else{
            m.set(nums[i], 1)
        }
        if (m.get(nums[i]) >= nums.length/2){
            return nums[i]
        }
    }
};