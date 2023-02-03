import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.StringTokenizer;

public class Main {
    int N, M;
    int[][] box;
    boolean[][] visited;

    int[] dx = {-1, 0, 1, 0};
    int[] dy = {0, 1, 0, -1};

    ArrayDeque<int[]> queue = new ArrayDeque<>();

    public static void main(String[] args) throws IOException {
        new Main().solution();
    }

    public void solution() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        M = Integer.parseInt(st.nextToken());
        N = Integer.parseInt(st.nextToken());

        box = new int[N][M];

        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < M; j++) {
                int value = Integer.parseInt(st.nextToken());
                box[i][j] = value;

                // 익은 토마토 큐에 담기
                if (value == 1) {
                    queue.offer(new int[]{i, j});
                }
            }
        }

        int result = bfs();

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (box[i][j] == 0) {
                    System.out.println(-1);
                    return;
                }
            }
        }

        System.out.println(result);
    }

    private int bfs() {
        int day = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int[] current = queue.poll();
                int curX = current[0];
                int curY = current[1];

                for (int d = 0; d < 4; d++) {
                    int nx = curX + dx[d];
                    int ny = curY + dy[d];

                    if (isIn(nx, ny) && box[nx][ny] == 0) {
                        box[nx][ny] = 1;
                        queue.offer(new int[]{nx, ny});
                    }
                }
            }
            day++;
        }
        return day - 1;
    }

    private boolean isIn(int x, int y) {
        return 0 <= x && x < N && 0 <= y && y < M;
    }

}
