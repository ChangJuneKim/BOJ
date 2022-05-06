import sys
input = sys.stdin.readline

[N, M] = map(int, input().split())
numbers = list(map(int, input().split()))


prefix_sum = [0]

for number in numbers:
    prefix_sum.append(prefix_sum[-1] + number)

for k in range(1, M+1):
    [i, j] = map(int, input().split())
    print(prefix_sum[j] - prefix_sum[i-1])