class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let i = 0, j = heights.length - 1, maxArea = 0;
        
        while (i < j) {
            let area = (j - i) * Math.min(heights[i], heights[j])
            maxArea = Math.max(maxArea, area);

            if (heights[i] < heights[j]) {
                i++
            } else if (heights[i] > heights[j]) {
                j--
            } else {
                i++;
                j--;
            }
        }
        return maxArea;
    }
}
