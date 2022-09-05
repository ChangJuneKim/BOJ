import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {

  int N, M;
  int count = 0;
  int max = 0;
  int[][] paper;
  boolean[][] visited;

  int[] dx = {-1, 0, 1, 0};
  int[] dy = {0, 1, 0, -1};

  public static void main(String[] args) throws IOException {
    new Main().solution();
  }

  public void solution() throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());

    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());

    paper = new int[N][M];
    visited = new boolean[N][M];

    for (int i = 0; i < N; i++) {
      st = new StringTokenizer(br.readLine());
      for (int j = 0; j < M; j++) {
        paper[i][j] = Integer.parseInt(st.nextToken());
      }
    }

    for (int i = 0; i < N; i++) {
      for (int j = 0; j < M; j++) {
        if(paper[i][j] == 1 && !visited[i][j]){
          bfs(i, j);
          count++;
        }
      }
    }

    System.out.println(count);
    System.out.println(max);

  }

  private void bfs(int x, int y) {
    Queue<int[]> queue = new LinkedList<>();
    queue.offer(new int[] {x, y});
    visited[x][y] = true;
    int area = 1;

    while (!queue.isEmpty()){
      int[] current = queue.poll();

      int curX = current[0];
      int curY = current[1];

      for (int i = 0; i < 4; i++) {
        int nx = curX + dx[i];
        int ny = curY + dy[i];

        if(isIn(nx, ny) && !visited[nx][ny] && paper[nx][ny] == 1){
          queue.offer(new int[] {nx, ny});
          visited[nx][ny] = true;
          area++;
        }
      }
    }

    if(max < area){
      max = area;
    }
  }

  private boolean isIn(int nx, int ny) {
    return 0 <= nx && nx < N && 0 <= ny && ny < M;
  }
}

