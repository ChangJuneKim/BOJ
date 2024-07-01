function solution(keyinput, board) {
    const maxWidth = Math.floor(board[0] / 2);
    const maxHeight = Math.floor(board[1] / 2);
    
    const arrows = {
        "left": [-1, 0],
        "right": [1, 0],
        "up": [0, 1],
        "down" : [0, -1]
    }
    
    function isIn(nx, ny) {
        return -maxWidth <= nx && nx <= maxWidth && -maxHeight <= ny && ny <= maxHeight;
    }
    
    let [x, y] = [0, 0];
    keyinput.forEach(key => {
        const [dx, dy] = arrows[key];
        const nx = x + dx;
        const ny = y + dy;
        
        if(isIn(nx, ny)){
            x = nx;
            y = ny;
        }
    })
    
    return [x, y];
}