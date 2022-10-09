import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    boolean[] visited;
    char[] result;
    String num1;
    String num2;
    int max = Integer.MIN_VALUE;
    
    public static void main(String[] args) throws IOException {
        new Main().solution();
    }
    
    public void solution() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        num1 = st.nextToken();
        num2 = st.nextToken();
        
        visited = new boolean[num1.length()];
        result = new char[num1.length()];
        
        perm(0, num1);
        System.out.println(max == Integer.MIN_VALUE ? -1 : max);
    }
    
    private void perm(int depth, String number) {
        if (depth == number.length()) {
            if (result[0] != '0') {
                int C = Integer.parseInt(new String(result));
                int B = Integer.parseInt(num2);
                if (B > C) {
                    max = Math.max(max, C);
                }
            }
            return;
        }
        for (int i = 0; i < number.length(); i++) {
            if (visited[i]) {
                continue;
            }
            
            visited[i] = true;
            result[depth] = number.charAt(i);
            perm(depth + 1, number);
            visited[i] = false;
        }
    }
    
}
