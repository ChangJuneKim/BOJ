from collections import deque

N = int(input())
queue = deque(i for i in range(1, N+1))

while len(queue) > 1:
    queue.popleft()
    to_bottom = queue.popleft()
    queue.append(to_bottom)

print(int(queue[0]))