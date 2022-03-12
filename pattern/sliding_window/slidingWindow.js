// 정수로 이루어진 배열에서 길이가 n인 서브배열의 합이 가장 큰 서브배열은 무엇인가?
// maxSubarraySum(arr, N)

const solution = (arr, N) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < N) return null;

  for (let i = 0; i < N; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = N; i < arr.length; i++) {
    tempSum = tempSum - arr[i - N] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

console.log(solution([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(solution([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(solution([4, 2, 1, 6], 1)); // 6
console.log(solution([4, 2, 1, 6, 2], 4)); // 13
console.log(solution([], 4)); // null
console.log(solution([2, 6, 9, 5, 6, 8, 1, 2, 3], 3)); // null
