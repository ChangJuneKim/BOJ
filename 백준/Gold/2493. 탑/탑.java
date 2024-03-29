import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {
	public class Tower {
		int number;
		int height;
		public Tower(int number, int height) {
			super();
			this.number = number;
			this.height = height;
		}
		@Override
		public String toString() {
			return "Tower [number=" + number + ", height=" + height + "]";
		}
		
		
	}
	
	public void solution() throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder("");
		
		int N = Integer.valueOf(br.readLine());
		
		Stack<int[]> top = new Stack<>(); //Stack에 int형 배열 저장 가능!!
		StringTokenizer st = new StringTokenizer(br.readLine());

		for(int i=0; i<N; i++) {
			int n = Integer.parseInt(st.nextToken());
			
			while(!top.isEmpty()) {
				if(top.peek()[0] < n) 
					top.pop();
				else { 
					System.out.print(top.peek()[1] + " ");
					break;
				}
			}
			
			if(top.empty()){
                System.out.print("0 ");
            }
				
			top.push(new int[] {n, i+1}); 
		}
			
	
	}

	public static void main(String[] args) throws NumberFormatException, IOException {
		new Main().solution();
	}
}
