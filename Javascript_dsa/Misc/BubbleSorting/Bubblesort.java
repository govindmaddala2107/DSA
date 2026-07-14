package Misc.BubbleSorting;

public class Bubblesort {
    public static void main(String[] args) {
        int[] unsortedArr = { 10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
        int size = unsortedArr.length;
        boolean isSwapped;
        for (int i = 0; i < size - 1; i++) {
            isSwapped = false;
            for (int j = 0; j < size - 1 - i; j++) {
                if (unsortedArr[j] > unsortedArr[j + 1]) {
                    int temp = unsortedArr[j];
                    unsortedArr[j] = unsortedArr[j+1];
                    unsortedArr[j + 1] = temp; 
                    isSwapped = true;
                }
            }
            if (isSwapped == false) {
                break;
            }
        }
        for(int i = 0; i < size ; i++){
            System.out.print(unsortedArr[i]);
            System.out.print(" ");
        }
    }
}
