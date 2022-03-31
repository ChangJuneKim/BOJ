const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('');

const solution = input => {
  const string = input;

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetCounts = new Array(26).fill(0);

  string.forEach(char => alphabetCounts[alphabet.indexOf(char)]++);

  console.log(alphabetCounts.join(' '));
};
solution(input);