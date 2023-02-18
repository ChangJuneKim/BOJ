function solution(before, after) {
    const a = [...before].reduce((obj, cur) => {
        if(obj[cur]){
            obj[cur] += 1;
        } else {
            obj[cur] = 1;
        }
        return obj;
    },{})
    
     const b = [...after].reduce((obj, cur) => {
        if(obj[cur]){
            obj[cur] += 1;
        } else {
            obj[cur] = 1;
        }
        return obj;
    },{})
    
    let answer = true
    for(const ch of before){
        if(a[ch] !== b[ch]){
            answer = false;
            break;
        }
    }
    return answer ? 1 : 0;
}