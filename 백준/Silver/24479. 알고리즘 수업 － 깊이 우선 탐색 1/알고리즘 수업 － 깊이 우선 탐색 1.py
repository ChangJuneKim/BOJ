import sys
from collections import deque

n, m, r = map(int, sys.stdin.readline().rstrip().split())

nodes = [[] for _ in range(n+1)]
visited = [False for _ in range(n+1)]
nodes_cnt = [0 for _ in range(n+1)]
for _ in range(m):
    tail, head = map(int, sys.stdin.readline().rstrip().split())
    nodes[tail].append(head)
    nodes[head].append(tail)

for i in range(n+1):
    nodes[i].sort(reverse=True)
cnt = 1

stack = deque()
stack.append(r)

while stack:
    cur_node = stack.pop()
    visited[cur_node] = True
    if nodes_cnt[cur_node] == 0:
        nodes_cnt[cur_node] = cnt
        cnt += 1

    for next_node in nodes[cur_node]:
        if not visited[next_node]:
            stack.append(next_node)


for cnt in nodes_cnt[1:]:
    print(cnt)
    
# node, edge, start = map(int, input().split())
# 
# graph = [[] for _ in range(node+1)]
# visited = [False] * (node + 1)
# 
# for i in range(1, node+1):
#     node1, node2 = map(int, input().split())
#     graph[node1].append(node2)
#     graph[node2].append(node1)
# 
# for i in range(node+1):
#     if i == 0:
#         continue
#     graph[i].sort()
# 
# def DFS(graph, node, visited):
#     visited[node] = True
# 
#     print(node, end='\n')
#     for i in graph[node]:
#         if not visited[i]:
#             DFS(graph, i, visited)
# 
# DFS(graph, 1, visited)
# 
# for i in range(1, node+1):
#     if visited[i] == False:
#         print(0, end="\n") 