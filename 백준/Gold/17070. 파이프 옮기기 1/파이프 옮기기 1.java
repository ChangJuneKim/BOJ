import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	int N, answer;
	int[][] map;

	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		N = Integer.valueOf(st.nextToken());

		map = new int[N][N];

		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < N; j++) {
				map[i][j] = Integer.valueOf(st.nextToken());
			}
		}

		pipe(0, 1, 0);

		System.out.println(answer);
	}

	/**
	 * 
	 * @param x x좌표
	 * @param y y좌표
	 * @param d -> 0가로, 1세로, 2대각선
	 */
	private void pipe(int x, int y, int d) {
		if (x == N - 1 && y == N - 1 && map[x][y] != 1) {
			answer++;
			return;
		}

		// 현재 놓여있는 막대가 가로일 때
		if (d == 0) {
			// 오른쪽으로 한칸 움직이기
			if (isIn(x, y + 1) && map[x][y + 1] == 0) {
				pipe(x, y + 1, 0);
			}

			// 오른쪽 아래 대각선으로 움직이기
			if (isIn(x + 1, y + 1) && map[x + 1][y + 1] == 0 && map[x + 1][y] == 0 && map[x][y + 1] == 0) {
				pipe(x + 1, y + 1, 2);
			}

		} else if (d == 1) { // 막대가 세로 일 때
			// 밑으로 움직이기
			if (isIn(x + 1, y) && map[x + 1][y] == 0) {
				pipe(x + 1, y, 1);
			}

			// 오른쪽 아래로 움직이기
			if (isIn(x + 1, y + 1) && map[x + 1][y + 1] == 0 && map[x][y + 1] == 0 && map[x + 1][y] == 0) {
				pipe(x + 1, y + 1, 2);
			}

		} else if (d == 2) { // 막대가 대각선일 때
			// 가로로 움직이기
			if (isIn(x, y + 1) && map[x][y + 1] == 0) {
				pipe(x, y + 1, 0);
			}

			// 세로로 움직이기
			if (isIn(x + 1, y) && map[x + 1][y] == 0) {
				pipe(x + 1, y, 1);
			}

			// 대각선으로 움직이기
			if (isIn(x + 1, y + 1) && map[x + 1][y + 1] == 0 && map[x][y + 1] == 0 && map[x + 1][y] == 0) {
				pipe(x + 1, y + 1, 2);
			}
		}

	}

	private boolean isIn(int x, int y) {
		return 0 <= x && x < N && 0 <= y && y < N;
	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}
