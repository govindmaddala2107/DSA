const array = [3, 2, 100, 1, 5, 2, -1, 10, -100]
const array1 = [100, 100]

let largest = -Infinity;
let secondLargest = -Infinity

for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        secondLargest = largest;
        largest = array[i];
    }else if(array[i] < largest && array[i] > secondLargest){
        secondLargest = array[i]
    }
}

console.log(largest, secondLargest)