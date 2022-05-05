N = int(input())
times = list(map(int, input().split()))

times.sort()
temp = times[:]
for i in range(N):
    times[i] = sum(temp[0:i+1])

print(sum(times))