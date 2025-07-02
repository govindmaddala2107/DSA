def moveZerosToEnd(arr):
    count = 0
    for each in arr:
        if each != 0:
            arr[count] = each
            count += 1
    while count < len(arr):
        arr[count] = 0
        count += 1
    return arr

print(moveZerosToEnd([1, 0, 2, 2, 0, 3, 3, 0, 4, 0, 5]))

            