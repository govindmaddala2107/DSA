import java.util.ArrayList;

public class MaxSubArraySum {

	public static void main(String[] args) {
		int[] arr = {-2, -3, 4, -1, -2, 1, 5, -3};
		int sum = 0;
		int max = Integer.MIN_VALUE;
		ArrayList<Integer> subArr = new ArrayList<Integer>();
		for(int i=0; i< arr.length; i++) {
			if(sum < 0) {
				sum = 0;
				subArr.clear();
			}
			
			sum += arr[i];
			max = Math.max(max, sum);
			if(max > sum) {
				subArr.add(arr[i]);
			}
		}
		
		System.out.println(max);
		subArr.forEach(x -> System.out.print(x + " "));
	}

}
