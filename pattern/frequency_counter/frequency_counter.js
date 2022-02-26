//입력
//anagram 문제입니다
const str1 = 'aazz';
const str2 = 'zzaa';

const fillObject = (str, obj) => {
  for (let value of str) {
    obj[value] ? (obj[value] += 1) : (obj[value] = 1);
  }

  return obj;
};

const solution = (str1, str2) => {
  const str1Obj = {};
  const str2Obj = {};

  if (str1.length !== str2.length) {
    console.log(false);
    return;
  }

  fillObject(str1, str1Obj);
  fillObject(str2, str2Obj);

  for (let key in str1Obj) {
    if (str1Obj[key] !== str2Obj[key]) {
      console.log(false);
      return;
    }
  }
  console.log(true);
};

solution(str1, str2);
