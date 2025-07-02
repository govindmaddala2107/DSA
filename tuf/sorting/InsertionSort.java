import java.util.Arrays;

public class InsertionSort {
    public static void main(String[] args) {
        int arr[] = { 10, -9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 9 };
          for (int i = 0; i < arr.length; i++) {
            int j = i;
            while (j > 0 && arr[j] < arr[j-1]) {
                int temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                j--;
            }
          }
          System.out.println(Arrays.toString(arr));
    }
}
