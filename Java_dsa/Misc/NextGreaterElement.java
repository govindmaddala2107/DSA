/*

Given an array of integers, For each an element in an array, find next greater element than that in that array in the right side. If no greater element is found, put -1

Input:  [4, 7, 3, 4,  8,  1]
Output: [7, 8, 4, 8, -1, -1]

Here for 8 no greater than 8 is found to its right side, so we put -1 and for last element, anyway no numbers are found to its right side, so we put -1

*/

import java.util.Stack;

class NextGreaterElement {

    public static int[] nextGreaterElement(int[] inputArr) {
        int[] outputArr = new int[inputArr.length];
        Stack<Integer> stack = new Stack<>();
        for (int i = inputArr.length - 1; i >= 0; i--) {
            if (!stack.isEmpty()) {
                while (!stack.isEmpty() && stack.peek() <= inputArr[i]) {
                    stack.pop();
                }
            }

            if (stack.isEmpty()) {
                outputArr[i] = -1;
            } else {
                outputArr[i] = stack.peek();
            }

            stack.push(inputArr[i]);
        }
        return outputArr;
    }

    public static void main(String[] args) {
        int inputArr[] = { 4, 7, 3, 4, 8, 1 };
        int[] outputArr = NextGreaterElement.nextGreaterElement(inputArr);

        for(int x: outputArr){
            System.out.print(x + " ");
        }
    }
}