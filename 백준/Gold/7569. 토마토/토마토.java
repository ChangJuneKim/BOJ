import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.StringTokenizer;

public class Main {
    int N, M, H;
    int[][][] boxes;
    boolean[][][] visited;
    
    int[] dx = {-1, 0, 1, 0, 0, 0};
    int[] dy = {0, 1, 0, -1, 0, 0};
    int[] dz = {0, 0, 0, 0, -1, 1};
    int day, greenTomato;
    ArrayDeque<int[]> queue = new ArrayDeque<>();
    
    public static void main(String[] args) throws IOException {
        new Main().solution();
    }
    
    public void solution() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        M = Integer.parseInt(st.nextToken());
        N = Integer.parseInt(st.nextToken());
        H = Integer.parseInt(st.nextToken());
        
        boxes = new int[H][N][M];
        day = 0;
        greenTomato = 0;
        
        for (int i = 0; i < H; i++) {
            for (int j = 0; j < N; j++) {
                st = new StringTokenizer(br.readLine());
                for (int k = 0; k < M; k++) {
                    boxes[i][j][k] = Integer.parseInt(st.nextToken());
                    if (boxes[i][j][k] == 0) {
                        greenTomato++;
                    }
                    if (boxes[i][j][k] == 1) {
                        queue.offer(new int[]{i, j, k});
                    }
                }
            }
        }
        
        int result = bfs();
        
        System.out.println(result);
    }
    
    private int bfs() {
        while (!queue.isEmpty()) {
            int size = queue.size();
            if (greenTomato == 0) {
                break;
            }
            for (int i = 0; i < size; i++) {
                int[] current = queue.poll();
                int curZ = current[0];
                int curX = current[1];
                int curY = current[2];
                
                for (int j = 0; j < 6; j++) {
                    int nz = curZ + dz[j];
                    int nx = curX + dx[j];
                    int ny = curY + dy[j];
                    
                    if (isIn(nx, ny, nz) && boxes[nz][nx][ny] == 0) {
                        queue.offer(new int[]{nz, nx, ny});
                        boxes[nz][nx][ny] = 1;
                        greenTomato--;
                    }
                }
            }
            day++;
        }
        
        if (greenTomato == 0) {
            return day;
        } else {
            return -1;
        }
    }
    
    private boolean isIn(int nx, int ny, int nz) {
        return 0 <= nx && nx < N && 0 <= ny && ny < M && 0 <= nz && nz < H;
    }
    
}
