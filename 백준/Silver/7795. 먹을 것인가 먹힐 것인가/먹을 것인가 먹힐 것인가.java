import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {

  public static void main(String[] args) throws IOException {
    new Main().solution();
  }

  public void solution() throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int t = Integer.parseInt(br.readLine());

    for (int i = 0; i < t; i++) {
      StringTokenizer st = new StringTokenizer(br.readLine());

      int a = Integer.parseInt(st.nextToken());
      int b = Integer.parseInt(st.nextToken());

      int[] aSize = new int[a];
      int[] bSize = new int[b];

      st = new StringTokenizer(br.readLine());
      for (int j = 0; j < a; j++) {
        aSize[j] = Integer.parseInt(st.nextToken());
      }

      st = new StringTokenizer(br.readLine());
      for (int j = 0; j < b; j++) {
        bSize[j] = Integer.parseInt(st.nextToken());
      }

      Arrays.sort(aSize);
      Arrays.sort(bSize);

      int count = 0;

      for (int j = 0; j < aSize.length; j++) {
        for (int k = 0; k < bSize.length; k++) {
          if (aSize[j] <= bSize[k]) {
            break;
          } else {
            count++;
          }
        }
      }
      System.out.println(count);
    }
  }
}

