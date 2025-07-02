/*
BestTimeToSellStock:
1. Initially I take minimum price of 0th index at minPrice and profit as 0.
2. Now from first element, I iterate and:
    a) find the difference between current index and minPrice as soldPrice.
    b) assign the maximum between profit and soldPrice and assign to profit.
    c) Now to track the minimum from 0th index to the current price, we have to keep track of minPrice before to the current price.
        i) so find the min betwwen current Index and minPrice and save it to minPrice.
*/


const BestTimeToSellStock = () => {
    const arr = [7, 1, 5, 3, 6, 4];
    let minPrice = arr[0];
    let profit = 0;
    for (let i = 1; i < arr.length; i++) {
        const soldPrice = arr[i] - minPrice;
        profit = Math.max(profit, soldPrice);
        minPrice = Math.min(minPrice, arr[i]);
    }
    console.log(minPrice, profit)
}

BestTimeToSellStock();