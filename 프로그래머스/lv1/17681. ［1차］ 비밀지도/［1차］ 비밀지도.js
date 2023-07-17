const solution = (n, arr1, arr2) => {
  const map1ToBi = arr1.map(number => number.toString(2).padStart(n, "0").split(""));
  const map2ToBi = arr2.map(number => number.toString(2).padStart(n, "0").split(""));

  const map = Array.from({length: n}, () => Array(n).fill(" "));
  
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      
      if(+map1ToBi[i][j] + +map2ToBi[i][j] > 0){
        map[i][j] = '#'
      } else {
        map[i][j] = ' '
      }
    }
  }
  return map.map(item => item.join(""));
}