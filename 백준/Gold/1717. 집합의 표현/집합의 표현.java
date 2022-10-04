import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	public class UnionFind {
		int[] parent;
		int count;

		public UnionFind(int count) {
			this.count = count;
			parent = new int[this.count];
		}

		public void makeSet() {
			for (int i = 0; i < count; i++) {
				parent[i] = -1;
			}
		}

		private int find(int num) {
			if (parent[num] < 0) {
				return num;
			}

			return parent[num] = find(parent[num]);
		}

		private void merge(int num1, int num2) {
			int rootA = find(num1);
			int rootB = find(num2);

			if (rootA == rootB) {
				return;
			}

			int temp = parent[rootA] + parent[rootB];

			if (parent[rootA] > parent[rootB]) {
				parent[rootA] = rootB;
				parent[rootB] = temp;
			} else {
				parent[rootB] = rootA;
				parent[rootA] = temp;
			}
		}
	}

	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		StringBuilder sb = new StringBuilder();

		int N = Integer.valueOf(st.nextToken());
		int M = Integer.valueOf(st.nextToken());

		UnionFind uf = new UnionFind(N + 1);
		uf.makeSet();

		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(br.readLine());

			int command = Integer.valueOf(st.nextToken());
			int a = Integer.valueOf(st.nextToken());
			int b = Integer.valueOf(st.nextToken());

			if (command == 0) {
				uf.merge(a, b);
			}

			if (command == 1) {
				int rootA = uf.find(a);
				int rootB = uf.find(b);

				if (rootA == rootB) {
					sb.append("YES")
						.append("\n");
				} else {
					sb.append("NO")
						.append("\n");
				}
			}
		}
		System.out.println(sb);
	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}
}
