from collections import deque

N = int(input())
commands = [list(input().split()) for _ in range(N)]
my_deque = deque()

for command in commands:
    if len(command) == 2:
        X = int(command[1])
        if command[0] == 'push_front':
            my_deque.appendleft(X)
        else:
            my_deque.append(X)
    else:
        if command[0] == 'pop_front':
            if len(my_deque) == 0:
                print(-1)
                continue
            print(my_deque.popleft())
        elif command[0] == 'pop_back':
            if len(my_deque) == 0:
                print(-1)
                continue
            print(my_deque.pop())
        elif command[0] == 'size':
            print(len(my_deque))
        elif command[0] == 'empty':
            if len(my_deque) == 0:
                print(1)
            else:
                print(0)
        elif command[0] == 'front':
            if len(my_deque) == 0:
                print(-1)
                continue
            print(my_deque[0])
        elif command[0] == 'back':
            if len(my_deque) == 0:
                print(-1)
                continue
            print(my_deque[-1])
