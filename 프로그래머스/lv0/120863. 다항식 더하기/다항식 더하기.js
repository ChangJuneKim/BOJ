function solution(polynomial) {
    const arr = polynomial.split(' + ');
    const x항 = arr.filter(v => v.includes('x')).map(v => parseInt(v.replace('x', '')) || 1).reduce((acc, cur) => acc + cur, 0);
    const 일반항 = arr.filter(v => !v.includes('x')).reduce((acc, cur) => acc + parseInt(cur), 0); 
    
    const answer = [];
    if(x항){
        if(x항 === 1) {
            answer.push('x')
        } else {
            answer.push(`${x항}x`)
        }
    }
    
    if(일반항){
        answer.push(일반항)
    }
    
    return answer.join(" + ");
}