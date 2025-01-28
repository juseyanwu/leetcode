var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1
    while(left < right) {
        let x = numbers[left] + numbers[right]
        if (x === target) {
            return [left+1, right+1]
        }
        else{
            x > target ? right-- : left++
        }
    }
};
// 解题关键是 数组是 从小到大的 所以如果两个指针所指的值 判断比 target 大或者小来移动指针