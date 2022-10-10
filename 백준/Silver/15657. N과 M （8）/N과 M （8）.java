import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    
    int N, M;
    ArrayList<Integer> result;
    int[] numbers;
    //boolean[] used;
    
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
//        used = new boolean[N];
        
        numbers = new int[N];
        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            numbers[i] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(numbers);
        
        dfs(0, 0);
        System.out.println(sb);
    }
    
    private void dfs(int start, int depth) {
        if (depth == M) {
            for (int i = 0; i < result.size(); i++) {
                sb.append(result.get(i)).append(" ");
            }
            sb.append("\n");
            return;
        }
        
        for (int i = start; i < N; i++) {
            //if (!used[i]) {
            //used[i] = true;
            result.add(numbers[i]);
            dfs(i, depth + 1);
            result.remove(result.size() - 1);
            //used[i] = false;
            //}
        }
        
    }
}
