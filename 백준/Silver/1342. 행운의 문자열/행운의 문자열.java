import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	char[] chars;
	int count;
	int[] counts;
	int[] factorials;

	public void solution() throws IOException {
		BufferedReader input = new BufferedReader(new InputStreamReader(System.in));

		chars = input.readLine()
			.toCharArray();

		count = 0;
		counts = new int[26];
		
		for (int i = 0; i < chars.length; i++) {
			counts[chars[i] - 'a']++;
		}
		
		factorials = new int[chars.length + 1];
		factorials[0] = 1;
		factorials[1] = 1;
		
		for (int i = 2; i < factorials.length; i++) {
			factorials[i] = factorials[i - 1] * i;
		}
		
		permutation(0, new boolean[chars.length], '@');
		
		for (int i = 0; i < counts.length; i++) {
			if(counts[i] > 1) {
				count /= factorials[counts[i]];
			}
		}
		System.out.println(count);
	}

	private void permutation(int depth, boolean[] visited, char pre) {
		if (depth == chars.length) {
			count++;
			return;
		}

		for (int i = 0; i < chars.length; i++) {
			if (visited[i]) {
				continue;
			}

			visited[i] = true;
			if (pre != chars[i]) {
				permutation(depth + 1, visited, chars[i]);
			}
			visited[i] = false;
		}
	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}