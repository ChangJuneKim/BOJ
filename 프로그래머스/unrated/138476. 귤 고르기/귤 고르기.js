function solution(k, tangerine) {
    let frequency = {};

    // 각 귤 크기의 빈도수를 계산
    for (let size of tangerine) {
        if (frequency[size] === undefined) frequency[size] = 1;
        else frequency[size]++;
    }

    // 빈도수를 배열에 담고, 빈도수를 기준으로 내림차순 정렬
    let sortedFrequency = Object.entries(frequency).sort((a, b) => b[1] - a[1]);

    let count = 0;
    let i = 0;
    while (k > 0 && i < sortedFrequency.length) {
        // k개의 귤을 선택하거나, 가능한 귤을 모두 선택
        k -= sortedFrequency[i][1];
        count++;
        i++;
    }
    
    return count;
}
