const fs = require('fs');
const filePath =  '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim();

const croatiaAlphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

const solution = input => {
  for (let alphabet of croatiaAlphabet) {
    input = input.split(alphabet).join('Q');
  }
  console.log(input.length);
};

solution(input);
