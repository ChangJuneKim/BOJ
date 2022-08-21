import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	int N, M, K;
	int[][] paper;
	int sum;
	int max;

	int[][][] tetros = { { { 1, 1, 1, 1 } }, { { 1, 1 }, { 1, 1 }, }, { { 1, 0 }, { 1, 0 }, { 1, 1 } },
			{ { 0, 1 }, { 0, 1 }, { 1, 1 } }, { { 1, 0 }, { 1, 1 }, { 0, 1 } }, { { 0, 1 }, { 1, 1 }, { 1, 0 } },
			{ { 1, 1, 1 }, { 0, 1, 0 } }, };

	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//		StringBuilder sb = new StringBuilder();
		StringTokenizer st = new StringTokenizer(br.readLine());

		N = Integer.valueOf(st.nextToken());
		M = Integer.valueOf(st.nextToken());

		paper = new int[N][M];

		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < M; j++) {
				paper[i][j] = Integer.valueOf(st.nextToken());
			}
		}
		max = Integer.MIN_VALUE;
		for (int i = 0; i < tetros.length; i++) {
			check(tetros[i]);
			if (max < sum) {
				max = sum;
			}
		}
		System.out.println(max);

	}

	private void check(int[][] tetro) {
		int r = tetro.length;
		int c = tetro[0].length;

		for (int d = 0; d < 4; d++) {
			if (d != 0) {
				tetro = rotate(tetro, r, c);
			}

			r = tetro.length;
			c = tetro[0].length;

			for (int i = 0; i < N - r + 1; i++) {
				for (int j = 0; j < M - c + 1; j++) {
					// 범위를 벗어난 경우
					if (i > N || j > M) {
						continue;
					}
					// 범위 안이라면 붙여본다.
					putOn(i, j, r, c, tetro);
					if (max < sum) {
						max = sum;
					}
				}
			}
		}
	}

	private void putOn(int x, int y, int r, int c, int[][] tetro) {
		sum = 0;
		for (int i = x; i < x + r; i++) {
			for (int j = y; j < y + c; j++) {
				if (tetro[i - x][j - y] == 1) {
					sum += paper[i][j];
				}
			}
		}
	}

	private int[][] rotate(int[][] tetro, int r, int c) {

		int[][] rotatedTetro = new int[c][r];

		for (int i = 0; i < r; i++) {
			for (int j = 0; j < c; j++) {
				rotatedTetro[j][r - i - 1] = tetro[i][j];
			}
		}
		return rotatedTetro;
	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}