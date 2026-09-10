class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        let s1Char = new Array(26).fill(0);
        let s2Char = new Array(26).fill(0);

        let getIdx = (char) => char.charCodeAt(0) - 97;
        let matches = 0;

        for (let i = 0; i < s1.length; i++) {
            s1Char[getIdx(s1[i])]++;
            s2Char[getIdx(s2[i])]++;
        }
        for (let i = 0; i < 26; i++) {
            if (s1Char[i] == s2Char[i]) {
                matches++;
            }
        }
        for (let i = s1.length; i < s2.length; i++) {
            if (matches == 26) return true;

            s2Char[getIdx(s2[i])]++;
            if (s2Char[getIdx(s2[i])] == s1Char[getIdx(s2[i])]) {
                matches++;
            } else if (s2Char[getIdx(s2[i])] == s1Char[getIdx(s2[i])] + 1){
                matches--;
            }

            s2Char[getIdx(s2[i - s1.length])]--;
            if (s2Char[getIdx(s2[i - s1.length])] == s1Char[getIdx(s2[i - s1.length])]) {
                matches++;
            } else if (s2Char[getIdx(s2[i - s1.length])] == s1Char[getIdx(s2[i - s1.length])] - 1) {
                matches--;
            }
        }
        if (matches == 26) return true;
        return false;
    }
}
