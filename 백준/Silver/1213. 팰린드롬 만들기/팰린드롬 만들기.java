import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String str = br.readLine();
		int[] alpha = new int[26];
		
		for (int i = 0; i < str.length(); i++) {
			alpha[str.charAt(i) - 'A']++;
		}
		
		int oddCount = 0;
		int oddIndex = 0;
		
		for (int i = 0; i < alpha.length; i++) {
			if(alpha[i] % 2 == 1) {
				oddCount++;
				oddIndex = i;
			}
		}
		
		if(((str.length() % 2 == 0) && oddCount > 0) || (str.length() % 2 == 1 && oddCount != 1)){
			System.out.println("I'm Sorry Hansoo");
			return;
		}
		
		for (int i = 0; i < alpha.length; i++) {
			for (int j = 0; j < alpha[i] / 2; j++) {
				System.out.print((char)(i + 'A'));
			}
		}
		
		if(str.length() % 2 == 1) {
			System.out.print((char) (oddIndex + 'A'));
		}
		
		for (int i = 25; i >= 0; i--) {
			for (int j = 0; j < alpha[i] / 2; j++) {
				System.out.print((char) (i + 'A'));
			}
			
		}
		
	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}
