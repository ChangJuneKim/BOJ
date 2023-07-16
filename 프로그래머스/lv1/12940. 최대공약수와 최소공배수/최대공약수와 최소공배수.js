function solution(n, m) {
  let answer = [];

  const greatest = (a, b) => {
    if (b === 0) {
      return a;
    }
    return greatest(b, a % b);
  };

  const least = (a, b) => (a * b) / greatest(a, b);

  answer = [greatest(n, m), least(n, m)];

  return answer;
}