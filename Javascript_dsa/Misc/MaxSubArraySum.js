const arr = [-2, -3, 4, -1, -2, 1, 5, -3];

// let sum = 0;
// let max = Number.MIN_VALUE
// let subArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (sum < 0) {
//         sum = 0;
//         subArr = []
//     }
//     sum += arr[i]
//     if (sum > max) {
//         max = sum;
//     }
//     if(max >= sum){
//         subArr.push(arr[i])
//     }    
// }

// console.log(max)

const maxSubArraySum = (arr = []) => {
    let maxCurrent = arr[0];
    let maxGlobal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxCurrent = Math.max(arr[i], arr[i] + maxCurrent);
        if (maxCurrent > maxGlobal) maxGlobal = maxCurrent;
    }
    console.log(maxGlobal)
}

const maxSubArraySumAndSubArr = (arr = []) => {
    let maxCurrent = arr[0];
    let maxGlobal = arr[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i] + maxCurrent) {
            maxCurrent = arr[i]
            tempStart = i;
        } else {
            maxCurrent += arr[i]
        }

        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
            start = tempStart;
            end = i;
        };
    }
    console.log(maxGlobal, arr.slice(start, end + 1))
}

maxSubArraySum(arr)
maxSubArraySumAndSubArr(arr)