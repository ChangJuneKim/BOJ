function solution(brown, yellow) {
    let factors = getFactors(yellow);

    for (let i = 0; i < factors.length; i++) {
        let height = factors[i]; // 높이와 너비의 위치 변경
        let width = yellow / height;
        
        // 갈색 격자의 수를 계산
        let currentBrown = 2 * width + 2 * height + 4;
        
        if (currentBrown === brown) {
            return [width + 2, height + 2]; // 노란색 격자 주위에 갈색 격자가 있으므로 +2를 합니다.
        }
    }
}

function getFactors(num) {
    let factors = [];
    
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}

