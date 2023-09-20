function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (vowels[j] === word[i]) {
                // i=0 일 때, 한 자리 단어 5개, 두 자리 단어 25개, 세 자리 단어 125개, ... 
                // i=1 일 때, 한 자리 단어 5개, 두 자리 단어 25개, ...
                // i=2 일 때, 한 자리 단어 5개, ...
                for (let k = i; k < 5; k++) {
                    answer += (j * (Math.pow(5, 4 - k))) + (k === i);
                }
                break;
            }
        }
    }
    return answer;
}