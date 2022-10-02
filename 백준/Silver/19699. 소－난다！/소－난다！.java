import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {

  int N, M;
  int[] weights;
  boolean[] isPrime;
  boolean[] visited;
  HashSet<Integer> set = new HashSet<>();

  public static void main(String[] args) throws IOException {
    new Main().solution();
  }

  public void solution() throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());
    StringBuilder sb = new StringBuilder();

    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());

    st = new StringTokenizer(br.readLine());

    weights = new int[N];
    for (int i = 0; i < N; i++) {
      weights[i] = Integer.parseInt(st.nextToken());
    }

    isPrime = new boolean[10001];
    Arrays.fill(isPrime, 2, 10001, true);

    for (int i = 2; i <= Math.sqrt(10000); i++) {
      if (isPrime[i]) {
        for (int j = i * i; j <= 10000; j += i) {
          isPrime[j] = false;
        }
      }
    }

    visited = new boolean[N];
    combination(0, 0, 0);
    ArrayList<Integer> result = new ArrayList<>(set);
    Collections.sort(result);

    if (result.size() == 0) {
      sb.append("-1");
    } else {
      for (Integer integer : result) {
        sb.append(integer).append(" ");
      }
    }
    System.out.println(sb);

  }

  private void combination(int start, int depth, int sum) {
    if (depth == M) {
      if (isPrime[sum]) {
        set.add(sum);
      }
      return;
    }

    for (int i = start; i < N; i++) {
      if (visited[i]) {
        continue;
      }

      visited[i] = true;
      combination(i, depth + 1, sum + weights[i]);
      visited[i] = false;
    }
  }
}
