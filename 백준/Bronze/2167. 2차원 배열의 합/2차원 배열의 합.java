import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	public void solution() throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		StringBuilder sb = new StringBuilder("");
		
		st = new StringTokenizer(br.readLine());
		
		int N = Integer.valueOf(st.nextToken());
		int M = Integer.valueOf(st.nextToken());
		
		int[][] numbers = new int[N][M];
		
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < M; j++) {
				numbers[i][j] = Integer.valueOf(st.nextToken());
			}
		}
		
		st = new StringTokenizer(br.readLine());
		
		int K = Integer.valueOf(st.nextToken());
		
		
		for (int i = 0; i < K; i++) {
			int sum = 0;
			st = new StringTokenizer(br.readLine());
			int x1 = Integer.valueOf(st.nextToken()) - 1;
			int y1 = Integer.valueOf(st.nextToken()) - 1;
			int x2 = Integer.valueOf(st.nextToken()) - 1;
			int y2 = Integer.valueOf(st.nextToken()) - 1;
			

			for (int x = 0; x < N; x++) {
				for (int y = 0; y < M; y++) {
					if(x1 <= x && x <= x2 && y1 <= y && y <= y2) {
						sum += numbers[x][y]; 	
					}					
				}
			}
			sb.append(String.format("%d%n", sum));
		}
		System.out.println(sb);
	}

	public static void main(String[] args) throws Exception {
		new Main().solution();
	}
}

