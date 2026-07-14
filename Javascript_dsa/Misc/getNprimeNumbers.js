const getNPrimeNumbers = (n) => {

    if (n <= 0) {
        return []
    }

    let x = 2;
    let nPrimeNumbers = []
    while (true) {
        let allFactors = []
        for (let i = 2; i < x; i++) {
            let reminder = x % i;
            if (reminder === 0) {
                allFactors.push(reminder);
                break;
            }
        }
        if (allFactors.length === 0) {
            nPrimeNumbers.push(x)
        }
        if (nPrimeNumbers.length === n) {
            break;
        }
        x++;
    }
    return nPrimeNumbers;
}

let allPrimeNumbers = getNPrimeNumbers(100);
console.log(allPrimeNumbers);