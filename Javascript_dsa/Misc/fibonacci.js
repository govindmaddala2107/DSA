const getNFibonacciNumbers = (n) => {
    if (n <= 0) {
        console.log([]);
        return;
    }

    var nFiboNumbers = [0, 1]

    if (n == 1) {
        console.log([0]);
        return ;
    }
    if (n === 2) {
        console.log(nFiboNumbers);
        return;
    }

    for (let i = 3; i <= n; i++) {

        let size = nFiboNumbers.length;
        nextFibo = nFiboNumbers[size - 1] + nFiboNumbers[size - 2]
        nFiboNumbers.push(nextFibo)
    }
    console.log(nFiboNumbers);
}

getNFibonacciNumbers(100);

