function solution(n, input) {
    let th;
    let count = 1;

    const prev = Array.from({length: n + 1}, () => []);
    console.log(prev)
    const words = [...input];
    
    for(let i = 0; i < words.length; i++){
        th = (i % n) + 1;
        count++;
        
        if(prev.flat().includes(words[i])){
            return [th, prev[th].length + 1]
        }
        
        if(i > 0 && words[i].at(0) !== words[i - 1]?.at(-1)){
            return [th, prev[th].length + 1]
        } 
        
        prev[th].push(words[i]);
    }
    
    return [0, 0]
}