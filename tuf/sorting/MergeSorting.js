const arr = [52, 24, 20, 9, 46, 13, -1]

const mergeSorting = (arr) => {
    const n = arr.length;
    divide(arr, 0, n - 1);
    return arr;
}

const divide = (arr, low, high) => {
    if (low == high) return;
    const mid = Math.floor((low + high) / 2)
    divide(arr, low, mid);
    divide(arr, mid + 1, high);
    merge(arr, low, mid, high);
}

const merge = (arr, low, mid, high) => {
    const temp = [];
    let left = low;
    let right = mid + 1;
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) temp.push(arr[left++]); 
        else temp.push(arr[right++]);
    }

    while (left <= mid) temp.push(arr[left++]);
    while (right <= high) temp.push(arr[right++]);
    for (let i = low; i <= high; i++) arr[i] = temp[i - low];
}

console.log(mergeSorting(arr))