from collections import deque

T = int(input())

for _ in range(T):
    N, M = map(int, input().split())
    queue = deque(list(map(int, input().split())))

    count = 0

    while queue:

        max_value = max(queue)
        front = queue.popleft() # 일단 맨앞에꺼 뽑음
        M -= 1 # [1 2 3(M) 4] 에서 M은 2(index)일때 하나 뽑혀서 [2 3(M) 4]가 되니까 M을 하나 줄여줌

        if max_value == front: # 뽑은게 최대값일때
            count += 1 # 하나 배출 됐으므로 count + 1
            if M < 0: # M이 -1 일때(몇번 째로 인쇄되었는지 궁금한 문서) ex) [4(M) 3 2 1]일때 4가 front 나가서 M은 -1이 됨
                print(count)# 그 때 카운트를 출력함
                break
        else: #뽑았는데 최대값이 아니면
            queue.append(front)# 뒤에다 붙여줌
            if M < 0: # 최대값이 아닌데 궁금한 문서가 뽑히면
                M = len(queue) - 1 # 가장 뒤로 보냄