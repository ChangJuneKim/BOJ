const fs = require('fs');
const input = fs.readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const eggs = input.slice(1, N + 1).map(line => line.split(' ').map(Number));

const solution = () => {
    let maxBroken = 0;

    function simulate(index, brokenCount, durability, weight) {
        if (index === N) {
            maxBroken = Math.max(maxBroken, brokenCount);
            return;
        }

        // 현재 들고 있는 계란이 이미 깨져 있다면 다음 계란으로 넘어간다.
        if (durability[index] <= 0) {
            simulate(index + 1, brokenCount, durability, weight);
            return;
        }

        let allBroken = true;
        for (let i = 0; i < N; i++) {
            if (i !== index && durability[i] > 0) {
                allBroken = false;
                const newDurability = [...durability];
                const newWeight = [...weight];
                let newBrokenCount = brokenCount;

                newDurability[index] -= newWeight[i];
                newDurability[i] -= newWeight[index];

                if (newDurability[index] <= 0) newBrokenCount++;
                if (newDurability[i] <= 0) newBrokenCount++;

                simulate(index + 1, newBrokenCount, newDurability, newWeight);
            }
        }

        // 만약 칠 다른 계란이 없다면 다음 계란으로 넘어간다.
        if (allBroken) {
            simulate(index + 1, brokenCount, durability, weight);
        }
    }

    simulate(0, 0, eggs.map(egg => egg[0]), eggs.map(egg => egg[1]));

    console.log(maxBroken);
};

solution();
