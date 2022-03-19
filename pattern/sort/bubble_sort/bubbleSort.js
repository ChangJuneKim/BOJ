const bubbleSort = arr => {
  let noSwap; // 스왑 되지않았는지 체크하는 변수
  for (let i = 0; i < arr.length - 1; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // 전통적인 swap
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        //ES2015문법 swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
    console.log(`${i + 1}회 째 수행중입니다!!!`);
  }
  return arr;
};

console.log(bubbleSort([4, 1, 2, 3]));
