import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main {
	
	int N, M;
	boolean[] visited;
	ArrayList<ArrayList<Integer>> graph; 

	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int T = Integer.valueOf(st.nextToken());
		
		for (int testCase = 0; testCase < T; testCase++) {
			st = new StringTokenizer(br.readLine());
			
			N = Integer.valueOf(st.nextToken());
			M = Integer.valueOf(st.nextToken());
			
//			graph = new ArrayList<>();
//			
//			for (int i = 0; i < N + 1; i++) {
//				graph.add(new ArrayList<>());
//			}
			
			for (int i = 0; i < M; i++) {
				st = new StringTokenizer(br.readLine());
//				int from = Integer.valueOf(st.nextToken());
//				int to = Integer.valueOf(st.nextToken());
//				
//				graph.get(from).add(to);
//				graph.get(to).add(from);
			}
			System.out.println(N - 1);		
		}
	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}
