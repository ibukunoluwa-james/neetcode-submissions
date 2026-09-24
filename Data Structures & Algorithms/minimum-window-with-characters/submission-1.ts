class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (t === "") return "";

        let countT = new Map<string, number>();
        for (const char of t) {
            countT.set(char, (countT.get(char) || 0) + 1);
        }

        const window = new Map<string, number>();
        let have = 0;
        const need = countT.size;

        let res = [-1, -1];
        let resLen = Infinity;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];

            window.set(char, (window.get(char) || 0) + 1);

            if (countT.has(char) && window.get(char) === countT.get(char)) {
                have++;
            }

            while (have === need) {
                if (right - left + 1 < resLen) {
                    res = [left, right];
                    resLen = right - left + 1;
                }

                const leftChar = s[left];
                window.set(leftChar, window.get(leftChar)! - 1);

                if (countT.has(leftChar) && window.get(leftChar)! < countT.get(leftChar)!) {
                    have--;
                }
                left++;
            }
        }
        const [l, r] = res;

        return resLen !== Infinity ? s.slice(l, r + 1) : "";
    }
}
