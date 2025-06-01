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