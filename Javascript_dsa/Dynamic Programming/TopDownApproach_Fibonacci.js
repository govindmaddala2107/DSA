const TopDownApproach_Fibonacci = (arr, n) => {
    if (n < 0) return 0;
    if (n < 2) {
        arr[n] = n
    } else {
        let left = parseInt(TopDownApproach_Fibonacci(arr, n - 1));
        let right = parseInt(TopDownApproach_Fibonacci(arr, n - 2));
        arr[n] = right + left;
    }
    return arr[n]
}
for (let i = 0; i <= 5; i++) {
    console.log(TopDownApproach_Fibonacci([], i))
}