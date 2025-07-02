const arr = [-1, 4, 6, 2, 5, 7, 9, 1, 3];

const quickSorting = (arr, low, high) => {
    if (low < high) {
        let partitionIndex = findPartitionIndex(arr, low, high);
        quickSorting(arr, low, partitionIndex - 1);
        quickSorting(arr, partitionIndex + 1, high);
    }
    return arr;
}

const findPartitionIndex = (arr, low, high) => {
    const pivot = arr[low];
    let i = low;
    let j = high;
    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) i++;
        while (arr[j] > pivot && j >= low + 1) j--;
        if (i < j) swap(arr, i, j)
    }
    swap(arr, low, j);
    return j;
}

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(quickSorting(arr, 0, arr.length-1))