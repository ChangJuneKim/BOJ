import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		int N = Integer.parseInt(br.readLine());
		boolean isSame = true;

		String[] arr = new String[N];

		for (int i = 0; i < N; i++) {
			arr[i] = br.readLine();
		}

		for (int i = 0; i < arr[0].length(); i++) {
			for (int j = 1; j < N; j++) {
				if (arr[0].charAt(i) == arr[j].charAt(i)) {
					isSame = true;
				} else {
					isSame = false;
					break;
				}
			}

			if (!isSame) {
				sb.append("?");
			} else {
				sb.append(arr[0].charAt(i));
			}
		}
		System.out.println(sb.toString());

	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}