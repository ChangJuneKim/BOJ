function solution(quiz) {
    return quiz.map(q => {
        let left = 0;
        let right = 0;
        let flag = false;
        let op = 1;
        for(const char of q.split(" ")){
            if(flag) right = Number(char);
            if(char === "=") flag = true;
            if(char === "-") op = -1;
            if(char === "+") op = 1;
            if(!flag && Number.isInteger(Number(char))){
                left += (Number(char) * op);
            }
            console.log(char, left)
        }
        
        console.log(left, right);
        
        return left === right ? "O" : "X";
    })
}