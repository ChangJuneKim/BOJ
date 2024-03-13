function solution(elements) {
    const answer = new Set();
    const n = elements.length;
    
    for (let start = 0; start < n; start++) {
        for (let end = start; end < start + n; end++) {
            let sumSubseq = 0;
            for (let i = start; i <= end; i++) {
                sumSubseq += elements[i % n];
            }
            answer.add(sumSubseq);
        }
    }
    
    return answer.size;
}