const array = [3, 2, 100, 1, 5, 2, -1, 10, -100, 100000]

let largest = array[0];

for (let i = 1; i < array.length; i++) {
    if(array[i] > largest) largest = array[i];
}



console.log(largest)