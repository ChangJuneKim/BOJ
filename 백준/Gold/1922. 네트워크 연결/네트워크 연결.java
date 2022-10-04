import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {
    
    int N, M;
    int[] parents;
    int result;
    PriorityQueue<Edge> pq = new PriorityQueue<>();
    
    public static void main(String[] args) throws IOException {
        new Main().solution();
    }
    
    public void solution() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        
        N = Integer.parseInt(br.readLine());
        M = Integer.parseInt(br.readLine());
        
        // 1. makeSet
        parents = new int[N + 1];
        Arrays.fill(parents, -1);
        
        // 2. 우선순위 큐에 edge 정보를 담는다
        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int from = Integer.parseInt(st.nextToken());
            int to = Integer.parseInt(st.nextToken());
            int weight = Integer.parseInt(st.nextToken());
            
            pq.offer(new Edge(from, to, weight));
        }
        
        // 3. 하나씩 꺼낸다
        while (!pq.isEmpty()) {
            Edge current = pq.poll();
            int nodeA = current.from;
            int nodeB = current.to;
            int weight = current.weight;
            
            // 같은 형제인지 확인 -> 같으면 넘어가고
            if (find(nodeA) == find(nodeB)) {
                continue;
            }
            
            // 다르면 합친다
            union(nodeA, nodeB);
            result += weight;
        }
        
        System.out.println(result);
        
    }
    
    private void union(int nodeA, int nodeB) {
        int parentA = find(nodeA);
        int parentB = find(nodeB);
        
        // 부모가 같다면 union 불가능
        if (parentA == parentB) {
            return;
        }
        
        // !! 부모 기준의 값으로 비교해야한다
        // 부모가 다를 때
        int sum = parents[parentA] + parents[parentB];
        // 더 크다는 뜻은 절대값이 작다(식구가 적다)는 뜻
        if (parents[parentA] > parents[parentB]) {
            parents[parentA] = parentB;
            parents[parentB] = sum;
        } else {
            parents[parentB] = parentA;
            parents[parentA] = sum;
        }
        
    }
    
    private int find(int i) {
        // 음수면 자기가 대장
        if (parents[i] < 0) {
            return i;
        }
        
        // 아니라면 찾으러 간다
        return parents[i] = find(parents[i]);
    }
    
    class Edge implements Comparable<Edge> {
        int from, to, weight;
        
        public Edge(int from, int to, int weight) {
            this.from = from;
            this.to = to;
            this.weight = weight;
        }
        
        @Override
        public String toString() {
            return "Edge{" +
                "from=" + from +
                ", to=" + to +
                ", weight=" + weight +
                '}';
        }
        
        @Override
        public int compareTo(Edge o) {
            return this.weight - o.weight;
        }
    }
    
    
}
