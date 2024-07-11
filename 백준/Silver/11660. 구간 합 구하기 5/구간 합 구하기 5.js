const input = require('fs').readFileSync(process.version === 'v20.13.1' ? 'input.txt' : '/dev/stdin').toString().trim().split("\n");

const solution = () => {
    let inputIndex = 0;
    const [N, M] = input[inputIndex++].split(' ').map(Number);
    const matrix = [];
    
    // 행렬 데이터 입력
    for (let i = 0; i < N; i++) {
        matrix.push(input[inputIndex++].split(' ').map(Number));
    }

    // 이차원 누적 합 배열 초기화
    const prefixSum = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            prefixSum[i][j] = matrix[i-1][j-1]
                            + prefixSum[i-1][j]
                            + prefixSum[i][j-1]
                            - prefixSum[i-1][j-1];
        }
    }

    // 쿼리 처리
    const results = [];
    for (let k = 0; k < M; k++) {
        const [x1, y1, x2, y2] = input[inputIndex++].split(' ').map(Number);
        const sum = prefixSum[x2][y2]
                  - (y1 > 1 ? prefixSum[x2][y1-1] : 0)
                  - (x1 > 1 ? prefixSum[x1-1][y2] : 0)
                  + (x1 > 1 && y1 > 1 ? prefixSum[x1-1][y1-1] : 0);
        results.push(sum);
    }

    // 결과 출력
    console.log(results.join('\n'));
};

solution();
