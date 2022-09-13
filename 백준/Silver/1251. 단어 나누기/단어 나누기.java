import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
  String s;
  List<String> list = new ArrayList<>();


  public static void main(String[] args) throws IOException {
    new Main().solution();
  }

  public void solution() throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    s = br.readLine();

    find(0, 0, new StringBuilder());

    Collections.sort(list);

    System.out.println(list.get(0));
  }

  private void find(int depth, int start, StringBuilder temp) {
    if(depth == 2){
      temp.append(new StringBuilder(s.substring(start)).reverse());
      list.add(temp.toString());
      return;
    }

    for (int i = start; i < s.length() - depth; i++) {
      find(depth + 1, i + 1, new StringBuilder(temp).append(new StringBuilder(s.substring(start, i + 1)).reverse()));
    }
  }
}

