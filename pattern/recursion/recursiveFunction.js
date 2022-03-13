const collectOdds = arr => {
  // 외부함수
  let result = [];

  const helper = helperInput => {
    // 재귀함수
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  };

  helper(arr);

  return result;
};

let answer = collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(answer); // [1, 3, 5, 7, 9]

const collectOddValues = arr => {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  //[1].concat(collectOddValues([2, 3, 4, 5]);
  //				[].concat(collectOddValues([3, 4, 5]);
  //					 	[3].concat(collectOddValues([4, 5]);
  //								[].concat(collectOddValues([5]);
  //										[5].concat(collectOddValues([]);
  //                                                           []

  return newArr;
};

answer = collectOddValues([1, 2, 3, 4, 5]);

console.log(answer); // [ 1, 3, 5 ]
