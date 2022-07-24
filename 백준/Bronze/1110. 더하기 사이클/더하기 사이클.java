import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
	
	public void solution() throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int N = Integer.parseInt(br.readLine());
		
		int cycle = 0;
		int newNumber = N;
		while(true) {
			 // 26 , 68
			int tens = newNumber / 10; // 2 , 6
			int units = newNumber % 10; // 6 , 8
			
			newNumber = units * 10 + (tens + units) % 10; // 60 + 8, 80 + 4
			cycle++; // 1
			
			if(N == newNumber) {
				break;
			}
			
		}
		System.out.println(cycle);
	}
	public static void main(String[] args) throws Exception{
		new Main().solution();
	}
}

