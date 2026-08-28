class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let i = 0;
        let j = numbers.length - 1;

        while (true) {
            if (numbers[i] + numbers[j] == target) {
                return [i + 1, j + 1];
            }
            else if (numbers[i] + numbers[j] > target) {
                j--;
            }
            else {
                i++
            }
        }

    }
}
