function solution(brown, yellow) {
    let total = brown + yellow;

    for (let height = 3; height <= total; height++) {
        if (total % height === 0) {
            let width = total / height;
            if ((width - 2) * (height - 2) === yellow) {
                return [width, height];
            }
        }
    }
}