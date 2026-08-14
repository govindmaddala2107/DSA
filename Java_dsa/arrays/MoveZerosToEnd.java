import java.util.Arrays;

public class MoveZerosToEnd {
    public static void main(String[] args) {
        int[] arr = {8,0,1,0,3,0,0,0,4,0,5,6,7,8,9};
        int zeroTracker = 0;
        for (int i = 0; i < arr.length; i++) {
            if(arr[i] != 0 && arr[zeroTracker] == 0){
                int temp = arr[i];
                arr[i] = arr[zeroTracker];
                arr[zeroTracker] = temp;
            }
            if(arr[zeroTracker] != 0){
                zeroTracker++;
            }
        }
        System.out.println(Arrays.toString(arr));
    }
}
