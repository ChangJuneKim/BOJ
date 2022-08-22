import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	int R, C;
	boolean[][] visited;
	char[][] map;
	
	int[] dx = {-1, 0, 1, 0};
	int[] dy = {0, 1, 0, -1};

	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		R = Integer.valueOf(st.nextToken());
		C = Integer.valueOf(st.nextToken());
		
		map = new char[R][C];
		
		for (int i = 0; i < R; i++) {
			String line = br.readLine();
			for (int j = 0; j < C; j++) {
				map[i][j] = line.charAt(j);
			}
		}
	
		int count = 0;
		visited = new boolean[R][C];
		for (int i = 0; i < R; i++) {
			for (int j = 0; j < C; j++) {
				if(map[i][j] == '#' && !visited[i][j]) {
					dfs(i, j);
					count++;
				}
			}
		}
		
		System.out.println(count);
		
	}

	private void dfs(int x, int y) {
		visited[x][y] = true;
		
		for (int i = 0; i < 4; i++) {
			int nx = x + dx[i];
			int ny = y + dy[i];
			
			if (isIn(nx, ny) && !visited[nx][ny] && map[nx][ny] == '#') {
				dfs(nx, ny);
			} 
		}
		
	}

	private boolean isIn(int nx, int ny) {
		return 0 <= nx && nx < R && 0 <= ny && ny < C;
	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}
