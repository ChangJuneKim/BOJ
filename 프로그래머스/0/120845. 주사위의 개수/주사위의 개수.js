function solution(box, n) {
    let count = 1;
    box.forEach(l => {
        count *= ~~(l / n)
    })
    
    return count;
}