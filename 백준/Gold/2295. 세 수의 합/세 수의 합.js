const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split("\n");


const N = parseInt(input[0]);
const arr = input.slice(1, N + 1).map(Number);
arr.sort((a, b) => a - b);

const sum = [];
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        sum.push(arr[i] + arr[j]);
    }
}

sum.sort((a, b) => a - b);

for (let i = N - 1; i >= 0; i--) {
    for (let j = N - 1; j >= 0; j--) {
        const minus = arr[i] - arr[j];
        if (binarySearch(sum, minus)) {
            console.log(arr[i]);
            return;
        }
    }
}

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return false;
}
