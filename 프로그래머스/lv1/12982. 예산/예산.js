const solution = (d, budget) => {
    d.sort((a, b) => a - b);
    
    let sum = 0;
    let count = 0;
    for(let depart of d){
        if(sum + depart > budget) break;
        
        sum += depart;
        count++;
    }
    
    return count;
}