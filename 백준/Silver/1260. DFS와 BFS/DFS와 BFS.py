import sys
from collections import deque

node, edge, start = map(int, sys.stdin.readline().rstrip().split())

graph = [[] for _ in range(node + 1)]


for i in range(edge):
    node1, node2 = map(int, sys.stdin.readline().rstrip().split())
    graph[node1].append(node2)
    graph[node2].append(node1)

for i in graph:
    i.sort(reverse=True)

def DFS(start_node):
    #시작 노드를 stack에 추가
    need_visited = deque([start_node])
    visited = deque()

    while need_visited:
        current_node = need_visited.pop() # 맨 위 요소를 하나 뽑는다
        # 아직 방문하지 않은 요소이면
        if current_node not in visited:
            # 방문했다고 기록
            visited.append(current_node)
            if graph[current_node] == None:
                return visited
            for neighbor in graph[current_node]:
                need_visited.append(neighbor)
    return visited


def BFS(start_node):
    #시작 노드를 queue에 추가
    need_visited = deque([start_node])
    visited = deque()

    while need_visited:
        current_node = need_visited.popleft() # popleft(dequeue) 한다
        # 아직 방문하지 않은 요소이면
        if current_node not in visited:
            # 방문했다고 기록
            visited.append(current_node)
            if graph[current_node] == None:
                return visited
            for neighbor in graph[current_node]:
                need_visited.append(neighbor)
    return visited

result_DFS = DFS(start)

for i in graph:
    i.sort()

result_BFS = BFS(start)

print(*result_DFS, sep=" ")
print(*result_BFS, sep=" ")