class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let counts = new Map<string, number>(), left = 0, maxf = 0, maxLength = 0;
        for (let right = 0; right < s.length; right++) {
            let char = s[right];

            counts.set(char, (counts.get(char) || 0) + 1);
            maxf = Math.max(maxf, counts.get(char));
            let windowLength = right - left + 1;

            if (windowLength - maxf > k) {
                let leftChar = s[left];
                counts.set(leftChar, counts.get(leftChar) - 1)
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        } 

        return maxLength
    }
}
