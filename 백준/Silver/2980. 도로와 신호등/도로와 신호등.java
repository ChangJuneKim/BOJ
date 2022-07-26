import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	public void solution() throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		st = new StringTokenizer(br.readLine());
		int N = Integer.parseInt(st.nextToken()); // 신호등 개수
		int L = Integer.parseInt(st.nextToken()); // 도로의 길이
		
		int currentPosition = 0; // 현재 위치
		int time = 0;
		
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			int D = Integer.parseInt(st.nextToken()); // 신호등 위치
			int R = Integer.parseInt(st.nextToken()); // 빨간색 지속 시간
			int G = Integer.parseInt(st.nextToken()); // 초록색 지속 시간
			
			time += D - currentPosition;
			currentPosition = D;
			
			int section = time % (R + G);// R이5고 G이5라고 치면 RRRRRGGGGG 만약 시간이 7초흘렀다면 지금 신호등은 RRRRRG"G"GGG 녹색 점등
			
			if(section < R) { // R보다 작으면 빨간불
				time += R - section;
			}
		}
		System.out.println(time + L - currentPosition);
		
	}
	public static void main(String[] args) throws Exception{
		new Main().solution();
	}
}





