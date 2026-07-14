let unsortedArr = [10, 9, 8, 7, 6, 5, 10, 5, 4, 3, 2, 1];
// let size = unsortedArr.length;
// for (let i = 0; i < size; i++) {
//     let isSwapped = false;

//     // Here size - 1 - i is becoz for every iteration large numbers are reached to end and thus they can be ignored
//     for (let j = 0; j < size - 1 - i; j++) {
//         if (unsortedArr[j] > unsortedArr[j + 1]) {
//             let temp = unsortedArr[j];
//             unsortedArr[j] = unsortedArr[j + 1];
//             unsortedArr[j + 1] = temp;
//             isSwapped = true;
//         }
//     }
//     if (isSwapped === false) {
//         break;
//     }
// }
// console.log(unsortedArr);

const bubbleSort = (arr = []) => {
    let n = arr.length;
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
        if(!isSwapped) break;
    }
    return arr;
}

console.log(bubbleSort(unsortedArr))