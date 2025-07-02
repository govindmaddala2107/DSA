const arr = [1, 2, 3, 5, 6, 7]

const MissingNumber = (arr, n) => {
    let actualSum = (n * (n + 1)) / 2
    for (let i = 0; i < arr.length; i++) {
        actualSum -= arr[i];
    }
    console.log(actualSum)
}

const MissingNumberByXOR = (arr, n) => {
    let nXor = 0;
    let arrXor = 0;
    for (let i = 0; i < n; i++) {
        arrXor ^= arr[i];
        nXor ^= (i + 1);
    }
    console.log(nXor ^ arrXor)
}

MissingNumber(arr, arr.length + 1)
MissingNumberByXOR(arr, arr.length + 1)