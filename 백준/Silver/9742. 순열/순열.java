import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

  char[] inputCharArray;
  int N;
  int count;
  boolean noPermutation;

  public static void main(String[] args) throws IOException {
    new Main().solution();
  }

  public void solution() throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st;
    while (true) {
      String input = br.readLine();

      if (input == null) {
        break;
      }
      st = new StringTokenizer(input);
      inputCharArray = st.nextToken().toCharArray();
      N = Integer.parseInt(st.nextToken());
      count = 0;
      do {
        count++;
        if (count == N) {
          System.out.println(input + " = " + new String(inputCharArray));
          break;
        }
      } while (nextPermutation(inputCharArray.length - 1));

      if (count != N) {
        System.out.println(input + " = No permutation");
      }
    }

  }

  private boolean nextPermutation(int size) {
    int firstPeak = size;
    // 최초의 하향 변곡점을 찾는다(앞이 뒤보다 작은부분을 찾는 것) ex) 6 2 		"1" 		"5" 		4 3 0
    // 														(firtPeak - 1) (firstPeak)
    while (firstPeak > 0 && inputCharArray[firstPeak - 1] >= inputCharArray[firstPeak]) {
      firstPeak--;
    }

    // 다 내림차순으로 정렬 돼 있다면 마지막 순열이라는 뜻.
    if (firstPeak == 0) {
      return false;
    }

    // 하향 변곡점 앞에 있는 요소와 위치를 바꿀 녀석을 찾기 inputCharArray[firstPeak - 1] 보다는 큰값이어야 한다
    // ex) 6 2 "1" 5 4 3 0 -> 여기서는 3이다
    int gtBeforeFirstPeak = size;
    while (inputCharArray[firstPeak - 1] >= inputCharArray[gtBeforeFirstPeak]) {
      gtBeforeFirstPeak--;
    }

    swap(firstPeak - 1, gtBeforeFirstPeak);

    // 3.
//		for (int left = firstPeak, right = size; left < right; left++, right--) {
//			swap(left, right);
//		}

    // firstPeak(left) 부터 마지막(size)(right) 까지 뒤집는다
    int right = size;
    int left = firstPeak;
    while (left < right) {
      swap(left, right);
      left++;
      right--;
    }

    return true;
  }

  void swap(int a, int b) {
    char temp = inputCharArray[a];
    inputCharArray[a] = inputCharArray[b];
    inputCharArray[b] = temp;

  }

}