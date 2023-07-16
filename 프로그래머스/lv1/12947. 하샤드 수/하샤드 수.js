const solution = (x) => {
    const stringX = x + "";
    return x % ([...stringX].map(v => +v).reduce((a,b) => a + b, 0)) ? false : true;
}