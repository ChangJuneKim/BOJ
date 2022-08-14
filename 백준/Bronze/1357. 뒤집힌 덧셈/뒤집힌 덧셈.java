import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	private int reverse(String number) {
		char[] reversed = new char[number.length()];

		for (int i = number.length() - 1, j = 0; i >= 0; i--) {
			reversed[j++] = number.charAt(i);
		}
		
		int reversedNumber = 0;
		
		for (int i = 0; i < reversed.length; i++) {
			reversedNumber += ((reversed[i] - '0') * Math.pow(10, reversed.length - 1 - i));
		}
		
		return reversedNumber;
	}

	public void solution() throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		String X = st.nextToken();
		String Y = st.nextToken();

		int rx = reverse(X);
		int ry = reverse(Y);
		
		System.out.println(reverse(String.valueOf(rx + ry)));

	}

	public static void main(String[] args) throws Exception {
		new Main().solution();
	}
}
