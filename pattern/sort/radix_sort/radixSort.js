// 기수 정렬은 비교를 수행하지 않음
// 넣었다 뺐다

const getDigit = (num, i) => {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
};

console.log(getDigit(7323, 2));
