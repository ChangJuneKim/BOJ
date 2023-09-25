const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim()

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const solution = () => {
  const [n, k] = input.split(" ").map(Number)
  let head = new Node(1);
  let prev = head;
  for (let i = 2; i <= n; i++) {
    prev.next = new Node(i);
    prev = prev.next;
  }
  prev.next = head;

  let result = [];
  let current = head;
  while (result.length < n) {
    for (let i = 1; i < k; i++) {
      prev = current;
      current = current.next;
    }
    result.push(current.value);
    prev.next = current.next;
    current = current.next;
  }

  console.log(`<${result.join(", ")}>`);
}

solution();

