import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    int N, M, K;
    int[][] board;
    int[][] visited;
    
    int[] result;
    int max;
    
    public static void main(String[] args) throws IOException {
        new Main().solution();
    }
    
    private void go(int x, int y) {
        visited[x][y]++; //현재값 +1
        if (y - 1 >= 0) {
            //위가 존재할때
            visited[x][y - 1]++;
        }
        if (x - 1 >= 0) {
            //왼쪽이 존재할때
            visited[x - 1][y]++;
        }
        if (y + 1 < M) {
            //아래가 존재할때
            //0,0일때 실행 -> 0,1
            visited[x][y + 1]++;
        }
        if (x + 1 < N) {
            //오른쪽이 존재할때
            //0,0일때 실행 -> 1,0
            visited[x + 1][y]++;
        }
    }
    
    private void back(int x, int y) {
        visited[x][y]--;
        if (y - 1 >= 0) {
            visited[x][y - 1]--;
        }
        if (x - 1 >= 0) {
            visited[x - 1][y]--;
        }
        if (y + 1 < M) {
            visited[x][y + 1]--;
        }
        if (x + 1 < N) {
            visited[x + 1][y]--;
        }
    }
    
    public void solution() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());
        
        board = new int[N][M];
        visited = new int[N][M];
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < M; j++) {
                board[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        
        result = new int[K];
        
        max = Integer.MIN_VALUE;
        
        cycle(0);
        
        System.out.println(max);
    }
    
    private void cycle(int depth) {
        if (depth == K) { //시작숫자가 K개일때 최대값 넣기
            int temp = 0;
            for (int i : result) {
                temp += i;
            }
            max = Math.max(max, temp);
        } else {
            
            for (int i = 0; i < N; i++) {
                for (int j = 0; j < M; j++) {
                    if (visited[i][j] > 0) {
                        continue;
                    }
                    go(i, j); //인접 판별
                    result[depth] = board[i][j]; //현재값 넣기
                    cycle(depth + 1); //재귀
                    back(i, j); //원상복귀
                }
            }
            
        }
    }
    
}
