const input =  require('fs').readFileSync(process.version === 'v20.13.1' ? 'input.txt' : '/dev/stdin').toString().trim().split("\n");

const solution = () =>{
  /*
  n: 다리를 건너는 트럭의 수
  w: 다리의 길이
  l: 다리의 최대하중
   */
  const [n, w, L] = input[0].split(' ').map(Number);
  const truckWeights = input[1].split(' ').map(Number);

  let time = 0;
  let bridge = Array(w).fill(0);
  let bridgeWeight = 0;

  while (truckWeights.length > 0 || bridgeWeight > 0) {
    time++;
    
    bridgeWeight -= bridge.shift();
    
    if (truckWeights.length > 0) {
      if (bridgeWeight + truckWeights[0] <= L) {
        let truck = truckWeights.shift();
        bridge.push(truck);
        bridgeWeight += truck;
      } else {
        bridge.push(0);
      }
    }
  }

  console.log(time);
};

solution();
