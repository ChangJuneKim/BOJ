function solution(msg) {
    const dictionary = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    const output = [];
    
    let index = 0;

    for (index = 0; index < msg.length;) {
        let w = msg[index];
        let k = 1;

        for (; index + k <= msg.length; k++) {
            let nextW = w + msg[index + k];
            if (!dictionary.includes(nextW)) {
                break;
            }
            w = nextW;
        }

        output.push(dictionary.indexOf(w));

        if (index + k <= msg.length) {
            dictionary.push(w + msg[index + k]);
        }

        index += w.length;
    }

    return output;
}