import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    
    int[][] map;
    boolean end;
    
    public static void main(String[] args) throws IOException {
        new Main().solution();
    }
    
    public void solution() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        map = new int[9][9];
        for (int i = 0; i < 9; ++i) {
            String input = br.readLine();
            for (int j = 0; j < 9; ++j) {
                map[i][j] = input.charAt(j) - '0';
            }
        }
        
        dfs(0);
        
        for (int i = 0; i < 9; ++i) {
            for (int j = 0; j < 9; ++j) {
                System.out.print(map[i][j]);
            }
            System.out.println();
        }
    }
    
    private void dfs(int depth) {
        if (depth == 81) {
            end = true;
            return;
        }
        
        int x = depth / 9;
        int y = depth % 9;
        
        if (map[x][y] != 0) {
            dfs(depth + 1);
        } else {
            for (int i = 1; i <= 9; ++i) {
                if (!isVaild(x, y, i)) continue;
                map[x][y] = i;
                dfs(depth + 1);
                if (end) return;
                map[x][y] = 0;
            }
        }
    }
    
    public boolean isVaild(int y, int x, int n) {
        for (int i = 0; i < 9; ++i) {
            if (map[y][i] == n || map[i][x] == n) return false;
        }
        
        int yy = y / 3 * 3;
        int xx = x / 3 * 3;
        for (int i = yy; i < yy + 3; ++i) {
            for (int j = xx; j < xx + 3; ++j) {
                if (map[i][j] == n) return false;
            }
        }
        return true;
    }
    
}
