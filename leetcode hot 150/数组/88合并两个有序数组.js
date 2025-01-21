var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,nums1.length-m,...nums2)
    nums1.sort((a,b) => a - b)
};

// sort 方法 中会传入一个比较函数 当 a - b > 0 a会排在b后面
// 所以这里 a - b 则为 升序排序
// 要降序排序的话 用 b - a