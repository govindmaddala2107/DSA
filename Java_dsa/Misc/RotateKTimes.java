public class RotateKTimes {
    public static int[] rotateArray(int[] arr, int start, int end){
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
        return arr;
    }

   public static void main(String[] args) {
    
   }
}
