function solution(my_string) {
    const aeiou = 'aeiou';
    
    return [...my_string].filter(c => !aeiou.includes(c)).join("");
}