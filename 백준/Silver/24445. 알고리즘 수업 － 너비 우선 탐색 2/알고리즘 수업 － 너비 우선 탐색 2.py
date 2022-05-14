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
    i.sort(reverse=True)

def BFS(start_node):
    cnt = 1
    visited[start_node] = cnt

    dq = deque()
    dq.append(start_node)

    while dq:
        current_node = dq.popleft()

        for neighbor in graph[current_node]:
            if not visited[neighbor]:
                cnt += 1
                visited[neighbor] = cnt
                dq.append(neighbor)
    return visited

BFS(start)

print(*visited[1:], sep="\n")