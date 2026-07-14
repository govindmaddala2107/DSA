const reverseNumber = (num) => {
    let reversedNum = 0;
    while (num != 0) {
        reversedNum = reversedNum * 10 + (num % 10)
        num  = Math.floor(num/10);
    }
    return reversedNum;
}

const checkNumIsPalindrome = (num)=>{
    let originalNum = num;
    let revNum = reverseNumber(num)
    if(originalNum === revNum) return `${num} is palindrome`
    if(originalNum !== revNum) return `${num} is not palindrome`
}

console.log(checkNumIsPalindrome(43210234))