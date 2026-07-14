import java.util.HashMap;

public class TwoSum {

    public static void bruteForce(int[] arr, int sum) {
        boolean foundSum = false;
        int x = -1;
        int y = -1;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] == sum) {
                    x = i;
                    y = j;
                    foundSum = true;
                    break;
                }
            }
        }
        if (foundSum) {
            System.out.println("Found and numbers are: " + arr[x] + "," + arr[y]);
        } else {
            System.out.println("Not Found");
        }
    }

    public static void optimizedWay(int[] arr, int sum) {
        boolean foundSum = false;
        int x = -1;
        int y = -1;
        HashMap<Integer, Integer> numSet = new HashMap<Integer, Integer>();
        for (int i = 0; i < arr.length; i++) {
            int num = arr[i];
            int needed = sum - num;
            if(numSet.containsKey(needed)){
                foundSum = true;
                x = numSet.get(needed);
                y = i;
                break;
            }else{
                numSet.put(num, i);
            }
        }
        if (foundSum) {
            System.out.println("Found and numbers are: " + arr[x] + "," + arr[y]);
        } else {
            System.out.println("Not Found");
        }
    }

    public static void optimizedWay2(int[] arr, int sum) {
        int i = 0;
        int j = arr.length - 1;
        while (i < j) {
            int left = arr[i];
            int right = arr[j];
            int total = left + right; // 1 + 8 = 9 and it needed extra 5 
            if(total == sum){
                break;
            }
            if(total < sum){
                i++;
            }else{
                j--;
            }
        }
        if(arr[i] + arr[j] == sum) System.out.println("Found and numbers are: " + arr[i] + "," + arr[j]);
        if(arr[i] + arr[j] != sum) System.out.println("Not Found");
    }

    public static void main(String[] args) {
        int arr[] = { 1, 2, 8, 5, 4 };
        int sortedArr[] = { 1, 2, 4, 5, 8 };
        int sum = 13;
        TwoSum.bruteForce(arr, sum);
        TwoSum.optimizedWay(arr, sum);
        TwoSum.optimizedWay2(sortedArr, sum);
    }
}
