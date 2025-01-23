var canJump = function(nums) {
    let mx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > mx) { // 无法到达 i
            return false;
        }
        mx = Math.max(mx, i + nums[i]); // 从 i 最右可以跳到 i + nums[i]
    }
    return true;
};
// [2,3,1,1,4]

// 维护一个在第i个位置能到达的最大距离






var canJump = function(nums) {
    let mx = 0
    for(let i = 0; i < nums.length; i++) {
        if (mx < i) {
            return false
        }
        mx = Math.max(mx, i + nums[i])
    }
    return true
}