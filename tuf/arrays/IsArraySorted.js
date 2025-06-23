const sortedArr = [1, 2, 3, 4, 5, 1]
let isSorted = true;
for (let i = 0; i < sortedArr.length - 1; i++) {
    if(sortedArr[i] > sortedArr[i+1]){
        isSorted = false;
        break;
    }
}

console.log(isSorted)