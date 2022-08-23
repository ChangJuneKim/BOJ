import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	int[] parents;
	
	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		StringBuilder sb = new StringBuilder();
		
		int N = Integer.valueOf(st.nextToken());
		int M = Integer.valueOf(st.nextToken());
		
		parents = new int[N + 1];
		
		for (int i = 0; i <= N; i++) {
			parents[i] = -1;
		}
		
		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(br.readLine());
			
			int command = Integer.valueOf(st.nextToken());
			int a = Integer.valueOf(st.nextToken());
			int b = Integer.valueOf(st.nextToken());
			
			if(command == 0) {
				merge(a, b);
			} 

			if(command == 1){
				int rootA = find(a);
				int rootB = find(b);
				
				if (rootA == rootB) {
					sb.append("YES").append("\n");
				} else {
					sb.append("NO").append("\n");
				}
			}	
		}
		System.out.println(sb);	
	}

	private int find(int num) {
		if (parents[num] < 0) {
			return num;
		}

		return parents[num] = find(parents[num]);
	}

	private void merge(int num1, int num2) {
		int rootA = find(num1);
		int rootB = find(num2);

		if (rootA == rootB) {
			return;
		}

		int temp = parents[rootA] + parents[rootB];

		if (parents[rootA] > parents[rootB]) {
			parents[rootA] = rootB;
			parents[rootB] = temp;
		} else {
			parents[rootB] = rootA;
			parents[rootA] = temp;
		}
	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}
