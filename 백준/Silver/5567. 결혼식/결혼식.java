import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

public class Main {

  int N, M, answer = 0;
  boolean[] check;

  public void solution() throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st;

    N = Integer.parseInt(br.readLine());
    M = Integer.parseInt(br.readLine());

    List<Integer> graph[] = new ArrayList[N + 1];

    for (int i = 1; i < graph.length; i++) {
      graph[i] = new ArrayList<>();
    }

    for (int i = 0; i < M; i++) {
      st = new StringTokenizer(br.readLine());
      int a = Integer.parseInt(st.nextToken());
      int b = Integer.parseInt(st.nextToken());
      graph[a].add(b);
      graph[b].add(a);
    }

    check = new boolean[N + 1];
    check[1] = true;
    dfs(1, graph, 0);

    for (int i = 2; i < check.length; i++) {
      if(check[i]){
        answer++;
      }
    }
    System.out.println(answer);
  }

  private void dfs(int num, List<Integer>[] graph, int depth) {
    if (depth == 2) {
      return;
    }

    for (int i = 0; i < graph[num].size(); i++) {
      int next = graph[num].get(i);
      check[next] = true;
      dfs(next, graph, depth + 1);
    }
  }

  public static void main(String[] args) throws IOException {
    new Main().solution();
  }
}

