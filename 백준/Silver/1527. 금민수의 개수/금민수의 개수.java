import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    
    int A, B;
    int count;
    
    public static void main(String[] args) throws IOException {
        new Main().solution();
    }
    
    public void solution() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        A = Integer.parseInt(st.nextToken());
        B = Integer.parseInt(st.nextToken());
        
        dfs(0);
        
        System.out.println(count);
    }
    
    private void dfs(long number) {
        if (number > B) {
            return;
        }
        
        if (A <= number && number <= B) {
            count++;
        }
        
        dfs(number * 10 + 4);
        dfs(number * 10 + 7);
    }
    
}
