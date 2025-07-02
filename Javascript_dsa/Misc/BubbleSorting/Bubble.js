let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

let bubbleSort = (arr) => {
    let size = arr.length - 1;
    let isSwapped;
    for (let i = 0; i < size; i++) {
        isSwapped = false;
        for (let j = 0; j < size - i; j++) {
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(isSwapped === false){
            break;
        }
    }
    console.log("Bubble", arr);
}

let insertionSort = (arr) => {
    let size = arr.length - 1;
    for(let i=1; i < size; i++){
        let temp = arr[i]
        let j = i-1;
        while(j >=0 && arr[j] > temp){
            arr[j+1] = temp;
            j--
        }
        arr[j+1] = temp;
    }
    console.log("Insertion", arr);
}

bubbleSort(arr)
insertionSort(arr)

