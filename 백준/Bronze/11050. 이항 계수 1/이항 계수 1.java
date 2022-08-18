import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	int N, K;
	int count = 0;
    
	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		N = Integer.valueOf(st.nextToken());
		K = Integer.valueOf(st.nextToken());
		
		comb(0, 0);
		System.out.println(count);
	}

	private void comb(int depth, int start) {
		if(depth == K) {
			count++;
			return;
		}
		
		for (int i = start; i < N; i++) {			
			comb(depth + 1, i + 1);
		}
		
	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}