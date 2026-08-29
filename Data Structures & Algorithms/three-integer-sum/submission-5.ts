class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);

        let result = [];

        for (let k = 0; k < nums.length; k++) {
            if (nums[k] !== nums[k - 1]) {
                let target = -nums[k];
                let i = k + 1;
                let j = nums.length - 1;
                while (i < j) {
                    if (nums[i] + nums[j] == target) {
                        result.push([nums[k], nums[i], nums[j]]);
                        i++;
                        j--;
                        while (nums[i] === nums[i - 1]) i++;
                    } else if (nums[i] + nums[j] > target) {
                        j--;
                    } else {
                        i++;
                    }
                }
            }
        }
        return result;
    }
}
