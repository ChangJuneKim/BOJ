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


def DFS(start_node):
    #시작 노드를 스택에 담는다
    need_visited = deque([start_node])
    cnt = 1

    while need_visited:
        current_node = need_visited.pop()

        # 아직 current_node를 방문하지 않았다면
        if not visited[current_node]:
            #방문
            visited[current_node] = cnt
            cnt += 1
            #방문한 노드의 인접노드를 loop하면서
            for neighbor in graph[current_node]:
                # 스택에 추가한다
                need_visited.append(neighbor)

DFS(start)

print(*visited[1:], sep="\n")