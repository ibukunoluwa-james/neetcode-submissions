class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        const getIdx = (char: string) => char.charCodeAt(0) - 97;

        for (let i = 0; i < s1.length; i++) {
            s1Count[getIdx(s1[i])]++
            s2Count[getIdx(s2[i])]++
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) {
                matches++;
            }
        }

        let left = 0;
        for (let right = s1.length; right < s2.length; right++) {
            if (matches === 26) return true;

            let index = getIdx(s2[right]);
            s2Count[index]++;

            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] + 1 === s2Count[index]) {
                matches--;
            }

            index = getIdx(s2[left]);
            s2Count[index]--;

            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] - 1 === s2Count[index]) {
                matches--;
            }

            left++;
        }

        return matches === 26;
    }
}
