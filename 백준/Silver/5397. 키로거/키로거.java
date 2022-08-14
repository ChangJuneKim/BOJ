import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Main {
	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		int n = Integer.valueOf(br.readLine());

		Stack<Character> left = new Stack<>();
		Stack<Character> right = new Stack<>();

		for (int i = 0; i < n; i++) {
			String input = br.readLine();

			for (int j = 0; j < input.length(); j++) {
				if (input.charAt(j) == '<') {
					if (!left.isEmpty()) {
						right.push(left.pop());
					}
				} else if (input.charAt(j) == '>') {
					if (!right.isEmpty()) {
						left.push(right.pop());
					}
				} else if (input.charAt(j) == '-') {
					if(!left.isEmpty()) {						
						left.pop();
					}
				} else {
					left.push(input.charAt(j));
				}
			}
			
			while(!left.isEmpty()) {
				right.push(left.pop());
			}
			
			while(!right.isEmpty()) {
				sb.append(right.pop());
			}
			
			sb.append("\n");
		}
		System.out.println(sb);

	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}