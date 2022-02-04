# [Bronze III] 네 번째 점 - 3009 

[문제 링크](https://www.acmicpc.net/problem/3009) 

### 성능 요약

메모리: 9332 KB, 시간: 124 ms

### 분류

기하학(geometry), 구현(implementation)

### 문제 설명

<p>세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오.</p>

### 입력 

 <p>세 점의 좌표가 한 줄에 하나씩 주어진다. 좌표는 1보다 크거나 같고, 1000보다 작거나 같은 정수이다.</p>

### 출력 

 <p>직사각형의 네 번째 점의 좌표를 출력한다.</p>


### XOR로 접근 풀이

같은 대상에 대해 같은 XOR을 두번 하면 자기 자신이 나온다.

예를 들어 65 ^ 42를 하면 107이 나오는데
이 107을 다시 107 ^ 42를 하면 65가 나온다

const fs = require('fs');

let X = 0, Y = 0;

fs.readFileSync('/dev/stdin').toString().split('\n').forEach((line) => {
    const [x, y] = line.split(' ').map(Number);
    X ^= x;
    Y ^= y;
})

console.log(X, Y);

