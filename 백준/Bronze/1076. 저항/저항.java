import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Main {
	
	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		HashMap<String, int[]> colors = new HashMap<String, int[]>() {
			private static final long serialVersionUID = 1L;
		{
			put("black", new int[] {0, 1});
			put("brown", new int[] {1, 10});
			put("red", new int[] {2, 100});
			put("orange", new int[] {3, 1000});
			put("yellow", new int[] {4, 10000});
			put("green", new int[] {5, 100000});
			put("blue", new int[] {6, 1000000});
			put("violet", new int[] {7, 10000000});
			put("grey", new int[] {8, 100000000});
			put("white", new int[] {9, 1000000000});
		}};
		
		String color1 = br.readLine();
		String color2 = br.readLine();
		String color3 = br.readLine();
		
		long result = (long)(colors.get(color1)[0] * 10 + colors.get(color2)[0]) * colors.get(color3)[1];
		
		System.out.println(result);
		
	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}
