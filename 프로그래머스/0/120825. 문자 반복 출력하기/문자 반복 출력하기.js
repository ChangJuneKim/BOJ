function solution(my_string, n) {
    const result = [];
    [...my_string].forEach(c => {
        for(let i = 0; i < n; i++){
            result.push(c);
        }
    })
    
    return result.join("")
}