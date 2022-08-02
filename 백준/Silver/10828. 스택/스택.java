import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;

public class Main {

	public void solution() throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		Stack<Integer> stack = new Stack<>();
		StringBuilder sb = new StringBuilder("");
		
		int N = Integer.valueOf(br.readLine());

		for (int i = 0; i < N; i++) {
			String command = br.readLine();

			if (command.startsWith("push")) {
				String[] temp = command.split(" ");
				command = temp[0];
				int number = Integer.valueOf(temp[1]);
				stack.add(number);
				continue;
			}

			if (command.equals("pop")) {
				if(stack.size() == 0) {
					sb.append(-1 + "\n");
					continue;
				} else {
					sb.append(stack.pop() + "\n");
					continue;
				}
			}

			if (command.equals("size")) {
				sb.append(stack.size() + "\n");
				continue;
			}

			if (command.equals("empty")) {
				if(stack.empty()) {
					sb.append(1 + "\n");
				} else {
					sb.append(0 + "\n");
				}
				continue;
			}

			if (command.equals("top")) {
				if(stack.empty()) {
					sb.append(-1 + "\n");
				}else {
					sb.append(stack.peek() + "\n");
				}
			}
		}
		System.out.println(sb);
	}

	public static void main(String[] args) throws Exception {
		new Main().solution();
	}
}
