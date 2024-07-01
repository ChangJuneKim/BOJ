function solution(num_list, n) {
    const result = [];
    
    let arr = [];
    for(let i = 0; i <= num_list.length; i++){
        if(arr.length === n) {
            result.push(arr);
            arr = [];
        }
        arr.push(num_list[i]);
    }
    
    return result;
}