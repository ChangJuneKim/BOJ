let answer;
// Math.pow 재귀로 구현하기
const power = (num1, num2) => {
  if (num2 === 0) return 1;

  return num1 * power(num1, num2 - 1);
};

answer = power(4, 4);

console.log(`제곱 : ${answer}`);
console.log(`내장 메서드 Math.pow : ${answer}`);

// 팩토리얼 구현하기
const factorial = number => {
  if (number === 0) return 1;

  return number * factorial(number - 1);
};

answer = factorial(5);

console.log(`팩토리얼 : ${answer}`);

// array의 모든 요소 곱하기
const productOfArray = array => {
  let arr = [...array];

  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
};

answer = productOfArray([1, 2, 3, 10]);

console.log(`배열의 모든 요소의 곱 : ${answer}`);

// 1~number까지 더하기
const recursiveRange = number => {
  if (number === 1) return 1;
  return number + recursiveRange(number - 1);
};

answer = recursiveRange(6);
console.log(`1 ~ number 까지 합 : ${answer}`);

// 피보나치
const fibonacci = number => {
  if (number <= 1) return number;
  return fibonacci(number - 1) + fibonacci(number - 2);
};

answer = fibonacci(4);
console.log(`피보나치 : ${answer}`);
