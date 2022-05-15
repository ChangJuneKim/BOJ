from collections import deque

node = int(input())
edge = int(input())
graph = [[] for _ in range(node + 1)]

for i in range(edge):
    node1, node2 = map(int, input().split())
    graph[node1].append(node2)
    graph[node2].append(node1)

def DFS(start):
    visited = deque()
    need_visited = deque([start])

    while need_visited:
        current_computer = need_visited.pop()

        if current_computer not in visited:
            visited.append(current_computer)
            for neighbor in graph[current_computer]:
                need_visited.append(neighbor)
    return list(visited)

result = DFS(1)
print(len(result[1:]))