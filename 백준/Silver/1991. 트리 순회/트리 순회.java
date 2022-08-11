import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;


public class Main {

	public static void main(String[] args) throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		int n = Integer.parseInt(br.readLine());
		Tree tree = new Tree();
		
		while(n-- > 0) {
			st = new StringTokenizer(br.readLine());
			char node = st.nextToken().charAt(0);
			char left = st.nextToken().charAt(0);
			char right = st.nextToken().charAt(0);
			tree.insert(node, left, right);
		}
        
		tree.preOrder(tree.root);
		System.out.println();
		tree.inOrder(tree.root);
		System.out.println();
		tree.postOrder(tree.root);
	}

}
class Node{
	char data;
	Node left;
	Node right;
	
	Node(char data){
		this.data = data;
	}
}

class Tree{
	Node root;

	void insert(char data, char leftData, char rightData){
		if(root == null) {
			if(data!='.') 
				root = new Node(data);
			if(leftData!='.')
				root.left = new Node(leftData);
			if(rightData!='.')
				root.right = new Node(rightData);
		}else {
			search(root,data,leftData,rightData);
		}
	}
    
	void search(Node root, char data, char leftData, char rightData) {
		if(root == null) 
			return;
		if(root.data == data) {
			if(leftData!='.')
				root.left = new Node(leftData);
			if(rightData!='.')
				root.right = new Node(rightData);
		}else {
			search(root.left,data,leftData,rightData);
			search(root.right,data,leftData,rightData);
		}
	}

	void preOrder(Node root) {
		System.out.print(root.data);
		if(root.left!=null)
			preOrder(root.left);
		if(root.right!=null)
			preOrder(root.right);
	}
    
	void inOrder(Node root) {
		if(root.left!=null) 
			inOrder(root.left);
		System.out.print(root.data);
		if(root.right!=null)
			inOrder(root.right);
	}
  
	void postOrder(Node root) {
		if(root.left!=null)
			postOrder(root.left);
		if(root.right!=null)
			postOrder(root.right);
		System.out.print(root.data);
	}
}