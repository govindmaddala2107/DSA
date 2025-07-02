import java.util.Arrays;

public class SelectionSorting {
    public static void main(String[] args) {
        int[] arr = { 10, -9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 100 };
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if(arr[j] < arr[minIndex]) minIndex = j;
            }

            int c = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = c;
        }

        System.out.println(Arrays.toString(arr));
    }
}
