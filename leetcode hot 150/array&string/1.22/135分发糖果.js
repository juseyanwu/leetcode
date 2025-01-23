var candy = function(ratings) {
    // [1,2,2]
    let candies = new Array(ratings.length).fill(1)

    for(let i = 1;i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1
        }
    }

    for(let k = ratings.length - 2; k >= 0; k--) {
        if (ratings[k] > ratings[k + 1]) {
            candies[k] = Math.max(candies[k], candies[k + 1] + 1)
        }
    }

    return candies.reduce((a, b) => a + b)
};