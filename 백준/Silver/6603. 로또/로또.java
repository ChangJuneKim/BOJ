import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	int[] numbers;
	int[] result;

	StringBuilder sb = new StringBuilder();

	private void combination(int depth, int start) {
		if (depth == 6) {
			for (int i = 0; i < result.length; i++) {
				sb.append((result[i] + " "));
			}
			sb.append("\n");
			return;
		}

		for (int i = start; i < numbers.length; i++) {
			result[depth] = numbers[i];
			combination(depth + 1, i + 1);
		}
	}

	public void solution() throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;

		while (true) {
			String input = br.readLine();
			if (input.equals("0")) {
				break;
			}

			st = new StringTokenizer(input);
			int k = Integer.valueOf(st.nextToken());

			numbers = new int[k];
			result = new int[6];

			for (int i = 0; i < k; i++) {
				numbers[i] = Integer.valueOf(st.nextToken());
			}

			combination(0, 0);
			sb.append("\n");
		}
		System.out.println(sb);

	}

	public static void main(String[] args) throws Exception {
		new Main().solution();
	}
}
