import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    int N, M;
    int personA, personB;
    ArrayList<ArrayList<Integer>> graph = new ArrayList<>();
    boolean[] visited;
    
    // 유니온 파인드를 위한 parents 배열
    int[] parents;
    int answer;
    
    public static void main(String[] args) throws IOException {
        new Main().solution();
    }
    
    public void solution() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        
        N = Integer.parseInt(br.readLine());
        
        st = new StringTokenizer(br.readLine());
        
        personA = Integer.parseInt(st.nextToken());
        personB = Integer.parseInt(st.nextToken());
        
        for (int i = 0; i < N + 1; i++) {
            graph.add(new ArrayList<Integer>());
        }
        
        M = Integer.parseInt(br.readLine());
        
        //makeSet
        parents = new int[N + 1];
        Arrays.fill(parents, -1);
        
        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            
            int parent = Integer.parseInt(st.nextToken());
            int child = Integer.parseInt(st.nextToken());
            
            graph.get(parent).add(child);
            graph.get(child).add(parent);
            union(parent, child);
        }
        
        visited = new boolean[N + 1];
        
        if (find(personA) != find(personB)) {
            System.out.println(-1);
        } else {
            dfs(personA, 0);
            System.out.println(answer);
        }
    }
    
    private void dfs(int current, int cnt) {
        visited[current] = true;
        for (int x : graph.get(current)) {
            if (!visited[x]) { //방문하지 않았으면
                if (x == personB) { //end에 도달하면
                    answer = cnt + 1;
                    return;
                }
                //다음 촌수로 이동
                dfs(x, cnt + 1);
            }
        }
    }
    
    private void union(int personA, int personB) {
        int parentA = find(personA);
        int parentB = find(personB);
        
        if (parentA == parentB) {
            return;
        }
        
        int sum = parents[parentA] + parents[parentB];
        
        if (parents[parentA] > parents[parentB]) {
            parents[parentB] = sum;
            parents[parentA] = parentB;
        } else {
            parents[parentA] = sum;
            parents[parentB] = parentA;
        }
    }
    
    private int find(int personA) {
        if (parents[personA] < 0) {
            return personA;
        }
        
        return parents[personA] = find(parents[personA]);
    }
    
}
