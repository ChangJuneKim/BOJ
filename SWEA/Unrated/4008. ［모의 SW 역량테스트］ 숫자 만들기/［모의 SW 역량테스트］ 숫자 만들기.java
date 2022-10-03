import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Solution {
  int T;
  int N;
  int[] numbers;
  String temp;
  char[] operators;
  int max = Integer.MIN_VALUE;
  int min = Integer.MAX_VALUE;

  public static void main(String[] args) throws IOException {
    new Solution().solution();
  }

  public void solution() throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st;
    StringBuilder sb = new StringBuilder();

    T = Integer.parseInt(br.readLine());

    for (int testCase = 1; testCase <= T; testCase++) {
      N = Integer.parseInt(br.readLine());

      st = new StringTokenizer(br.readLine());
      temp = "";
      for (int i = 0; i < 4; i++) {
        int size = Integer.parseInt(st.nextToken());
        if (i == 0) {
          for (int j = 0; j < size; j++) {
            temp += "+";
          }
        }

        if (i == 1) {
          for (int j = 0; j < size; j++) {
            temp += "-";
          }
        }

        if (i == 2) {
          for (int j = 0; j < size; j++) {
            temp += "*";
          }
        }

        if (i == 3) {
          for (int j = 0; j < size; j++) {
            temp += "/";
          }
        }
      }


      operators = temp.toCharArray();
      Arrays.sort(operators);

      numbers = new int[N];
      st = new StringTokenizer(br.readLine());
      for (int i = 0; i < N; i++) {
        numbers[i] = Integer.parseInt(st.nextToken());
      }

      max = Integer.MIN_VALUE;
      min = Integer.MAX_VALUE;

      do {
        calc(operators);
      } while (np(operators.length - 1));


      sb.append("#").append(testCase).append(" ").append(max - min).append("\n");
    }

    System.out.println(sb);
  }

  private boolean np(int size) {
    int firstPeak = size;
    while (firstPeak > 0 && operators[firstPeak - 1] >= operators[firstPeak]) {
      firstPeak--;
    }

    if (firstPeak == 0) {
      return false;
    }

    int secondPeak = size;
    while (operators[firstPeak - 1] >= operators[secondPeak]) {
      secondPeak--;
    }
    swap(firstPeak - 1, secondPeak);

    int left = firstPeak;
    int right = size;

    while (left < right) {
      swap(left, right);
      left++;
      right--;
    }

    return true;
  }

  private void swap(int a, int b) {
    char temp = operators[a];
    operators[a] = operators[b];
    operators[b] = temp;
  }


  private void calc(char[] ops) {
    int acc = numbers[0];
    for (int i = 0; i < ops.length; i++) {
      if (ops[i] == '+') {
        acc += numbers[i + 1];
      }

      if (ops[i] == '-') {
        acc -= numbers[i + 1];
      }

      if (ops[i] == '*') {
        acc *= numbers[i + 1];
      }

      if (ops[i] == '/') {
        acc /= numbers[i + 1];
      }
    }
    
    min = Math.min(min, acc);
    max = Math.max(max, acc);
  }
}
