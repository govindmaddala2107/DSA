/*
    Insertion Sorting:
        - Algorithm    
            1. Takes an element and place it in its correct place.
            2. It is like playing cards.
            2. For each iteration, 
                - do swapping from index i to 0th index.
        - Time complexity: 
            1. O(n^2) for worst and average scenario.
            2. If array is sorted, so in that case O(n) is time complexity.

        - Space complexity: 
            1. O(1) since no extra data structure is used
*/
// const arr = [52, 24, 20, 9, 46, 13, -1]
let arr = [10, -9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 9]
let arr1 = [10, -9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 9]

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            const temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }
    return arr;
}

console.log(insertionSort(arr))