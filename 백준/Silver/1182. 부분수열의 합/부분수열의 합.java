import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    int N, S;
    int[] numbers;
    boolean[] visited;
    
    int cnt = 0;
    
    public static void main(String[] args) throws IOException {
        new Main().solution();
    }
    
    public void solution() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        N = Integer.parseInt(st.nextToken());
        S = Integer.parseInt(st.nextToken());
        
        numbers = new int[N];
        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            numbers[i] = Integer.parseInt(st.nextToken());
        }
        
        count(0, 0);
        
        if (S == 0) {
            System.out.println(cnt - 1);
            
        } else {
            System.out.println(cnt);
        }
    }
    
    private void count(int depth, int sum) {
        if (depth == N) {
            if (sum == S) {
                cnt++;
            }
            return;
        }
        
        count(depth + 1, sum + numbers[depth]);
        count(depth + 1, sum);
    }
    
}