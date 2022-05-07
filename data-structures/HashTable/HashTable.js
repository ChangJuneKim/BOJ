class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME_NUMBER + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);

    if (this.keyMap[index]) {
      const result = this.keyMap[index].filter(item => item[0] === key);
      return result[0][1];
    }

    return undefined;
  }

  values() {
    const valuesArray = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArray.includes(this.keyMap[i][j][1])) {
            valuesArray.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return valuesArray;
  }

  keys() {
    const keysArray = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArray.includes(this.keyMap[i][j][1])) {
            keysArray.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return keysArray;
  }
}

const hashTable = new HashTable(17);

hashTable.set('maroon', '#800000');
hashTable.set('yellow', '#FFFF00');
hashTable.set('olive', '#808000');
hashTable.set('salmon', '#FA8072');
hashTable.set('lightcoral', '#F08080');
hashTable.set('mediumvioletred', '#C71585');
hashTable.set('plum', '#DDA0DD');

console.log(hashTable.get('salmon'));

console.log(hashTable.values());
console.log(hashTable.keys());

console.log(hashTable.keyMap);
