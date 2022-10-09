import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    int N, M;
    int[] snows;
    
    public static void main(String[] args) throws IOException {
        new Main().solution();
    }
    
    public void solution() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        
        snows = new int[101];
        
        st = new StringTokenizer(br.readLine());
        for (int i = 1; i <= N; i++) {
            snows[i] = Integer.parseInt(st.nextToken());
        }
        
        System.out.println(makeSnowBall(0, 0, 1));
        
    }
    
    private int makeSnowBall(int index, int depth, int size) {
        if (depth > M) {
            return 0;
        }
        
        if (depth == M) {
            return size;
        }
        
        int ans = 0;
        
        ans = Math.max(makeSnowBall(index + 1, depth + 1, size + snows[index + 1]), makeSnowBall(index + 2, depth + 1, size / 2 + snows[index + 2]));
        return ans;
    }
}
