function solution(people, limit) {
    let count = 0;
    people.sort((a, b) => a - b);
    
    let i = 0; // 시작 인덱스
    let j = people.length - 1; // 끝 인덱스
    
    while (i <= j) {
        // 가장 가벼운 사람과 가장 무거운 사람의 합이 limit 이하일 경우
        if (people[i] + people[j] <= limit) {
            i++;
        }
        j--;
        count++;
    }
    
    return count;
}
