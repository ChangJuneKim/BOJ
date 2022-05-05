import sys

input = sys.stdin.readline

N = int(input()) # 4
A = list(map(int,input().split())) # 3 5 2 7
# 오큰수 NGE(i) 오른쪽에 있으면서 Ai보다 큰 수 중에 가장 왼쪽에 있는 수 3의 오큰수는 5 / 5의 오큰수는 7 / 2의 오큰수는 7 / 7의 오큰수는 -1

answer = [-1] * N
stack = [0]

for i in range(1, N):
    while stack:
        if A[stack[-1]] < A[i]:
            answer[stack.pop()] = A[i]
        else:
            break
    stack.append(i)

print(*answer)