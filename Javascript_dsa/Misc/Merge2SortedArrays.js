/**
* @param {Array} arr1
* @param {Array} arr2
*/

const merge2SortedArrays = (arr1, arr2) => {
    let a1 = arr1.length
    let a2 = arr2.length
    let i = 0;
    let j = 0;
    let finalArr = []
    while (i < a1 && j < a2) {
        if (arr1[i] < arr2[j]) {
            finalArr.push(arr1[i]);
            i++
        } else {
            finalArr.push(arr2[j])
            j++
        }
    }

    while (i < a1) {
        finalArr.push(arr1[i]);
        i++;
    }

    while (j < a2) {
        finalArr.push(arr2[j]);
        j++
    }

    return finalArr;
}

let arr1 = [2,5,7]
let arr2 = [1,3,4,9]
let finalArr = merge2SortedArrays(arr1, arr2)
console.log(finalArr)