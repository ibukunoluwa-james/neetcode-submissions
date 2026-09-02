class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people: number[], limit: number): number {
        people.sort((a, b) => a - b)

        let i = 0, j = people.length - 1, boats = 0; 
        while (i <= j) {
            if (people[j] == limit) {
                boats++
                j--
            } else {
                if (people[i] + people[j] == limit) {
                    boats++
                    i++
                    j--
                }
                else if (people[i] + people[j] > limit) {
                    boats++
                    j--
                } else {
                    boats++
                    i++
                    j--
                }
            }
        }
        return boats;
    }
}
