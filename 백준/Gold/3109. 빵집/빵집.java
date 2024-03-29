import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	int R;
	int C;
	char[][] map;
	int count;

	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		R = Integer.valueOf(st.nextToken());
		C = Integer.valueOf(st.nextToken());

		map = new char[R][C];

		for (int i = 0; i < R; i++) {
			map[i] = br.readLine()
				.toCharArray();
		}

		for (int i = 0; i < R; i++) {
			if (dfs(i, 0)) {
				count++;
			}
		}
		
		System.out.println(count);
	}

	private boolean dfs(int x, int y) {
		map[x][y] = 'o';

		if (y == C - 1) {
//			for (int i = 0; i < map.length; i++) {
//				System.out.println(Arrays.toString(map[i]));
//			}
			return true;
		}

		if (0 < x && map[x - 1][y + 1] == '.') {
			if (dfs(x - 1, y + 1)) {
				return true;
			}
		}

		if (map[x][y + 1] == '.') {
			if (dfs(x, y + 1)) {
				return true;
			}
		}

		if (x + 1 < R && map[x + 1][y + 1] == '.') {
			if (dfs(x + 1, y + 1)) {
				return true;
			}
		}
		
		return false;
	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}