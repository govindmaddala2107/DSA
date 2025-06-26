/*
KADANE's Algorithm: 
1. Time Complexity: O(N)
2. Space Complexity: O(1)

*/


const arr = [-2, -3, 4, -1, -2, 1, 5, -3]
let max = Number.MIN_VALUE, sum = 0;
let maxArr = []
let temp = []
let start = -1, arrStart = -1, arrEnd = -1;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    temp.push(arr[i]);
    if (sum < 0) {
        sum = 0;
        temp = []
        start = i + 1;
    }

    if (sum > max) {
        max = sum;
        maxArr = [...temp]
        arrStart = start;
        arrEnd = i;
    }

}

console.log(max, maxArr, arrStart, arrEnd)