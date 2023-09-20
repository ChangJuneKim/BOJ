function solution(N) {
    let battery = 0;
    while (N > 0) {
        if (N % 2 === 0) { // 순간이동
            N = N / 2;
        } else { // 점프
            N -= 1;
            battery += 1;
        }
    }
    return battery;
}
