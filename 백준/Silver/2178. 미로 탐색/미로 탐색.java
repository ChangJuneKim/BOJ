import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {

	class Coords {
		int x;
		int y;

		public Coords(int x, int y) {
			super();
			this.x = x;
			this.y = y;
		}
	}

	int N, M;
	int[][] maze;
	int[][] distances;
	
	int[] dx = { -1, 0, 1, 0 };
	int[] dy = { 0, 1, 0, -1 };

	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		N = Integer.valueOf(st.nextToken());
		M = Integer.valueOf(st.nextToken());

		maze = new int[N][M];
		distances = new int[N][M];

		for (int i = 0; i < N; i++) {
			char[] row = br.readLine()
					.toCharArray();
			for (int j = 0; j < row.length; j++) {
				maze[i][j] = row[j] - '0';
			}
		}

		bfs(0, 0);

		System.out.println(distances[N - 1][M - 1]);
//		for (int i = 0; i < distances.length; i++) {
//			System.out.println(Arrays.toString(distances[i]));
//		}
	}

	private void bfs(int i, int j) {
		Queue<Coords> queue = new LinkedList<>();
		queue.offer(new Coords(i, j));

		distances[i][j] = 1;

		while (!queue.isEmpty()) {
			Coords current = queue.poll();
			int x = current.x;
			int y = current.y;

			// 끝까지 갔으면 break
			if (x == N - 1 && y == M - 1) {
				break;
			}

			for (int dir = 0; dir < 4; dir++) {
				int nx = x + dx[dir];
				int ny = y + dy[dir];

				if (isIn(nx, ny)) {
					if (distances[nx][ny] == 0 && maze[nx][ny] == 1) {
						queue.offer(new Coords(nx, ny));
						distances[nx][ny] = distances[x][y] + 1;
					}
				}
			}
		}
	}

	private boolean isIn(int nx, int ny) {
		return 0 <= nx && nx < N && 0 <= ny && ny < M;
	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}