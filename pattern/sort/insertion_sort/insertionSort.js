const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    // 두 번째 요소부터 시작

    let currentValue = arr[i]; // gif의 빨간 블럭

    let j;
    // i - 1 까지는 이미 정렬된 배열이므로 i - 1 부터 역순으로 루프를 돌린다.
    // j 가 0 이상이면서
    for (j = i - 1; j > -1 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    // for loop을 빠져나오면 j가 1 더 줄어들기 때문에 j + 1
    arr[j + 1] = currentValue;
    console.log(arr);
  }
  return arr;
};

console.log(insertionSort([2, 1, 9, 76, 4]));
