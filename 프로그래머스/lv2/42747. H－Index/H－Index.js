function solution(citations) {
     citations.sort((a, b) => b - a);  // 내림차순 정렬

    for (let h = 0; h < citations.length; h++) {
        if (citations[h] < h + 1) { 
            return h;  // 현재의 h가 최대 H-Index
        }
    }

    return citations.length;  // 모든 논문의 인용 횟수가 논문의 수보다 많은 경우
}