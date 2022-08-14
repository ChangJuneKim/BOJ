import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {
	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
        String s = br.readLine();
        
        int n = Integer.parseInt(br.readLine());
        
        Stack<String> left = new Stack<>();
        Stack<String> right = new Stack<>();
        
        for(int i=0; i<s.length(); i++) //왼쪽 스택에 입력받은 문자열을 전부 넣는다.
            left.push(s.substring(i,i+1));
        
        
        for(int i=0; i<n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            String c = st.nextToken();
            switch(c) {
                case "L":
                    if(!left.isEmpty())
                        right.push(left.pop());
                    break;
                case "D":
                    if(!right.isEmpty())
                        left.push(right.pop());
                    break;
                case "B":
                    if(!left.isEmpty()) 
                        left.pop();
                    break;
                case "P":
                    left.push(st.nextToken());
                    break;
            }
        }
    
        while(!left.isEmpty()) //오른쪽 스택에 왼쪽 스택 옮기기
            right.push(left.pop());

        while(!right.isEmpty())
        	sb.append((right.pop()));
        
        System.out.println(sb);
    }

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}