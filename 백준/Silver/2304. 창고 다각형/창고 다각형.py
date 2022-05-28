N = int(input())

row_max = 0
col_max = 0

array = [[0, 0] for _ in range(1001)]

for i in range(N):
    x, y = map(int, input().split())
    row_max = max(x, row_max)# 마지막 기둥
    col_max = max(y, col_max)# 가장 높은 기둥

    array[x] = [x, y]

max_check = 0
max_index = 0

for i in range(1, row_max + 1):
    if array[i] != 0:
        if array[i][1] == col_max:
            max_index = i

result = 0

for i in range(1, max_index):
    max_check = max(max_check, array[i][1])
    result += max_check

max_check = 0

for i in range(row_max, max_index, -1):
    max_check = max(max_check, array[i][1])
    result += max_check

print(result + col_max)