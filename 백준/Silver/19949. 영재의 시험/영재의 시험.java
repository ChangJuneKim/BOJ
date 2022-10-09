import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    int[] answers;
    int[] youngjae;
    int count;
    
    public static void main(String[] args) throws IOException {
        new Main().solution();
    }
    
    public void solution() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        answers = new int[10];
        youngjae = new int[10];
        for (int i = 0; i < 10; i++) {
            answers[i] = Integer.parseInt(st.nextToken());
        }
        
        count = 0;
        rePerm(0);
        System.out.println(count);
    }
    
    private void rePerm(int depth) {
        if (depth == 10) {
            int solveCount = 0;
            
            for (int i = 0; i < 10; i++) {
                if (answers[i] == youngjae[i]) {
                    solveCount++;
                }
                
                if (solveCount >= 5) {
                    count++;
                    break;
                }
            }
            return;
        }
        
        for (int i = 1; i <= 5; i++) {
            if (depth >= 2) {
                int prevPrev = youngjae[depth - 2];
                int prev = youngjae[depth - 1];
                if (prev == i && prev == prevPrev) continue;
            }
            youngjae[depth] = i;
            rePerm(depth + 1);
        }
    }
    
}
