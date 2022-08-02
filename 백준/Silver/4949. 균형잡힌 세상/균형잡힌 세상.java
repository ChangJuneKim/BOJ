import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;

public class Main {

	boolean isOpenBracket(char token) {
		if (token == '(' || token == '[') {
			return true;
		}
		return false;
	}

	boolean isCloseBracket(char token) {
		if (token == ')' || token == ']') {
			return true;
		}
		return false;
	}

	public void solution() throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		Stack<Character> stack = new Stack<>();

		char ch = '\u0000';

		while (true) {
			stack.clear();
			
			String line = br.readLine();

			if (line.equals("."))
				break; // 종료 조건

			for (int i = 0; i < line.length(); i++) {
				ch = line.charAt(i);

				// 여는 괄호면 스택에 푸쉬
				if (isOpenBracket(ch)) {
					stack.push(ch);
					//닫는 괄호를 만났을 때
				} else if (isCloseBracket(ch)) {
					// 스택이 비어 있거나, 괄호의 쌍이 맞지 않을 때
					if (stack.isEmpty() || (stack.peek() == '(' && ch == ']') || (stack.peek() == '[' && ch == ')')) {
						stack.push(ch);
						break;
					}
					stack.pop();
				}
			}
			
			// 스택이 비어있다면 균형잡힌 문자열
			if(stack.isEmpty()) {
				System.out.println("yes");
			} else {
				System.out.println("no");
			}

		}
	}

	public static void main(String[] args) throws Exception {
		new Main().solution();
	}
}
