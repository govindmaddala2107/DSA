const FindNonRepeatedNumAndOtherRepeatTwiceBrute = () => {
    const obj = {}
    const arr = [1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 6]
    for (const key of arr) {
        if (obj.hasOwnProperty(key)) {
            obj[key]++;
        } else {
            obj[key] = 1;
        }
    }
    // console.log(obj)
    for(const key in obj){
        if(obj[key] == 1){
            console.log(key);
            break
        }
    }
}

/*

Time Complexity: o(N) [for mapping] + o(N) [for checking, worst that ==1 would be at last index] ~ o(N)
Space Complexity: o(1)

*/

const FindNonRepeatedNumAndOtherRepeatTwiceXOR = ()=>{
    let xor = 0
    const arr = [1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 6]
    for (const each of arr) {
        xor ^= each;
    }
    console.log(xor)
}

/*

Time Complexity: o(N) [for looping once for xor] ~ o(N)
Space Complexity: o(1)

*/

FindNonRepeatedNumAndOtherRepeatTwiceBrute();
console.log("==========================")
FindNonRepeatedNumAndOtherRepeatTwiceXOR();