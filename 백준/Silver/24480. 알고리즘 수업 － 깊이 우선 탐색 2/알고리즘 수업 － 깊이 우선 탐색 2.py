import sys
from collections import deque

node, edge, start = map(int, sys.stdin.readline().rstrip().split())

graph = [[] for _ in range(node + 1)]
visited = [0] * (node + 1)

for i in range(edge):
    node1, node2 = map(int, sys.stdin.readline().rstrip().split())
    graph[node1].append(node2)
    graph[node2].append(node1)

for i in graph:
    i.sort()


def dfs(start_node):
    stack = deque()
    cnt = 1
    # 시작 노드를 stack에 넣는다
    stack.appendleft(start_node)

    # stack이 빌 때 까지
    while stack:
        current_node = stack.popleft()
        # 방문 목록에 현재 노드가 없으면
        if not visited[current_node]:
            visited[current_node] = cnt
            cnt += 1
            for neighbor in graph[current_node]:
                stack.appendleft(neighbor)
    return visited


result = dfs(start)

print(*result[1:], sep="\n")