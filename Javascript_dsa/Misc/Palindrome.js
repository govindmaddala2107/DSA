const isPalindrome = (word) => {
    let end = word.length;

    let start = 0;
    while (start < end) {
        if (word[start] !== word[end - 1]) {
            console.log(`${word} is not a palindrome`);
            return;
        }
        start++;
        end--;
    }
    console.log(`${word} is palindrome`);
}

isPalindrome("deed")