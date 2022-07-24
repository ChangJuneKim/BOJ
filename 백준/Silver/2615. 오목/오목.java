import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	// 흑돌 1 / 백돌 2 / 빈칸 0
	// 여섯알이면 승이 아님
	// 흑돌이 이겼다면 1, 백돌 2, 승부가 나지 않은상태 0 출력 후
	// 승리한 위치의 가장 첫 돌의 좌표(index + 1) 출력(가로면 가장 좌측, 대각이나 세로면 가장 위)
	public void solution() throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int[] dx = { 0, 1, 1, -1 };
		int[] dy = { 1, 0, 1, 1 };

		int[][] checkerboard = new int[19][19];

		// 바둑판 입력
		for (int i = 0; i < 19; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			for (int j = 0; j < 19; j++) {
				checkerboard[i][j] = Integer.parseInt(st.nextToken());
			}
		}

//		// 바둑판 출력
//		for (int i = 0; i < 19; i++) {
//			System.out.println(Arrays.toString(checkerboard[i]));
//		}

		// 완전 탐색 시작
		for (int j = 0; j < checkerboard.length; j++) {
			for (int i = 0; i < checkerboard.length; i++) {
				// 바둑돌이면 (빈칸이 아니면) 우상 우 우하 하 탐색
				if (checkerboard[i][j] != 0) {
					for (int k = 0; k < 4; k++) {
						int nx = i;
						int ny = j;
						int count = 1; // 오목 카운트

						while (true) {
							nx += dx[k];
							ny += dy[k];

							if (0 <= nx && nx < 19 && 0 <= ny && ny < 19) {
								if (checkerboard[i][j] == checkerboard[nx][ny]) { // 시작칸과 다음칸의 색이 같으면 count 증가
									count++;
								} else { // 다르면 loop 중단
									break;
								}
							} else {
								// 다음 탐색할 인덱스가 범위를 넘어갔을 때
								break;
							}
						}

						// 시작점으로 돌아가서 역방향으로 탐색 해보기(6목도 체크)
						nx = i;
						ny = j;

						// 반대 방향
						while (true) {
							nx -= dx[k];
							ny -= dy[k];

							if (0 <= nx && nx < 19 && 0 <= ny && ny < 19) {
								if (checkerboard[i][j] == checkerboard[nx][ny]) { // 시작칸과 다음칸의 색이 같으면 count 증가
									count++;
								} else { // 다르면 loop 중단
									break;
								}
							} else {
								// 다음 탐색할 인덱스가 범위를 넘어갔을 때
								break;
							}

						}
						if (count == 5) {
							System.out.println(checkerboard[i][j]);
							System.out.println((i + 1) + " " + (j + 1));
							return;
						}

					}
				}
			}

		}
		System.out.println(0);
	}

	public static void main(String[] args) throws Exception {
		new Main().solution();
	}

}
