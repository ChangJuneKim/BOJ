import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;

public class Main {

	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
		Deque<Integer> queue = new ArrayDeque<Integer>();
		
		int N = Integer.valueOf(br.readLine());
		
		for (int i = 0; i < N; i++) {
			String[] command = br.readLine().split(" ");
			
			if(command.length == 2) {
				int number = Integer.valueOf(command[1]);
				queue.add(number);
			} else {
				switch (command[0]) {
				case "pop":
					if(queue.isEmpty()) {
						sb.append(-1 + "\n");						
					}else {						
						sb.append(queue.poll() + "\n");
					}
					break;
				case "size":
					sb.append(queue.size() + "\n");
					break;
				case "empty":
					if(queue.isEmpty()) {
						sb.append(1 + "\n");						
					}else {
						sb.append(0 + "\n");						
					}
					break;
				case "front":
					if(queue.isEmpty()) {
						sb.append(-1 + "\n");
					}else {
						sb.append(queue.peekFirst() + "\n");
					}
					break;
				case "back":
					if(queue.isEmpty()) {
						sb.append(-1 + "\n");
					}else {
						sb.append(queue.peekLast() + "\n");
					}
					break;
				}
			}
		}
		System.out.println(sb);
		
	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}