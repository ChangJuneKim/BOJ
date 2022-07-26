import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	public void solution() throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		st = new StringTokenizer(br.readLine());
		int N = Integer.parseInt(st.nextToken()); // 적어도 N개 사야함
		int M = Integer.parseInt(st.nextToken());
		
		int minPackagePrice = 1001;
		int minSinglePrice = 1001;
		
		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(br.readLine());
			minPackagePrice = Math.min(Integer.parseInt(st.nextToken()), minPackagePrice); // 패키지 가격 (6개입)
			minSinglePrice = Math.min(Integer.parseInt(st.nextToken()), minSinglePrice); // 낱개 가격 (1개)
			
		}
		
		int allPackage = (int) Math.ceil((double)N / 6) * minPackagePrice;
		int allSingle = N * minSinglePrice; 
		int packageAndSingle = (N / 6) * minPackagePrice + (N % 6) * minSinglePrice;
		
		System.out.println(Math.min(allPackage, Math.min(packageAndSingle, allSingle)));
		
	}
	public static void main(String[] args) throws Exception{
		new Main().solution();
	}
}




