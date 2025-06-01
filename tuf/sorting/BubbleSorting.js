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