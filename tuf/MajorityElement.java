public class MajorityElement {
    public static void main(String[] args) {
        int arr[] = { 7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 5, 5, 5, 5 };
        int majorityElement = arr[0];
        int count = 1;
        for (int i = 0; i < arr.length; i++) {
            if (count == 0)
                majorityElement = arr[i];
            count += (arr[i] == majorityElement) ? 1 : -1;
        }
        count = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == majorityElement)
                count++;
        }

        if (count > arr.length / 2) {
            System.out.println(majorityElement);
        } else {
            System.out.println(-1);
        }

    }
}
