let arr = [100, 10, 1, 5, 3, 9, 2, 6, 8, 0, -1, 1]


const bubbleSort = (arr) => {
    let size = arr.length - 1;
    for (let i = 0; i < size; i++) {
        let isSwapped = false;
        for (let j = 0; j < size - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }

        if (!isSwapped) {
            break;
        }
    }
    console.log("bubblesort ", arr);
}

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }

    console.log(arr)
}


// bubbleSort(arr)
insertionSort(arr)