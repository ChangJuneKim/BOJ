import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {

	public void solution() throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // 백준
		StringBuilder sb = new StringBuilder();

		int n = Integer.parseInt(br.readLine());
	
		n = 2 * n - 2;

		for (int i = -n; i < n + 1; i+=2) {
			for (int j = 0; j <(n - Math.abs(i))/2; j++) {
				sb.append(" ");
			}
			
			for (int j = 0; j < Math.abs(i) + 1; j++) {
				sb.append("*");
			}
			
			if(i != n)
				sb.append(" ");
			sb.append("\n");
		}
		System.out.print(sb);
	}

	public static void main(String[] args) throws Exception {
		new Main().solution();
	}

}
