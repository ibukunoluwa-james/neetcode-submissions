class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        k = k % nums.length
        // let temp = nums.splice(nums.length - k);
        nums.unshift(...(nums.splice(nums.length - k)));
    }
}
