/*

Given a parenthesis, containing just the characters '(', ')', '{','}', '[',']' determine if the given string is valid or not.
An input string is valid if:
    -> Open brackets must be closed by same type of brackets.
    -> Open brackets must be closed in correct order.

Examples:
     +--------------------+--------------------+
     |     True           |     False          |
     +--------------------+--------------------+
     |    {([])}          | {{[}}              |
     +--------------------+--------------------+
     |    [{}]            | }()                |
     +--------------------+--------------------+

*/

const isValidParenthesis = (parenthesis) => {
    const stack = [];
    for (let each of parenthesis) {
        if (["{", "(", "["].includes(each)) {
            stack.push(each)
        } else {
            if (stack.length === 0) {
                return false;
            } else {
                let top = stack[stack.length - 1];
                if ((each === "}" && top === "{") ||
                    (each === ")" && top === "(") ||
                    (each === "]" && top === "[")
                ) {
                    stack.pop();
                } else {
                    return "false";
                }
            }
        }

    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}

let isValid = isValidParenthesis("{[[()]]}")
console.log(isValid)