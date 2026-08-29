class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums: number[], target: number): number[][] {
        nums.sort((a, b) => a - b);
        let result = [];

        for (let i = 0; i < nums.length - 3; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            for (let j = i + 1; j < nums.length - 2; j++) {
                if (j > i + 1 && nums[j] === nums[j - 1]) continue;
                let k = j + 1,
                    l = nums.length - 1,
                    twoSum = nums[i] + nums[j];

                while (k < l) {
                    // if result matches target current code only pushes two numbers
                    if (nums[k] + nums[l] + twoSum === target) {
                        result.push([nums[i], nums[j], nums[k], nums[l]]);
                        k++;
                        l--;
                        while (k < l && nums[k] === nums[k - 1]) k++;
                    } else if (nums[k] + nums[l] + twoSum > target) {
                        l--;
                    } else {
                        k++;
                    }
                }
            }
        }
        return result;
    }
}
