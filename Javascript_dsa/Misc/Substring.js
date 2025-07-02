/*
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

const word = "abcdaa";

const isUnique = (word, letter) => {
    let count = 0;
    for (let x of word) {
        if (x === letter) {
            count++;
        }
    }
    if (count === 1) {
        return true;
    } else {
        return false;
    }
}

// console.log(isUnique(word, "a"))


const maxString = (word) => {
    let size = word.length;
    let words = []
    for (let i = 0; i < size; i++) {
        let presentWord = word[i]
        let isUniqueWord = true;
        for (let j = 1; j < size; j++) {
            presentWord += word[j];
            for (let x of presentWord) {
                isUniqueWord = isUnique(presentWord, x)
            }
            if (!isUniqueWord) {
                if (presentWord) {
                    presentWord = presentWord.slice(0, presentWord.length - 1)
                    words[i] = presentWord;

                }
            } else {
                words[i] = ""
            }
        }
    }

    let maxLength = 0;
    let maxWord = "";
    console.log(words)
    for (let x of words) {
        if (word.includes(x)) {
            if (x.length > maxLength) {
                maxLength = x.length
                maxWord = x;
            }
        }
    }
    return maxWord;

}

let longestWord = maxString("au")
console.log(longestWord)

