var isPalindrome = function(s) {
    var isValid = function (c) {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
    };
    let left = 0, right = s.length - 1
    while(left < right) {
        if (!isValid(s[left])) {
            left++
        }
        else if (!isValid(s[right])) {
            right--
        }
        else if (s[left].toUpperCase() !== s[right].toUpperCase()) {
            return false
        }
        else {
            left++
            right--
        }
    }
    return true
};
// 可以用函数    var isValid = function (c) {
//     return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
// };

// 也可以用正则  /[a-zA-Z0-9]/.test(xxxxxx)  / / 是标志这是一个正则




var isPalindrome = function(s) {
    let left = 0, right = s.length - 1
    while(left < right) {
        if (!(/[a-zA-Z0-9]/).test(s[left])) {
            left++
        }
        else if (!(/[a-zA-Z0-9]/).test(s[right])) {
            right--
        }
        else if (s[left].toUpperCase() !== s[right].toUpperCase()) {
            return false
        }
        else {
            left++
            right--
        }
    }
    return true
}