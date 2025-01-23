// [2,3,1,1,4]
var jump = function(nums) {
    let position = nums.length - 1
    let step = 0
    while(position > 0) {
        for(let i = 0; i < nums.length; i++) {
            if (nums[i] + i >= position) {
                position = i
                step++
                break;
            }
        }
    }
    return step
};
// 反向贪心的去查找  注意 break 跳出查找