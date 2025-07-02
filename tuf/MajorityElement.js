/*
Majority Element: In a given array, we have to find the element which appeared > N/2 times where N is the length of the array.
Brute force Approach: Use object and note occurence of each element and find which element is appearing >= N/2.
Optimal approach: Moore's Voting.

Moore's Voting: 
1. Iterate through the array.
2. Take current element into majorityElemnt variable and make count to 1. And move to next.
3. When next element is same as majorityElemnt, then increase count by 1 else decrease by 1.
4. If count becomes 0, then move to next and assign next element to majorityElemnt variable and make count = 0;
5. When complete iteration is finished, we get an majorityElemnt.
6. Once again iterate the array and check if the majorityElemnt is appearing N/2 times. If so, return that majorityElemnt else return -1.
*/

const majorityElementByMooresAlgo = () => {
    const array = [7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 5, 5, 5, 5];
    let majorityElement = array[0];
    let count = 1;
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        if (count == 0) majorityElement = element;
        count += element == majorityElement ? 1 : -1;
    }
    count = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element == majorityElement) count++;
    }
    return count > array.length / 2 ? majorityElement : -1;
}

console.log(majorityElementByMooresAlgo())