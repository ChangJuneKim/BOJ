import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
  int N, M;

  String[] DNAs;
  String result = "";
  int sum = 0;

  public static void main(String[] args) throws IOException {
    new Main().solution();
  }

  public void solution() throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());

    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());

    DNAs = new String[N];
    for (int i = 0; i < N; i++) {
      DNAs[i] = br.readLine();
    }

    for (int i = 0; i < M; i++) {
      int max = Integer.MIN_VALUE;
      int maxIndex = 0;

      int ACGT[] = new int[4];
      for (int j = 0; j < N; j++) {
        if (DNAs[j].charAt(i) == 'A') ACGT[0]++;
        else if (DNAs[j].charAt(i) == 'C') ACGT[1]++;
        else if (DNAs[j].charAt(i) == 'G') ACGT[2]++;
        else ACGT[3]++;
      }

      for (int j = 0; j < 4; j++) {
        if (ACGT[j] > max) {
          max = ACGT[j];
          maxIndex = j;
        }
      }

      if (maxIndex == 0) {
        result += "A";
      } else if (maxIndex == 1) {
        result += "C";
      } else if (maxIndex == 2) {
        result += "G";
      } else if (maxIndex == 3) {
        result += 'T';
      }

      for (int j = 0; j < 4; j++) {
        if (j != maxIndex) {
          sum += ACGT[j];
        }
      }
    }
    System.out.println(result);
    System.out.println(sum);
  }

}