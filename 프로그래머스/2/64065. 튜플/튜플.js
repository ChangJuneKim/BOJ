function solution(s) {
    const counter = {};
    s = s.slice(2, -2).split("},{"); // 앞뒤로 "{{"와 "}}"를 제거하고, "},{"로 나눈다.

    s.forEach(tuple => {
        tuple.split(",").forEach(number => {
            const num = parseInt(number);
            if (!counter[num]) counter[num] = 0;
            counter[num]++;
        });
    });

    return Object.keys(counter)
        .map(key => parseInt(key))
        .sort((a, b) => counter[b] - counter[a]); // 등장 횟수에 따라 내림차순 정렬
}