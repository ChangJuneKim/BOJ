function solution(my_string, num1, num2) {
    const myArr = [...my_string];
    
    const num1Char = myArr[num1];
    const num2Char = myArr[num2];
    
    myArr[num1] = num2Char;
    myArr[num2] = num1Char;
    
    return myArr.join("");
}