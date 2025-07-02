const BottomDownApproach_Fibonacci = (num) => {
    const table = [];
    table[0] = 0;
    table[1] = 1;
    for (let i = 2; i <= num; i++) {
        table[i] = table[i-1] + table[i-2];
    }
    return table[num]
}

console.log(BottomDownApproach_Fibonacci(5))