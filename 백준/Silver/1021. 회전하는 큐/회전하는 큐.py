from collections import deque

N, M = map(int, input().split())
target = list(map(int, input().split()))
queue = deque([i for i in range(1, N+1)])

count = 0
for i in target:
    while True:
        if queue[0] == i:
            queue.popleft()
            break
        else:
            if queue.index(i) < len(queue)/2:
                while queue[0] != i:  # dq의 첫번째 인덱스가 i와 같아질때까지 반복
                    queue.append(queue.popleft())
                    count += 1
            else:  # 뽑아내려는 수의 위치 인덱스가 dq의 길이를 반으로 나눈것보다 클때는 오른쪽으로 움직여야 최소
                while queue[0] != i:
                    queue.appendleft(queue.pop())
                    count += 1
print(count)