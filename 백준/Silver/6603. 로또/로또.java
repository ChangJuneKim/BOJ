import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    
    int k;
    int[] numbers;
    ArrayList<Integer> result;
    
    StringBuilder sb = new StringBuilder();
    
    public static void main(String[] args) throws IOException {
        new Main().solution();
    }
    
    public void solution() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        
        while (true) {
            String input = br.readLine();
            if (input.equals("0")) {
                break;
            }
            
            st = new StringTokenizer(input);
            
            k = Integer.parseInt(st.nextToken());
            numbers = new int[k];
            for (int i = 0; i < k; i++) {
                numbers[i] = Integer.parseInt(st.nextToken());
            }
            
            Arrays.sort(numbers);
            result = new ArrayList<>();
            lotto(0, 0);
            sb.append("\n");
        }
        System.out.println(sb);
    }
    
    private void lotto(int start, int depth) {
        if (depth == 6) {
            for (int i = 0; i < result.size(); i++) {
                sb.append(result.get(i)).append(" ");
            }
            sb.append("\n");
            return;
        }
        
        for (int i = start; i < k; i++) {
            result.add(numbers[i]);
            lotto(i + 1, depth + 1);
            result.remove(result.size() - 1);
        }
    }
    
}
