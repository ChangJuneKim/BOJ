function solution(prices) {
    // 각 주식의 가격이 떨어지지 않은 기간을 저장할 배열을 초기화합니다.
    // 처음에는 모든 가격이 떨어지지 않았다고 가정하고 배열의 길이만큼 0으로 채웁니다.
    const result = Array(prices.length).fill(0);
    
    // 스택을 초기화합니다. 이 스택에는 아직 가격이 떨어지지 않은 주식의 인덱스를 저장합니다.
    const stack = [];

    // 주식 가격 배열을 순회합니다.
    for (let i = 0; i < prices.length; i++) {
        // 현재 주식 가격이 스택의 top에 있는 주식 가격보다 낮은 경우,
        // 스택의 top에 있는 주식 가격이 떨어진 것이므로 스택에서 pop하고 
        // 결과 배열에 현재 시점과 pop한 시점의 차이를 저장합니다.
        while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
            const last = stack.pop();
            result[last] = i - last;
        }
        // 현재 주식 가격의 인덱스를 스택에 push합니다.
        stack.push(i);
    }

    // 모든 주식 가격을 확인한 후, 스택에 남아 있는 주식 가격들은 
    // 떨어지지 않고 배열의 끝까지 갔으므로 
    // 해당 주식 가격이 떨어지지 않은 기간을 계산해서 결과 배열에 저장합니다.
    while (stack.length) {
        const last = stack.pop();
        result[last] = prices.length - last - 1;
    }

    return result;
}
