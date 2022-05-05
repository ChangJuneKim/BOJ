N = int(input())

count = 0
stack = []
result = []
cant_make = False

for _ in range(N):
    x = int(input())

    while count < x:
        count += 1
        stack.append(count)
        result.append('+')

    if stack[-1] == x:
        stack.pop()
        result.append('-')
    else:
        cant_make = True
        break

if cant_make:
    print("NO")
else:
    print("\n".join(result))