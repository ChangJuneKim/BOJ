import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	int N, M;
	int[][] room;

	// 북동남서
	int[] dx = { -1, 0, 1, 0 };
	int[] dy = { 0, 1, 0, -1 };

	int count = 0;

	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		N = Integer.valueOf(st.nextToken());
		M = Integer.valueOf(st.nextToken());

		st = new StringTokenizer(br.readLine());

		int r = Integer.valueOf(st.nextToken());
		int c = Integer.valueOf(st.nextToken());
		int d = Integer.valueOf(st.nextToken());

		room = new int[N][M];

		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < M; j++) {
				room[i][j] = Integer.valueOf(st.nextToken());
			}
		}

		// 왼쪽으로만 돈다
		// 1. 왼쪽 방향에 0이 있으면 왼쪽으로 가서 청소한다 (청소하면 2로 표시할거임)
		// 2. 왼쪽 방향이 0이 아니면 다시 왼쪽 방향으로 돈다.
		// 3. 4방향 다 봤는데 0이 아니면 방향을 유지한 채로 한칸 후진하고 왼쪽으로 돌아본다
		// 4. 4방향 다 보고 0이 아닌데, 뒤쪽이 벽이라면 작동을 중지한다.
		cleaning(r, c, d);

		System.out.println(count);

	}

	private void cleaning(int x, int y, int direction) {
		
		if(room[x][y] == 0) {
			room[x][y] = 2; // 현재 위치 청소
			count++;
		}
		
		// 왼쪽으로 탐색
		for (int i = 0; i < 4; i++) {
			direction = (direction + 3) % 4;
			int leftX = x + dx[direction];
			int leftY = y + dy[direction];

			if (isIn(leftX, leftY) && room[leftX][leftY] == 0) {
				// 청소가 안된 곳이 있으면 cleaning
				cleaning(leftX, leftY, direction);
				return;

			}
		}
		// 다~ 돌아봤는데 청소를 못했다면(다 벽이거나 이미 청소한 곳) 후진해야한다
		int reverseDir = (direction + 2) % 4;
		int reverseX = x + dx[reverseDir];
		int reverseY = y + dy[reverseDir];

		if (isIn(reverseX, reverseY) && room[reverseX][reverseY] != 1) {
			cleaning(reverseX, reverseY, direction); // 바라보는 방향 유지한 채 후진
		}
	}

	private boolean isIn(int x, int y) {
		return 0 <= x && x < N && 0 <= y && y < M;
	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}
