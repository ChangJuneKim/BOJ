import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {

  int[] cost;
  int[] plan;
  int minCost;

  public static void main(String[] args) throws IOException {
    new Solution().solution();
  }

  public void solution() throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st;

    int t = Integer.parseInt(br.readLine());

    for (int testCase = 1; testCase <= t; testCase++) {
      cost = new int[4]; // 1일, 1달, 3달, 1년
      plan = new int[13];

      // 가격 정보
      st = new StringTokenizer(br.readLine());
      for (int i = 0; i < 4; i++) {
        cost[i] = Integer.parseInt(st.nextToken());
      }

      // 계획 정보
      st = new StringTokenizer(br.readLine());
      for (int i = 1; i <= 12; i++) {
        plan[i] = Integer.parseInt(st.nextToken());
      }

      // 기본 최소 비용을 1년이용권으로 지정
      minCost = cost[3];

      dfs(1, 0);

  	  System.out.println("#" + testCase + " " + minCost);
    }

  }

  private void dfs(int month, int sum) {
    if (minCost <= sum) return;

    if (month > 12) {
      minCost = Math.min(minCost, sum);
      return;
    }

    // 이용 계획이 없을 때
    if (plan[month] == 0) {
      dfs(month + 1, sum);
    }
    // 계획이 있을 때
    else {
      //1일
      dfs(month + 1, sum + cost[0] * plan[month]);
      //1달
      dfs(month + 1, sum + cost[1]);
      //3달
      dfs(month + 3, sum + cost[2]);

    }
  }

}

