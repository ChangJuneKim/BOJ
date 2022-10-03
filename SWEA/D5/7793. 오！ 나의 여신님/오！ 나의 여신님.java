import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.StringTokenizer;

public class Solution {

  final char DEMON = '*';
  final char GOD = 'D';
  final char SUYEON = 'S';
  final char EMPTY = '.';
  final char ROCK = 'X';

  int T;
  int N, M;
  char[][] map;
  boolean[][] visited;
  int[] dx = {-1, 0, 1, 0};
  int[] dy = {0, 1, 0, -1};

  int answer;
  ArrayDeque<Point> queue;
  Point suyeon, god;
  boolean flag;

  StringBuilder sb = new StringBuilder();

  public static void main(String[] args) throws IOException {
    new Solution().solution();
  }

  public void solution() throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st;


    T = Integer.parseInt(br.readLine());

    for (int testCase = 1; testCase <= T; testCase++) {
      st = new StringTokenizer(br.readLine());

      N = Integer.parseInt(st.nextToken());
      M = Integer.parseInt(st.nextToken());

      map = new char[N][M];
      queue = new ArrayDeque<>();
      visited = new boolean[N][M];

      for (int i = 0; i < N; i++) {
        String line = br.readLine();
        for (int j = 0; j < M; j++) {
          map[i][j] = line.charAt(j);
        }
      }

      for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
          if (map[i][j] == SUYEON) {
            suyeon = new Point(i, j);
          }

          if (map[i][j] == GOD) {
            god = new Point(i, j);
          }

          if (map[i][j] == DEMON) {
            queue.offer(new Point(i, j));
            visited[i][j] = true;
          }
        }
      }

      answer = 0;
      flag = false;
      bfs(suyeon);

      if (flag) {
        sb.append("#").append(testCase).append(" ").append(answer).append("\n");
      } else {
        sb.append("#").append(testCase).append(" GAME OVER\n");
      }
    }
    System.out.println(sb);
  }

  private void bfs(Point start) {
    queue.offer(start);
    visited[start.x][start.y] = true;

    while (!queue.isEmpty()) {
      int size = queue.size();

      for (int i = 0; i < size; i++) {
        Point current = queue.poll();
        int curX = current.x;
        int curY = current.y;

        if (curX == god.x && curY == god.y) {
          flag = true;
          return;
        }

        if (map[curX][curY] == DEMON) {
          for (int j = 0; j < 4; j++) {
            int nx = curX + dx[j];
            int ny = curY + dy[j];

            if (isIn(nx, ny) && !visited[nx][ny] && map[nx][ny] != ROCK && map[nx][ny] != GOD) {
              map[nx][ny] = DEMON;
              queue.offer(new Point(nx, ny));
              visited[nx][ny] = true;
            }
          }
        } else {
          for (int j = 0; j < 4; j++) {
            int nx = curX + dx[j];
            int ny = curY + dy[j];

            if (isIn(nx, ny) && !visited[nx][ny] && map[nx][ny] != ROCK && map[nx][ny] != DEMON) {
              map[nx][ny] = SUYEON;
              queue.offer(new Point(nx, ny));
              visited[nx][ny] = true;
            }
          }
        }
      }
      answer++;
    }

  }

  private boolean isIn(int nx, int ny) {
    return 0 <= nx && nx < N && 0 <= ny && ny < M;
  }

  class Point {
    int x, y;

    public Point(int x, int y) {
      this.x = x;
      this.y = y;
    }
  }
}
