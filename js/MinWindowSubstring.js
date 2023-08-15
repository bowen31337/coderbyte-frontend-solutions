/**
Min Window Substring
Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr, which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K. For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string. So for this example your program should return the string dae.

Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.
Examples
Input: ["ahffaksfajeeubsne", "jefaa"]
Output: aksfaje
Input: ["aaffhkksemckelloe", "fhea"]
Output: affhkkse
 */

function MinWindowSubstring(strArr) {
    const [N, K] = strArr;
    const charCounts = new Map();

    // Initialize charCounts with the frequency of characters in K
    for (const char of K) {
        charCounts.set(char, (charCounts.get(char) || 0) + 1);
    }

    let left = 0;
    let minWindow = '';
    let minWindowLength = Infinity;
    let remainingChars = K.length;

    for (let right = 0; right < N.length; right++) {
        const rightChar = N[right];

        if (charCounts.has(rightChar)) {
            charCounts.set(rightChar, charCounts.get(rightChar) - 1);
            if (charCounts.get(rightChar) >= 0) {
                remainingChars--;
            }
        }

        while (remainingChars === 0) {
            if (right - left + 1 < minWindowLength) {
                minWindow = N.substring(left, right + 1);
                minWindowLength = right - left + 1;
            }

            const leftChar = N[left];
            if (charCounts.has(leftChar)) {
                charCounts.set(leftChar, charCounts.get(leftChar) + 1);
                if (charCounts.get(leftChar) > 0) {
                    remainingChars++;
                }
            }

            left++;
        }
    }

    return minWindow;
}

// Test the function with examples
console.log(MinWindowSubstring(["aaabaaddae", "aed"])); // Output: "dae"
console.log(MinWindowSubstring(["aabdccdbcacd", "aad"])); // Output: "aabd"
