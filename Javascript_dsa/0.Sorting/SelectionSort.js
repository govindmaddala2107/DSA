const selectionSort = (arr = []) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min = arr[i];
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            let current = arr[j];
            if (current < min) {
                min = current;
                minIndex = j;
            }
        }
        arr[minIndex] = arr[i];
        arr[i] = min;
    }
    return arr;
}
let arr = [10, 1, 5, 3, 9, 2, 6, 8, 0, -1, 1]
arr = selectionSort(arr);
console.log(arr)