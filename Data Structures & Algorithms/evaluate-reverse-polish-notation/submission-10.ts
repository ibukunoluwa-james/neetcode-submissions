class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): any {
        let stack: number[] = [];
        tokens.forEach((token) => {
            switch (token) {
                case "+":
                    stack[stack.length - 2] = (stack[stack.length - 2] + stack[stack.length - 1]);
                    stack.pop()

                    break;
                case "-":
                    stack[stack.length - 2] = (stack[stack.length - 2] - stack[stack.length - 1]);
stack.pop()
                    break;
                case "*":
                    stack[stack.length - 2] = (stack[stack.length - 2] * stack[stack.length - 1]);
                    stack.pop()
                    break;
                case "/":
                    stack[stack.length - 2] = (Math.trunc(stack[stack.length - 2] / stack[stack.length - 1]));
                    stack.pop()
                    break;
                default:
                    stack.push(Number(token));
            }
        });
        return stack[0];
    }
}
