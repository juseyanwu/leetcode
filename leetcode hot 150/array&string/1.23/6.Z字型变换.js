var convert = function(s, numRows) {
    if(numRows === 1) {
        return s
    }

    const rows = new Array(numRows).fill("")

    let loc = 0
    let down = false

    for (const c of s) {
        rows[loc] += c
        if (loc === 0 || loc === numRows - 1){
            down = !down
        }
        loc += down === true ? 1 : -1
    }

    let ans = ""
    for(const row of rows) {
        ans += row
    }
    return ans
};