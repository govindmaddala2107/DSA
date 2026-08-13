let arr = [1, 0, 2, 2, 0, 3, 3, 0, 4, 0, 5]
/*
    expected o/p: {1,2,2,3,3,4,5,0,0,0,0}
*/
const moveZerosToEnd = (arr) => {
    const n = arr.length;
    let count = 0
    for (let each of arr) {
        if (each !== 0) {
            arr[count++] = each
        };
    }
    while (count < n) {
        arr[count++] = 0
    }
    return arr;
}

const moveZerosToEnd2 = (arr) => {
    let j = -1;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === 0) {
            j = i;
            break;
        } else {
            i++;
        }
    }
    while (i < arr.length) {
        if (arr[i] !== 0) {
            arr[j] = arr[i];
            arr[i] = 0;
            j++;
        }
        i++;
    }
    return arr;
}
// arr = moveZerosToEnd(arr)
console.log(moveZerosToEnd2(arr))