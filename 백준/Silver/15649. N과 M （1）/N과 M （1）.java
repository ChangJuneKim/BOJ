import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main {
    
    int N, M;
    
    ArrayList<Integer> result;
    boolean[] used;
    
    StringBuilder sb = new StringBuilder();
    
    public static void main(String[] args) throws IOException {
        new Main().solution();
    }
    
    public void solution() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        
        result = new ArrayList<>();
        used = new boolean[N + 1];
        dfs(0);
        System.out.println(sb);
    }
    
    private void dfs(int depth) {
        if (depth == M) {
            for (int i = 0; i < result.size(); i++) {
                sb.append(result.get(i)).append(" ");
            }
            sb.append("\n");
            return;
        }
        
        for (int i = 1; i <= N; i++) {
            if (!used[i]) {
                used[i] = true;
                result.add(i);
                dfs(depth + 1);
                result.remove(result.size() - 1);
                used[i] = false;
            }
        }
        
    }
}
