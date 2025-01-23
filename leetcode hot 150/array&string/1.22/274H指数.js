var hIndex = function(citations) {
    citations.sort((a, b) => a - b);
    let h = 0, i = citations.length - 1; 
    while (i >= 0 && citations[i] > h) {
        h++; 
        i--;
    }
    return h;
};

// 输入 citations = [3,0,6,1,5]
// 排序之后  [0,1,3,5,6]
// 从后向前遍历，先把h设置为0，然后只要 citations[i] > 我们设置的h， h + 1 ，并且继续向前遍历

var hIndex = function(citations) {
    citations.sort((a,b) => b - a)
    let h = 0
    for (let i = 0; i < citations.length; i++){
        if (citations[i] > h) {
            h++
        }
    }
    return h
}

// 递减排序更容易理解
