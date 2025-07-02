unsortedArr = [10,9,8,7,6,5,4,3,2,1]
sizeOfArr = len(unsortedArr)
for i in range(0,sizeOfArr,1):
    isSwapped = False
    for j in range (0, sizeOfArr - 1 - i,1):
        a = unsortedArr[j]
        b = unsortedArr[j+1]
        if a > b:
            unsortedArr[j],unsortedArr[j+1] = unsortedArr[j+1],unsortedArr[j]
            isSwapped = True
        # print("after",a,b)
    if isSwapped is False:
        break
print(unsortedArr)