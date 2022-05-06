import sys
input = sys.stdin.readline
[N, K] = map(int, input().split())
temperatures = list(map(int, input().split()))
maxSum = 0
tmpSum = 0

for i in range(K):
    maxSum += temperatures[i]

tempSum = maxSum;

for i in range(K, N):
    tempSum = tempSum - temperatures[i - K] + temperatures[i];
    maxSum = max(maxSum, tempSum);

print(maxSum)