import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
	StringBuilder sb = new StringBuilder();
	
	char[] alpha;
	
	private boolean np(int size) {
		// 뒤에서부터 봉우리 찾기 
		int i = size;		
		while(i > 0 && alpha[i - 1] >= alpha[i]) {
			i--;
		}
		
		// 정렬이 다 돼있어서 처음까지 와버렸으면 끝
		if(i == 0) {
			return false;
		}
		
		// 봉우리보다 왼쪽에 있는것 보다 큰걸 찾으러 간다
		int j = size;
		while(alpha[i - 1] >= alpha[j]) {
			j--;
		}
		
		// swap
		char temp = alpha[i - 1];
		alpha[i - 1] = alpha[j];
		alpha[j] = temp;
		
		int k = size;
		while(i < k) {
			temp = alpha[i];
			alpha[i] = alpha[k];
			alpha[k] = temp;
			i++;
			k--;
		}
		
		return true;
	}

	public void solution() throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int T = Integer.valueOf(br.readLine());
		
		for (int testCase = 0; testCase < T; testCase++) {
			String word = br.readLine();
			alpha = word.toCharArray();
			
			if(np(alpha.length - 1)) {
				for (int i=0;i<word.length();i++) {
					sb.append(alpha[i]);
				}
				sb.append("\n");
			}else {
				sb.append(word + "\n");
			}
		}
		System.out.println(sb);
		
	}

	public static void main(String[] args) throws Exception {
		new Main().solution();
	}
}
