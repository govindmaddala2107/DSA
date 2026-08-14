public class SecondMax{
    public static void main(String[] args){

        int max = Integer.MIN_VALUE;
        int second_max = Integer.MIN_VALUE;

        int[] arr = { 12, 14, 33, 34, 38, 35, 36, 37, 10, 40 };
        for (int i = 0; i < arr.length; i++) {

            // max is updated and current existing max is assigned to second_max
            if(arr[i] > max){
                second_max = max;
                max = arr[i];
            }

            // now some elements might be smaller than max but might be bigger than second_max

            if(arr[i] > second_max && arr[i] != max){
                second_max = arr[i];
            }
        }

        System.out.println("Max: " + max + " " + "Second Max: " + second_max);
    }
}