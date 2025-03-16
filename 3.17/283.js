//移动零
// nums=[0,1,0,3,12]
var moveZeroes = function(nums) {
    let i0 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[i]
            nums[i] = nums[i0]
            nums[i0] = temp
            i0++;
        }
    }
};

// 这题很妙，维护最左边的零的下标i0