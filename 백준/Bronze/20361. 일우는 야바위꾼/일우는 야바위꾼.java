import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	
	boolean[] cups;
    
	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		int N = Integer.valueOf(st.nextToken()); // 컵의 개수
		int X = Integer.valueOf(st.nextToken()); // 처음 공의 위치
		int K = Integer.valueOf(st.nextToken()); // K회 컵 이동
		
		cups = new boolean[N + 1];
		cups[X] = true;
		
		for (int i = 0; i < K; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.valueOf(st.nextToken());
			int to = Integer.valueOf(st.nextToken());
			
			swap(from, to);
		}
		
		for (int i = 0; i < cups.length; i++) {
			if(cups[i]) {
				System.out.println(i);
				break;
			}
		}
	
	}
	
	void swap(int from, int to) {
		boolean temp = cups[from];
		cups[from] = cups[to];
		cups[to] = temp;
	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}
