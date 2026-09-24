class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        let n = nums.length;
        let prefixSum = new Array(n + 1).fill(0);
        let minLength = Infinity;

        for (let i = 0; i < n; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }

        for (let i = 0; i < n; i++) {
            let requiredSum = target + prefixSum[i];
            let left = i + 1;
            let right = n;
            let bestEnd = -1;

            while (left <= right) {
                let mid = Math.floor((left + right) / 2);
                if (prefixSum[mid] >= requiredSum) {
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
