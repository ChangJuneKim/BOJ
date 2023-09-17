function solution(prices) {
    return prices.map((price, index, arr) => {
        for(let i = index + 1; i < arr.length; i++) {
            if (arr[i] < price) {
                return i - index;
            }
        }
        return arr.length - index - 1;
    })
}