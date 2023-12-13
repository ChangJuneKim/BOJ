const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split("\n");

const solution = () => {
    const N = +input[0];
    const paper = input.slice(1).map(row => row.split(' ').map(Number));

    // 결과를 저장할 객체
    const result = { '-1': 0, '0': 0, '1': 0 };

    // 주어진 범위의 종이가 모두 같은 숫자로 이루어져 있는지 확인하는 함수
    const isUniform = (x, y, size) => {
        const start = paper[x][y];
        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (paper[i][j] !== start) return false;
            }
        }
        return true;
    };

    // 종이를 잘라서 각 숫자별로 개수를 세는 함수
    const divide = (x, y, size) => {
        if (isUniform(x, y, size)) {
            result[paper[x][y].toString()]++;
            return;
        }

        const newSize = size / 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                divide(x + i * newSize, y + j * newSize, newSize);
            }
        }
    };

    divide(0, 0, N);

    console.log(result['-1']);
    console.log(result['0']);
    console.log(result['1']);
};

solution();
