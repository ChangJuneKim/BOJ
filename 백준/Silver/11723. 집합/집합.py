import sys

N = int(input())

S = set()

for i in range(N):
    data = sys.stdin.readline().strip().split()
    if len(data) == 1:
        if data[0] == 'all':
            S = set(i for i in range(1, 21))
        else: # empty인 경우
            S.clear()
        continue

    op, x = data
    x = int(x)

    if op == 'add':
        S.add(x)
    elif op == 'remove':
        S.discard(x)
    elif op == 'toggle':
        if x in S:
            S.discard(x)
        else:
            S.add(x)
    elif op == 'check':
        if x in S:
            print(1)
        else:
            print(0)