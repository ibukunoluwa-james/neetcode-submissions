class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums: number[], target: number): number[][] {
        nums.sort((a, b) => a - b);
        let answer: number[][] = [];

        for (let l = 0; l < nums.length - 3; l++) {
            if (l > 0 && nums[l] === nums[l - 1]) continue;
            for (let i = l + 1; i < nums.length - 2; i++) {
                //the loop counts up until length - 2 to account for the two pointers that would be used
                if (i > l + 1 && nums[i] === nums[i - 1]) continue;
                let j = i + 1,
                    k = nums.length - 1;
                while (j < k) {
                    if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
                        answer.push([nums[l], nums[i], nums[j], nums[k]]);
                        k--;
                        j++;

                        while (j < k && nums[j] === nums[j - 1]) j++;
                    } else if (nums[i] + nums[j] + nums[k] + nums[l] > target) {
                        k--;
                    } else {
                        j++;
                    }
                }
                
            }
        }
        return answer;
    }
}
