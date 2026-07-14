package Graphs;

public class KadaneSAlgo {

    public static int maxSumSubArray(int[] arr) {
        int maxSoFar = arr[0];
        int currentmax = arr[0];

        for (int i = 1; i < arr.length; i++) {
            currentmax = currentmax + arr[i];   //q1==> check whether we can continue with present array
            if(currentmax <  arr[i]){   //q2 ==> if current max is less than current element then create new array with present element
                currentmax = arr[i];
            }

            if(maxSoFar < currentmax){   // q3) if currentmax is greater then update maxSoBar/Best-so-far with currentMax
                maxSoFar = currentmax;
            }
        }
        return maxSoFar;
    }

    public static void main(String[] args) {
        int[] arr = { 4, 3, -2, 6, -12, 7, -1, 6};

        int maxSum = KadaneSAlgo.maxSumSubArray(arr);
        System.out.println(maxSum);
    }
}
