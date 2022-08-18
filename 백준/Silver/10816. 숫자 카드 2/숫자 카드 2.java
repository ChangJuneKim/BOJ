import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.valueOf(br.readLine());
		StringBuilder sb = new StringBuilder();
		int[] arr = new int[20000001];
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		for(int i = 0; i < N; i++) {
			int input = Integer.valueOf(st.nextToken());
			//해당 인덱스 값에 +1해준다.
			arr[input + 10000000]++;
		}
		
		int M = Integer.valueOf(br.readLine());
		
		st = new StringTokenizer(br.readLine());
		for(int i = 0; i < M; i++) {
			int input = Integer.valueOf(st.nextToken());
			sb.append(arr[input + 10000000]).append(" ");
		}
		System.out.println(sb);
	}

}