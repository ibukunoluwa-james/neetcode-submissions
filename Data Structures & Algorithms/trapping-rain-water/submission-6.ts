class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let left = [], right = [], max = 0, maxArea = 0;
        
        for(let i = 0; i < height.length; i++) {
            if (i == 0){ left.push(0); continue};
            max = Math.max(max, height[i - 1])
            left.push(max)
        }
        max = 0;
        for (let i = height.length - 1; i >= 0; i--) {
            if (i == height.length - 1){ right.push(0); continue};
            max = Math.max(max, height[i + 1]);
            right.push(max)
        }
right.reverse()
        for (let i = 0; i < height.length; i++) {
            maxArea += Math.max(0, Math.min(right[i], left[i]) - height[i]);
        }

        return maxArea
    }
}
