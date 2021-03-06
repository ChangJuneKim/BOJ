import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

import javax.print.attribute.standard.MediaSize.Other;

public class Main {

	public static void main(String[] args) throws Exception {
		
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		int numOfSwitches = Integer.valueOf(in.readLine());
		
		st = new StringTokenizer(in.readLine(), " "); // 스위치 상태 입력받기
		
		// 스위치 입력받기
		int[] switches = new int[numOfSwitches];
		for (int i = 0; i < switches.length; i++) {
			switches[i] = Integer.valueOf(st.nextToken());
		}
		
		int numOfStudents = Integer.valueOf(in.readLine());
		
		int receivedNumber = 0;
		for (int i = 0; i < numOfStudents; i++) {
			st = new StringTokenizer(in.readLine(), " ");
			boolean isMale = st.nextToken().equals("1");
		
			if(isMale) {
			
				// 남자
				receivedNumber = Integer.valueOf(st.nextToken());
				
				// 남자일땐 receivedNumber의 배수를 바꿈
				for (int j = 0; j < switches.length; j++) {
					if((j + 1) % receivedNumber == 0) {
						if(switches[j] == 1) {
							switches[j] = 0;
						} else if(switches[j] == 0){
							switches[j] = 1;
						}
					}
				}
			
				
			} else if(!isMale) {
				// 여자
				receivedNumber = Integer.valueOf(st.nextToken()) - 1;
				int leftSideSwitch = receivedNumber - 1;  
				int rightSideSwitch = receivedNumber + 1; 
				
				
				if(switches[receivedNumber] == 0) {
					switches[receivedNumber] = 1;
				} else if(switches[receivedNumber] == 1) {
					switches[receivedNumber] = 0;
				}
				
				while(true) {
					if(0 <= leftSideSwitch && rightSideSwitch < switches.length) {
						if(switches[leftSideSwitch] != switches[rightSideSwitch]) {						
							break;
						}
						
						if(switches[leftSideSwitch] == switches[rightSideSwitch]) {
							if(switches[leftSideSwitch] == 0) {
								switches[leftSideSwitch] = 1;
								switches[rightSideSwitch] = 1;
								leftSideSwitch--;
								rightSideSwitch++;
							} else if(switches[leftSideSwitch] == 1){
								switches[leftSideSwitch] = 0;
								switches[rightSideSwitch] = 0;
								leftSideSwitch--;
								rightSideSwitch++;
							}
						}
					}else break;
				}
				
			}
			
		}
		for (int i = 1; i <= switches.length; i++) {
			System.out.print(switches[i - 1] + " ");
			if(i % 20 == 0) {
				System.out.println();
			}
		}
	}
}
