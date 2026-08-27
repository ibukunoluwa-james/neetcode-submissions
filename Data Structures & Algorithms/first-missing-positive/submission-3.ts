class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums: number[]): number {
        nums.sort((a, b) => a - b);
        let firstPositive = false;

        for (let num of nums) {
            if (num > 0) {
                if (!firstPositive) {
                    if (num != 1) {
                        return 1;
                    }
                    firstPositive = true;
                }
                if (!nums.includes(num + 1)) {
                    return num + 1;
                }
            }
        }
        return 1;
    }
}
