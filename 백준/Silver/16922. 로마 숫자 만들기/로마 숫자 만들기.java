import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

  int[] numbers = {1, 5, 10, 50};
  int N;
  int answer;
  boolean[] visited = new boolean[1001];

  public static void main(String[] args) throws IOException {
    new Main().solution();
  }

  public void solution() throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    N = Integer.parseInt(br.readLine());

    permutation(0, 0, 0);
    System.out.println(answer);
  }

  private void permutation(int start, int depth, int sum) {
    if (depth == N) {
      if (!visited[sum]) {
        visited[sum] = true;
        answer++;
      }
      return;
    }

    for (int i = start; i < 4; i++) {
      permutation(i, depth + 1, sum + numbers[i]);
    }
  }


}