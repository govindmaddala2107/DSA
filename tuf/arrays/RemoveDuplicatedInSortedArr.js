const array = [1, 1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 7]
const op = [1, 2, 3, 4, 5, 6, 7]


let current = 0;
for (let i = 1; i < array.length; i++) {
    // if (array[i] != currentNum) {
    //     const temp = array[current];
    //     array[current] = array[i];
    //     array[i] = temp;
    //     current++;
    //     currentNum =array[current]
    // }
    if(array[i] != array[current]){
        array[++current] = array[i];
    }
}
while (current + 1 < array.length) {
    delete array[current + 1]
    current++;
}
console.log(array)