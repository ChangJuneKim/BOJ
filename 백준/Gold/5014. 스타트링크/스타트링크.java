import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.StringTokenizer;

public class Main {
    int F, S, G;
    
    int[] dir;
    int[] building;
    
    public static void main(String[] args) throws IOException {
        new Main().solution();
    }
    
    public void solution() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        
        F = Integer.parseInt(st.nextToken()); // 총 층수
        S = Integer.parseInt(st.nextToken()); // 시작 층
        G = Integer.parseInt(st.nextToken()); // 목표 층
        dir = new int[2];
        dir[0] = Integer.parseInt(st.nextToken()); // 상
        dir[1] = -Integer.parseInt(st.nextToken()); // 하
        
        building = new int[F + 1];
        
        int result = bfs(S);
        
        if (result == -1) {
            System.out.println("use the stairs");
        } else {
            System.out.println(result);
        }
    }
    
    private int bfs(int start) {
        ArrayDeque<Integer> queue = new ArrayDeque<>();
        boolean[] visited = new boolean[F + 1];
        
        queue.offer(start);
        visited[start] = true;
        
        int count = 0;
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            
            for (int i = 0; i < size; i++) {
                int current = queue.poll();
                
                if (current == G) {
                    return count;
                }
                
                for (int j = 0; j < dir.length; j++) {
                    int nextFloor = current + dir[j];
                    
                    if (0 < nextFloor && nextFloor <= F && !visited[nextFloor]) {
                        queue.offer(nextFloor);
                        visited[nextFloor] = true;
                    }
                }
            }
            count++;
        }
        return -1;
    }
    
    
}
