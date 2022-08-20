import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
	int N, M, K;
	int[][] noteBook;
	int count = 0;

	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//		StringBuilder sb = new StringBuilder();
		StringTokenizer st = new StringTokenizer(br.readLine());

		N = Integer.valueOf(st.nextToken()); 
		M = Integer.valueOf(st.nextToken()); 
		K = Integer.valueOf(st.nextToken());

		noteBook = new int[N][M];
		
		for (int i = 0; i < K; i++) {
			st = new StringTokenizer(br.readLine());
			int R = Integer.valueOf(st.nextToken());
			int C = Integer.valueOf(st.nextToken());
			int[][] sticker = new int[R][C];

			for (int j = 0; j < R; j++) {
				st = new StringTokenizer(br.readLine());
				for (int k = 0; k < C; k++) {
					sticker[j][k] = Integer.valueOf(st.nextToken());
				}
			}
			
			findLocation(sticker);
//			for (int j = 0; j < noteBook.length; j++) {
//				System.out.println(Arrays.toString(noteBook[j]));
//			}
//			System.out.println();
		}
		
		System.out.println(count);

	}

	private void findLocation(int[][] sticker) {
		int r = sticker.length;
		int c = sticker[0].length;

		// 회전 시켜보기
		for (int d = 0; d < 4; d++) {
			// 0이 아닐때만 회전 (받은 그대로로 붙여봐야 하니까)
			if (d != 0) {
				sticker = rotate(sticker, r, c);
			}
			
			// 회전해서 r c가 바꼈을 수 있으니까
			r = sticker.length;
			c = sticker[0].length;

			for (int i = 0; i < N - r + 1; i++) {
				for (int j = 0; j < M - c + 1; j++) {
					// 범위를 벗어난 경우
					if (i > N || j > M) {
						break; 
					}
					
					// 범위 안이라면 붙여본다.
					if (putOn(i, j, r, c, sticker)) {
						return; // 붙였다면 함수 종료
					}
				}
			}
		}

	}

	private boolean putOn(int x, int y, int r, int c, int[][] sticker) {
		// 붙여도 되는지 확인
		for (int i = x; i < x + r; i++) {
			for (int j = y; j < y + c; j++) {
				if (noteBook[i][j] == 1 && sticker[i - x][j - y] == 1)
					return false;
			}
		}

		// 위에서 false 에 안걸렸다면 붙인다
		for (int i = x; i < x + r; i++) {
			for (int j = y; j < y + c; j++) {
				if (sticker[i - x][j - y] == 1) {
					noteBook[i][j] = 1;
					count++;
				}
			}
		}

		return true;
	}

	private int[][] rotate(int[][] sticker, int r, int c) {
		int[][] rotatedSticker = new int[c][r];

		for (int i = 0; i < r; i++) {
			for (int j = 0; j < c; j++) {
				rotatedSticker[j][r - i - 1] = sticker[i][j];
			}
		}

		return rotatedSticker;
	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}