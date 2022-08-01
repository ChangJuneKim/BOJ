import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

import javax.management.timer.TimerMBean;

public class Main {
	public void solution() throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		int T = Integer.valueOf(br.readLine());
		
		
		for (int i = 0; i < T; i++) {
			String answer = "YES";
			Stack<Character> stack = new Stack<>();
			
			st = new StringTokenizer(br.readLine(), "");
			String data = st.nextToken();
			for (int j = 0; j < data.length(); j++) {
				char ch = data.charAt(j);
				// 여는 괄호는 스택에 넣는다.
				if(ch == '(') {
					stack.add(ch);
					//닫는 괄호를 만나면 스택을 확인하고 비어있지 않다면 하나 꺼낸다
				} else if(ch == ')') {
					// 스택이 비어있다면 짝이 맞지 않다는 뜻이므로 NO
					if(stack.size() == 0) {
						answer = "NO";
						break;
					}
					
					stack.pop();
				}
			}
            
            // 모든 닫는 괄호와 짝을 맞췄음에도 스택에 여는 괄호가 남아있을 경우
			if(stack.size() > 0) {
				answer = "NO";
			}
			System.out.println(answer);
		}
		
	}
	
	public static void main(String[] args) throws Exception{
		new Main().solution();
	}
}