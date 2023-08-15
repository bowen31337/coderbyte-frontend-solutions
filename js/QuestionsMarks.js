/**
 Questions Marks
Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
Examples
Input: "aa6?9"
Output: false
Input: "acc?7??sss?3rr1??????5"
Output: true
 */

function QuestionsMarks(str) {
    let num1 = null;
    let questionCount = 0;
    let hasPair = false;

    for (const char of str) {
        if (/[0-9]/.test(char)) {
            if (num1 !== null) {
                if (num1 + Number(char) === 10 && questionCount === 3) {
                    hasPair = true;
                    break;
                }
            }
            num1 = Number(char);
            questionCount = 0;
        } else if (char === "?") {
            questionCount++;
        }
    }

    return hasPair ? "true" : "false";
}

// Test the function with examples
console.log(QuestionsMarks("arrb6???4xxbl5???eee5")); // Output: "true"
console.log(QuestionsMarks("5??aaaaaaaaaaaaaaaaaaa?5?a??5")); // Output: "false"
console.log(QuestionsMarks("9???1???9???1???9")); // Output: "true"
