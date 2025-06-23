const array = [1, 0, 2, 3, 0, 0, 4, 5, 1, 6]
const MoveZerosToEnd = (array = array) => {
    let zeroIndex;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0 && !zeroIndex) {
            zeroIndex = i;
            break;
        }
    }
    if (zeroIndex) {
        for (let i = zeroIndex + 1; i < array.length; i++) {
            if (array[i] != 0) {
                array[zeroIndex] = array[i];
                array[i] = 0;
                zeroIndex++;
            }
        }
    }

    console.log(array)

}

MoveZerosToEnd(array);