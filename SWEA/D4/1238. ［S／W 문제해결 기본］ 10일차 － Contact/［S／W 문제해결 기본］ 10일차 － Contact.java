import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Solution {
	static BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
	static StringBuilder sb = new StringBuilder();
	static StringTokenizer tokens;
	static int[][] graph;
	static boolean[] visited;
	static int N, S;

	public static void main(String[] args) throws IOException {
		for (int t = 1; t <= 10; t++) {
			tokens = new StringTokenizer(input.readLine());
			N = Integer.parseInt(tokens.nextToken());
			S = Integer.parseInt(tokens.nextToken());

			visited = new boolean[N + 1];

			// graph 구성
			/*
			 * graph = new List[N + 1]; for (int i = 1; i < graph.length; i++) { graph[i] =
			 * new ArrayList<>(); }
			 */
			graph = new int[101][101];
			tokens = new StringTokenizer(input.readLine());
			while (tokens.hasMoreTokens()) {
				int from = Integer.parseInt(tokens.nextToken());
				int to = Integer.parseInt(tokens.nextToken());
				// 단방향 그래프
				// graph[from].add(to);
				graph[from][to] = 1;
			}
			// 입력 완료!!
			int maxNo = bfs(S);
			sb.append("#")
				.append(t)
				.append(" ")
				.append(maxNo)
				.append("\n");
		}
		System.out.println(sb);
	}

	static int bfs(int start) {
		// 시작 점 부터 bfs 탐색
		Queue<Integer> q = new LinkedList<>();
		q.add(start);
		visited[start] = true;

		int size = 0, maxD = 0;

		while (!q.isEmpty()) {
			size = q.size();
			maxD = 0;

			while (size-- > 0) {
				// 노드 획득 후 사용
				Integer front = q.poll();
				// 사용하기
				maxD = Math.max(maxD, front);

				for (int c = 1; c <= 100; c++) {
					if (graph[front][c] == 1 && !visited[c]) {
						q.add(c);
						visited[c] = true;
					}
				}
			}
		}
		return maxD;
	}

}