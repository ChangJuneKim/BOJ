const arr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

const binarySearch = (sortedArray, value) => {
  let min = 0;
  let max = sortedArray.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let currentElement = sortedArray[mid]; //배열의 중간원소

    if (currentElement < value) {
      // 만약 37(value)이 arr[mid]보다 크다면
      min = mid + 1; // min을 0에서 mid + 1으로 (mid를 기준으로 오른쪽 배열)
    } else if (currentElement > value) {
      // 만약 37(value)이 arr[mid]보다 작다면
      max = mid - 1; // max를 배열 끝에서에서 mid - 1으로 (mid를 기준으로 왼쪽 배열)
    } else {
      return mid;
    }
  }

  return -1;
};

console.log(binarySearch(arr, 37)); // 11
