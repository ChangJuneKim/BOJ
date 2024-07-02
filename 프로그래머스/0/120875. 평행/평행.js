function solution(dots) {
    // 기울기를 구하는 함수
    function getSlope(dot1, dot2) {
        const [x1, y1] = dot1;
        const [x2, y2] = dot2;
        if (x1 === x2) return Infinity; // 수직선의 경우
        return (y2 - y1) / (x2 - x1);
    }

    // 주어진 네 점에서 가능한 두 직선 쌍을 모두 생성
    const pairs = [
        [[dots[0], dots[1]], [dots[2], dots[3]]],
        [[dots[0], dots[2]], [dots[1], dots[3]]],
        [[dots[0], dots[3]], [dots[1], dots[2]]]
    ];

    // 각 쌍의 기울기를 비교하여 평행 여부를 확인
    for (let pair of pairs) {
        const slope1 = getSlope(pair[0][0], pair[0][1]);
        const slope2 = getSlope(pair[1][0], pair[1][1]);
        if (slope1 === slope2) {
            return 1;
        }
    }

    return 0;
}