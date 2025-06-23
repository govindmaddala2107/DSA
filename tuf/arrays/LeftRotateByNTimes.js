const RotateByNTimes = (arr, k) => {
    const n = arr.length;
    k %= n;
    while (k > 0) {
        const temp = arr[0];
        for (let i = 1; i < n; i++) {
            arr[i - 1] = arr[i];
        }
        arr[n - 1] = temp;
        k--;
    }
    console.log(arr)
}

const RotateByNTimesByReversing = (arr, k) => {
    const n = arr.length;
    k %= n;
    //reverse from start to K
    reverseArr(arr, 0, k - 1)
    // reverse from K to end
    reverseArr(arr, k, n - 1);
    // now reverse entire array
    reverseArr(arr, 0, n - 1)
    console.log(arr)
}

const reverseArr = (arr, start, end) => {
    while (start <= end) {
        const temp = arr[start];
        arr[start++] = arr[end];
        arr[end--] = temp;
    }
}


// [1, 5, 4, 3, 2] => [2, 3, 4, 5, 1]
const arr = [1, 2, 3, 4, 5]
RotateByNTimesByReversing(arr, 3)
