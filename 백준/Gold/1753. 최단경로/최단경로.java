import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {

	class Node {
		int number;
		int distance;

		public Node(int number, int distance) {
			super();
			this.number = number;
			this.distance = distance;
		}

	}

	int V, E, K;
	ArrayList<ArrayList<Node>> graph = new ArrayList<>();
	int[] distances;
	final int INF = Integer.MAX_VALUE;

	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		StringBuilder sb = new StringBuilder();

		V = Integer.valueOf(st.nextToken());
		E = Integer.valueOf(st.nextToken());

		K = Integer.valueOf(br.readLine());

		for (int i = 0; i < V + 1; i++) {
			graph.add(new ArrayList<>());
		}

		for (int i = 0; i < E; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.valueOf(st.nextToken());
			int to = Integer.valueOf(st.nextToken());
			int distance = Integer.valueOf(st.nextToken());

			graph.get(from)
				.add(new Node(to, distance));
		}

		distances = new int[V + 1];
		Arrays.fill(distances, INF);

		dijkstra(K);

		for (int i = 1; i < distances.length; i++) {
			if (distances[i] == INF) {
				sb.append("INF")
					.append("\n");

			} else {
				sb.append(distances[i])
					.append("\n");
			}
		}
		
		System.out.println(sb);
	}

	private void dijkstra(int start) {
		PriorityQueue<Node> pq = new PriorityQueue<>((o1, o2) -> o1.distance - o2.distance);
		pq.offer(new Node(start, 0));
		distances[start] = 0;

		while (!pq.isEmpty()) {
			// 최소 우선순위큐 에서 하나 꺼냄
			Node minVertex = pq.poll();
			int current = minVertex.number;
			int distance = minVertex.distance;

			// 큐에서 꺼낸 거리와, 최단 거리 테이블 값을 비교해서 방문처리를 함
			// 만약 현재 꺼낸 노드의 거리가 최단 거리 테이블보다 값이 크다면 해당 노드는 이전에 방문된 노드
			if (distance > distances[current]) {
				continue;
			}

			// 큐에서 꺼낸 노드에서 연결된 노드들을 탐색
			for (Node linkedNode : graph.get(current)) {
				// 해당 노드를 거쳐서 다음 노드로 이동 할 때의 값이 다음 이동 노드의 최단거리 테이블보다 작을 때
				if (distance + linkedNode.distance < distances[linkedNode.number]) {
					// 값 갱신
					distances[linkedNode.number] = distance + linkedNode.distance;
					// 갱신된 노드를 pq에 넣음
					pq.offer(new Node(linkedNode.number, distances[linkedNode.number]));
				}
			}
		}

	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}
