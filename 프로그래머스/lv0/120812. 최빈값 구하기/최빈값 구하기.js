function solution(array) {
    const priorities = Array.from({length: Math.max(...array) + 1}, () => 0);
    array.forEach(num => priorities[num]++);
    
    const max1 = priorities.indexOf(Math.max(...priorities));
    const max2 = priorities.lastIndexOf(Math.max(...priorities));
    
    console.log(priorities)
    
    return max1 === max2 ? max1 : -1;
}