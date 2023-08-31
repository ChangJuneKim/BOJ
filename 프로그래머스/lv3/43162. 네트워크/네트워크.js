function solution(n, computers) {
    const visited = Array(n).fill(false);

    let answer = 0;

    const dfs = (index) => {
        visited[index] = true;
        for(let i = 0; i < n; i++) {
            if(computers[index][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }

    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            dfs(i);
            answer++;
        }
    }

    return answer;
}

// function solution(n, computers) {
//     const visited = Array(n).fill(false);
//     let answer = 0;

//     const bfs = (index) => {
//         let queue = [index];

//         while(queue.length > 0) {
//             let current = queue.shift();
//             visited[current] = true;
//             for(let i = 0; i < n; i++) {
//                 if(computers[current][i] === 1 && !visited[i]) {
//                     queue.push(i);
//                 }
//             }
//         }
//     }

//     for(let i = 0; i < n; i++) {
//         if(!visited[i]) {
//             bfs(i);
//             answer++;
//         }
//     }

//     return answer;
// }
