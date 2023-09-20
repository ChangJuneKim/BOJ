function dfs(graph, start, visited) {
    visited[start] = true;
    let count = 1;
    for (let neighbor of graph[start]) {
        if (!visited[neighbor]) {
            count += dfs(graph, neighbor, visited);
        }
    }
    return count;
}

function solution(n, wires) {
    let answer = Infinity;

    // 그래프 생성
    let graph = Array.from({ length: n + 1 }, () => []);
    for (let [v1, v2] of wires) {
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    // 각 간선을 하나씩 제거하며 연결 성분의 크기의 차이 계산
    for (let [v1, v2] of wires) {
        const idx1 = graph[v1].indexOf(v2);
        const idx2 = graph[v2].indexOf(v1);
        graph[v1].splice(idx1, 1);
        graph[v2].splice(idx2, 1);
        
        let visited = Array(n + 1).fill(false);
        let count1 = dfs(graph, v1, visited);
        let count2 = dfs(graph, v2, visited);
        
        answer = Math.min(answer, Math.abs(count1 - count2));
        
        graph[v1].push(v2);
        graph[v2].push(v1);
    }

    return answer;
}
