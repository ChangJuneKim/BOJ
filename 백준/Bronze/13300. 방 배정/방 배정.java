import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	public void solution() throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int N = Integer.valueOf(st.nextToken()); // 수학여행 참가 학생 수
		int K = Integer.valueOf(st.nextToken()); // 한 방에 배정할 수 있는 최대 인원
		
		int[] rooms = new int[12];
		
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			int S = Integer.valueOf(st.nextToken()); // 성별 0여, 1남
			int Y = Integer.valueOf(st.nextToken()); // 학년
			
			if(S == 0) { // 여자면
				rooms[Y * 2 - 2]++;
			} else{ // 남자면
				rooms[Y * 2 - 1]++;
			}
		}
		
		int count = 0;
		
		for (int i = 0; i < rooms.length; i++) {
			count += (int) (Math.ceil((rooms[i] / (double) K)));
		}
		System.out.println(count);
	}

	public static void main(String[] args) throws Exception {
		new Main().solution();
	}
}
