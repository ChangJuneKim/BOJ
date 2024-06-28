function solution(my_string) {
    return [...my_string].reduce((acc, cur) => {
        if(!isNaN(parseInt(cur))){
            return acc + parseInt(cur)
        }
        
        return acc;
    }, 0)
}