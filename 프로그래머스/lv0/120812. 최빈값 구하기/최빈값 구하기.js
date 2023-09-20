function solution(array) {
    const priorities = Array.from({length: 1000}, () => 0);
    array.forEach(num => priorities[num]++);
    
    const maxCount = Math.max(...priorities);
    const freqOfMax = priorities.filter(val => val === maxCount).length;

    if (freqOfMax > 1) return -1;

    return priorities.indexOf(maxCount);
}
