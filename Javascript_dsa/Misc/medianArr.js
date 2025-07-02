var findMedianSortedArrays = function (nums1, nums2) {

    let mergedArr = [...nums1, ...nums2];
    for (let i = 1; i < mergedArr.length; i++) {
        let temp = mergedArr[i];
        let j = i - 1;
        while(j >= 0  && mergedArr[j] > temp){
            mergedArr[j+1] = mergedArr[j];
            j--
        }

        mergedArr[j+1] = temp;
    }

    let size = mergedArr.length
    let median = 0;
    if(size % 2 == 0){
        let mid = size / 2
        median = (mergedArr[mid] + mergedArr[mid-1])/2

    }else{
        let mid = (size - 1) / 2;
        median = mergedArr[mid]
    }

    console.log(mergedArr)
    console.log(median)

};

findMedianSortedArrays([1,2],[3,4])