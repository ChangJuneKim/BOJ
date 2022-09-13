import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {


  public static void main(String[] args) throws IOException {
    new Main().solution();
  }

  private boolean isPalindrome(String str) {
    str = str.toLowerCase();
    for (int i = 0; i < str.length()/2; i++) {
      if (str.charAt(i) != str.charAt(str.length()-1-i))
        return false;
    }
    return true;
  }

  public void solution() throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();

    int N = Integer.parseInt(br.readLine());

    for (int i = 0; i < N; i++) {
      String input = br.readLine().toLowerCase();

      boolean flag = true;

      for (int j = 0; j < input.length() / 2; j++) {
        if(input.charAt(j) != input.charAt(input.length() - 1 - j)){
          flag = false;
          sb.append("No\n");
          break;
        }
      }

      if(flag){
        sb.append("Yes\n");
      }
    }

    System.out.println(sb);

  }
}

