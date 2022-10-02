import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.StringTokenizer;

public class Main {
  int N, M;
  int[][] maze;
  boolean[][] visited;

  int[] dx = {-1, 0, 1, 0};
  int[] dy = {0, 1, 0, -1};
  int answer = 1;

  public static void main(String[] args) throws IOException {
    new Main().solution();
  }

  public void solution() throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());

    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());

    maze = new int[N][M];

    for (int i = 0; i < N; i++) {
      String line = br.readLine();
      for (int j = 0; j < M; j++) {
        maze[i][j] = line.charAt(j) - '0';
      }
    }

    visited = new boolean[N][M];
    bfs(0, 0);
  }

  private void bfs(int x, int y) {
    ArrayDeque<int[]> queue = new ArrayDeque<>();
    queue.offer(new int[]{x, y});
    visited[x][y] = true;

    while (!queue.isEmpty()) {
      int size = queue.size();

      for (int i = 0; i < size; i++) {
        int[] current = queue.poll();
        int curX = current[0];
        int curY = current[1];

        if (curX == N - 1 && curY == M - 1) {
          System.out.println(answer);
          return;
        }

        for (int j = 0; j < 4; j++) {
          int nx = curX + dx[j];
          int ny = curY + dy[j];

          if (isIn(nx, ny) && !visited[nx][ny] && maze[nx][ny] == 1) {
            queue.offer(new int[]{nx, ny});
            visited[nx][ny] = true;
          }
        }
      }

      answer++;
    }
  }

  private boolean isIn(int nx, int ny) {
    return 0 <= nx && nx < N && 0 <= ny && ny < M;
  }


}
