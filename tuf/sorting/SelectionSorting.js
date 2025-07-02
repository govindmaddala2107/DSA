/*
    Selection Sorting:
        - Algorithm: 
            1. Select the minimum number from the current index to the end of the array and swap.
            2. For each iteration, array will get sorted from the starting.
        - Time complexity: O(n^2)
        - Space complexity: O(1) since no extra data structure is used.
*/

let arr = [10, -9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 100]

const selectionSort = (array = []) => {
    for (let i = 0; i < array.length - 1; i++) {
        let minInd = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minInd]) minInd = j;
        }
        
        const a = array[i];
        array[i] = array[minInd];
        array[minInd] = a;
    }
    return array;
}


console.log(selectionSort(arr))