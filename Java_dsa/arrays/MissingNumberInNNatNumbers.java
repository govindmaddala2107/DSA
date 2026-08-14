public class MissingNumberInNNatNumbers {
    public static void main(String[] args) {
        int[] arr = { 8, 9, 5, 3, 4, 2, 1, 6 };
        // actually 1-9 should be there and here 7 is missing, actually array length should be existing length + 1
        int n = arr.length + 1;
        int sum = n * (n+1)/2;

        for(int num: arr){
            sum -= num;
        }
        System.out.println("Missing number is " + sum); // returns 7
    }
}
