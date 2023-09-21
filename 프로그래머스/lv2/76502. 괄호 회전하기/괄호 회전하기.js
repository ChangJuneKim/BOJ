function isCorrect(s) {
    const stack = [];
    for (const c of s) {
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        } else {
            if (stack.length === 0) return false;
            const top = stack.pop();
            if (c === ')' && top !== '(') return false;
            if (c === '}' && top !== '{') return false;
            if (c === ']' && top !== '[') return false;
        }
    }
    return stack.length === 0;
}

function solution(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (isCorrect(s)) count++;
        s = s.slice(1) + s[0];
    }
    return count;
}