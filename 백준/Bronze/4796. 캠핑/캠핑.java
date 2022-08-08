import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {

	public void solution() throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder("");
		
		int testCase = 1;
		while(true){
			String LPV = br.readLine();
			if(LPV.equals("0 0 0")) {
				break;
			}
			int L = Integer.valueOf(LPV.split(" ")[0]); // 2. L일 동안만 사용가능 
			int P = Integer.valueOf(LPV.split(" ")[1]); // 1. P일 중
			int V = Integer.valueOf(LPV.split(" ")[2]); // 3. 강산이는 막 V일 짜리 휴가를 시작했다
			
			int result = L * (V / P);
			V = V % P;
			
			if(L <= V) {
				V = L;
			}
			result += V;
				
			sb.append("Case " + testCase + ": " + result + "\n");
			testCase++;
		}
		System.out.println(sb);
	}

	public static void main(String[] args) throws Exception {
		new Main().solution();
	}
}
