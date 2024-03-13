function solution(arr1, arr2) {
    const result = [];

    for (let i = 0; i < arr1.length; i++) { // arr1의 각 행에 대해
        result[i] = [];
        for (let j = 0; j < arr2[0].length; j++) { // arr2의 각 열에 대해
            let sum = 0;
            for (let k = 0; k < arr1[0].length; k++) { // 각 원소를 곱한 값의 합
                sum += arr1[i][k] * arr2[k][j];
            }
            result[i][j] = sum; // 결과 행렬에 합을 저장
        }
    }

    return result;
}