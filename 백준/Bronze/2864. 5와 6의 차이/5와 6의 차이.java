import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	
	public void solution() throws Exception{
    	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		st = new StringTokenizer(br.readLine());
		
		String[] numbers = new String[st.countTokens()];
		
		for (int i = 0; i < numbers.length; i++) {
			numbers[i] = st.nextToken();
		}
		
		int minSum = Integer.parseInt(numbers[0].replace("6", "5")) + Integer.parseInt(numbers[1].replace("6", "5"));
		int maxSum = Integer.parseInt(numbers[0].replace("5", "6")) + Integer.parseInt(numbers[1].replace("5", "6"));
		
		System.out.println(minSum + " " + maxSum);
		
	}
	public static void main(String[] args) throws Exception{
		new Main().solution();
	}
}