import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    
    boolean[] visited1 = new boolean[15];
    boolean[] visited2 = new boolean[30];
    boolean[] visited3 = new boolean[30];
    int count = 0;
    int n;
    
    public static void main(String[] args) throws IOException {
        new Main().solution();
    }
    
    public void solution() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        n = Integer.parseInt(br.readLine());
        
        nQueen(0);
        
        System.out.println(count);
    }
    
    private void nQueen(int depth) {
        if (depth == n) {
            count++;
            return;
        }
        
        for (int i = 0; i < n; i++) {
            if (visited1[i] || visited2[i + depth] || visited3[depth - i + n - 1]) {
                continue;
            }
            
            visited1[i] = true;
            visited2[i + depth] = true;
            visited3[depth - i + n - 1] = true;
            nQueen(depth + 1);
            visited1[i] = false;
            visited2[i + depth] = false;
            visited3[depth - i + n - 1] = false;
        }
    }
    
}
