class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false; 

        let left = 0, s1Chars = new Map<string, number>(), s2Chars = new Map<string, number>();

        //Pre Compute s1 hash Map
        for (let i = 0; i < s1.length; i++) {
            s1Chars.set(s1[i], (s1Chars.get(s1[i]) || 0) + 1)
        }

        for (let right = 0; right < s2.length; right++) {
            // On each iteration check if the newly s2 map is equal to s1 map
            let rightChar = s2[right]
            s2Chars.set(rightChar, (s2Chars.get(rightChar) || 0) + 1)
            // COmpare each map if not the same move on 

            if (right - left + 1 === s1.length) {

                let isMatch = true
                for (let [key, val] of s1Chars) {
                    if (s2Chars.get(key) !== val) {
                        isMatch = false;
                        break;
                    }
                }
                if (isMatch) return true;

                let leftChar = s2[left];
                let count = s2Chars.get(leftChar)!;

                if (count === 1) {
                    s2Chars.delete(leftChar)
                } else {
                    s2Chars.set(leftChar, count - 1)
                }

                left++
            }
   
        }
        return false;
    }
}
