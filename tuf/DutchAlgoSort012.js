/*
Dutch National Flag algorithm (also known as the Sort 0s, 1s, and 2s algorithm):
    As per this theorem, there are 3 pointers viz., "low", "mid" and "high". Now it has 3 rules. They are:
    1. [0, low-1]: all are 0's
    2. [low, mid-1]: all are 1's
    3. [high+1, n-1]: all are 2's
    [0...........0,   || 1..............1,  ||  -------Unsorted Array----------,||     2.....................2]
    0__________(low-1)||(low)________(mid-1)||(mid)_______________________(high)||(high+1)________________(n-1)
    Now there is an unsorted array between indices "mid" and "high". 
    So the alogorith is like,
    1. We've to iterate through the array between mid and high.
    2. When an element is 0, then we have to swap between "mid" and "low" because we have to add 0 next to "low-1" index i.e at low. And move mid and low further.
    3. When an element is 1, just move mid because it is just next to mid-1 at which it is 1 only so sorting won't distort.
    4. When an element is 2, then we have to swap between "mid" and "high" because we have to add 2 before "high+1" i.e high and decrese the high by 1.
    5. Repeat the process until mid <= arr.length - 1;
*/


const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const DutchAlgoSort012 = () => {
    const arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0]
    // const arr = [1, 2, 0]
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
    while (mid <= high) {
        if (arr[mid] == 0) {
            swap(arr, low, mid);
            low++;
            mid++;
        } else if (arr[mid] == 1) {
            mid++;
        } else {
            swap(arr, mid, high);
            high--;
        }
    }
    console.log(arr)
}

DutchAlgoSort012()