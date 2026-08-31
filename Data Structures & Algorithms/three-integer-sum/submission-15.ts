class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        let answer: number[][] = [];

        for (let i = 0; i < nums.length - 2; i++) {
            //the loop counts up until length - 2 to account for the two pointers that would be used
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let j = i + 1,
                k = nums.length - 1;
            while (j < k) {
                
                if (nums[i] + nums[j] + nums[k] === 0) {
                    answer.push([nums[i], nums[j], nums[k]]);
                    k--;
                    j++;
                    
                while (j < k && nums[j] === nums[j - 1]) j++;
                }
                else if (nums[i] + nums[j] + nums[k] > 0) {
                    k--;
                }
                else {
                    j++;
                }
            }
        }
        return answer;
    }
}
