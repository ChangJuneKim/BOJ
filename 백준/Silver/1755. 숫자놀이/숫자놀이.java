import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.StringTokenizer;

public class Main {
    
    int M, N;
    String[] arr = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
    ArrayList<Word> list;
    
    public static void main(String[] args) throws IOException {
        new Main().solution();
    }
    
    public void solution() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        M = Integer.parseInt(st.nextToken());
        N = Integer.parseInt(st.nextToken());
        
        list = new ArrayList<>();
        for (int i = M; i <= N; i++) {
            String temp = Integer.toString(i);
            char[] ch = temp.toCharArray();// 인덱스에 접근하기 쉽도록 문자 배열로 변환해준다.
            StringBuilder sb = new StringBuilder(); //숫자를 문자열로 변환해줄 때 더해준다.
            for (int j = 0; j < ch.length; j++) {
                sb.append(arr[ch[j] - '0']);
                if (ch.length > 1) {
                    sb.append(" ");//각 숫자를 공백으로 구분해준다.
                }
            }
            list.add(new Word(sb.toString(), i)); //(변환된 문자열, 실제 숫자) 쌍을 리스트에 넣어준다.
        }
        
        Collections.sort(list); //정렬해준다. compareTo에 따라 사전순 정렬~
        for (int i = 0; i < list.size(); i++) {
            System.out.print(list.get(i).num + " ");
            if ((i + 1) % 10 == 0) {//10개를 출력한 후에는 줄바꿈
                System.out.println();
            }
            
        }
        
    }
    
    class Word implements Comparable<Word> {
        String word;//규칙에 따라 문자열로 변환된 숫자
        int num;// 실제 숫자
        
        public Word(String word, int num) {
            super();
            this.word = word;
            this.num = num;
        }
        
        @Override
        public int compareTo(Word o) {// 사전 순 정렬
            return this.word.compareTo(o.word);
        }
        
    }
    
}
