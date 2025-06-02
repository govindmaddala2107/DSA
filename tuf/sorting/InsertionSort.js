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