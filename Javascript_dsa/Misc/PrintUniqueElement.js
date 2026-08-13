const myMethod = (arr = []) => {
    let n = arr.length;
    let uniqueElement = Number.MIN_VALUE;
    for (let i = 0; i < n; i++) {
        let commonFound = false;
        for (let j = 0; j < n; j++) {
            if (i != j && arr[i] == arr[j]) {
                commonFound = true;
                break;
            }
        }
        if (!commonFound) {
            uniqueElement = arr[i]
            break;
        }
    }
    console.log(uniqueElement)
}

const optimalApproach = (arr = []) => {
    let xor = 0;
    for (let i = 0; i < arr.length; i++) {
        // console.log(xor, arr[i], xor ^ arr[i])
        xor ^= arr[i]
    }
    console.log(xor)
}
const arr = [1, 1, 2, 2, 3, 3, 6, 6, 7]
myMethod(arr)
optimalApproach(arr)
