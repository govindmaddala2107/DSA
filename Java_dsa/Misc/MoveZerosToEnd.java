import java.lang.reflect.Array;
import java.util.Arrays;

public class MoveZerosToEnd {
    public static void main(String[] args) {
        int[] arr = { 1, 0, 2, 2, 0, 3, 3, 0, 4, 0, 5 };

        /*
         * expected o/p: {1,2,2,3,3,4,5,0,0,0,0}
         */
        int size = arr.length;
        int count = 0;
        for (int i = 0; i < size; i++) {
            if (arr[i] != 0) {
                arr[count++] = arr[i];
            }
        }
        while (count < size) {
            arr[count++] = 0;
        }
        Arrays.stream(arr).forEach(x -> System.out.print(x + " "));
    }
}
