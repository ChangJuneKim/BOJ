import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {

	int[][] board = new int[8][8];

	// 우 부터 시계방향 8방
	int[] dx = { 0, 1, 1, 1, 0, -1, -1, -1 };
	int[] dy = { 1, 1, 0, -1, -1, -1, 0, 1 };

	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		String[] kingLocation = st.nextToken()
			.split("");
		String[] rockLocation = st.nextToken()
			.split("");
		int N = Integer.valueOf(st.nextToken());

		int kingX = kingLocation[0].charAt(0) - 'A';
		int kingY = kingLocation[1].charAt(0) - '0' - 1;

		int rockX = rockLocation[0].charAt(0) - 'A';
		int rockY = rockLocation[1].charAt(0) - '0' - 1;

		board[kingX][kingY] = 2; // 왕
		board[rockX][rockY] = 3; // 돌
		int curX = kingX;
		int curY = kingY;
		int nx;
		int ny;

		for (int i = 0; i < N; i++) {
			String command = br.readLine();
			int index = 0;
			switch (command) {
			// 상 부터 시계방향
			case "T":
				index = 0;
				break;
			case "RT":
				index = 1;
				break;
			case "R":
				index = 2;
				break;
			case "RB":
				index = 3;
				break;
			case "B":
				index = 4;
				break;
			case "LB":
				index = 5;
				break;
			case "L":
				index = 6;
				break;
			case "LT":
				index = 7;
				break;
			}
			
			nx = curX + dx[index];
			ny = curY + dy[index];

			if (check(nx, ny, index)) {
				board[curX][curY] = 0;
				board[nx][ny] = 2;
				curX = nx;
				curY = ny;
			}
			
		}
		
//		for (int i = 0; i < board.length; i++) {
//			System.out.println(Arrays.toString(board[i]));
//		}
		
		for (int i = 0; i < 8; i++) {
			for (int j = 0; j < 8; j++) {
				if(board[i][j] == 2) {
					System.out.println((char)(i + 'A') + "" + (j + 1));
				}
			}
		}
		
		for (int i = 0; i < 8; i++) {
			for (int j = 0; j < 8; j++) {
				if(board[i][j] == 3) {
					System.out.println((char)(i + 'A') + "" + (j + 1));
				}
			}
		}

	}

	private boolean check(int nx, int ny, int dir) {
		if (isIn(nx, ny)) {
			// 만약 가고자 하는 방향이 돌이면
			if (board[nx][ny] == 3) {
				int curX = nx;
				int curY = ny;
				int nnx = curX + dx[dir];
				int nny = curY + dy[dir];
				
				if (isIn(nnx, nny)) {
					moveRock(nx, ny, curX, curY, dir);
					return true;
				}
			} else {
				return true;
			}
		}
		return false;
	}

	private void moveRock(int nx, int ny, int curX, int curY, int dir) {
		nx += dx[dir];
		ny += dy[dir];
		if (isIn(nx, ny)) {
			board[curX][curY] = 0;
			board[nx][ny] = 3;
		}
	}

	private boolean isIn(int nx, int ny) {
		// TODO Auto-generated method stub
		return 0 <= nx && nx < 8 && 0 <= ny && ny < 8;
	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}
