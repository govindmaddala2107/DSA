import java.util.Arrays;

public class BubbleSorting {
    public static void main(String[] args) {
        int[] arr = { 10, -9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1 };
        int n = arr.length - 1;
        for (int i = 0; i < n; i++) {
            boolean isSwapped = false;
            for (int j = 0; j < n - i; j++) {
                if(arr[j] > arr[j+1]){
                    isSwapped = true;
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
            if(!isSwapped) break;
        }
        System.out.println(Arrays.toString(arr));
    }
}
