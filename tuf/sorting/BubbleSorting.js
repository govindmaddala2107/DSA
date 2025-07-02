/*
    Bubble Sorting:
        - Algorithm    
            1. Push the maximum to the last by adjacent swaps.
            2. For each iteration, 
                - do swapping from 0th index to n-1-i index.
                - maximum will reach to the last.
        - Time complexity: 
            1. O(n^2) for worst and average scenario.
            2. If array is sorted, isSwapped is helped to break the loop, so in that case O(n) is time complexity.

        - Space complexity: 
            1. O(1) since no extra data structure is used.
*/
// let arr = [10, -9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1]

// const arr = [52, 24, 20, 9, 46, 13, -1]
const arr = [1,2]

const bubbleSorting = (arr, n) => {
    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
    return arr;
}

console.log(bubbleSorting(arr, arr.length))