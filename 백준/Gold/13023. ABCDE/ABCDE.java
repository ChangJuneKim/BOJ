import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.StringTokenizer;

public class Main {
	
	int N, M;
	ArrayList<ArrayList<Integer>> graph = new ArrayList<>();
	boolean[] visited;
	boolean flag;
	
	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		N = Integer.valueOf(st.nextToken());
		M = Integer.valueOf(st.nextToken());
		
		for (int i = 0; i < N + 1; i++) {
			graph.add(new ArrayList<>());
		}
		
		
		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.valueOf(st.nextToken());
			int to = Integer.valueOf(st.nextToken());
			
			graph.get(from).add(to);
			graph.get(to).add(from);
		}
		
		for (int i = 1; i <= N; i++) {
			flag = false;
			visited = new boolean[N + 1];
			dfs(i, 0);
			if(flag) {
				System.out.println(1);
				return;
			}
		}
		
		System.out.println(0);
	}	


	private void dfs(int current, int depth) {
		visited[current] = true;
		
		if(depth == 4) {
			flag = true;
			return;
		}
		
		for (int i = 0; i < graph.get(current).size(); i++) {
			int neighbor = graph.get(current).get(i);
			
			if(!visited[neighbor]) {
				dfs(neighbor, depth + 1);
			}
			
		}
		
		visited[current] = false;
	}


	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}
