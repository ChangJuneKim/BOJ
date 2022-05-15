N = int(input())
#아파트 단지 입력 받음
graph = [list(map(int, input())) for _ in range(N)]
#방문했는지 체크
visited = [[0] * N for _ in range(N)]

#상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

num_list = []# 아파트 단지별 숫자
nums = 0# 아파트 수

def DFS(x, y):
    # 방문했으면 1으로 표시
    visited[x][y] = 1
    global nums# 아파트 단지 수
    #아파트가 있으면(1이면)
    if graph[x][y] == 1:
        nums += 1
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        # NxN 범위를 벗어나지 않는 경우에만
        if 0 <= nx < N and 0 <= ny < N:
            #그 위치를 아직 방문하지 않았고, 그 위치가 아파트인 경우
            if visited[nx][ny] == 0 and graph[nx][ny] == 1:
                DFS(nx, ny)

for i in range(N):
    for j in range(N):
        if graph[i][j] == 1 and visited[i][j] == 0:
            DFS(i, j)
            num_list.append(nums)
            nums = 0

print(len(num_list))
for n in sorted(num_list):
    print(n)