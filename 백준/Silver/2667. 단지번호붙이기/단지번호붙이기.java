import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class Main {

	int N;
	int[][] map;
	boolean[][] visited;
	int[] dx = { -1, 0, 1, 0 };
	int[] dy = { 0, 1, 0, -1 };
	ArrayList<Integer> countsOfAPT;
	int count;

	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
		N = Integer.valueOf(br.readLine());

		map = new int[N][N];
		visited = new boolean[N][N];

		for (int i = 0; i < N; i++) {
			String line = br.readLine();
			for (int j = 0; j < N; j++) {
				map[i][j] = line.charAt(j) - '0';
			}
		}
		
		countsOfAPT= new ArrayList<>();
		for (int i = 0; i < N; i++) {
			for (int j = 0; j < N; j++) {
				if (!visited[i][j] && map[i][j] == 1) {
					count = 1;
					dfs(i, j);
					countsOfAPT.add(count);
				}
			}
		}
		
		Collections.sort(countsOfAPT);
		
		sb.append(countsOfAPT.size() + "\n");
		for (int i = 0; i < countsOfAPT.size(); i++) {
			sb.append(countsOfAPT.get(i) + "\n");
		}
		
		System.out.println(sb);
	}

	private void dfs(int i, int j) {
		visited[i][j] = true;
        
		int nx;
	    int ny;
		for (int dir = 0; dir < 4; dir++) {
			nx = i + dx[dir];
			ny = j + dy[dir];

			if (isIn(nx, ny)) {
				if (!visited[nx][ny] && map[nx][ny] == 1) {
					count++;
					dfs(nx, ny);
				}
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