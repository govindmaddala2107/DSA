let unsortedArr = [10, 9, 8, 7, 6, 4, 5, 3, 2, 1]
let size = unsortedArr.length;
var isSwap;
for (let i = 0; i < size - 1; i++) {
    isSwap = false;
    for (let j = 0; j < size - 1 - i; j++) {
        if (unsortedArr[j] > unsortedArr[j + 1]) {
            let temp = unsortedArr[j];
            unsortedArr[j] = unsortedArr[j + 1];
            unsortedArr[j + 1] = temp;
            isSwap = true;
        }
    }
    if (isSwap === false) {
        break;
    }
}
console.log(unsortedArr);