import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class  Solution {

  int T;
  int D, W, K;
  int[][] grid;
  int[][] copy;
  int min;

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

      D = Integer.parseInt(st.nextToken());
      W = Integer.parseInt(st.nextToken());
      K = Integer.parseInt(st.nextToken());

      grid = new int[D][W];
      copy = new int[D][W];

      for (int i = 0; i < D; i++) {
        st = new StringTokenizer(br.readLine());
        for (int j = 0; j < W; j++) {
          grid[i][j] = Integer.parseInt(st.nextToken());
          copy[i][j] = grid[i][j];
        }
      }

      if (check()) {
        sb.append("#").append(testCase).append(" ").append(0).append("\n");
      } else {
        min = Integer.MAX_VALUE;
        dfs(0, 0);
        sb.append("#").append(testCase).append(" ").append(min).append("\n");
      }


    }
    System.out.println(sb);
  }

  private void dfs(int depth, int inject) {
    if (inject >= min) {
      return;
    }

    if (depth == D) {
      if (check()) {
        min = Math.min(min, inject);
      }
      return;
    }

    // 아무것도 안넣기
    dfs(depth + 1, inject);

    // A 넣기
    for (int i = 0; i < W; i++) {
      grid[depth][i] = 0;
    }
    dfs(depth + 1, inject + 1);

    // B 넣기
    for (int i = 0; i < W; i++) {
      grid[depth][i] = 1;
    }
    dfs(depth + 1, inject + 1);

    // 되돌리기
    for (int i = 0; i < W; i++) {
      grid[depth][i] = copy[depth][i];
    }
  }

  private boolean check() {
    int now, next;
    for (int i = 0; i < W; i++) {
      int count = 1;
      for (int j = 0; j < D - 1; j++) {
        now = grid[j][i];
        next = grid[j + 1][i];

        if (now == next) {
          count++;
          if (count >= K) break;
        } else {
          count = 1;
        }
      }
      if (count < K) {
        return false;
      }
    }
    return true;
  }
}
