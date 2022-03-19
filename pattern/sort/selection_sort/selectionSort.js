const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i !== min) {
      console.log(arr, `arr[i] : ${arr[i]}, arr[min] : ${arr[min]}`);
      [arr[i], arr[min]] = [arr[min], arr[i]];
      // let temp = arr[i];
      // arr[i] = arr[min];
      // arr[min] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([0, 2, 22, 10, 19, 17]));
