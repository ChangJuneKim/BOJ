import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main {

	int N, newScore, P;

	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		N = Integer.valueOf(st.nextToken());
		newScore = Integer.valueOf(st.nextToken());
		P = Integer.valueOf(st.nextToken());

		ArrayList<Integer> scores = new ArrayList<>();

		if (N == 0) {
			System.out.println(1);
			return;
		}

		st = new StringTokenizer(br.readLine());
		for (int i = 0; i < N; i++) {
			scores.add(Integer.valueOf(st.nextToken()));
		}

		int ranking = 1;

		if (scores.size() == P && newScore <= scores.get(scores.size() - 1)) {
			System.out.println(-1);
			return;
		}

		for (int i = 0; i < N; i++) {
			if (newScore >= scores.get(i)) {
				ranking = i + 1;
				break;
			} else {
				ranking++;
			}
		}

		if (ranking <= P) {
			System.out.println(ranking);
		} else {
			System.out.println(-1);
		}

	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}
