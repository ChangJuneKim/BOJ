function solution(my_str, n) {
    const result = [];
    const myString = [...my_str]
    while(myString.length > 0){
        result.push(myString.splice(0, n).join(""))    
    }
    
    return result;
}