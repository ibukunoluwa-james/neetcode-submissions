class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        let n = nums.length
        let prefix = new Array(n + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        let minLength = Infinity;

        for (let i = 0; i < n; i++) {
            const requiredSum = target + prefix[i];
            let left = i + 1;
            let right = n;

            let bestEnd = -1;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (prefix[mid] >= requiredSum) {
                    bestEnd = mid;
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }

            if (bestEnd !== -1) {
                minLength = Math.min(minLength, bestEnd - i);
            }
        }
    return minLength === Infinity ? 0 : minLength;

    }
}
