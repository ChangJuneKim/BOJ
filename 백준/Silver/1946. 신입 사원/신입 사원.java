import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

class Interviewee implements Comparable<Interviewee> {
	int docuScore;
	int interviewScore;

	public Interviewee(int docuScore, int interviewScore) {
		super();
		this.docuScore = docuScore;
		this.interviewScore = interviewScore;
	}

	@Override
	public String toString() {
		return "Interviewee [docuScore=" + docuScore + ", interviewScore=" + interviewScore + "]";
	}

	@Override
	public int compareTo(Interviewee o) {
		return this.docuScore - o.docuScore;
	}

}

public class Main {

	public void solution() throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		int T = Integer.valueOf(br.readLine());

		for (int testCase = 0; testCase < T; testCase++) {
			int N = Integer.valueOf(br.readLine());
			Interviewee[] interviewees = new Interviewee[N];

			for (int i = 0; i < N; i++) {
				st = new StringTokenizer(br.readLine());
				interviewees[i] = new Interviewee(Integer.valueOf(st.nextToken()), Integer.valueOf(st.nextToken()));
			}
			Arrays.sort(interviewees);

			int count = 1;
			int temp = interviewees[0].interviewScore;
			
			for (int i = 1; i < interviewees.length; i++) {
				if (temp > interviewees[i].interviewScore) {
					temp = interviewees[i].interviewScore;
					count++;
				}	
			}
			System.out.println(count);
		}
	}

	public static void main(String[] args) throws Exception {
		new Main().solution();
	}
}
