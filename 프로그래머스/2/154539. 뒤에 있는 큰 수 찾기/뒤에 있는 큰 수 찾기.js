function solution(numbers) {
    const answer = Array(numbers.length).fill(-1); // 결과 배열 초기화
    const stack = []; // 인덱스를 저장할 스택

    numbers.forEach((num, i) => {
        // 스택이 비어있지 않고, 현재 숫자가 스택의 최상위 요소보다 크면
        while (stack.length > 0 && numbers[stack.at(-1)] < num) {
            answer[stack.pop()] = num;
        }
        // 현재 인덱스를 스택에 추가
        stack.push(i);
    });

    return answer;
}