class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids: number[]): number[] {
        let stack = [];
        for (const asteroid of asteroids) {
            let isDestroyed = false;
            while (stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0) {

            let top = stack.length - 1;
                if (Math.abs(stack[top]) < Math.abs(asteroid)) {
                    stack.pop();
                } else if (Math.abs(stack[top]) === Math.abs(asteroid)) {
                    stack.pop();
                    isDestroyed = true;
                    break;
                } else {
                    isDestroyed = true;
                    break;
                }
            }
            if (!isDestroyed) {
                stack.push(asteroid)
            }
        }
        return stack;
    }
}
