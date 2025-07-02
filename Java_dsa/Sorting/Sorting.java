import java.lang.reflect.Array;
import java.util.Arrays;

public class Sorting {

    public static int[] bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            boolean isSwapped = false;
            for (int j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    isSwapped = true;
                }
            }
            if (!isSwapped)
                break;
        }
        return arr;
    }

    public static int[] insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int j = i - 1;
            int temp = arr[i];
            while (j >= 0 && arr[j] > temp) {
                // arr[j] > temp ==> 10, | 1, 5, 3, 9, 2, 6, 8, 0, -1, 1 arr[j] = 10 and temp =
                // 1
                // so replace a[j+1] i.e 1st index with 0th index and now 1 is placed its
                // position until
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = temp;
        }
        return arr;
    }

    public static int[] selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int min = arr[i];
            int minIndex = i;
            // get the minimum index and minmum next and swap with the sorted arr's last
            // index with min num we get from unsorted array.
            for (int j = i + 1; j < n; j++) {
                int current = arr[j];
                if (current < min) {
                    min = current;
                    minIndex = j;
                }
            }
            arr[minIndex] = arr[i];
            arr[i] = min;
        }
        return arr;
    }

    public static int[] merge2SortedArr(int[] arr1, int arr2[]) {
        int m = arr1.length;
        int n = arr2.length;
        int[] arr3 = new int[m + n];
        int x = 0; // for arr1
        int y = 0; // for arr2
        int mergedIndex = 0;
        while (x < m && y < n) {
            if (arr1[x] <= arr2[y]) {
                arr3[mergedIndex] = arr1[x];
                mergedIndex++;
                x++;
            } else {
                arr3[mergedIndex] = arr2[y];
                mergedIndex++;
                y++;
            }

        }
        while (x < m) {
            arr3[mergedIndex] = arr1[x];
            x++;
        }
        while (y < n) {
            arr3[mergedIndex] = arr2[y];
            y++;
        }
        Arrays.stream(arr3).forEach(a -> System.out.print(a + " "));
        return arr3;

    }

    public static void main(String[] args) {
        int[] arr1 = { 10, 1, 5, 3, 9, 2, 6, 8, 0, -1, 1 };
        int[] arr2 = { 10, 1, 5, 3, 9, 2, 6, 8, 0, -1, 1 };
        int[] arr3 = { 10, 1, 5, 3, 9, 2, 6, 8, 0, -1, 1 };

        arr1 = Sorting.bubbleSort(arr1);
        arr2 = Sorting.insertionSort(arr2);
        arr3 = Sorting.selectionSort(arr3);
        
        Arrays.stream(arr1).forEach(x -> System.out.print(x + " "));
        System.out.println("\n----------------------------------");
        Arrays.stream(arr2).forEach(x -> System.out.print(x + " "));
        System.out.println("\n----------------------------------");
        Sorting.merge2SortedArr(arr1, arr2);
        System.out.println("\n----------------------------------");
        // Arrays.stream(arr3).forEach(x -> System.out.print(x + " "));
        // System.out.println("\n----------------------------------");
    }
}
