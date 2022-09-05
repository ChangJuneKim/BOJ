import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {

  public void solution() throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    // 0 딸기 우유만, 1 초코우유만, 2 바나나 우유만
    int N = Integer.parseInt(br.readLine());
    int[] milkShops = Arrays.stream(br.readLine()
                                      .split(" "))
                            .mapToInt(Integer::parseInt)
                            .toArray();
    // 처음은 딸기우유 -> 초코우유 -> 바나나우유 -> 딸기우유
    int count = 0;

    for (int i = 0; i < N; i++) {
      if (milkShops[i] == count % 3) {
        count++;
      }
    }

    System.out.println(count);

  }

  public static void main(String[] args) throws IOException {
    new Main().solution();
  }
}
