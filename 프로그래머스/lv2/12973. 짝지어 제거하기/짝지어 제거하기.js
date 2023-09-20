function solution(s) {
    const stack = [];
    let top = null;

    for (const char of s) {
        if (top === char) {
            stack.pop();
            top = stack[stack.length - 1];
        } else {
            stack.push(char);
            top = char;
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}
