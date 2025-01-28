var threeSum = function(nums) {
    let ans = []
    if (nums.length < 3) return ans // 特殊情况
    nums.sort((a,b) => a - b) // 排序

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break
        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
        let L = i + 1 , R = nums.length - 1
        while(L < R) {
            let sum = nums[i] + nums[L] + nums[R]
            if (sum === 0 ){
                ans.push([nums[i],nums[L],nums[R]])
                while (L<R && nums[L] == nums[L+1]) L++; // 去重
                while (L<R && nums[R] == nums[R-1]) R--; // 去重
                L++
                R--
            } 
            else if (sum < 0) L++
            else if (sum > 0) R--
        }
    }

    return ans
};

console.log(threeSum([-1,0,1,2,-1,-4]));
