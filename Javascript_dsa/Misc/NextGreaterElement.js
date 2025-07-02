/*

Given an array of integers, For each an element in an array, find next greater element than that in that array in the right side. If no greater element is found, put -1

Input:  [4, 7, 3, 4,  8,  1]
Output: [7, 8, 4, 8, -1, -1]

Here for 8 no greater than 8 is found to its right side, so we put -1 and for last element, anyway no numbers are found to its right side, so we put -1

*/

const input = [4, 7, 3, 4, 8, 1]

const size = input.length;
const end = input.length - 1;

const output = []
let i = 0;
while (i != end) {
    let presentElement = input[i];
    let restSet = input.slice(i + 1,)
    let greaterNumber = -1;
    for (let each of restSet) {
        if (each > presentElement) {
            greaterNumber = each;
            break;
        }
    }
    output.push(greaterNumber);
    i++;
}

output.push(-1)

console.log(output);