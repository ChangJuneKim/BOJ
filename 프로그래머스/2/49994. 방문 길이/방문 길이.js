function solution(dirs) {
    const dx = { 'L': -1, 'R': 1, 'U': 0, 'D': 0 };
    const dy = { 'L': 0, 'R': 0, 'U': 1, 'D': -1 };
    
    const visited = new Set();
    
    const answer = getPathLength();
    
    return answer;
    
    function getPathLength(){
        let [x, y] = [0, 0];
        
        for(let i = 0; i < dirs.length; i++){
            const dir = dirs[i];
            const nx = x + dx[dir];
            const ny = y + dy[dir];
            
            if(isOut(nx, ny)) continue;
            
            const path1 = `${x},${y},${nx},${ny}`;
            const path2 = `${nx},${ny},${x},${y}`;
                
            if (!visited.has(path1) && !visited.has(path2)) {
                visited.add(path1);
                visited.add(path2);
            }
            
            x = nx;
            y = ny;
        }
        
        return visited.size / 2;
    }
    
    function isOut(nx, ny){
        return nx < -5 || nx > 5 || ny < -5 || ny > 5
    }
}