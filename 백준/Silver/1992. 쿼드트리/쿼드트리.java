import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
	int[][] spaces;
	StringBuilder sb = new StringBuilder();
	// r: 탐색 시작지점의 행, c: 탐색 시작지점의 열, size: 탐색 영역 한 변의 길이
	// 검은 점: 1, 흰점: 0
	public void cut(int r, int c, int size) {
		// 해당 영역의 색상 확인
		int sum = 0;
		for (int i = r; i < r + size; i++) {
			for (int j = c; j < c + size; j++) {
				sum += spaces[i][j];
			}
		}

		// 전체 영역이 검은 점이면 (기저부분)
		if (sum == size * size) {
			sb.append(1);
		}
		// 전체 영역이 흰 점이면 (기저부분)
		else if (sum == 0) {
			sb.append(0);
		}
		// 유도 부분
		else { // 색상이 섞여 있는 경우
			int half = size / 2;
			sb.append("(");
			// 4개로 쪼개기: 분할된 각 영역의 공간도 온전한 하나의 공간으로 본다면 동일한 작업 수행해야 함 (재귀이용)
			cut(r, c, half); // 좌상
			cut(r, c + half, half); // 우상
			cut(r + half, c, half); // 좌하
			cut(r + half, c + half, half); // 우하
			sb.append(")");
		}
	}

	public void solution() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int N = Integer.valueOf(br.readLine()); // 한 변의 길이
		// 주어진 2차원 데이터 배열에 저장
		spaces = new int[N][N];
		for (int i = 0; i < N; i++) {
			String line = br.readLine();
			for (int j = 0; j < N; j++) {
				spaces[i][j] = Integer.valueOf(line.charAt(j) - '0');
			}
		}

		// 주어진 영역에 대해 검은점 흰점으로 이루어져 있는지 확인 (재귀함수로 구현)
		cut(0, 0, N);
		System.out.println(sb);

	}

	public static void main(String[] args) throws IOException {
		new Main().solution();
	}

}