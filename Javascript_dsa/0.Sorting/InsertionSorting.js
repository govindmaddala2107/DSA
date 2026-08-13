let arr = [10, 1, 5, 3, 9, 2, 6, 8, 0, -1, 1]
size = arr.length;
//HEre 1st element is always a sorted one, so looping starts from 1 and it is unsorted array
for (let i = 1; i < size; i++) {
    //We store the present number in temp variable for our operations
    let temp = arr[i];
    //Here inner loop is used for creating a sorted array
    let j = i - 1;
    //When temp variable is smaller than last number of sorted array, we change the order and it goes on until 
    //sorted array become sorted again
    while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
    }
    //At last again temp variable is placed
    arr[j + 1] = temp;
}

console.log(arr);