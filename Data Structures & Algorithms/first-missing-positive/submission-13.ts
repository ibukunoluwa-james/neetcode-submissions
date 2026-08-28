class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums: number[]): number {
        let i = 0;
        const n = nums.length;

        while (i < n) {
            const correctIdx = nums[i] - 1;

            if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[correctIdx]) {
                const temp = nums[i];
                nums[i] = nums[correctIdx];
                nums[correctIdx] = temp;
            } else {
                i++
            }
        }

        for (let j = 0; j < n; j++) {
            if (nums[j] !== j + 1) {
                return j + 1;
            }
        }
        return n + 1
    }
}
