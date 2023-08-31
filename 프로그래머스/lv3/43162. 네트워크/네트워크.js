function find(parent, ranks, x) {
    if (parent[x] !== x) {
        parent[x] = find(parent, ranks, parent[x]);
    }
    return parent[x];
}

function union(parent, ranks, a, b) {
    const rootA = find(parent, ranks, a);
    const rootB = find(parent, ranks, b);

    if (rootA !== rootB) {
        if (ranks[rootA] < ranks[rootB]) {
            parent[rootA] = rootB;
        } else {
            parent[rootB] = rootA;
            if (ranks[rootA] === ranks[rootB]) {
                ranks[rootA]++;
            }
        }
    }
}

function solution(n, computers) {
    const parent = [];
    const ranks = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        parent[i] = i;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (computers[i][j] === 1) {
                union(parent, ranks, i, j);
            }
        }
    }

    const uniqueNetworks = new Set();
    for (let i = 0; i < n; i++) {
        uniqueNetworks.add(find(parent, ranks, i));
    }

    return uniqueNetworks.size;
}