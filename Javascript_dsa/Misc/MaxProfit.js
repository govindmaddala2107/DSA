const maxProfitAtLowPrice = (arr = []) => {
    arr = [7, 1, 5, 3, 6, 4]

    //to store buying and selling data
    let buyingData = []
    let sellingData = []
    let maxProfit = Number.MIN_VALUE
    //to manipulate data
    const stack = []

    /*
    iterate from backward of the array and if no element is there in the stack, push the value and now check 
    */
    let n = arr.length - 1;
    for (let i = n; i >= 0; i--) {
        const currentPrice = arr[i];
        if (stack.length === 0) {
            stack.push([currentPrice, i]);
            continue;
        }
        const [price, indx] = stack.slice(-1)[0]
        // we have to check if there is element in statck which is max than currentPrice bcoz it results in profits

        // 6, 3 now 6 in stack and currentPrice is 3, 
        if(currentPrice > price){
            stack.pop();
            stack.push([currentPrice, i]);
        }else{
            const profit = price - currentPrice;
            if(profit > maxProfit) maxProfit = profit;
            buyingData = []
            sellingData = []
            buyingData.push(currentPrice)
            buyingData.push(i + 1)
            sellingData.push(price)
            sellingData.push(indx + 1)
        }
    }

    console.log(buyingData, sellingData, maxProfit)
}

maxProfitAtLowPrice([])