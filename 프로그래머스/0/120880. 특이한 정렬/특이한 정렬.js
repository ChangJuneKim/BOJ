function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const distanceA = Math.abs(a - n);
        const distanceB = Math.abs(b - n);
        
        if (distanceA === distanceB) {
            return b - a; // 거리가 같다면 더 큰 수를 앞에 배치
        } else {
            return distanceA - distanceB; // 거리에 따라 정렬
        }
    });
}