function solution(dots) {
    const xValues = dots.map(dot => dot[0]);
    const yValues = dots.map(dot => dot[1]);
    
    const width = Math.max(...xValues) - Math.min(...xValues);
    const height = Math.max(...yValues) - Math.min(...yValues);
    
    return width * height;
}