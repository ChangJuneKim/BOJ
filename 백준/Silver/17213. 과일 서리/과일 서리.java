import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
	int N;
	int M;
	int count;
    
	public void solution() throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		N = Integer.valueOf(br.readLine());
		M = Integer.valueOf(br.readLine());
		
		M = M - N;
		
		reCombination(0, 0);
		System.out.println(count);
	}
	
	void reCombination(int depth, int start) {
		// 기저조건 (종료조건)
		if (depth == M) {
			count++;
			return;
		}

		for (int i = start; i < N; i++) {
			reCombination(depth + 1, i);
		}
	}

	public static void main(String[] args) throws Exception {
		new Main().solution();
	}
}
