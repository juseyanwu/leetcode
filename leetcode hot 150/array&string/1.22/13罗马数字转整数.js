var romanToInt = function(s) {
    const symbolValues = new Map();
    symbolValues.set('I', 1);
    symbolValues.set('V', 5);
    symbolValues.set('X', 10);
    symbolValues.set('L', 50);
    symbolValues.set('C', 100);
    symbolValues.set('D', 500);
    symbolValues.set('M', 1000);
    let ans = 0
    for(let i = 0; i < s.length; i++) {
        if (symbolValues.get(s[i + 1]) - symbolValues.get(s[i]) > 0) {
            ans = ans - symbolValues.get(s[i])
        }
        else{
            ans = ans + symbolValues.get(s[i])
        }
    }
    return ans
}

console.log(romanToInt('LVIII'));
